(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
    {
        21348: (e, t, o) => {
            'use strict';
            o.d(t, { SettingsPage: () => Y });
            var i = o(33008),
                n = o(97531),
                r = o(73827),
                l = o(96560),
                s = o(18064),
                a = o(57747),
                c = o(77868),
                d = o(66268),
                u = o(73761),
                _ = o(79169),
                m = o(18740),
                p = o(51704),
                x = o(88652),
                h = o.n(x);
            let f = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        location: t,
                        modals: { aboutAppModal: o },
                    } = (0, _.Pjs)(),
                    n = (0, _.HFS)(),
                    s = (0, _.d79)(),
                    { language: a } = (0, _.h6b)();
                return (0, i.jsxs)(p.a, {
                    className: h().root,
                    headerClassName: h().modalHeader,
                    contentClassName: h().modalContent,
                    title: e({ id: 'settings.about-app' }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: o.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: [
                        (0, i.jsxs)('ul', {
                            className: h().list,
                            children: [
                                (0, i.jsx)('li', {
                                    className: h().item,
                                    children: (0, i.jsx)(m.N_, {
                                        className: h().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(a),
                                        children: (0, i.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, {
                                                id: 'footer.links-copyright-holders',
                                            }),
                                        }),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: h().item,
                                    children: (0, i.jsx)(m.N_, {
                                        className: h().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(a),
                                        children: (0, i.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, {
                                                id: 'footer.links-terms',
                                            }),
                                        }),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: h().item,
                                    children: (0, i.jsx)(m.N_, {
                                        className: h().link,
                                        target: '_blank',
                                        href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
                                        children: (0, i.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, {
                                                id: 'footer.links-recommendation-rules',
                                            }),
                                        }),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: h().item,
                                    children: (0, i.jsx)(m.N_, {
                                        className: h().link,
                                        target: '_blank',
                                        href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(a),
                                        children: (0, i.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, {
                                                id: 'footer.links-help',
                                            }),
                                        }),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: h().item,
                                    children: (0, i.jsx)(m.N_, {
                                        className: h().link,
                                        target: '_blank',
                                        href: 'https://github.com/TheKing-OfTime/YandexMusicModClient',
                                        children: (0, i.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Репозиторий модификации на GitHub',
                                        }),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: h().item,
                                    children: (0, i.jsx)(m.N_, {
                                        className: h().link,
                                        target: '_blank',
                                        href: 'https://boosty.to/thekingoftime/donate',
                                        children: (0, i.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            weight: 'medium',
                                            children: 'Поддержать автора модификации',
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.Caption, {
                            className: h().explicitText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            weight: 'medium',
                            dangerouslySetInnerHTML: {
                                __html: e({ id: 'about-app.explicit-content' }),
                            },
                        }),
                        (0, i.jsx)(c.Caption, {
                            className: h().companyText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, {
                                id: 'about-app.app-name',
                            }),
                        }),
                        (0, i.jsx)(c.Caption, {
                            className: h().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-version-short' }, { version: n }),
                        }),
                        (0, i.jsx)(c.Caption, {
                            className: h().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: e({ id: 'desktop.app-revision' }, { revision: s }),
                        }),
                        (0, i.jsx)(c.Caption, {
                            className: h().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: 'YandexMusicModClient ' + window.MOD_VERSION,
                        }),
                        (0, i.jsx)(c.Caption, {
                            className: h().versionText,
                            type: 'controls',
                            variant: 'div',
                            size: 'xs',
                            children: 'Host ' + window.HOST_VERSION,
                        }),
                    ],
                });
            });
            var g = o(44189),
                v = o(52756),
                j = o(30768),
                C = o.n(j);
            let b = { src: '/_next/static/media/clearMemory.33a5df30.png' },
                y = (0, n.PA)(() => {
                    let { formatMessage: e } = (0, r.A)(),
                        {
                            modals: { clearMemoryModal: t },
                        } = (0, _.Pjs)(),
                        { notify: o } = (0, _.lkh)(),
                        n = (0, _.jRO)(),
                        s = (0, d.useCallback)(() => {
                            n.clearAll().then(() => {
                                window.onDownloadedTracksDeleted();
                                t.close(),
                                    o(
                                        (0, i.jsx)(m.$W, {
                                            message: (0, i.jsx)(c.Caption, {
                                                className: C().message,
                                                variant: 'div',
                                                type: 'controls',
                                                size: 'm',
                                                children: (0, i.jsx)(l.A, {
                                                    id: 'offline.memory-cleared',
                                                }),
                                            }),
                                        }),
                                        { containerId: _.uQT.INFO },
                                    );
                            });
                        }, [t, o, n]);
                    return (0, i.jsxs)(p.a, {
                        className: C().root,
                        headerClassName: C().modalHeader,
                        contentClassName: C().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: [
                            (0, i.jsx)(v.Image, {
                                src: b.src,
                                className: C().image,
                                fit: 'contain',
                                'aria-hidden': !0,
                            }),
                            (0, i.jsx)(c.Caption, {
                                className: C().description,
                                type: 'text',
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(l.A, {
                                    id: 'offline.clear-memory-description',
                                }),
                            }),
                            (0, i.jsx)(g.Button, {
                                color: 'primary',
                                radius: 'xxxl',
                                size: 'default',
                                onClick: s,
                                children: (0, i.jsx)(l.A, {
                                    id: 'interface-actions.clear',
                                }),
                            }),
                        ],
                    });
                });
            var N = o(85896),
                k = o(78016),
                M = o(71154),
                w = o.n(M);
            let S = (e) => {
                let { title: t, description: o, onClick: n, descriptionProps: r, ...l } = e;
                return (0, i.jsx)(g.Button, {
                    className: (0, N.$)(w().root, w().important),
                    contentContainerClassName: w().contentContainer,
                    icon: (0, i.jsx)(k.Icon, {
                        className: w().icon,
                        size: 'xs',
                        variant: 'arrowRight',
                    }),
                    iconPosition: 'right',
                    onClick: n,
                    isBlock: !0,
                    withRipple: !1,
                    withHover: !1,
                    variant: 'text',
                    size: 'xs',
                    ...l,
                    children: (0, i.jsxs)('div', {
                        className: w().content,
                        children: [
                            (0, i.jsx)(c.Caption, {
                                className: w().title,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                lineClamp: 1,
                                children: t,
                            }),
                            o &&
                                (0, i.jsx)(c.Caption, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: w().description,
                                    ...r,
                                    children: o,
                                }),
                        ],
                    }),
                });
            };
            var E = o(38850),
                T = o.n(E);
            let A = (e) => {
                let { link: t, title: o, description: n, target: r } = e;
                return (0, i.jsxs)(m.N_, {
                    className: T().root,
                    containerClassName: T().container,
                    textClassName: T().linkText,
                    icon: (0, i.jsx)(k.Icon, {
                        className: T().icon,
                        size: 'xs',
                        variant: 'arrowRight',
                    }),
                    iconPosition: 'right',
                    href: t,
                    ...(r ? { target: r } : {}),
                    children: [
                        (0, i.jsx)(c.Caption, {
                            className: T().title,
                            variant: 'div',
                            size: 'l',
                            weight: 'bold',
                            lineClamp: 1,
                            children: o,
                        }),
                        n &&
                            (0, i.jsx)(c.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: 'xs',
                                weight: 'medium',
                                className: T().description,
                                children: n,
                            }),
                    ],
                });
            };
            var O = o(76469),
                z = o(43726),
                sliderComponent = o(98316),
                inputComponent = o(21949),
                buttonComponent = o(44189),
                L = o.n(z);
            let P = (e) => {
                let { title: t, onChange: o, isChecked: n, description: r, disabled: disabled = false } = e,
                    l = (0, d.useId)();
                return (0, i.jsxs)('div', {
                    className: L().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L().textContainer,
                            children: [
                                (0, i.jsx)(c.Caption, {
                                    className: disabled ? L().titleDisabled : L().title,
                                    id: l,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                r &&
                                    (0, i.jsx)(c.Caption, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'xs',
                                        weight: 'medium',
                                        className: disabled ? L().descriptionDisabled : L().description,
                                        children: r,
                                    }),
                            ],
                        }),
                        (0, i.jsx)(O.l, {
                            isChecked: n,
                            'aria-describedby': l,
                            onChange: o,
                            disabled: disabled,
                        }),
                    ],
                });
            };

            const settingBarWithDropdown = ({ title, description, onChange, value, options, direction = 'bottom', disabled: disabled = false }) => {
                const [isOpen, setIsOpen] = d.useState(false);
                const [menuWidth, setMenuWidth] = d.useState(160);
                const triggerRef = d.useRef(null);

                const currtentOption = options.find((opt) => opt.value === value);

                const handleSelect = d.useCallback(
                    (val) => {
                        onChange(val);
                        setIsOpen(false);
                    },
                    [onChange, setIsOpen],
                );

                const handleClickOutside = d.useCallback(
                    (event) => {
                        if (isOpen && event.target !== triggerRef.current) {
                            event.stopPropagation();
                            event.preventDefault();
                            setIsOpen(false);
                        }
                    },
                    [isOpen],
                );

                d.useEffect(() => {
                    document.addEventListener('click', handleClickOutside);
                    return () => {
                        document.removeEventListener('click', handleClickOutside);
                    };
                }, [handleClickOutside]);

                d.useEffect(() => {
                    const element = triggerRef.current;
                    if (!element) return;

                    const observer = new ResizeObserver(([entry]) => {
                        setMenuWidth(entry.borderBoxSize[0].inlineSize);
                    });

                    observer.observe(element);

                    return () => observer.disconnect();
                }, []);

                return i.jsxs('div', {
                    className: L().root,
                    children: [
                        i.jsxs('div', {
                            className: L().textContainer,
                            children: [
                                i.jsx(c.Caption, {
                                    className: disabled ? L().titleDisabled : L().title,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': true,
                                    children: title,
                                }),
                                (currtentOption?.description ?? description) &&
                                    i.jsx(c.Caption, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'xs',
                                        weight: 'medium',
                                        className: disabled ? L().descriptionDisabled : L().description,
                                        children: currtentOption?.description ?? description,
                                    }),
                            ],
                        }),
                        i.jsx('div', {
                            ref: triggerRef,
                            onClick: () =>
                                setIsOpen((prevValue) => {
                                    return disabled ? false : !prevValue;
                                }),
                            className: `${disabled ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button'} Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx`,
                            children: [
                                currtentOption?.label || 'Select...',
                                i.jsx('ul', {
                                    role: 'menu',
                                    className: 'settingBarWithDropdown_menu',
                                    style: {
                                        display: isOpen ? 'flex' : 'none',
                                        flexDirection: 'column',
                                        width: `${menuWidth}px`,
                                        top: direction === 'bottom' ? '120%' : 'unset',
                                        bottom: direction === 'top' ? '120%' : 'unset',
                                    },
                                    children: options.map((opt) =>
                                        i.jsx('li', {
                                            role: 'menuitem',
                                            className: 'settingBarWithDropdown_menuItem',
                                            id: opt.value,
                                            'aria-selected': value === opt.value,
                                            onClick: (e) => {
                                                e.stopPropagation();
                                                handleSelect(opt.value);
                                            },
                                            children: [
                                                i.jsx('span', { children: opt.label }),
                                                value === opt.value &&
                                                    i.jsx('svg', {
                                                        width: '16',
                                                        height: '16',
                                                        fill: 'currentColor',
                                                        xmlns: 'http://www.w3.org/2000/svg',
                                                        children: i.jsx('path', {
                                                            d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z',
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ),
                                }),
                            ],
                        }),
                    ],
                });
            };

            let toggleBarWithPathChooser = (e) => {
                let {
                        title: t,
                        onChange: o,
                        isChecked: isChecked,
                        description: r,
                        placeholder: placeholder,
                        disabled: disabled,
                        inputValue: inputValue,
                        onClick: onClick,
                    } = e,
                    l = (0, d.useId)();
                return (0, i.jsxs)('div', {
                    style: {
                        'flex-direction': 'column',
                        display: 'flex',
                        gap: '5px',
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: L().root,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: L().textContainer,
                                    children: [
                                        (0, i.jsx)(c.Caption, {
                                            className: disabled ? L().titleDisabled : L().title,
                                            id: l,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'bold',
                                            lineClamp: 1,
                                            'aria-hidden': !0,
                                            children: t,
                                        }),
                                        r &&
                                            (0, i.jsx)(c.Caption, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'xs',
                                                weight: 'medium',
                                                className: disabled ? L().descriptionDisabled : L().description,
                                                children: r,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(O.l, {
                                    isChecked: isChecked,
                                    'aria-describedby': l,
                                    onChange: o,
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: L().root,
                            style: { 'justify-content': 'unset', 'align-items': 'unset' },
                            children: [
                                (0, i.jsx)(inputComponent.p, {
                                    containerClassName: 'ToggleBarWithPathChooser_input',
                                    value: inputValue,
                                    placeholder: placeholder,
                                    disabled: true,
                                }),
                                (0, i.jsx)(buttonComponent.Button, {
                                    radius: 'xxxl',
                                    color: 'secondary',
                                    size: 'm',
                                    onClick: onClick,
                                    children: 'Обзор',
                                    disabled: disabled,
                                }),
                            ],
                        }),
                    ],
                });
            };

            let settingBarWithSlider = (e) => {
                let { title: t, onChange: o, value: value, minValue: minValue, maxValue: maxValue, step: step, description: r, disabled: disabled } = e,
                    l = (0, d.useId)();
                return (0, i.jsxs)('div', {
                    className: L().root,
                    style: {
                        'flex-direction': 'column',
                        'align-items': 'start',
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: L().textContainer,
                            children: [
                                (0, i.jsx)(c.Caption, {
                                    className: disabled ? L().titleDisabled : L().title,
                                    id: l,
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'bold',
                                    lineClamp: 1,
                                    'aria-hidden': !0,
                                    children: t,
                                }),
                                r &&
                                    (0, i.jsx)(c.Caption, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'xs',
                                        weight: 'medium',
                                        className: disabled ? L().descriptionDisabled : L().description,
                                        children: r,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            style: {
                                width: '-webkit-fill-available',
                            },
                            children: [
                                (0, i.jsx)(c.Caption, {
                                    style: {
                                        'text-align': 'end',
                                    },
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: disabled ? L().descriptionDisabled : L().description,
                                    children: value,
                                }),
                                (0, i.jsx)(sliderComponent.A, {
                                    thumbSize: 's',
                                    trackSize: 's',
                                    value: value,
                                    minValue: minValue ?? 0,
                                    maxValue: maxValue ?? 2,
                                    secondaryValue: maxValue ?? 1,
                                    step: step ?? 0.01,
                                    onChange: o,
                                    disabled: disabled,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var Tooltip = o(18740);
            let labeledBubble = (e) => {
                let {
                    label: label,
                    color: color = 'var(--ym-controls-color-primary-default-enabled)',
                    tooltip: tooltip = {
                        title: 'Экспериментально',
                        description: 'Может работать некорректно',
                    },
                    disabled: disabled,
                    ...other
                } = e;
                return (0, i.jsx)(Tooltip.hj, {
                    title: tooltip.title,
                    description: tooltip.description,
                    children: (0, i.jsxs)('div', {
                        style: {
                            'margin-inline': '5px',
                            'background-color': color,
                            color: 'black',
                            'border-radius': '50px',
                            'padding-inline': '6px',
                            transition: 'opacity var(--ym-duration-transition)',
                            ...(disabled ? { opacity: 0.3 } : {}),
                        },
                        children: label,
                    }),
                });
            };

            var R = o(28486),
                H = o.n(R);
            let I = (0, n.PA)(() => {
                let {
                        modals: { shortcutsModal: e },
                    } = (0, _.Pjs)(),
                    { formatMessage: t } = (0, r.A)(),
                    o = (0, d.useMemo)(() => {
                        let e = (0, i.jsx)(
                            c.Caption,
                            {
                                className: H().text,
                                variant: 'div',
                                type: 'text',
                                size: 'xs',
                                weight: 'normal',
                                children: (0, i.jsx)(l.A, {
                                    id: 'shortcuts.or',
                                }),
                            },
                            'or',
                        );
                        return _.bNV.map((t) => {
                            let { shortcutsAction: o, formattedMessage: n } = t,
                                r = _.MHd[o].map((e, t) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: H().button,
                                            children: (0, i.jsx)(c.Caption, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'xs',
                                                weight: 'normal',
                                                children: e,
                                            }),
                                        },
                                        t,
                                    ),
                                );
                            return (
                                r.length > 1 && r.splice(1, 0, e),
                                (0, i.jsx)(
                                    'li',
                                    {
                                        children: (0, i.jsxs)('div', {
                                            className: H().content,
                                            children: [
                                                (0, i.jsx)(c.Caption, {
                                                    className: H().text,
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'xs',
                                                    weight: 'normal',
                                                    children: n,
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: H().buttons,
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    },
                                    o,
                                )
                            );
                        });
                    }, []);
                return (0, i.jsx)(p.a, {
                    className: H().root,
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    title: t({ id: 'settings.shortcuts' }),
                    open: e.isOpened,
                    onOpenChange: e.onOpenChange,
                    onClose: e.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: t({ id: 'interface-actions.close' }),
                    children: (0, i.jsx)('ul', {
                        className: H().list,
                        children: o,
                    }),
                });
            });

            let discordRpcSettings = (0, n.PA)(() => {
                const [statusDisplayType, setStatusDisplayType] = (0, d.useState)(window.nativeSettings.get('modFeatures.discordRPC.statusDisplayType') ?? 0);
                const [applicationIDForRPC, setApplicationIDForRPC] = (0, d.useState)(
                    window.nativeSettings.get('modFeatures.discordRPC.applicationIDForRPC') ?? '1124055337234858005',
                );

                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { discordRpcSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [afkTimeout, setAfkTimeout] = (0, d.useState)(window.nativeSettings.get('modFeatures.discordRPC.afkTimeout')),
                    [reconnectInterval, setReconnectInterval] = (0, d.useState)(window.nativeSettings.get('modFeatures.discordRPC.reconnectInterval')),
                    [isExperimentOverriden, setIsExperimentOverriden] = (0, d.useState)(window.nativeSettings.get('modFeatures.discordRPC.overrideDeepLinksExperiment')),
                    [showButtons, setShowButtons] = (0, d.useState)(window.nativeSettings.get('modFeatures.discordRPC.showButtons')),
                    [isDiscordStatusEnabled, setIsDiscordStatusEnabled] = (0, d.useState)(window.nativeSettings.get('modFeatures.discordRPC.enable')),
                    onAfkTimeoutChange = (0, d.useCallback)(async (e) => {
                        let value = Math.min(Math.max(e, 1), 30);
                        setAfkTimeout(value);
                        console.log('modFeatures.discordRPC.afkTimeout changed. Value: ', value);

                        window.nativeSettings.set('modFeatures.discordRPC.afkTimeout', value);
                    }, []),
                    onReconnectIntervalChange = (0, d.useCallback)(async (e) => {
                        let value = Math.min(Math.max(e, 0), 300);
                        setReconnectInterval(value);
                        console.log('modFeatures.discordRPC.reconnectInterval changed. Value: ', value);

                        window.nativeSettings.set('modFeatures.discordRPC.reconnectInterval', value);
                    }, []),
                    onDiscordStatusToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.enable toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.enable', e);
                        setIsDiscordStatusEnabled(e);
                    }, []),
                    onDiscordFromYnisonToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.fromYnison toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.fromYnison', e);
                    }, []),
                    onDiscordShowButtonsToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.showButtons toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.showButtons', e);
                        setShowButtons(e);
                    }, []),
                    onDiscordOverrideDeepLinksExperimentToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.overrideDeepLinksExperiment toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.overrideDeepLinksExperiment', e);
                        setIsExperimentOverriden(e);
                    }, []),
                    onDiscordShowGitHubButtonToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.showGitHubButton toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.showGitHubButton', e);
                    }, []),
                    onDiscordShowSmallIconToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.showSmallIcon toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.showSmallIcon', e);
                    }, []),
                    onDiscordShowAlbumToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.showAlbum toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.showAlbum', e);
                    }, []),
                    onDiscordShowVersionToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.discordRPC.showVersion toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.showVersion', e);
                    }, []),
                    onStatusDisplayTypeChange = (0, d.useCallback)(async (e) => {
                        console.log('statusDisplayType changed. Value: ', e);
                        window.nativeSettings.set('modFeatures.discordRPC.statusDisplayType', e);
                        setStatusDisplayType(e);
                    }, []),
                    onApplicationIDForRPCChange = (0, d.useCallback)(
                        async (e) => {
                            console.log('applicationIDForRPC changed. Value: ', e);
                            window.nativeSettings.set('modFeatures.discordRPC.applicationIDForRPC', e);
                            setApplicationIDForRPC(e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    );
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '31.25rem' },
                    title: 'Discord RPC',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '29.125rem', 'max-height': '37.5rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Включить интеграцию с Discord',
                                    onChange: onDiscordStatusToggle,
                                    isChecked: isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: ['Использовать Ynison', (0, i.jsx)(labeledBubble, { label: 'BETA', disabled: !isDiscordStatusEnabled })],
                                    description: 'Использует данные о воспроизведении с других устройств',
                                    onChange: onDiscordFromYnisonToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.discordRPC.fromYnison'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithDropdown, {
                                    title: 'Тип отображения статуса',
                                    description: 'Что будет отображаться в коротком статусе',
                                    onChange: onStatusDisplayTypeChange,
                                    value: statusDisplayType,
                                    direction: 'bottom',
                                    options: [
                                        { value: 0, label: 'Платформа' },
                                        { value: 1, label: 'Артист' },
                                        { value: 2, label: 'Трек' },
                                    ],
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithDropdown, {
                                    title: 'Локализация платформы в статусе',
                                    description: applicationIDForRPC === '1290778445370097674' ? 'Слушает Яндекс Музыку' : 'Listening to Yandex Music',
                                    onChange: onApplicationIDForRPCChange,
                                    value: applicationIDForRPC,
                                    direction: 'bottom',
                                    options: [
                                        { value: '1124055337234858005', label: 'Английский' },
                                        { value: '1290778445370097674', label: 'Русский' },
                                    ],
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отображать Альбом',
                                    description: 'Отображать ли название альбома в статусе',
                                    onChange: onDiscordShowAlbumToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.discordRPC.showAlbum'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отображать Версию трека',
                                    description: 'Отображать ли версию трека в статусе',
                                    onChange: onDiscordShowVersionToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.discordRPC.showVersion'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отображать маленькую иконку',
                                    description: 'Отображать ли иконку статуса воспроизведения (Playing, Paused)',
                                    onChange: onDiscordShowSmallIconToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.discordRPC.showSmallIcon'),
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отображать кнопки',
                                    description: 'Отображает кнопки-ссылки в статусе',
                                    onChange: onDiscordShowButtonsToggle,
                                    isChecked: showButtons,
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Переопределить эксперимент Глубоких ссылок',
                                    description: 'Уберёт ссылку открывающую приложение т.к. это сделает ссылка на сайт',
                                    onChange: onDiscordOverrideDeepLinksExperimentToggle,
                                    isChecked: isExperimentOverriden,
                                    disabled: !(isDiscordStatusEnabled && showButtons),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отображать кнопку на Гитхаб',
                                    description: 'Отображает кнопку установки мода',
                                    onChange: onDiscordShowGitHubButtonToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.discordRPC.showGitHubButton'),
                                    disabled: !(isDiscordStatusEnabled && showButtons && isExperimentOverriden),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithSlider, {
                                    title: 'Таймер бездействия',
                                    description: 'Через сколько в минутах активность автоматически отчистится',
                                    onChange: onAfkTimeoutChange,
                                    value: afkTimeout,
                                    maxValue: 30,
                                    minValue: 1,
                                    step: 1,
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithSlider, {
                                    title: 'Повторное подключение к Discord',
                                    description: 'Интервал повторных попыток подключения к Discord при потере соединения (в секундах, 0 — отключает)',
                                    onChange: onReconnectIntervalChange,
                                    value: reconnectInterval,
                                    maxValue: 300,
                                    minValue: 0,
                                    step: 5,
                                    disabled: !isDiscordStatusEnabled,
                                }),
                            }),
                        ],
                    }),
                });
            });

            let downloaderSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { downloaderSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [useMP3, setUseMP3] = (0, d.useState)(window.nativeSettings?.get('modFeatures.downloader.useMP3') ?? false),
                    [useCustomPathForSessionStorage, setUseCustomPathForSessionStorage] = (0, d.useState)(
                        window.nativeSettings?.get('modFeatures.downloader.useCustomPathForSessionStorage') ?? false,
                    ),
                    [useDefaultPath, setUseDefaultPath] = (0, d.useState)(window.nativeSettings?.get('modFeatures.downloader.useDefaultPath') ?? false),
                    [customPathForSessionStorage, setCustomPathForSessionStorage] = (0, d.useState)(
                        window.nativeSettings?.get('modFeatures.downloader.customPathForSessionStorage') ?? '',
                    ),
                    [defaultPath, setDefaultPath] = (0, d.useState)(window.nativeSettings?.get('modFeatures.downloader.defaultPath') ?? ''),
                    onUseDefaultPathToggle = (0, d.useCallback)(async (e) => {
                        console.log('useDefaultPath toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.downloader.useDefaultPath', e);
                        setUseDefaultPath(e);
                    }, []),
                    onDefaultPathExploreClick = (0, d.useCallback)(async (e) => {
                        window.nativeSettings?.setPathWithNativeDialog('modFeatures.downloader.defaultPath', undefined, ['openDirectory', 'showHiddenFiles']);
                    }, []),
                    onUseMP3Toggle = (0, d.useCallback)(async (e) => {
                        console.log('useMP3 toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.downloader.useMP3', e);
                        setUseMP3(e);
                    }, []),
                    onUseSyncLyricsToggle = (0, d.useCallback)(async (e) => {
                        console.log('useSyncLyrics toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.downloader.useSyncLyrics', e);
                    }, []),
                    onUseCustomPathForSessionStorageToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('useCustomPathForSessionStorage toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.downloader.useCustomPathForSessionStorage', e);
                            setUseCustomPathForSessionStorage(e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    ),
                    onCustomPathForSessionStorageExploreClick = (0, d.useCallback)(async (e) => {
                        window.nativeSettings?.setPathWithNativeDialog('modFeatures.downloader.customPathForSessionStorage', undefined, [
                            'openDirectory',
                            'showHiddenFiles',
                        ]);
                    }, []);
                return (
                    (0, d.useEffect)(() => {
                        window.desktopEvents?.on('NATIVE_STORE_UPDATE', (event, key, value) => {
                            if (key === 'modFeatures.downloader.defaultPath') {
                                setDefaultPath(value);
                            } else if (key === 'modFeatures.downloader.customPathForSessionStorage') {
                                setCustomPathForSessionStorage(value);
                                j(
                                    (0, i.jsx)(m.hT, {
                                        error: 'Для применения этой настройки требуется перезапуск приложения',
                                    }),
                                    { containerId: _.uQT.ERROR },
                                );
                            }
                        });
                    }, [j]),
                    (0, i.jsxs)(p.a, {
                        className: H().root,
                        style: { 'max-width': '34.375rem', height: 'auto' },
                        title: 'Скачивание треков',
                        headerClassName: H().modalHeader,
                        contentClassName: H().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, i.jsxs)('ul', {
                            className: B().root,
                            style: { width: '32.125rem', gap: 0 },
                            children: [
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(toggleBarWithPathChooser, {
                                        title: 'Путь для кеша',
                                        description: useCustomPathForSessionStorage
                                            ? 'Использовать путь ниже для кеша (в т.ч. ванильного скачивания треков)'
                                            : 'Использовать путь по умолчанию для кеша (в т.ч. ванильного скачивания треков)',
                                        onChange: onUseCustomPathForSessionStorageToggle,
                                        isChecked: useCustomPathForSessionStorage,
                                        placeholder: 'Укажите путь кнопкой справа',
                                        inputValue: customPathForSessionStorage,
                                        onClick: onCustomPathForSessionStorageExploreClick,
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: 'Скачивать только в MP3',
                                        description: useMP3 ? 'Треки скачиваются только в MP3' : 'Треки скачиваются в оригинальном формате',
                                        onChange: onUseMP3Toggle,
                                        isChecked: useMP3,
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: 'Скачивать текстомузыку',
                                        description: 'Если возможно, записывать синхронный текст трека в метаданные файла',
                                        onChange: onUseSyncLyricsToggle,
                                        isChecked: window.nativeSettings.get('modFeatures.downloader.useSyncLyrics'),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(toggleBarWithPathChooser, {
                                        title: 'Путь для файлов по умолчанию',
                                        description: useDefaultPath
                                            ? 'Использовать путь по умолчанию для скачивания треков в файл'
                                            : 'Спрашивать путь при каждом скачивании трека',
                                        onChange: onUseDefaultPathToggle,
                                        isChecked: useDefaultPath,
                                        placeholder: 'Укажите путь кнопкой справа',
                                        inputValue: defaultPath,
                                        onClick: onDefaultPathExploreClick,
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            let scrobblersSettings = (0, n.PA)(() => {

                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { scrobblersSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [userInfo, setUserInfo] = (0, d.useState)(null),
                    [unauthorizedProbe, setUnauthorizedProbe] = (0, d.useState)(false),
                    [isLastFmEnabled, setIsLastFmEnabled] = (0, d.useState)(window.nativeSettings.get('modFeatures.scrobblers.lastfm.enable')),
                    [separatorType, setSeparatorType] = (0, d.useState)(window.nativeSettings.get('modFeatures.scrobblers.lastfm.separatorType')),
                    onLastFMLoginClick = (0, d.useCallback)(async (e) => {
                        console.log('scrobble-lastfm-login triggered.');
                        await window.scrobble.lastfmLogin();
                    }, []),
                    onLastFMLogoutClick = (0, d.useCallback)(async (e) => {
                        console.log('scrobble-lastfm-logout triggered.');
                        await window.scrobble.lastfmLogout();
                    }, []),
                    onLastFmScrobblingToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.scrobblers.lastfm.enable toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.scrobblers.lastfm.enable', e);
                        setIsLastFmEnabled(e);
                    }, []),
                    onSeparatorTypeChange = (0, d.useCallback)(async (e) => {
                        console.log('separatorType changed. Value: ', e);
                        window.nativeSettings.set('modFeatures.scrobblers.lastfm.separatorType', e);
                        setSeparatorType(e);
                    }, []),
                    onLastFmAutoLikesToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.scrobblers.lastfm.autoLike toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.scrobblers.lastfm.autoLike', e);
                    }, []),
                    onLastFmFromYnisonToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.scrobblers.lastfm.fromYnison toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.scrobblers.lastfm.fromYnison', e);
                    }, []);
                return (
                    (0, d.useEffect)(() => {
                        window.scrobble?.lastfmGetUser().then((e) => {
                            setUserInfo(e);
                        });
                        fetch('https://api.music.yandex.net/tracks/138005337:36143630').then((response) => {
                            setUnauthorizedProbe(response.ok);
                        });
                    }, [t.isOpened]),
                    (0, d.useEffect)(() => {
                        window.desktopEvents?.on('LASTFM_USERINFO_UPDATE', (event, e) => {
                            setUserInfo(e);
                        });
                    }, []),
                    (0, i.jsxs)(p.a, {
                        className: H().root,
                        title: 'Скробблинг',
                        headerClassName: H().modalHeader,
                        contentClassName: H().modalContent,
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        size: 'fitContent',
                        placement: 'center',
                        style: { height: 'auto' },
                        labelClose: e({ id: 'interface-actions.close' }),
                        children: (0, i.jsxs)('ul', {
                            className: `${B().root} ${H().list}`,
                            style: { width: '-webkit-fill-available', gap: 0 },
                            children: [
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    ...(userInfo?.user?.image
                                        ? {
                                              style: {
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  gap: '16px',
                                              },
                                          }
                                        : {}),
                                    children: [
                                        (0, i.jsx)('div', {
                                            children: userInfo?.user?.image?.[0]?.['#text']
                                                ? (0, i.jsx)('img', {
                                                      src: (
                                                          userInfo.user.image?.find((img) => img.size === 'medium')?.['#text'] || userInfo.user.image?.[0]?.['#text']
                                                      ).replace('64s', 'avatar'), // Dirty workaround
                                                      alt: 'Аватар',
                                                      style: {
                                                          width: 46,
                                                          height: 46,
                                                          borderRadius: '50%',
                                                      },
                                                  })
                                                : null,
                                        }),
                                        (0, i.jsx)(S, {
                                            title: userInfo ? `${userInfo.user.name} (${Number(userInfo.user.playcount).toLocaleString()})`.replace(' ', ',') : 'LastFM',
                                            description: userInfo ? 'Выйти из LastFM' : 'Авторизоваться в LastFM',
                                            onClick: userInfo ? onLastFMLogoutClick : onLastFMLoginClick,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: 'Скробблинг в LastFM',
                                        disabled: !userInfo,
                                        onChange: onLastFmScrobblingToggle,
                                        isChecked: isLastFmEnabled,
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(settingBarWithDropdown, {
                                        title: 'Разделитель',
                                        description: 'Разделитель между артистами при скробблинге треков с несколькими артистами',
                                        onChange: onSeparatorTypeChange,
                                        value: separatorType,
                                        direction: 'bottom',
                                        options: [
                                            { value: 0, label: 'Нет', description: 'Только первый артист' },
                                            { value: 1, label: '" & "', description: 'Артист & артист' },
                                            { value: 2, label: '" | "', description: 'Артист | артист' },
                                            { value: 3, label: '", "', description: 'Артист, артист' },
                                        ],
                                        disabled: !isLastFmEnabled,
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: 'Синхронизировать лайки',
                                        description: 'Автоматически лайкает/анлайкает треки в LastFM',
                                        disabled: !(userInfo && isLastFmEnabled),
                                        onChange: onLastFmAutoLikesToggle,
                                        isChecked: window.nativeSettings.get('modFeatures.scrobblers.lastfm.autoLike'),
                                    }),
                                }),
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: [
                                            'Использовать Ynison',
                                            (0, i.jsx)(labeledBubble, { label: 'BETA', disabled: !(userInfo && isLastFmEnabled && unauthorizedProbe) }),
                                        ],
                                        description: unauthorizedProbe ? 'Скробблить проигрывания даже с других устройств' : 'Недоступно в вашем регионе или включён VPN',
                                        disabled: !(userInfo && isLastFmEnabled && unauthorizedProbe),
                                        onChange: onLastFmFromYnisonToggle,
                                        isChecked: window.nativeSettings.get('modFeatures.scrobblers.lastfm.fromYnison'),
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });

            let ynisonSettings = (0, n.PA)(() => {

                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { ynisonSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [enableYnisonRemote, setEnableYnisonRemote] = (0, d.useState)(window.ENABLE_YNISON_REMOTE_CONTROL ?? true),
                    [interceptYnison, setInterceptYnison] = (0, d.useState)(window.YNISON_INTERCEPT_PLAYBACK ?? true),
                    onEnableYnisonRemoteControlToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('Ynison Remote Control toggled. Value: ', e);
                            window.nativeSettings.set('enableYnisonRemoteControl', e);
                            setEnableYnisonRemote(e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [g],
                    ),
                    onYnisonInterceptPlaybackToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('Ynison intercept toggled. Value: ', e);
                            window.nativeSettings.set('ynisonInterceptPlayback', e);
                            setInterceptYnison(e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [g],
                    );
                return (
                        (0, i.jsxs)(p.a, {
                            className: H().root,
                            title: 'Ynison Remote',
                            headerClassName: H().modalHeader,
                            contentClassName: H().modalContent,
                            open: t.isOpened,
                            onOpenChange: t.onOpenChange,
                            onClose: t.close,
                            size: 'fitContent',
                            placement: 'center',
                            style: { 'max-width': '34.375rem', height: 'auto' },
                            labelClose: e({ id: 'interface-actions.close' }),
                            children: (0, i.jsxs)('ul', {
                                className: `${B().root} ${H().list}`,
                                style: { width: '32.125rem', gap: 0 },
                                children: [
                                    (0, i.jsx)('li', {
                                        className: B().item,
                                        children: (0, i.jsx)(P, {
                                            title: ['Удалённое управление', (0, i.jsx)(labeledBubble, { label: 'BETA' })],
                                            description: 'Даст возможность управлять этим плеером с других устройств',
                                            onChange: onEnableYnisonRemoteControlToggle,
                                            isChecked: enableYnisonRemote,
                                        }),
                                    }),
                                    (0, i.jsx)('li', {
                                        className: B().item,
                                        children: (0, i.jsx)(P, {
                                            title: ['Перехват Ynison', (0, i.jsx)(labeledBubble, { label: 'BETA', disabled: !enableYnisonRemote })],
                                            description: 'Воспроизведение с других плееров будет автоматически переходить на этот плеер',
                                            onChange: onYnisonInterceptPlaybackToggle,
                                            isChecked: interceptYnison,
                                            disabled: !enableYnisonRemote,
                                        }),
                                    }),
                                ],
                            }),
                        })
                );
            });

            let playerBarEnhancementsSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { playerBarEnhancementsSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    onWhitePlayButtonToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.playerBarEnhancement.whitePlayButton toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.playerBarEnhancement.whitePlayButton', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j]),
                    onSwapDislikeToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.playerBarEnhancement.showDislikeButton toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.playerBarEnhancement.showDislikeButton', e);
                        setTimeout(()=>{window.forcePlayerBarRerender?.()}, 100); // Dirty workaround
                    }, []),
                    onShowRepeatButtonOnVibe = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.playerBarEnhancement.showRepeatButtonOnVibe toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.playerBarEnhancement.showRepeatButtonOnVibe', e);
                        setTimeout(()=>{window.forcePlayerBarRerender?.()}, 100); // Dirty workaround
                    }, []),
                    onShowCodecToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark', e);
                        setTimeout(()=>{window.forcePlayerBarRerender?.()}, 100); // Dirty workaround
                    }, []),
                    onAlwaysShowPlayerTimestampsToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps', e);
                        setTimeout(()=>{window.forcePlayerBarRerender?.()}, 100); // Dirty workaround
                    }, []),
                    onDisablePerTrackColorsToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.playerBarEnhancement.disablePerTrackColors toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.playerBarEnhancement.disablePerTrackColors', e);
                        setTimeout(()=>{window.forcePlayerBarRerender?.()}, 100); // Dirty workaround
                    }, []),
                    onAlwaysWideBarToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('modFeatures.playerBarEnhancement.alwaysWideBar toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.playerBarEnhancement.alwaysWideBar', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    );
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '31.25rem' },
                    title: 'Панель плеера',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '29.125rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Вернуть белую кнопку Play',
                                    description: 'Иначе кнопка будет жёлтой',
                                    onChange: onWhitePlayButtonToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.whitePlayButton'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Поменять местами Дизлайк и Лайк',
                                    description: 'Чтобы их положение соответствовало остальным платформам',
                                    onChange: onSwapDislikeToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.showDislikeButton'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Повтор трека в Моей Волне',
                                    description: 'Кнопка повтора будет доступна даже если играет Волна',
                                    onChange: onShowRepeatButtonOnVibe,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.showRepeatButtonOnVibe'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отображать кодек',
                                    description: 'Отображает кодек вместо качества трека',
                                    onChange: onShowCodecToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Всегда отображать временные метки',
                                    description: 'Отображает временные метки независимо от положения курсора',
                                    onChange: onAlwaysShowPlayerTimestampsToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отключить цвета треков',
                                    description: 'Панель перестанет перекрашиваться под каждый трек',
                                    onChange: onDisablePerTrackColorsToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.disablePerTrackColors'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Всегда расширенная',
                                    description: 'Панель будет всегда широкой, независимо от размера окна приложения',
                                    onChange: onAlwaysWideBarToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.playerBarEnhancement.alwaysWideBar'),
                                }),
                            }),
                        ],
                    }),
                });
            });

            let windowBehaviorSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { windowBehaviorSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [isTaskbarExtensionsEnabled, setIsTaskbarExtensionsEnabled] = (0, d.useState)(window.nativeSettings.get('modFeatures.taskBarExtensions.enable')),
                    onSaveWindowDimensionsToggle = (0, d.useCallback)(async (e) => {
                        console.log('saveWindowDimensionsOnRestart toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.windowBehavior.saveWindowDimensionsOnRestart', e);
                    }, []),
                    onSaveWindowPositionToggle = (0, d.useCallback)(async (e) => {
                        console.log('saveWindowPositionOnRestart toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.windowBehavior.saveWindowPositionOnRestart', e);
                    }, []),
                    onMinimizeToTrayOnWindowCloseToggle = (0, d.useCallback)(async (e) => {
                        console.log('minimizeToTrayOnWindowClose toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.windowBehavior.minimizeToTrayOnWindowClose', e);
                    }, []),
                    onTaskbarExtensionsEnableToggle = (0, d.useCallback)(async (e) => {
                        console.log('taskBarExtensions.enable toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.taskBarExtensions.enable', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        setIsTaskbarExtensionsEnabled(e);
                    }, [j]),
                    onTaskbarExtensionsCoverAsThumbnailToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('taskBarExtensions.coverAsThumbnail toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.taskBarExtensions.coverAsThumbnail', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    );
                const [startupPage, setStartupPage] = (0, d.useState)(window.nativeSettings.get('modFeatures.windowBehavior.startupPage') ?? '/');
                const onStartupPageChange = (0, d.useCallback)(async (e) => {
                    console.log('startupPage changed. Value: ', e);
                    window.nativeSettings.set('modFeatures.windowBehavior.startupPage', e);
                    setStartupPage(e);
                }, []);
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '34.375rem' },
                    title: 'Поведение окна',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '32.125rem', 'max-height': '37.5rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithDropdown, {
                                    title: 'Стартовая страница',
                                    description: 'Страница по умолчанию при запуске',
                                    onChange: onStartupPageChange,
                                    value: startupPage,
                                    direction: 'bottom',
                                    options: [
                                        { value: '/', label: 'Главная' },
                                        { value: '/search', label: 'Поиск' },
                                        { value: '/non-music', label: 'Подкасты и книги' },
                                        { value: '/collection', label: 'Коллекция' },
                                    ],
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Сохранять размер окна',
                                    description: 'Сохраняет размер окна при перезапуске',
                                    onChange: onSaveWindowDimensionsToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.windowBehavior.saveWindowDimensionsOnRestart'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Сохранять положение окна',
                                    description: 'Сохраняет положение окна при перезапуске',
                                    onChange: onSaveWindowPositionToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.windowBehavior.saveWindowPositionOnRestart'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Сворачивать в трей по "крестику"',
                                    description: 'Если включено, свернётся в трей. Иначе приложение закроется полностью',
                                    onChange: onMinimizeToTrayOnWindowCloseToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.windowBehavior.minimizeToTrayOnWindowClose'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Включить улучшенное превью окна на панели задач',
                                    description: 'Добавляет кнопки управления воспроизведением на превью окна в панели задач',
                                    onChange: onTaskbarExtensionsEnableToggle,
                                    isChecked: isTaskbarExtensionsEnabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Использовать обложку трека в превью окна',
                                    description: 'Если трек играет, заменяет динамичное превью на картинку обложки трека',
                                    onChange: onTaskbarExtensionsCoverAsThumbnailToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.taskBarExtensions.coverAsThumbnail'),
                                    disabled: !isTaskbarExtensionsEnabled,
                                }),
                            }),
                        ],
                    }),
                });
            });


            let miniplayerSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { miniplayerSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    onSkipTaskbarToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.miniplayer.skipTaskbar toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.miniplayer.skipTaskbar', e);
                    }, []),
                    onSaveDimensionsToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.miniplayer.saveDimensions toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.miniplayer.saveDimensions', e);
                    }, []),
                    onSavePositionToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.miniplayer.savePosition toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.miniplayer.savePosition', e);
                    }, []),
                    onAlwaysShowPlayerTimestampsToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.miniplayer.alwaysShowPlayerTimestamps toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.miniplayer.alwaysShowPlayerTimestamps', e);
                    }, []);
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '34.375rem', height: 'auto' },
                    title: 'Миниплеер',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '32.125rem', 'max-height': '37.5rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Сохранять размер окна',
                                    description: 'Сохраняет размер окна миниплеера при перезапуске',
                                    onChange: onSaveDimensionsToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.miniplayer.saveDimensions'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Сохранять положение окна',
                                    description: 'Сохраняет положение окна миниплеера при перезапуске',
                                    onChange: onSavePositionToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.miniplayer.savePosition'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Не отображать окно в таскбаре',
                                    description: 'Работает только если миниплеер закреплён поверх других окон',
                                    onChange: onSkipTaskbarToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.miniplayer.skipTaskbar'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Всегда отображать временные метки',
                                    description: 'Отображает временные метки независимо от положения курсора',
                                    onChange: onAlwaysShowPlayerTimestampsToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.miniplayer.alwaysShowPlayerTimestamps'),
                                }),
                            }),
                        ],
                    }),
                });
            });


            let vibeBehaviorEnhancementsSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { vibeBehaviorEnhancementsSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    onAutoLaunchOnAppStartup = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup', e);
                    }, []),
                    onEnableEndlessMusicToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.vibeAnimationEnhancement.enableEndlessMusic toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.enableEndlessMusic', e);
                    }, []);
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '34.375rem', height: 'auto', },
                    title: 'Поведение Моей Волны',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '32.125rem', 'max-height': '37.5rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Запускать воспроизведение трека при старте приложения',
                                    description: 'Запустит последний играющий трек сразу после старта приложения',
                                    onChange: onAutoLaunchOnAppStartup,
                                    isChecked: window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Музыка без остановки',
                                    description: 'После окончания воспроизведения очереди, запуститься волна',
                                    onChange: onEnableEndlessMusicToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.enableEndlessMusic'),
                                }),
                            }),
                        ],
                    }),
                });
            });


            let vibeAnimationEnhancementsSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { vibeAnimationEnhancementsSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [maxFps, setMaxFPS] = (0, d.useState)(window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.maxFPS')),
                    [isRenderingDisabled, setIsRenderingDisabled] = (0, d.useState)(window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.disableRendering')),
                    [useDynamicEnergy, setUseDynamicEnergy] = (0, d.useState)(window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.useDynamicEnergy')),
                    [smoothDynamicEnergy, setSmoothDynamicEnergy] = (0, d.useState)(
                        window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.smoothDynamicEnergy'),
                    ),
                    [intensityCoefficient, setIntensityCoefficient] = (0, d.useState)(
                        window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.intensityCoefficient'),
                    ),
                    [smoothDynamicEnergyCoefficient, setSmoothDynamicEnergyCoefficient] = (0, d.useState)(
                        window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient'),
                    ),
                    onDisableVibeRenderingToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.vibeAnimationEnhancement.disableRendering toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.disableRendering', e);
                        setIsRenderingDisabled(e);
                    }, []),
                    onMaxFPSchange = (0, d.useCallback)(async (e) => {
                        let value = Math.max(e, 1);
                        setMaxFPS(value);
                        console.log('modFeatures.vibeAnimationEnhancement.maxFPS changed. Value: ', value);

                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.maxFPS', value);
                    }, []),
                    onIntensityCoefficientChange = (0, d.useCallback)(async (e) => {
                        let value = Math.min(Math.max(e, 0), 2.5);
                        setIntensityCoefficient(value);
                        console.log('modFeatures.vibeAnimationEnhancement.intensityCoefficient changed. Value: ', value);

                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.intensityCoefficient', value);
                    }, []),
                    onSmoothDynamicEnergyCoefficientChange = (0, d.useCallback)(async (e) => {
                        let value = Math.min(Math.max(e, 0.01), 1);
                        setSmoothDynamicEnergyCoefficient(value);
                        console.log('modFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient changed. Value: ', value);

                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient', value);
                    }, []),
                    onPlayOnAnyEntityToggle = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.vibeAnimationEnhancement.playOnAnyEntity. Value: ', e);
                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.playOnAnyEntity', e);
                    }, []),
                    onEnableUseDynamicEnergy = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.vibeAnimationEnhancement.useDynamicEnergy toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.useDynamicEnergy', e);
                        setUseDynamicEnergy(e);
                    }, []),
                    onEnableSmoothDynamicEnergy = (0, d.useCallback)(async (e) => {
                        console.log('modFeatures.vibeAnimationEnhancement.smoothDynamicEnergy toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.vibeAnimationEnhancement.smoothDynamicEnergy', e);
                        setSmoothDynamicEnergy(e);
                    }, []);
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '34.375rem' },
                    title: 'Анимация Моей Волны',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '32.125rem', 'max-height': '37.5rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Отключить отрисовку анимации Волны',
                                    description: 'Значительно увеличивает производительность на слабом железе',
                                    onChange: onDisableVibeRenderingToggle,
                                    isChecked: isRenderingDisabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Реакция анимации Волны на любые треки',
                                    description: 'Анимация будет реагировать на треки запущенные не через Мою Волну',
                                    onChange: onPlayOnAnyEntityToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.vibeAnimationEnhancement.playOnAnyEntity'),
                                    disabled: !!isRenderingDisabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithSlider, {
                                    title: 'Ограничение FPS',
                                    description: 'Верхняя граница FPS. Чем больше, тем плавнее анимация',
                                    onChange: onMaxFPSchange,
                                    value: maxFps,
                                    maxValue: Math.max(window?.DISPLAY_MAX_FPS ?? 60, maxFps),
                                    minValue: 1,
                                    step: 1,
                                    disabled: !!isRenderingDisabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithSlider, {
                                    title: 'Интенсивность реакции на трек',
                                    description: 'Чем больше, тем сильнее анимация ускоряется под трек',
                                    onChange: onIntensityCoefficientChange,
                                    value: intensityCoefficient,
                                    maxValue: 2.5,
                                    minValue: 0,
                                    step: 0.1,
                                    disabled: !!isRenderingDisabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Подстраивать скорость анимации под Энергию трека',
                                    description: 'Анимация будет подстраивать скорость под Энергию трека в реальном времени',
                                    onChange: onEnableUseDynamicEnergy,
                                    isChecked: useDynamicEnergy,
                                    disabled: !!isRenderingDisabled,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Смягчать динамическую энергию',
                                    description: 'Изменения скорости трека будут более плавными',
                                    onChange: onEnableSmoothDynamicEnergy,
                                    isChecked: smoothDynamicEnergy,
                                    disabled: !(!isRenderingDisabled && useDynamicEnergy),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(settingBarWithSlider, {
                                    title: 'Коэффициент смягчения энергии',
                                    description: 'Чем меньше, тем сильнее сглаживаются изменения скорости анимации',
                                    onChange: onSmoothDynamicEnergyCoefficientChange,
                                    value: smoothDynamicEnergyCoefficient,
                                    maxValue: 1,
                                    minValue: 0.01,
                                    step: 0.01,
                                    disabled: !(!isRenderingDisabled && useDynamicEnergy && smoothDynamicEnergy),
                                }),
                            }),
                        ],
                    }),
                });
            });


            let appUpdatesSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { appUpdatesSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    [enableAppAutoUpdate, setEnableAppAutoUpdate] = (0, d.useState)(window.nativeSettings.get('modFeatures.appAutoUpdates.enableAppAutoUpdate')),
                    onModAutoUpdateToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('enableModAutoUpdate toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.appAutoUpdates.enableModAutoUpdate', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    ),
                    onAppAutoUpdateByProbabilityToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('enableAppAutoUpdateByProbability toggled. Value: ', !e);
                            window.nativeSettings.set('modFeatures.appAutoUpdates.enableAppAutoUpdateByProbability', !e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    ),
                    onAppAutoUpdateToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('enableAppAutoUpdate toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.appAutoUpdates.enableAppAutoUpdate', e);
                            setEnableAppAutoUpdate(e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    );
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '34.375rem', height: 'auto' },
                    title: 'Обновления',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: `${B().root} ${H().list}`,
                        style: { width: '32.125rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Проверять обновления приложения',
                                    description: 'Проверять ли наличие обновлений приложения автоматически',
                                    onChange: onAppAutoUpdateToggle,
                                    isChecked: enableAppAutoUpdate,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Получать обновления приложения сразу же',
                                    description: 'Выключает участие в получении обновлений волнами',
                                    onChange: onAppAutoUpdateByProbabilityToggle,
                                    isChecked: !window.nativeSettings.get('modFeatures.appAutoUpdates.enableAppAutoUpdateByProbability'),
                                    disabled: !enableAppAutoUpdate,
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Проверять обновления модификации',
                                    description: 'Проверять ли наличие обновлений мода автоматически',
                                    onChange: onModAutoUpdateToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.appAutoUpdates.enableModAutoUpdate'),
                                }),
                            }),
                        ],
                    }),
                });
            });


            let systemSettings = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    {
                        modals: { systemSettingsModal: t },
                    } = (0, _.Pjs)(),
                    { notify: j } = (0, _.lkh)(),
                    onPreventDisplaySleepToggle = (0, d.useCallback)((e) => {
                        console.log('preventDisplaySleep toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.windowBehavior.preventDisplaySleep', e);
                    }, []),
                    onAutoLaunchOnSystemStartupToggle = (0, d.useCallback)(
                        (e) => {
                            console.log('autoLaunchOnSystemStartup toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.windowBehavior.autoLaunchOnSystemStartup', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    ),
                    onStartMinimizedToggle = (0, d.useCallback)((e) => {
                        console.log('startMinimized toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.windowBehavior.startMinimized', e);
                    }, []),
                    onTryEnableSurroundAudioToggle = (0, d.useCallback)(
                        (e) => {
                            console.log('tryEnableSurroundAudio toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.tryEnableSurroundAudio', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    ),
                    onEnableHardwareAccelerationToggle = (0, d.useCallback)(
                        (e) => {
                            console.log('enableHardwareAcceleration toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.enableHardwareAcceleration', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [j],
                    ),
                    onToggleGlobalShortcuts = (0, d.useCallback)((e) => {
                        console.log('globalShortcuts.enable toggled. Value: ', e);
                        window.nativeSettings.set('modFeatures.globalShortcuts.enable', e);
                    }, []);
                return (0, i.jsxs)(p.a, {
                    className: H().root,
                    style: { 'max-width': '35.625rem', height: 'auto' },
                    title: 'Системные настройки',
                    headerClassName: H().modalHeader,
                    contentClassName: H().modalContent,
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    size: 'fitContent',
                    placement: 'center',
                    labelClose: e({ id: 'interface-actions.close' }),
                    children: (0, i.jsxs)('ul', {
                        className: B().root,
                        style: { width: '33.5rem', gap: 0 },
                        children: [
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Включить аппаратное ускорение',
                                    description: 'Настоятельно рекомендуется не выключать. Отключайте только в крайнем случае',
                                    onChange: onEnableHardwareAccelerationToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.enableHardwareAcceleration'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Предотвращать отключение монитора',
                                    description: 'Если включено и окно ЯМ видно на экране, монитор не уйдёт в сон от бездействия',
                                    onChange: onPreventDisplaySleepToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.windowBehavior.preventDisplaySleep'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: ['Пространственный звук', (0, i.jsx)(labeledBubble, { label: 'ALPHA' })],
                                    description: 'Включает поддержку систем 5.1 / 7.1 (Учтите что звук останется в стерео)',
                                    onChange: onTryEnableSurroundAudioToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.tryEnableSurroundAudio'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Запускать приложение при старте системы',
                                    onChange: onAutoLaunchOnSystemStartupToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.windowBehavior.autoLaunchOnSystemStartup'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Запускать свернутым',
                                    description: 'Если включено, приложение запустится свернутым в трей',
                                    onChange: onStartMinimizedToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.windowBehavior.startMinimized'),
                                }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Глобальные горячие клавиши',
                                    description: 'Настроить комбинации можно в Настройки -> Остальные настройки',
                                    onChange: onToggleGlobalShortcuts,
                                    isChecked: window.nativeSettings.get('modFeatures.globalShortcuts.enable'),
                                }),
                            }),
                        ],
                    }),
                });
            });


            var F = o(89468),
                B = o.n(F);
            let W = (0, n.PA)(() => {
                let e = (0, _.HFS)(),
                    t = (0, _.NFA)().get(_.U2_),
                    {
                        modals: {
                            shortcutsModal: o,
                            aboutAppModal: n,
                            clearMemoryModal: l,
                            discordRpcSettingsModal: discordRpcSettingsModal,
                            vibeBehaviorEnhancementsSettingsModal: vibeBehaviorEnhancementsSettingsModal,
                            vibeAnimationEnhancementsSettingsModal: vibeAnimationEnhancementsSettingsModal,
                            playerBarEnhancementsSettingsModal: playerBarEnhancementsSettingsModal,
                            windowBehaviorSettingsModal: windowBehaviorSettingsModal,
                            miniplayerSettingsModal: miniplayerSettingsModal,
                            appUpdatesSettingsModal: appUpdatesSettingsModal,
                            scrobblersSettingsModal: scrobblersSettingsModal,
                            downloaderSettingsModal: downloaderSettingsModal,
                            systemSettingsModal: systemSettingsModal,
                            ynisonSettingsModal: ynisonSettingsModal,
                        },
                        experiments: a,
                        wizard: c,
                        user: p,
                        slam: x,
                        settings: h,
                        sonataState: g,
                    } = (0, _.Pjs)(),
                    v = (0, u.Sq)(),
                    { notify: j } = (0, _.lkh)(),
                    { formatMessage: C } = (0, r.A)(),
                    b = (() => {
                        let e = (0, _.NFA)().get(_.twC),
                            t = (0, _._lF)(e.oldWebHost),
                            { language: o } = (0, _.h6b)();
                        return 'https://'.concat(t, '/newimport?lang=').concat(o);
                    })(),
                    N = v.isAvailable && !h.isMobile,
                    k = a.checkExperiment(_.zal.WebNextCrossMediaPlayer, 'on') && !h.browserInfo.isSafari && h.browserInfo.OSFamily !== _.jwH.IOS,
                    M = p.hasPlus,
                    w = a.checkExperiment(_.zal.WebNextLiteVersion, 'on') && h.isLiteVersionModeAvailableForToggle && !0,
                    E = v.isEnabled ? C({ id: 'equalizer.enabled' }) : C({ id: 'equalizer.disabled' }),
                    T = (0, d.useMemo)(
                        () => `${C({ id: 'desktop.app-version-short' }, { version: e })} / Мод ${window.MOD_VERSION} / Хост ${window.HOST_VERSION}`,
                        [!0, C, e],
                    ),
                    O = (0, d.useCallback)(
                        async (e) => {
                            (await p.setSettings({ isChildModeEnabled: e })) === _.FlZ.ERROR &&
                                j(
                                    (0, i.jsx)(m.hT, {
                                        error: C({
                                            id: 'settings.failed-to-change-child-mode',
                                        }),
                                    }),
                                    { containerId: _.uQT.ERROR },
                                );
                        },
                        [p, C, j],
                    ),
                    onShowNonMusicToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('taskBarExtensions.enable toggled. Value: ', e);
                            window.nativeSettings.set('modFeatures.showNonMusicPage', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [g],
                    ),
                    onEnableYnisonRemoteControlToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('Ynison Remote Control toggled. Value: ', e);
                            window.nativeSettings.set('enableYnisonRemoteControl', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [g],
                    ),
                    onYnisonInterceptPlaybackToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('Ynison intercept toggled. Value: ', e);
                            window.nativeSettings.set('ynisonInterceptPlayback', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [g],
                    ),
                    onDevtoolsToggle = (0, d.useCallback)(
                        async (e) => {
                            console.log('devtools toggled. Value: ', e);
                            window.nativeSettings.set('enableDevTools', e);
                            j(
                                (0, i.jsx)(m.hT, {
                                    error: 'Для применения этой настройки требуется перезапуск приложения',
                                }),
                                { containerId: _.uQT.ERROR },
                            );
                        },
                        [g],
                    ),
                    onOpenMoreSettings = (0, d.useCallback)(async (e) => {
                        console.log('User navigated to config.json', e);
                        window.openConfigFile();
                    }, []),
                    [downloadedTracksInfo, setDownloadedTracksInfo] = (0, d.useState)({
                        tracksCount: undefined,
                        tracksSize: undefined,
                    }),
                    z = (0, d.useCallback)(
                        (e) => {
                            x.setOfflineMode(e);
                        },
                        [x],
                    ),
                    L = (0, d.useCallback)(() => {
                        l.open();
                    }, [l]),
                    R = (0, d.useCallback)(
                        (e) => {
                            if (e) return void h.setLiteVersionMode(_.wv5.ENABLED, !0);
                            h.setLiteVersionMode(_.wv5.DISABLED, !0);
                        },
                        [h],
                    );
                (0, d.useLayoutEffect)(() => {
                    let e = t.get(_.cYZ.CrossFadeMode);
                    'boolean' == typeof e && g.setCrossFadeMode(e);
                }, [g, t]);
                let H = (0, d.useCallback)(
                        (e) => {
                            g.setCrossFadeMode(e);
                        },
                        [g],
                    ),
                    formatBytes = (n) => {
                        if (typeof n !== 'number' || n < 0) {
                            return '0 B';
                        }

                        const units = ['B', 'KB', 'MB', 'GB'];
                        let index = 0;

                        while (n >= 1024 && index < units.length - 1) {
                            n /= 1024;
                            index++;
                        }

                        return `${n.toFixed(2)} ${units[index]}`;
                    },
                    getTrackWordForm = (number) => {
                        if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
                            return 'треков';
                        }

                        const remainder10 = number % 10;
                        const remainder100 = number % 100;

                        if (remainder100 >= 11 && remainder100 <= 19) {
                            return 'треков';
                        } else if (remainder10 === 1) {
                            return 'трек';
                        } else if (remainder10 >= 2 && remainder10 <= 4) {
                            return 'трека';
                        } else {
                            return 'треков';
                        }
                    };
                return (
                    (0, d.useEffect)(() => {
                        let callfunc = async () => {
                            const getDownloadedTracksSize = async (t) => {
                                let forkSize = 0;
                                for await (let r of t.values()) {
                                    if ('directory' === r.kind) {
                                        forkSize += await getDownloadedTracksSize(r);
                                    } else if ('file' === r.kind) {
                                        try {
                                            let t = await r.getFile();
                                            forkSize += t.size;
                                        } catch (e) {
                                            console.warn('Track file is in use. Skipping...', e);
                                        }
                                    }
                                }
                                return forkSize;
                            };

                            const getDownloadedTracksCount = async (t) => {
                                let trackCount = 0;
                                for await (let r of t.values()) {
                                    if ('directory' === r.kind && r.name === 'tracks') {
                                        trackCount = await getDownloadedTracksCount(r);
                                    } else if ('file' === r.kind && !r.name.endsWith('.crswap')) {
                                        trackCount += 1;
                                    }
                                }
                                return trackCount;
                            };

                            const fileStorage = await window.navigator.storage.getDirectory();

                            setDownloadedTracksInfo({
                                tracksCount: await getDownloadedTracksCount(fileStorage),
                                tracksSize: await getDownloadedTracksSize(fileStorage),
                            });
                        };

                        window.onDownloadedTracksDeleted = () =>
                            // That's a bad solution to update the info on clear memory modal close
                            setDownloadedTracksInfo({
                                tracksCount: 0,
                                tracksSize: 0,
                            });

                        callfunc();
                    }, []),
                    (0, i.jsxs)('ul', {
                        className: B().root,
                        ...(0, s.Am)(s.e8.settings.SETTINGS_LIST),
                        children: [
                            M &&
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: C({ id: 'offline.offline-mode' }),
                                        description: C({
                                            id: 'offline.offline-mode-description',
                                        }),
                                        onChange: z,
                                        isChecked: x.isOfflineModeEnabled,
                                    }),
                                }),
                            M &&
                                (0, i.jsxs)('li', {
                                    className: B().item,
                                    children: [
                                        (0, i.jsx)(S, {
                                            title: C({
                                                id: 'offline.clear-memory',
                                            }),
                                            description: `Скачан${downloadedTracksInfo.tracksCount % 10 === 1 && downloadedTracksInfo.tracksCount % 100 !== 11 ? '' : 'о'} ${downloadedTracksInfo.tracksCount ?? '0'} ${getTrackWordForm(downloadedTracksInfo.tracksCount)} (${formatBytes(downloadedTracksInfo.tracksSize)})`,
                                            onClick: L,
                                        }),
                                        (0, i.jsx)(y, {}),
                                    ],
                                }),
                            w &&
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: C({ id: 'lite-version.title' }),
                                        description: C({
                                            id: 'lite-version.description',
                                        }),
                                        onChange: R,
                                        isChecked: h.isLiteVersionModeEnabled,
                                    }),
                                }),
                            N &&
                                (0, i.jsxs)('li', {
                                    className: B().item,
                                    children: [
                                        (0, i.jsx)(S, {
                                            title: C({ id: 'equalizer.title' }),
                                            description: E,
                                            onClick: v.modal.open,
                                            descriptionProps: (0, s.Am)(s.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION),
                                            ...(0, s.Am)(s.e8.settings.SETTINGS_EQUALIZER_BUTTON),
                                        }),
                                        (0, i.jsx)(u.MZ, {}),
                                    ],
                                }),
                            (0, i.jsx)(m.aQ, {
                                fallback: (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(S, {
                                        title: C({ id: 'settings.preferences' }),
                                        description: C({
                                            id: 'settings.preferences-description',
                                        }),
                                        onClick: c.modal.open,
                                    }),
                                }),
                            }),
                            (0, i.jsx)(m.aQ, {
                                fallback: (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(A, {
                                        title: C({ id: 'settings.import-media' }),
                                        description: C({
                                            id: 'settings.import-media-description',
                                        }),
                                        link: b,
                                    }),
                                }),
                            }),
                            (0, i.jsx)(m.aQ, {
                                fallback:
                                    !a.checkExperiment(_.zal.WebNextDisableKids, 'on') &&
                                    (0, i.jsx)('li', {
                                        className: B().item,
                                        children: (0, i.jsx)(P, {
                                            title: C({
                                                id: 'settings.show-child-section',
                                            }),
                                            onChange: O,
                                            isChecked: p.settings.isChildModeEnabled,
                                        }),
                                    }),
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Показывать раздел «Подкасты и книги»',
                                    onChange: onShowNonMusicToggle,
                                    isChecked: window.nativeSettings.get('modFeatures.showNonMusicPage'),
                                }),
                            }),
                            (0, i.jsxs)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: C({ id: 'settings.shortcuts' }),
                                        onClick: o.open,
                                    }),
                                    (0, i.jsx)(I, {}),
                                ],
                            }),
                            T &&
                                (0, i.jsxs)('li', {
                                    className: B().item,
                                    children: [
                                        (0, i.jsx)(S, {
                                            title: C({ id: 'settings.about-app' }),
                                            description: T,
                                            onClick: n.open,
                                        }),
                                        (0, i.jsx)(f, {}),
                                    ],
                                }),
                            k &&
                                (0, i.jsx)('li', {
                                    className: B().item,
                                    children: (0, i.jsx)(P, {
                                        title: C({ id: 'settings.crossfade' }),
                                        onChange: H,
                                        isChecked: g.isCrossFadeEnabled,
                                    }),
                                }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Discord RPC',
                                        description: 'Настройки интеграции с Discord',
                                        onClick: discordRpcSettingsModal.open,
                                    }),
                                    (0, i.jsx)(discordRpcSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Анимация Моей Волны',
                                        description: 'Настройка анимации Моей Волны',
                                        onClick: vibeAnimationEnhancementsSettingsModal.open,
                                    }),
                                    (0, i.jsx)(vibeAnimationEnhancementsSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Поведение Моей Волны',
                                        description: 'Настройка анимации Моей Волны',
                                        onClick: vibeBehaviorEnhancementsSettingsModal.open,
                                    }),
                                    (0, i.jsx)(vibeBehaviorEnhancementsSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Панель плеера',
                                        description: 'Настройки элементов на панели плеера',
                                        onClick: playerBarEnhancementsSettingsModal.open,
                                    }),
                                    (0, i.jsx)(playerBarEnhancementsSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Поведение окна',
                                        description: 'Настройки поведения окна приложения',
                                        onClick: windowBehaviorSettingsModal.open,
                                    }),
                                    (0, i.jsx)(windowBehaviorSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Миниплеер',
                                        description: 'Настройки поведения миниплеера',
                                        onClick: miniplayerSettingsModal.open,
                                    }),
                                    (0, i.jsx)(miniplayerSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Скробблинг',
                                        description: 'Авторизация в Last.fm и другие настройки',
                                        onClick: scrobblersSettingsModal.open,
                                    }),
                                    (0, i.jsx)(scrobblersSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Скачивание треков',
                                        description: 'Настройки оффлайн прослушивания, а также скачивания в файл',
                                        onClick: downloaderSettingsModal.open,
                                    }),
                                    (0, i.jsx)(downloaderSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Системные настройки',
                                        description: 'Автозапуск, аппаратное ускорение и т.п.',
                                        onClick: systemSettingsModal.open,
                                    }),
                                    (0, i.jsx)(systemSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Обновления',
                                        description: 'Настройки обновлений как программы, так и модификации',
                                        onClick: appUpdatesSettingsModal.open,
                                    }),
                                    (0, i.jsx)(appUpdatesSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: ['Ynison Remote', (0, i.jsx)(labeledBubble, { label: 'BETA' })],
                                        description: 'Настройки кроссплеерного управления',
                                        onClick: ynisonSettingsModal.open,
                                    }),
                                    (0, i.jsx)(ynisonSettings, {}),
                                ],
                            }),
                            (0, i.jsx)('li', {
                                className: B().item,
                                children: (0, i.jsx)(P, {
                                    title: 'Режим разработчика',
                                    description: 'Разблокирует Chromium Devtools и dev панель в правом нижнем углу',
                                    onChange: onDevtoolsToggle,
                                    isChecked: window.nativeSettings.get('enableDevTools'),
                                }),
                            }),
                            (0, i.jsxs)('li', {
                                className: B().item,
                                children: [
                                    (0, i.jsx)(S, {
                                        title: 'Остальные настройки',
                                        description: 'Откроется config.json',
                                        onClick: onOpenMoreSettings,
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var q = o(64143),
                D = o(38046),
                U = o.n(D);
            let Y = (0, n.PA)(() => {
                let { formatMessage: e } = (0, r.A)(),
                    { contentScrollRef: t, setContentScrollRef: o } = (0, _.gKY)(),
                    n = (0, _.W6M)();
                return (0, i.jsxs)(q.hO, {
                    scrollElement: t,
                    outerTitle: e({ id: 'page.settings' }),
                    children: [
                        (0, i.jsx)(m.Y9, {
                            variant: m.Vw.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: n.canBack,
                            children: (0, i.jsx)(c.Heading, {
                                variant: 'h2',
                                weight: 'bold',
                                size: 'xl',
                                lineClamp: 1,
                                children: (0, i.jsx)(l.A, {
                                    id: 'page.settings',
                                }),
                            }),
                        }),
                        (0, i.jsx)(a.N, {
                            ref: o,
                            className: U().root,
                            containerClassName: U().scrollableContainer,
                            ...(0, s.Am)(s.Xk.settings.SETTINGS_PAGE),
                            children: (0, i.jsxs)('div', {
                                className: U().container,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: U().content,
                                        children: (0, i.jsx)(W, {}),
                                    }),
                                    (0, i.jsx)(m.A, {
                                        children: (0, i.jsx)(m.wi, {
                                            className: U().footer,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        28486: (e) => {
            e.exports = {
                root: 'ShortcutsModal_root__ro7m4',
                modalHeader: 'ShortcutsModal_modalHeader__IYJ9m',
                modalContent: 'ShortcutsModal_modalContent__SCpYX',
                list: 'ShortcutsModal_list__eS4ox',
                text: 'ShortcutsModal_text__5JJ0j',
                content: 'ShortcutsModal_content__Li9Ip',
                buttons: 'ShortcutsModal_buttons__o_xlC',
                button: 'ShortcutsModal_button__cTIee',
            };
        },
        30768: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        38046: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
            };
        },
        38850: (e) => {
            e.exports = {
                icon: 'SettingsListLinkItem_icon__p4P_V',
                root: 'SettingsListLinkItem_root__rTPC9',
                container: 'SettingsListLinkItem_container__k7bhS',
                linkText: 'SettingsListLinkItem_linkText__0PHlQ',
                title: 'SettingsListLinkItem_title__duJnL',
                description: 'SettingsListLinkItem_description__xWeAD',
            };
        },
        40258: (e, t, o) => {
            'use strict';
            o.d(t, { L: () => d });
            var i,
                n = o(93225),
                r = o(66268),
                l = {
                    6699: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let i = o(352),
                            n = o(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: o, throttleTimeout: r } = e,
                                l = (0, n.useRef)(null),
                                [s, a] = (0, n.useState)(!!o),
                                c = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            a(!o),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    a(!!o);
                                                }, t));
                                        }, r),
                                    [t, o, r],
                                ),
                                d = (0, n.useCallback)(() => {
                                    a(!!o), l.current && window.clearTimeout(l.current);
                                }, [o]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: c, reset: d }
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = o.t(r, 2));
                    },
                },
                s = {};
            function a(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var o = (s[e] = { exports: {} });
                return l[e](o, o.exports, a), o.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useScroll = void 0);
                let e = a(810),
                    t = a(361),
                    o = a(6699);
                c.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: r, elementRef: l } = i,
                        { state: s, handleDebouncedToggle: a } = (0, o.useDebouncedToggle)({
                            delay: 1e3,
                            throttleTimeout: 100,
                        }),
                        c = (0, e.useCallback)(() => {
                            r && a(), null == n || n();
                        }, [r, a, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(l);
                            if (null === e) return;
                            let o = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return o.addEventListener('scroll', c, i), () => o.removeEventListener('scroll', c, i);
                        }, [l, c]),
                        s
                    );
                };
            })(),
                c.__esModule;
            var d = c.useScroll;
        },
        43726: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
                titleDisabled: 'SettingsListToggleItem_title__Xz8_Q_disabled',
                descriptionDisabled: 'SettingsListToggleItem_description__JBOzV_disabled',
            };
        },
        64143: (e, t, o) => {
            'use strict';
            o.d(t, { hO: () => _, jr: () => m, jp: () => p, QZ: () => n }), o(57323);
            var i = o(66268);
            let n = (e, t, o) => {
                let n = null != o && o;
                return {
                    topColorStyle: (0, i.useMemo)(() => {
                        if (void 0 === t) return;
                        let o = n ? 93 : 17,
                            i = t - o;
                        return {
                            '--average-color-background': e,
                            transform: 'translateY('.concat(t >= o ? 0 : i, 'px)'),
                            opacity: 1,
                        };
                    }, [t, n, e]),
                    headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var r = o(33008),
                l = o(13201),
                s = o(97531),
                a = o(40258),
                c = o(79169),
                d = o(18740);
            let u = (e) => {
                    let { element: t, scrollTop: o, isMobile: i } = e,
                        n = 0.6 * t.clientHeight;
                    return o + (i ? 60 : 76) >= t.offsetTop + n;
                },
                _ = (0, s.PA)((e) => {
                    let { children: t, scrollElement: o, outerTitle: n = '', headerElement: s, headerThreshold: _, shouldHideHeader: m } = e,
                        [p, x] = (0, i.useState)(n),
                        [h, f] = (0, i.useState)(null),
                        [g, v] = (0, i.useState)(null),
                        [j, C] = (0, i.useState)(null),
                        [b, y] = (0, i.useState)(!1),
                        [N, k] = (0, i.useState)(!1),
                        [M, w] = (0, i.useState)(!1),
                        [S, E] = (0, i.useState)(!1),
                        {
                            settings: { isMobile: T },
                        } = (0, c.Pjs)();
                    (0, i.useLayoutEffect)(() => {
                        x(n);
                    }, [n]);
                    let A = (0, i.useCallback)(() => {
                        let e = null != _ ? _ : 10,
                            t = s ? Number(s.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let i = (e) => {
                            w(e > t),
                                m && E(e > 30),
                                (null == h ? void 0 : h.current) &&
                                    y(
                                        u({
                                            element: null == h ? void 0 : h.current,
                                            scrollTop: e,
                                            isMobile: T,
                                        }),
                                    ),
                                (null == g ? void 0 : g.current) &&
                                    k(
                                        u({
                                            element: null == g ? void 0 : g.current,
                                            scrollTop: e,
                                            isMobile: T,
                                        }),
                                    );
                        };
                        T ? i(window.scrollY) : o && i(o.scrollTop);
                    }, [_, s, T, m, h, g, o]);
                    (0, i.useEffect)(() => {
                        T ? 0 === window.scrollY && w(!1) : (o && 0 !== o.scrollTop) || w(!1);
                    }, [o, null == o ? void 0 : o.scrollTop, T]);
                    let O = (0, i.useMemo)(() => (T ? { onScroll: (0, l.A)(A, 200) } : { onScroll: (0, l.A)(A, 200), elementRef: o }), [A, o, T]);
                    (0, a.L)(O);
                    let z = (0, i.useMemo)(
                        () => ({
                            title: p,
                            setTitle: x,
                            titleElement: h,
                            scrollElement: T ? null : o,
                            setTitleElement: f,
                            childElement: g,
                            setChildElement: v,
                            child: j,
                            setChild: C,
                            isScrolledChild: N,
                            isScrolledTitle: b,
                            isScrolling: M,
                            isHeaderHidden: S,
                        }),
                        [p, b, h, o, M, T, j, g, N, S],
                    );
                    return (0, r.jsx)(d.B9.Provider, { value: z, children: t });
                }),
                m = (e) => {
                    let { children: t, child: o, className: n } = e,
                        { setChildElement: l, setChild: s } = (0, i.useContext)(d.B9),
                        a = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == a ? void 0 : a.current) && l(a), o && s(o);
                        }, [a, o, l, s]),
                        (0, i.useEffect)(
                            () => () => {
                                s(null);
                            },
                            [s],
                        ),
                        (0, r.jsx)('div', { ref: a, className: n, children: t })
                    );
                },
                p = (e) => {
                    let { children: t, title: o, className: n } = e,
                        { setTitleElement: l, setTitle: s } = (0, i.useContext)(d.B9),
                        a = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == a ? void 0 : a.current) && l(a), o && s(o);
                        }, [a, o, l, s]),
                        (0, i.useEffect)(
                            () => () => {
                                s('');
                            },
                            [s],
                        ),
                        (0, r.jsx)('div', { ref: a, className: n, children: t })
                    );
                };
        },
        71154: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
            };
        },
        76469: (e, t, o) => {
            'use strict';
            o.d(t, { l: () => c });
            var i,
                n = o(66268),
                r = {
                    5881: (e, t, o) => {
                        function i() {
                            for (var e, t, o = 0, i = ''; o < arguments.length; )
                                (e = arguments[o++]) &&
                                    (t = (function e(t) {
                                        var o,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (o = 0; o < t.length; o++) t[o] && (i = e(t[o])) && (n && (n += ' '), (n += i));
                                            else for (o in t) t[o] && (n && (n += ' '), (n += o));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        o.r(t), o.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    1920: (e, t, o) => {
                        o.r(t), o.d(t, { default: () => i });
                        let i = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    5682: (e, t, o) => {
                        o.r(t), o.d(t, { default: () => i });
                        let i = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    7327: (e, t) => {
                        var o = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return {
                                $$typeof: o,
                                type: e,
                                key: n,
                                ref: void 0 !== (t = i.ref) ? t : null,
                                props: i,
                            };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    1082: (e, t, o) => {
                        e.exports = o(7327);
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, o) {
                                let i = null != o ? o : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    l = r / 2,
                                    s = i.getBoundingClientRect(),
                                    a = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(a - l, 'px')),
                                    (n.style.top = ''.concat(c - l, 'px')),
                                    n.classList.add(t);
                                let d = i.getElementsByClassName(t)[0];
                                d && d.remove(), i.insertBefore(n, i.firstChild);
                            });
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    8216: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getElementFromRefOrElement = t.createRipple = void 0);
                        var i = o(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = o(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (e, t, o) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let n = o(1082),
                            r = o(810),
                            l = o(5881),
                            s = o(8216),
                            a = i(o(1920)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: o,
                                        iconPosition: i = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: p,
                                        role: x,
                                        onClick: h,
                                        radius: f = 'm',
                                        size: g,
                                        type: v = 'button',
                                        variant: j = 'default',
                                        withRipple: C = !0,
                                        withHover: b = !0,
                                        withBorder: y = !1,
                                        disabled: N,
                                        iconClassName: k,
                                        contentContainerClassName: M,
                                        ...w
                                    } = e,
                                    S = (0, r.useId)(),
                                    E = !r.Children.toArray(c).filter(Boolean).length,
                                    T = 'left' === i,
                                    A = null,
                                    O = (0, r.isValidElement)(p);
                                if (m) {
                                    var z, L;
                                    A = (0, r.cloneElement)(m, {
                                        className: (0, l.clsx)(
                                            a.default.icon,
                                            {
                                                [a.default['icon_position_'.concat(i)]]: i && !E,
                                                [a.default.icon_withButtonSize]: !(null == (z = m.props) ? void 0 : z.size),
                                            },
                                            null == (L = m.props) ? void 0 : L.className,
                                            k,
                                        ),
                                        key: S,
                                    });
                                }
                                let P = (0, r.useMemo)(
                                        () =>
                                            O
                                                ? (0, n.jsx)('div', {
                                                      className: a.default.spinnerContainer,
                                                      children: p,
                                                  })
                                                : null,
                                        [O, p],
                                    ),
                                    R = (0, r.useCallback)(
                                        (e) => {
                                            O || (C && (0, s.createRipple)(e, a.default.ripple), null == h || h(e));
                                        },
                                        [O, h, C],
                                    );
                                return (0, n.jsx)('button', {
                                    ref: t,
                                    className: (0, l.clsx)(
                                        a.default.root,
                                        a.default['root_'.concat(u, '_').concat(j)],
                                        a.default['root_radius_'.concat(f)],
                                        a.default.root_size,
                                        {
                                            [a.default['root_'.concat(u, '_withHover_').concat(j)]]: b && !N && !O,
                                            [a.default['root_size_'.concat(g)]]: g,
                                            [a.default.root_withoutBorder]: !y,
                                            [a.default.root_withActiveSpinner]: O,
                                            [a.default.block]: o,
                                            [a.default.flexIcon]: _,
                                            [a.default.iconOnly]: E,
                                            [a.default.root_icon_left]: m && !E && T,
                                            [a.default.root_icon_right]: m && !E && !T,
                                        },
                                        d,
                                    ),
                                    type: v,
                                    role: x,
                                    onClick: R,
                                    ...w,
                                    disabled: N,
                                    'aria-live': O ? 'polite' : 'off',
                                    'aria-busy': O,
                                    children:
                                        m || O
                                            ? (0, n.jsxs)('span', {
                                                  className: (0, l.clsx)(
                                                      a.default.contentContainer,
                                                      {
                                                          [a.default.contentContainer_block]: o,
                                                      },
                                                      M,
                                                  ),
                                                  children: [m && T && A, !E && c, m && !T && A, P],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, r.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, o) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var i = o(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return i.Button;
                            },
                        });
                    },
                    7459: function (e, t, o) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0);
                        let n = o(1082),
                            r = o(5881),
                            l = o(810),
                            s = o(5928),
                            a = i(o(5682)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, n.jsx)('div', {
                                    className: (0, r.clsx)(a.default.icon, {
                                        [a.default.icon_checked]: t,
                                    }),
                                });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: o = !1, onChange: i, 'aria-label': d, 'aria-describedby': u, ..._ } = e,
                                [m, p] = (0, l.useState)(o),
                                x = (0, l.useCallback)(() => {
                                    let e = !m;
                                    p(e), null == i || i(e);
                                }, [m, i]);
                            return (
                                (0, l.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, n.jsx)(s.Button, {
                                    className: (0, r.clsx)(a.default.root, { [a.default.root_checked]: m }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, n.jsx)(c, { isChecked: m }),
                                    withRipple: !1,
                                    onClick: x,
                                    role: 'switch',
                                    'aria-checked': m,
                                    'aria-label': d,
                                    'aria-describedby': u,
                                    ..._,
                                    color: m ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    810: (e) => {
                        e.exports = i || (i = o.t(n, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var o = (l[e] = { exports: {} });
                return r[e].call(o.exports, o, o.exports, s), o.exports;
            }
            (s.d = (e, t) => {
                for (var o in t)
                    s.o(t, o) &&
                        !s.o(e, o) &&
                        Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: t[o],
                        });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: 'Module',
                        }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var a = {};
            (() => {
                Object.defineProperty(a, 'X', { value: !0 }), (a.Z = void 0);
                var e = s(7459);
                Object.defineProperty(a, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var c = a.Z;
            a.X;
        },
        88652: (e) => {
            e.exports = {
                root: 'AboutAppModal_root__yBvgU',
                modalHeader: 'AboutAppModal_modalHeader__q1NPj',
                modalContent: 'AboutAppModal_modalContent__SHO_X',
                list: 'AboutAppModal_list__HfB82',
                link: 'AboutAppModal_link__i3P3P',
                explicitText: 'AboutAppModal_explicitText__29HUD',
                companyText: 'AboutAppModal_companyText__yroW0',
                versionText: 'AboutAppModal_versionText__iFb8L',
            };
        },
        89468: (e) => {
            e.exports = {
                root: 'Settings_root__FVVrn',
                item: 'Settings_item__Ksa9h',
            };
        },
        98284: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 21348));
        },
    },
    (e) => {
        e.O(0, [7098, 8282, 9712, 5271, 5691, 1311, 7764, 6706, 996, 4236, 9169, 8740, 9615, 7747, 7111, 3761, 9902, 5598, 7358], () => e((e.s = 98284))), (_N_E = e.O());
    },
]);
