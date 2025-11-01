"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6659],
    {
        12580: (e, t, i) => {
            i.d(t, { _: () => s });
            var n = i(49913),
                r = i(70314),
                a = i(8558),
                o = (function (e) {
                    return (
                        (e.WEB = "YandexMusicWebNext"),
                        (e.DESKTOP = "YandexMusicDesktopApp"),
                        e
                    );
                })({});
            let s = () => {
                {
                    let e,
                        t = (0, a.H)() || "1.0.0";
                    return (
                        (e = "".concat(o.DESKTOP).concat((0, r.t)((0, n.u)()))),
                        "".concat(e, "/").concat(t)
                    );
                }
            };
        },
        25601: (e, t, i) => {
            i.d(t, {
                bq: () => u,
                O5: () => l,
                p$: () => n,
                Jd: () => G,
                yi: () => d,
                oh: () => v,
                $P: () => h,
                ot: () => p,
                F4: () => _,
                y0: () => M,
                fD: () => y,
            }),
                ((n || (n = {})).UPDATED = "UPDATED");
            var n,
                r,
                a,
                o,
                s,
                c,
                l = 1,
                u = {
                    UNSPECIFIED: "UNSPECIFIED",
                    WEB: "WEB",
                    ANDROID: "ANDROID",
                    IOS: "IOS",
                    SMART_SPEAKER: "SMART_SPEAKER",
                    WEB_TV: "WEB_TV",
                    ANDROID_TV: "ANDROID_TV",
                    APPLE_TV: "APPLE_TV",
                    ANDROID_WEAR: "ANDROID_WEAR",
                    WEB_DESKTOP: "WEB_DESKTOP",
                },
                p = {
                    UNSPECIFIED: "UNSPECIFIED",
                    NONE: "NONE",
                    ONE: "ONE",
                    ALL: "ALL",
                },
                f = {
                    DO_NOT_INTERCEPT_BY_DEFAULT: "DO_NOT_INTERCEPT_BY_DEFAULT",
                    INTERCEPT_EAGER: "INTERCEPT_EAGER",
                },
                d = {
                    UNSPECIFIED: "UNSPECIFIED",
                    TRACK: "TRACK",
                    LOCAL_TRACK: "LOCAL_TRACK",
                    INFINITE: "INFINITE",
                    VIDEO_CLIP: "VIDEO_CLIP",
                },
                v = {
                    BASED_ON_ENTITY_BY_DEFAULT: "BASED_ON_ENTITY_BY_DEFAULT",
                    USER_TRACKS: "USER_TRACKS",
                    DOWNLOADED_TRACKS: "DOWNLOADED_TRACKS",
                    SEARCH: "SEARCH",
                    MUSIC_HISTORY: "MUSIC_HISTORY",
                    MUSIC_HISTORY_SEARCH: "MUSIC_HISTORY_SEARCH",
                    ARTIST_MY_COLLECTION: "ARTIST_MY_COLLECTION",
                    ARTIST_FAMILIAR_FROM_WAVE: "ARTIST_FAMILIAR_FROM_WAVE",
                },
                h = {
                    UNSPECIFIED: "UNSPECIFIED",
                    ARTIST: "ARTIST",
                    PLAYLIST: "PLAYLIST",
                    ALBUM: "ALBUM",
                    RADIO: "RADIO",
                    VARIOUS: "VARIOUS",
                    GENERATIVE: "GENERATIVE",
                    FM_RADIO: "FM_RADIO",
                    VIDEO_WAVE: "VIDEO_WAVE",
                    LOCAL_TRACKS: "LOCAL_TRACKS",
                },
                y = function (e, t) {
                    return {
                        device_id: e,
                        version:
                            Math.floor(0x8000000000000000 * Math.random()) + 0,
                        timestamp_ms: void 0 !== t ? t : Date.now(),
                    };
                };
            function b(e) {
                var t = y(e, 0);
                return {
                    player_state: {
                        player_queue: {
                            current_playable_index: -1,
                            entity_id: "",
                            entity_type: h.VARIOUS,
                            playable_list: [],
                            options: { repeat_mode: p.NONE },
                            shuffle_optional: null,
                            entity_context: v.BASED_ON_ENTITY_BY_DEFAULT,
                            version: t,
                            from_optional: "",
                            initial_entity_optional: null,
                            adding_options_optional: null,
                            queue: null,
                        },
                        status: {
                            duration_ms: 0,
                            paused: !0,
                            playback_speed: 1,
                            progress_ms: 0,
                            version: t,
                        },
                        player_queue_inject_optional: null,
                    },
                    devices: [],
                    active_device_id_optional: "",
                };
            }
            var _ = function (e, t) {
                return Number((Math.round(e * t) / t).toFixed(4));
            };
            function m(e) {
                return JSON.parse(JSON.stringify(e));
            }
            function g(e, t, i) {
                return (
                    void 0 === e && (e = !1),
                    !!e ||
                        !t ||
                        !i ||
                        Number(t.timestamp_ms) < Number(i.timestamp_ms)
                );
            }
            var C = function () {
                    return (C =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var r in (t = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        r,
                                    ) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                O = (function () {
                    function e(e) {
                        Object.defineProperty(this, "state", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                            Object.defineProperty(this, "prevState", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(this, "diff", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: {},
                            }),
                            Object.defineProperty(this, "options", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(this, "diffCalculators", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(
                                this,
                                "lastRemoteDeviceChangingState",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                },
                            ),
                            Object.defineProperty(
                                this,
                                "lastRemoteDeviceChangingStateTS",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: 0,
                                },
                            ),
                            Object.defineProperty(this, "listenersMap", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            (this.options = e),
                            (this.state = b(e.deviceConfig.info.device_id)),
                            (this.prevState = b(e.deviceConfig.info.device_id)),
                            (this.diffCalculators = {
                                active_device_id_optional:
                                    this.calculateActiveDeviceDiff.bind(this),
                                devices: this.calculateDevicesDiff.bind(this),
                                player_state: {
                                    player_queue: {
                                        entity_id:
                                            this.calculateEntityIdDiff.bind(
                                                this,
                                            ),
                                        entity_type:
                                            this.calculateEntityTypeDiff.bind(
                                                this,
                                            ),
                                        entity_context: function () {},
                                        current_playable_index:
                                            this.calculateCurrentPlayableIndexDiff.bind(
                                                this,
                                            ),
                                        playable_list:
                                            this.calculatePlayableListDiff.bind(
                                                this,
                                            ),
                                        options: {
                                            repeat_mode:
                                                this.calculateRepeatDiff.bind(
                                                    this,
                                                ),
                                        },
                                        version: function () {},
                                        shuffle_optional:
                                            this.calculateShuffleDiff.bind(
                                                this,
                                            ),
                                        from_optional: function () {},
                                        initial_entity_optional: function () {},
                                        adding_options_optional: function () {},
                                        queue: function () {},
                                    },
                                    status: {
                                        progress_ms:
                                            this.calculateProgressMsDiff.bind(
                                                this,
                                            ),
                                        duration_ms: function () {},
                                        paused: this.calculatePausedDiff.bind(
                                            this,
                                        ),
                                        playback_speed:
                                            this.calculateSpeedDiff.bind(this),
                                        version: function () {},
                                    },
                                    player_queue_inject_optional:
                                        function () {},
                                },
                            }),
                            (this.listenersMap = new Map());
                    }
                    return (
                        Object.defineProperty(e.prototype, "on", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, i) {
                                var n = this,
                                    r = this.listenersMap.get(e);
                                return (
                                    r
                                        ? r.push({ callback: t, trigger: i })
                                        : this.listenersMap.set(e, [
                                              { callback: t, trigger: i },
                                          ]),
                                    function () {
                                        return n.off(e, t);
                                    }
                                );
                            },
                        }),
                        Object.defineProperty(e.prototype, "off", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var i = this.listenersMap.get(e);
                                i &&
                                    this.listenersMap.set(
                                        e,
                                        i.filter(function (e) {
                                            return e.callback !== t;
                                        }),
                                    );
                            },
                        }),
                        Object.defineProperty(e.prototype, "emit", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, i) {
                                var n = this.listenersMap.get(e);
                                null == n ||
                                    n.forEach(function (e) {
                                        e.trigger !== i && e.callback(t);
                                    });
                            },
                        }),
                        Object.defineProperty(e.prototype, "currentState", {
                            get: function () {
                                return m(this.state);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "fullState", {
                            get: function () {
                                return m({
                                    state: this.state,
                                    prevState: this.prevState,
                                    diff: this.diff,
                                });
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "updateState", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this,
                                    i = [this.diffCalculators];
                                this.diff = {};
                                try {
                                    for (
                                        var r = e.isSetNewState;
                                        i.length > 0;

                                    )
                                        for (
                                            var a = i.pop(),
                                                o = 0,
                                                s = Object.keys(a);
                                            o < s.length;
                                            o++
                                        ) {
                                            var c = a[s[o]];
                                            "function" == typeof c
                                                ? c(e)
                                                : i.push(c);
                                        }
                                    var l = Object.keys(this.diff);
                                    if ((void 0 === r || r) && l.length) {
                                        var u = m(this.state);
                                        l.forEach(function (i) {
                                            (i in e.newState || i in t.state) &&
                                                (u[i] = e.newState[i]);
                                        }),
                                            (this.prevState = m(this.state)),
                                            (this.state = u);
                                    }
                                    var p = C(C({}, this.fullState), {
                                        options: e,
                                    });
                                    this.emit(n.UPDATED, p, e.trigger);
                                } catch (e) {
                                    return;
                                }
                            },
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "calculateActiveDeviceDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                        e.newState.active_device_id_optional;
                                    t !==
                                        this.state.active_device_id_optional &&
                                        (this.diff.active_device_id_optional =
                                            t);
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateDevicesDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = this,
                                        i = e.newState,
                                        n = e.skipVersionCompare,
                                        r = this.state.devices.find(
                                            function (e) {
                                                var i;
                                                return (
                                                    (null == (i = e.info)
                                                        ? void 0
                                                        : i.device_id) ===
                                                    t.options.deviceConfig.info
                                                        .device_id
                                                );
                                            },
                                        ),
                                        a = i.devices.find(function (e) {
                                            var i;
                                            return (
                                                (null == (i = e.info)
                                                    ? void 0
                                                    : i.device_id) ===
                                                t.options.deviceConfig.info
                                                    .device_id
                                            );
                                        }),
                                        o = (function (e, t, i) {
                                            if (!t || !i)
                                                return {
                                                    isVolumeChanged: !1,
                                                    isNewVersion: !1,
                                                };
                                            var n = t.volume_info,
                                                r = i.volume_info,
                                                a = g(e, n.version, r.version);
                                            return {
                                                isVolumeChanged:
                                                    _(
                                                        n.volume,
                                                        t.capabilities
                                                            .volume_granularity,
                                                    ) !==
                                                    _(
                                                        r.volume,
                                                        i.capabilities
                                                            .volume_granularity,
                                                    ),
                                                isNewVersion: a,
                                            };
                                        })(void 0 !== n && n, r, a),
                                        s = o.isVolumeChanged,
                                        c = o.isNewVersion;
                                    s &&
                                        c &&
                                        a &&
                                        (this.diff.deviceVolume =
                                            a.volume_info);
                                    var l = (function (e, t) {
                                        var i = {
                                            isAnyoneConnectionChanged: !1,
                                        };
                                        if (e.length < t.length)
                                            for (
                                                var n = function (t) {
                                                        e.find(function (e) {
                                                            return (
                                                                e.info
                                                                    .device_id ===
                                                                t.info.device_id
                                                            );
                                                        }) ||
                                                            (i = {
                                                                isAnyoneConnectionChanged:
                                                                    !0,
                                                                changedConnectionStatusDevice:
                                                                    t,
                                                            });
                                                    },
                                                    r = 0;
                                                r < t.length;
                                                r++
                                            ) {
                                                var a = t[r];
                                                n(a);
                                            }
                                        else if (e.length === t.length)
                                            for (
                                                var o = function (t) {
                                                        var n = e.find(
                                                            function (e) {
                                                                return (
                                                                    e.info
                                                                        .device_id ===
                                                                    t.info
                                                                        .device_id
                                                                );
                                                            },
                                                        );
                                                        n &&
                                                            n.is_offline !==
                                                                t.is_offline &&
                                                            (i = {
                                                                isAnyoneConnectionChanged:
                                                                    !0,
                                                                changedConnectionStatusDevice:
                                                                    t,
                                                            });
                                                    },
                                                    s = 0;
                                                s < t.length;
                                                s++
                                            ) {
                                                var a = t[s];
                                                o(a);
                                            }
                                        return i;
                                    })(
                                        this.state.devices,
                                        i.devices,
                                    ).isAnyoneConnectionChanged;
                                    ((s && c) || l) &&
                                        (this.diff.devices = i.devices);
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateEntityIdDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.newState.player_state
                                                .player_queue,
                                        i = e.skipVersionCompare,
                                        n = t.entity_id,
                                        r = t.version,
                                        a =
                                            this.state.player_state
                                                .player_queue,
                                        o = a.entity_id;
                                    g(void 0 !== i && i, a.version, r) &&
                                        o !== n &&
                                        (this.initPlayerState(!0, !1),
                                        this.diff.player_state &&
                                            this.diff.player_state
                                                .player_queue &&
                                            (this.diff.player_state.player_queue.entity_id =
                                                n));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateEntityTypeDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.newState.player_state
                                                .player_queue,
                                        i = t.entity_type,
                                        n = t.version,
                                        r = e.skipVersionCompare,
                                        a =
                                            this.state.player_state
                                                .player_queue,
                                        o = a.entity_type;
                                    g(void 0 !== r && r, a.version, n) &&
                                        o !== i &&
                                        (this.initPlayerState(!0, !1),
                                        this.diff.player_state &&
                                            this.diff.player_state
                                                .player_queue &&
                                            (this.diff.player_state.player_queue.entity_type =
                                                i));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateCurrentPlayableIndexDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.newState.player_state
                                                .player_queue,
                                        i = e.skipVersionCompare,
                                        n = t.entity_id,
                                        r = t.current_playable_index,
                                        a = t.version,
                                        o =
                                            this.state.player_state
                                                .player_queue,
                                        s = o.entity_id,
                                        c = o.current_playable_index;
                                    g(void 0 !== i && i, o.version, a) &&
                                        s === n &&
                                        c !== r &&
                                        (this.initPlayerState(!0, !1),
                                        this.diff.player_state &&
                                            this.diff.player_state
                                                .player_queue &&
                                            (this.diff.player_state.player_queue.current_playable_index =
                                                r));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculatePlayableListDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.newState.player_state
                                                .player_queue,
                                        i = e.skipVersionCompare,
                                        n = t.playable_list,
                                        r = t.version,
                                        a =
                                            this.state.player_state
                                                .player_queue,
                                        o = a.playable_list,
                                        s = g(void 0 !== i && i, a.version, r),
                                        c = (function (e, t) {
                                            var i, n;
                                            if (e.length === t.length) {
                                                for (
                                                    var r = e.length, a = 0;
                                                    a < r;
                                                    a++
                                                )
                                                    if (
                                                        t[a] &&
                                                        (null == (i = e[a])
                                                            ? void 0
                                                            : i.playable_id) !==
                                                            (null == (n = t[a])
                                                                ? void 0
                                                                : n.playable_id)
                                                    )
                                                        return !1;
                                                return !0;
                                            }
                                            return !1;
                                        })(o, n);
                                    s &&
                                        !c &&
                                        (this.initPlayerState(!0, !1),
                                        this.diff.player_state &&
                                            this.diff.player_state
                                                .player_queue &&
                                            (this.diff.player_state.player_queue.playable_list =
                                                n));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateShuffleDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.newState.player_state
                                                .player_queue,
                                        i = t.shuffle_optional,
                                        n = t.version,
                                        r = e.skipVersionCompare,
                                        a =
                                            this.state.player_state
                                                .player_queue,
                                        o = a.shuffle_optional,
                                        s = g(void 0 !== r && r, a.version, n),
                                        c = (function (e, t) {
                                            if (!e && !t) return !0;
                                            if (
                                                e &&
                                                t &&
                                                e.playable_indices.length ===
                                                    t.playable_indices.length
                                            ) {
                                                for (
                                                    var i = !0, n = 0;
                                                    n <=
                                                    e.playable_indices.length;
                                                    n++
                                                )
                                                    if (
                                                        e.playable_indices[
                                                            n
                                                        ] !==
                                                        t.playable_indices[n]
                                                    ) {
                                                        i = !1;
                                                        break;
                                                    }
                                                return i;
                                            }
                                            return !1;
                                        })(o, i);
                                    s &&
                                        !c &&
                                        (this.initPlayerState(!0, !1),
                                        this.diff.player_state &&
                                            this.diff.player_state
                                                .player_queue &&
                                            (i
                                                ? (this.diff.player_state.player_queue.shuffle_optional =
                                                      i)
                                                : (this.diff.player_state.player_queue.shuffle_optional =
                                                      {
                                                          playable_indices: [],
                                                      })));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateRepeatDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.newState.player_state
                                                .player_queue,
                                        i = t.options,
                                        n = t.version,
                                        r = e.skipVersionCompare,
                                        a = i.repeat_mode,
                                        o =
                                            this.state.player_state
                                                .player_queue,
                                        s = o.options,
                                        c = o.version,
                                        l = s.repeat_mode;
                                    g(void 0 !== r && r, c, n) &&
                                        l !== a &&
                                        (this.initPlayerState(!0, !1),
                                        this.diff.player_state &&
                                            this.diff.player_state
                                                .player_queue &&
                                            (this.diff.player_state.player_queue.options =
                                                i));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateProgressMsDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t,
                                        i,
                                        n = e.newState.player_state.status,
                                        r = e.skipVersionCompare,
                                        a = n.progress_ms,
                                        o = n.version,
                                        s = this.state.player_state.status,
                                        c = s.progress_ms,
                                        u = g(void 0 !== r && r, s.version, o),
                                        p =
                                            (t = Number(a)) !==
                                                (i = Number(c)) &&
                                            (i < 1500 || Math.abs(t - i) > l);
                                    u &&
                                        p &&
                                        (this.initPlayerState(!1, !0),
                                        this.diff.player_state &&
                                            this.diff.player_state.status &&
                                            (this.diff.player_state.status.progress_ms =
                                                a));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculateSpeedDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = e.newState.player_state.status,
                                        i = t.playback_speed,
                                        n = t.version,
                                        r = e.skipVersionCompare,
                                        a = this.state.player_state.status,
                                        o = a.playback_speed;
                                    g(void 0 !== r && r, a.version, n) &&
                                        o !== i &&
                                        (this.initPlayerState(!1, !0),
                                        this.diff.player_state &&
                                            this.diff.player_state.status &&
                                            (this.diff.player_state.status.playback_speed =
                                                i));
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "calculatePausedDiff",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = e.newState.player_state.status,
                                        i = e.skipVersionCompare,
                                        n = t.paused,
                                        r = t.version,
                                        a = this.state.player_state.status,
                                        o = a.paused;
                                    g(void 0 !== i && i, a.version, r) &&
                                        o !== n &&
                                        (this.initPlayerState(!1, !0),
                                        this.diff.player_state &&
                                            this.diff.player_state.status &&
                                            (this.diff.player_state.status.paused =
                                                n));
                                },
                            },
                        ),
                        Object.defineProperty(e.prototype, "initPlayerState", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this.diff.player_state ||
                                    (this.diff.player_state = {}),
                                    e &&
                                        !this.diff.player_state.player_queue &&
                                        (this.diff.player_state.player_queue =
                                            {}),
                                    t &&
                                        !this.diff.player_state.status &&
                                        (this.diff.player_state.status = {});
                            },
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "updateLastRemoteDeviceChangingState",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t,
                                        i = e.player_state,
                                        n = i.player_queue.version,
                                        r = i.status.version,
                                        a = e.devices,
                                        o = e.active_device_id_optional,
                                        s =
                                            this.options.deviceConfig.info
                                                .device_id,
                                        c = [n, r],
                                        l = a.find(function (e) {
                                            return e.info.device_id === o;
                                        });
                                    void 0 !== l &&
                                        c.push(l.volume_info.version);
                                    var u = c
                                        .filter(function (e) {
                                            return (
                                                0 !==
                                                Number(
                                                    null == e
                                                        ? void 0
                                                        : e.timestamp_ms,
                                                )
                                            );
                                        })
                                        .filter(function (e) {
                                            return (
                                                a.find(function (t) {
                                                    return (
                                                        t.info.device_id ===
                                                        (null == e
                                                            ? void 0
                                                            : e.device_id)
                                                    );
                                                }) &&
                                                (null == e
                                                    ? void 0
                                                    : e.device_id) !== s
                                            );
                                        });
                                    if (u.length > 0) {
                                        var p = u.sort(function (e, t) {
                                                return (
                                                    Number(
                                                        null == t
                                                            ? void 0
                                                            : t.timestamp_ms,
                                                    ) -
                                                    Number(
                                                        null == e
                                                            ? void 0
                                                            : e.timestamp_ms,
                                                    )
                                                );
                                            })[0],
                                            f = a.find(function (e) {
                                                return (
                                                    e.info.device_id ===
                                                    (null == p
                                                        ? void 0
                                                        : p.device_id)
                                                );
                                            });
                                        this.lastRemoteDeviceChangingState &&
                                            f &&
                                            this.lastRemoteDeviceChangingState
                                                .info.device_id ===
                                                f.info.device_id &&
                                            !this.lastRemoteDeviceChangingState
                                                .is_offline &&
                                            f.is_offline &&
                                            (this.lastRemoteDeviceChangingState =
                                                m(f)),
                                            ((void 0 ===
                                                this
                                                    .lastRemoteDeviceChangingState &&
                                                f) ||
                                                (this
                                                    .lastRemoteDeviceChangingState &&
                                                    f &&
                                                    this
                                                        .lastRemoteDeviceChangingState
                                                        .info.device_id !==
                                                        f.info.device_id) ||
                                                (this
                                                    .lastRemoteDeviceChangingState &&
                                                    f &&
                                                    this
                                                        .lastRemoteDeviceChangingState
                                                        .info.device_id ===
                                                        f.info.device_id &&
                                                    this
                                                        .lastRemoteDeviceChangingState
                                                        .is_offline &&
                                                    !f.is_offline &&
                                                    !this.diff.devices)) &&
                                                p &&
                                                ((this.lastRemoteDeviceChangingState =
                                                    m(f)),
                                                (this.lastRemoteDeviceChangingStateTS =
                                                    Number(p.timestamp_ms)),
                                                (t = {
                                                    device: m(f),
                                                    timestampMs: Number(
                                                        p.timestamp_ms,
                                                    ),
                                                }));
                                    }
                                    return t;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "getLastRemoteDeviceChangingState",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    return {
                                        device: this
                                            .lastRemoteDeviceChangingState,
                                        timestampMs:
                                            this
                                                .lastRemoteDeviceChangingStateTS,
                                    };
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "getOnlineRemoteDevices",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    var e = this.state,
                                        t = e.devices,
                                        i = e.active_device_id_optional;
                                    return t.filter(function (e) {
                                        var t = [
                                            u.ANDROID,
                                            u.IOS,
                                            u.WEB,
                                        ].includes(e.info.type);
                                        return (
                                            !e.is_offline &&
                                            e.info.device_id !== i &&
                                            t
                                        );
                                    });
                                },
                            },
                        ),
                        e
                    );
                })();
            !(function (e) {
                (e.PRODUCTION = "ynison.music.yandex.ru"),
                    (e.QA = "qa.ynison.music.yandex.ru");
            })(r || (r = {})),
                (function (e) {
                    (e.CONNECTING = "CONNECTING"),
                        (e.CONNECTED = "CONNECTED"),
                        (e.DISCONNECTED = "DISCONNECTED"),
                        (e.WAITING_FOR_RECONNECT = "WAITING_FOR_RECONNECT"),
                        (e.READY_TO_RECONNECT = "READY_TO_RECONNECT");
                })(a || (a = {})),
                (function (e) {
                    (e.RECEIVE_MESSAGE = "RECEIVE_MESSAGE"),
                        (e.REDIRECTOR_ERROR = "REDIRECTOR_ERROR"),
                        (e.HUB_ERROR = "HUB_ERROR");
                })(o || (o = {}));
            var S = i(84511);
            !(function (e) {
                (e.ynisonBackoffMillis = "ynison-backoff-millis"),
                    (e.ynisonErrorCode = "ynison-error-code"),
                    (e.ynisonGoAwayForSeconds = "ynison-go-away-for-seconds");
            })(s || (s = {}));
            var E = i(41660),
                P = (function () {
                    var e = function (t, i) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var i in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        i,
                                    ) && (e[i] = t[i]);
                            })(t, i);
                    };
                    return function (t, i) {
                        if ("function" != typeof i && null !== i)
                            throw TypeError(
                                "Class extends value " +
                                    String(i) +
                                    " is not a constructor or null",
                            );
                        function n() {
                            this.constructor = t;
                        }
                        e(t, i),
                            (t.prototype =
                                null === i
                                    ? Object.create(i)
                                    : ((n.prototype = i.prototype), new n()));
                    };
                })(),
                R = function () {
                    return (R =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var r in (t = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        r,
                                    ) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                w = function (e, t) {
                    var i = {};
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                            0 > t.indexOf(n) &&
                            (i[n] = e[n]);
                    if (
                        null != e &&
                        "function" == typeof Object.getOwnPropertySymbols
                    )
                        for (
                            var r = 0, n = Object.getOwnPropertySymbols(e);
                            r < n.length;
                            r++
                        )
                            0 > t.indexOf(n[r]) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n[r],
                                ) &&
                                (i[n[r]] = e[n[r]]);
                    return i;
                },
                D = (function (e) {
                    function t(i, n) {
                        void 0 === n && (n = {});
                        var r = this,
                            a = n.code,
                            o = w(n, ["code"]);
                        return (
                            Object.defineProperty(
                                (r =
                                    e.call(
                                        this,
                                        i,
                                        R(
                                            {
                                                code:
                                                    void 0 === a
                                                        ? "E_HUB_EXCEPTION"
                                                        : a,
                                            },
                                            o,
                                        ),
                                    ) || this),
                                "name",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: "HubException",
                                },
                            ),
                            Object.setPrototypeOf(r, t.prototype),
                            r
                        );
                    }
                    return P(t, e), t;
                })(E.t),
                I = i(7966),
                A = function (e) {
                    Object.defineProperty(this, "redirectorResponse", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0,
                    }),
                        Object.defineProperty(this, "connectionState", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                        (this.redirectorResponse = new I.cJ(
                            e.redirectorResponse,
                        )),
                        (this.connectionState = new I.cJ(e.connectionState));
                },
                T = (function () {
                    var e = function (t, i) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var i in t)
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        i,
                                    ) && (e[i] = t[i]);
                            })(t, i);
                    };
                    return function (t, i) {
                        if ("function" != typeof i && null !== i)
                            throw TypeError(
                                "Class extends value " +
                                    String(i) +
                                    " is not a constructor or null",
                            );
                        function n() {
                            this.constructor = t;
                        }
                        e(t, i),
                            (t.prototype =
                                null === i
                                    ? Object.create(i)
                                    : ((n.prototype = i.prototype), new n()));
                    };
                })(),
                N = function () {
                    return (N =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var r in (t = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        r,
                                    ) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                j = function (e, t) {
                    var i = {};
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                            0 > t.indexOf(n) &&
                            (i[n] = e[n]);
                    if (
                        null != e &&
                        "function" == typeof Object.getOwnPropertySymbols
                    )
                        for (
                            var r = 0, n = Object.getOwnPropertySymbols(e);
                            r < n.length;
                            r++
                        )
                            0 > t.indexOf(n[r]) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n[r],
                                ) &&
                                (i[n[r]] = e[n[r]]);
                    return i;
                },
                k = (function (e) {
                    function t(i, n) {
                        void 0 === n && (n = {});
                        var r = this,
                            a = n.code,
                            o = j(n, ["code"]);
                        return (
                            Object.defineProperty(
                                (r =
                                    e.call(
                                        this,
                                        i,
                                        N(
                                            {
                                                code:
                                                    void 0 === a
                                                        ? "E_REDIRECTOR_EXCEPTION"
                                                        : a,
                                            },
                                            o,
                                        ),
                                    ) || this),
                                "name",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: "RedirectorException",
                                },
                            ),
                            Object.setPrototypeOf(r, t.prototype),
                            r
                        );
                    }
                    return T(t, e), t;
                })(E.t);
            function U(e) {
                var t;
                switch (e) {
                    case u.WEB:
                        t = 1;
                        break;
                    case u.WEB_TV:
                        t = 5;
                        break;
                    default:
                        t = 1;
                }
                return t;
            }
            function M(e) {
                return e instanceof Error
                    ? {
                          name: e.name,
                          message: e.message,
                          stack: e.stack,
                          cause: e.cause,
                      }
                    : { data: e };
            }
            !(function (e) {
                (e.ynisonDeviceId = "Ynison-Device-Id"),
                    (e.ynisonRedirectTicket = "Ynison-Redirect-Ticket"),
                    (e.ynisonSessionId = "Ynison-Session-Id"),
                    (e.ynisonDeviceInfo = "Ynison-Device-Info"),
                    (e.multiAuthUserId = "X-Yandex-Music-Multi-Auth-User-Id");
            })(c || (c = {}));
            var L = function (e, t) {
                    var i,
                        n,
                        r,
                        a,
                        o = {
                            label: 0,
                            sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (a = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                            (a[Symbol.iterator] = function () {
                                return this;
                            }),
                        a
                    );
                    function s(s) {
                        return function (c) {
                            var l = [s, c];
                            if (i)
                                throw TypeError(
                                    "Generator is already executing.",
                                );
                            for (; a && ((a = 0), l[0] && (o = 0)), o; )
                                try {
                                    if (
                                        ((i = 1),
                                        n &&
                                            (r =
                                                2 & l[0]
                                                    ? n.return
                                                    : l[0]
                                                      ? n.throw ||
                                                        ((r = n.return) &&
                                                            r.call(n),
                                                        0)
                                                      : n.next) &&
                                            !(r = r.call(n, l[1])).done)
                                    )
                                        return r;
                                    switch (
                                        ((n = 0),
                                        r && (l = [2 & l[0], r.value]),
                                        l[0])
                                    ) {
                                        case 0:
                                        case 1:
                                            r = l;
                                            break;
                                        case 4:
                                            return (
                                                o.label++,
                                                { value: l[1], done: !1 }
                                            );
                                        case 5:
                                            o.label++, (n = l[1]), (l = [0]);
                                            continue;
                                        case 7:
                                            (l = o.ops.pop()), o.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !(r =
                                                    (r = o.trys).length > 0 &&
                                                    r[r.length - 1]) &&
                                                (6 === l[0] || 2 === l[0])
                                            ) {
                                                o = 0;
                                                continue;
                                            }
                                            if (
                                                3 === l[0] &&
                                                (!r ||
                                                    (l[1] > r[0] &&
                                                        l[1] < r[3]))
                                            ) {
                                                o.label = l[1];
                                                break;
                                            }
                                            if (6 === l[0] && o.label < r[1]) {
                                                (o.label = r[1]), (r = l);
                                                break;
                                            }
                                            if (r && o.label < r[2]) {
                                                (o.label = r[2]), o.ops.push(l);
                                                break;
                                            }
                                            r[2] && o.ops.pop(), o.trys.pop();
                                            continue;
                                    }
                                    l = t.call(e, o);
                                } catch (e) {
                                    (l = [6, e]), (n = 0);
                                } finally {
                                    i = r = 0;
                                }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                        };
                    }
                },
                F = (function () {
                    function e(e) {
                        Object.defineProperty(this, "device", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                            Object.defineProperty(this, "connectionConfig", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            (this.device = e.device),
                            (this.connectionConfig = e.connectionConfig);
                    }
                    return (
                        Object.defineProperty(e.prototype, "getHub", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, i, n, r;
                                return (
                                    (t = this),
                                    (i = void 0),
                                    (n = void 0),
                                    (r = function () {
                                        var t = this;
                                        return L(this, function (i) {
                                            return [
                                                2,
                                                new Promise(function (i, n) {
                                                    var r,
                                                        a,
                                                        o,
                                                        s,
                                                        l,
                                                        u,
                                                        p = e.oauth,
                                                        f = e.multiAuthUserId,
                                                        d =
                                                            ((o = (r = t.device)
                                                                .device_id),
                                                            (s = r.app_name),
                                                            (l = r.app_version),
                                                            (u = U(r.type)),
                                                            ((a = {})[
                                                                c.ynisonDeviceId
                                                            ] = o),
                                                            (a[
                                                                c.ynisonDeviceInfo
                                                            ] = JSON.stringify({
                                                                app_name: s,
                                                                app_version: l,
                                                                type: u,
                                                            })),
                                                            a);
                                                    void 0 !== p &&
                                                        (d.authorization =
                                                            "OAuth ".concat(p)),
                                                        void 0 !== f &&
                                                            (d[
                                                                "X-Yandex-Music-Multi-Auth-User-Id"
                                                            ] = String(f));
                                                    var v = new WebSocket(
                                                            Object.values(
                                                                t.connectionConfig,
                                                            ).join(""),
                                                            [
                                                                "Bearer",
                                                                "v2",
                                                                encodeURIComponent(
                                                                    JSON.stringify(
                                                                        d,
                                                                    ),
                                                                ),
                                                            ],
                                                        ),
                                                        h = function (e) {
                                                            try {
                                                                var t =
                                                                    JSON.parse(
                                                                        e.data,
                                                                    );
                                                                "error" in t
                                                                    ? (v.close(),
                                                                      n(
                                                                          new k(
                                                                              "Error message from redirector",
                                                                              {
                                                                                  data: {
                                                                                      redirectorResponse:
                                                                                          t.error,
                                                                                  },
                                                                              },
                                                                          ),
                                                                      ))
                                                                    : (v.close(),
                                                                      i(t));
                                                            } catch (e) {
                                                                new k(
                                                                    "Error while processing message from redirector",
                                                                    {
                                                                        data: {
                                                                            redirectorResponse:
                                                                                {},
                                                                        },
                                                                        cause: M(
                                                                            e,
                                                                        ),
                                                                    },
                                                                );
                                                            }
                                                        },
                                                        y = function () {
                                                            n(
                                                                new k(
                                                                    "Error in connection to redirector",
                                                                    {
                                                                        data: {
                                                                            redirectorResponse:
                                                                                {},
                                                                        },
                                                                    },
                                                                ),
                                                            );
                                                        },
                                                        b = function () {
                                                            v.removeEventListener(
                                                                "message",
                                                                h,
                                                            ),
                                                                v.removeEventListener(
                                                                    "error",
                                                                    y,
                                                                ),
                                                                v.removeEventListener(
                                                                    "close",
                                                                    b,
                                                                );
                                                        };
                                                    v.addEventListener(
                                                        "message",
                                                        h,
                                                    ),
                                                        v.addEventListener(
                                                            "error",
                                                            y,
                                                        ),
                                                        v.addEventListener(
                                                            "close",
                                                            b,
                                                        );
                                                }),
                                            ];
                                        });
                                    }),
                                    new (n || (n = Promise))(function (e, a) {
                                        function o(e) {
                                            try {
                                                c(r.next(e));
                                            } catch (e) {
                                                a(e);
                                            }
                                        }
                                        function s(e) {
                                            try {
                                                c(r.throw(e));
                                            } catch (e) {
                                                a(e);
                                            }
                                        }
                                        function c(t) {
                                            var i;
                                            t.done
                                                ? e(t.value)
                                                : ((i = t.value) instanceof n
                                                      ? i
                                                      : new n(function (e) {
                                                            e(i);
                                                        })
                                                  ).then(o, s);
                                        }
                                        c((r = r.apply(t, i || [])).next());
                                    })
                                );
                            },
                        }),
                        e
                    );
                })(),
                q = i(54960),
                V = function () {
                    return (V =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var r in (t = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        r,
                                    ) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                x = function (e, t) {
                    var i = (0, q.A)(),
                        n = V(V({}, e), { rid: i });
                    if (t) {
                        var r = t.player_action_timestamp_ms,
                            a = void 0 === r ? Date.now() : r,
                            o = t.activity_interception_type,
                            s =
                                void 0 === o
                                    ? f.DO_NOT_INTERCEPT_BY_DEFAULT
                                    : o;
                        (n.player_action_timestamp_ms = a),
                            (n.activity_interception_type = s);
                    } else
                        (n.player_action_timestamp_ms = Date.now()),
                            (n.activity_interception_type =
                                f.DO_NOT_INTERCEPT_BY_DEFAULT);
                    return { request: n, rid: i };
                },
                B = function () {
                    return (B =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var r in (t = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        r,
                                    ) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                Y = (function () {
                    function e(e) {
                        var t = this;
                        Object.defineProperty(this, "connectorConfig", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                            Object.defineProperty(this, "socket", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: null,
                            }),
                            Object.defineProperty(this, "emitter", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: new S.TinyEmitter(),
                            }),
                            Object.defineProperty(this, "redirectorSocket", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(this, "reconnectTimeout", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: null,
                            }),
                            Object.defineProperty(this, "reconnectAttempts", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: 0,
                            }),
                            Object.defineProperty(this, "state", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: new A({
                                    redirectorResponse: null,
                                    connectionState: a.DISCONNECTED,
                                }),
                            }),
                            (this.connectorConfig = e.config),
                            (this.redirectorSocket = new F({
                                device: this.connectorConfig.device,
                                connectionConfig:
                                    this.connectorConfig
                                        .redirectorConnectionConfig,
                            })),
                            this.state.connectionState.onChange(function (e) {
                                e === a.DISCONNECTED &&
                                    t.socket &&
                                    (t.socket.close(), (t.socket = null));
                            });
                    }
                    return (
                        Object.defineProperty(e.prototype, "config", {
                            get: function () {
                                return m(this.connectorConfig);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "updateFullState", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var i = B({}, e);
                                (i.player_state.player_queue.version = y(
                                    this.connectorConfig.device.device_id,
                                    0,
                                )),
                                    (i.player_state.status.version = y(
                                        this.connectorConfig.device.device_id,
                                        0,
                                    ));
                                var n = x(
                                        { update_full_state: i },
                                        B({ player_action_timestamp_ms: 0 }, t),
                                    ),
                                    r = n.request,
                                    a = n.rid;
                                return this.sendRequest(r), a;
                            },
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "updatePlayingStatus",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, t) {
                                    var i = B({}, e);
                                    i.playing_status.version = y(
                                        this.connectorConfig.device.device_id,
                                    );
                                    var n = x({ update_playing_status: i }, t),
                                        r = n.request,
                                        a = n.rid;
                                    return this.sendRequest(r), a;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "updateActiveDevice",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, t) {
                                    var i = x({ update_active_device: e }, t),
                                        n = i.request,
                                        r = i.rid;
                                    return this.sendRequest(n), r;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "updateSessionParams",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, t) {
                                    var i = x({ update_session_params: e }, t),
                                        n = i.request,
                                        r = i.rid;
                                    return this.sendRequest(n), r;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "updatePlayerState",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, t) {
                                    var i = B({}, e);
                                    (i.player_state.player_queue.version = y(
                                        this.connectorConfig.device.device_id,
                                    )),
                                        (i.player_state.status.version = y(
                                            this.connectorConfig.device
                                                .device_id,
                                        ));
                                    var n = x({ update_player_state: i }, t),
                                        r = n.request,
                                        a = n.rid;
                                    return this.sendRequest(r), a;
                                },
                            },
                        ),
                        Object.defineProperty(e.prototype, "updateVolumeInfo", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                var i = B({}, e);
                                i.volume_info.version = y(
                                    this.connectorConfig.device.device_id,
                                );
                                var n = x({ update_volume_info: i }, t),
                                    r = n.request,
                                    a = n.rid;
                                return this.sendRequest(r), a;
                            },
                        }),
                        Object.defineProperty(e.prototype, "connect", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this,
                                    i = e.oauth,
                                    n = e.multiAuthUserId;
                                void 0 !== i &&
                                    (this.connectorConfig.oauth = i),
                                    void 0 !== n &&
                                        (this.connectorConfig.multiAuthUserId =
                                            n),
                                    [
                                        a.DISCONNECTED,
                                        a.READY_TO_RECONNECT,
                                    ].includes(
                                        this.state.connectionState.value,
                                    ) &&
                                        ((this.state.connectionState.value =
                                            a.CONNECTING),
                                        this.redirectorSocket
                                            .getHub({
                                                oauth: this.connectorConfig
                                                    .oauth,
                                                multiAuthUserId:
                                                    this.connectorConfig
                                                        .multiAuthUserId,
                                            })
                                            .then(function (e) {
                                                (t.state.redirectorResponse.value =
                                                    e),
                                                    t.connectToHub();
                                            })
                                            .catch(function (e) {
                                                if (
                                                    ((t.state.connectionState.value =
                                                        a.DISCONNECTED),
                                                    (16 !==
                                                        e.data
                                                            .redirectorResponse
                                                            .grpc_code ||
                                                        401 !==
                                                            e.data
                                                                .redirectorResponse
                                                                .http_code) &&
                                                        t.reconnectAttempts <
                                                            t.connectorConfig
                                                                .reconnectAttemptsLimit)
                                                ) {
                                                    var i =
                                                        e.data
                                                            .redirectorResponse
                                                            .extra_headers &&
                                                        e.data
                                                            .redirectorResponse
                                                            .extra_headers[
                                                            s
                                                                .ynisonGoAwayForSeconds
                                                        ]
                                                            ? 1e3 *
                                                              Number(
                                                                  e.data
                                                                      .redirectorResponse
                                                                      .extra_headers[
                                                                      s
                                                                          .ynisonGoAwayForSeconds
                                                                  ],
                                                              )
                                                            : t.connectorConfig
                                                                  .defaultReconnectTimeoutMS;
                                                    t.reconnect({ timeout: i });
                                                } else
                                                    (t.reconnectAttempts = 0),
                                                        t.emitter.emit(
                                                            o.REDIRECTOR_ERROR,
                                                            e,
                                                        );
                                            }));
                            },
                        }),
                        Object.defineProperty(e.prototype, "disconnect", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.reconnectTimeout &&
                                    (clearTimeout(this.reconnectTimeout),
                                    (this.reconnectTimeout = null)),
                                    (this.reconnectAttempts = 0),
                                    (this.state.connectionState.value =
                                        a.DISCONNECTED);
                            },
                        }),
                        Object.defineProperty(e.prototype, "on", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this.emitter.on(e, t);
                            },
                        }),
                        Object.defineProperty(e.prototype, "off", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t) {
                                this.emitter.off(e, t);
                            },
                        }),
                        Object.defineProperty(e.prototype, "connectToHub", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e = this,
                                    t = this.connectorConfig,
                                    i = t.oauth,
                                    n = t.device,
                                    r = t.multiAuthUserId,
                                    s =
                                        this.connectorConfig
                                            .hubConnectionConfig,
                                    l = s.protocol,
                                    u = s.path;
                                if (this.state.redirectorResponse.value) {
                                    var p,
                                        f,
                                        d,
                                        v,
                                        h,
                                        y,
                                        b,
                                        _,
                                        m,
                                        g =
                                            this.state.redirectorResponse.value
                                                .host,
                                        C =
                                            ((p =
                                                this.state.redirectorResponse
                                                    .value),
                                            (d = n.type),
                                            (v = n.app_name),
                                            (h = n.app_version),
                                            (y = n.device_id),
                                            (b = p.session_id),
                                            (_ = p.redirect_ticket),
                                            (m = U(d)),
                                            ((f = {})[c.ynisonDeviceId] = y),
                                            (f[c.ynisonRedirectTicket] = _),
                                            (f[c.ynisonSessionId] = b),
                                            (f[c.ynisonDeviceInfo] =
                                                JSON.stringify({
                                                    app_name: v,
                                                    app_version: h,
                                                    type: m,
                                                })),
                                            f);
                                    void 0 !== i &&
                                        (C.authorization = "OAuth ".concat(i)),
                                        void 0 !== r &&
                                            (C[
                                                "X-Yandex-Music-Multi-Auth-User-Id"
                                            ] = String(r));
                                    var O = "".concat(l).concat(g).concat(u),
                                        S = [
                                            "Bearer",
                                            "v2",
                                            encodeURIComponent(
                                                JSON.stringify(C),
                                            ),
                                        ];
                                    (this.socket = new WebSocket(O, S)),
                                        this.socket.addEventListener(
                                            "message",
                                            function (t) {
                                                e.onRecieveMessage(t);
                                            },
                                        ),
                                        this.socket.addEventListener(
                                            "error",
                                            function () {
                                                (e.state.connectionState.value =
                                                    a.DISCONNECTED),
                                                    e.reconnectAttempts <
                                                    e.connectorConfig
                                                        .reconnectAttemptsLimit
                                                        ? e.reconnect()
                                                        : ((e.reconnectAttempts = 0),
                                                          e.emitter.emit(
                                                              o.HUB_ERROR,
                                                              new D(
                                                                  "Error in connection to hub",
                                                                  {
                                                                      data: {
                                                                          redirectorResponse:
                                                                              e
                                                                                  .state
                                                                                  .redirectorResponse
                                                                                  .value
                                                                                  ? e
                                                                                        .state
                                                                                        .redirectorResponse
                                                                                        .value
                                                                                  : {},
                                                                          hubResponse:
                                                                              {},
                                                                      },
                                                                  },
                                                              ),
                                                          ));
                                            },
                                        ),
                                        this.socket.addEventListener(
                                            "open",
                                            function () {
                                                e.state.connectionState.value =
                                                    a.CONNECTED;
                                            },
                                        ),
                                        this.socket.addEventListener(
                                            "close",
                                            function () {
                                                e.state.connectionState.value =
                                                    a.DISCONNECTED;
                                            },
                                        );
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, "reconnect", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t = this;
                                void 0 === e && (e = {});
                                var i = e.timeout,
                                    n =
                                        void 0 === i
                                            ? this.connectorConfig
                                                  .defaultReconnectTimeoutMS
                                            : i;
                                this.state.connectionState.value ===
                                    a.DISCONNECTED &&
                                    ((this.reconnectAttempts += 1),
                                    (this.reconnectTimeout = setTimeout(
                                        function () {
                                            (t.state.connectionState.value =
                                                a.READY_TO_RECONNECT),
                                                t.connect({});
                                        },
                                        n,
                                    )),
                                    (this.state.connectionState.value =
                                        a.WAITING_FOR_RECONNECT));
                            },
                        }),
                        Object.defineProperty(e.prototype, "onRecieveMessage", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                try {
                                    var t = JSON.parse(e.data);
                                    if ("error" in t)
                                        if (
                                            ((this.state.connectionState.value =
                                                a.DISCONNECTED),
                                            this.reconnectAttempts <
                                                this.connectorConfig
                                                    .reconnectAttemptsLimit)
                                        ) {
                                            var i = t.error.details[
                                                s.ynisonGoAwayForSeconds
                                            ]
                                                ? 1e3 *
                                                  Number(
                                                      t.error.details[
                                                          s
                                                              .ynisonGoAwayForSeconds
                                                      ],
                                                  )
                                                : this.connectorConfig
                                                      .defaultReconnectTimeoutMS;
                                            this.reconnect({ timeout: i });
                                        } else
                                            (this.reconnectAttempts = 0),
                                                this.emitter.emit(
                                                    o.HUB_ERROR,
                                                    new D(
                                                        "Error message from hub",
                                                        {
                                                            data: {
                                                                redirectorResponse:
                                                                    this.state
                                                                        .redirectorResponse
                                                                        .value
                                                                        ? this
                                                                              .state
                                                                              .redirectorResponse
                                                                              .value
                                                                        : {},
                                                                hubResponse:
                                                                    t.error,
                                                            },
                                                        },
                                                    ),
                                                );
                                    else
                                        (this.reconnectAttempts = 0),
                                            this.emitter.emit(
                                                o.RECEIVE_MESSAGE,
                                                { rawData: t },
                                            );
                                } catch (e) {
                                    this.emitter.emit(
                                        o.HUB_ERROR,
                                        new D(
                                            "Error while processing message from hub",
                                            {
                                                data: {
                                                    redirectorResponse: this
                                                        .state
                                                        .redirectorResponse
                                                        .value
                                                        ? this.state
                                                              .redirectorResponse
                                                              .value
                                                        : {},
                                                    hubResponse: {},
                                                },
                                                cause: M(e),
                                            },
                                        ),
                                    );
                                }
                            },
                        }),
                        Object.defineProperty(e.prototype, "sendRequest", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                null !== this.socket &&
                                    this.socket.readyState === WebSocket.OPEN &&
                                    this.state.connectionState.value ===
                                        a.CONNECTED &&
                                    this.socket.send(JSON.stringify(e));
                            },
                        }),
                        e
                    );
                })(),
                W = function (e, t, i) {
                    var n, r, a;
                    return {
                        volume: null != (n = t.value) ? n : 0.5,
                        capabilities: {
                            can_be_player: !0,
                            can_be_remote_controller: !1,
                            volume_granularity:
                                null != (r = t.granularity) ? r : 16,
                        },
                        info: e,
                        volume_info: {
                            volume: null != (a = t.value) ? a : 0.5,
                            version: null,
                        },
                        is_shadow: !!i.isShadow,
                    };
                },
                H = function () {
                    return (H =
                        Object.assign ||
                        function (e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var r in (t = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        r,
                                    ) && (e[r] = t[r]);
                            return e;
                        }).apply(this, arguments);
                },
                G = (function () {
                    function e(e) {
                        var t = this;
                        Object.defineProperty(this, "stateController", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                            Object.defineProperty(this, "connector", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(this, "deviceConfig", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(this, "variables", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(
                                this,
                                "updateFullStateMessageRid",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: null,
                                },
                            ),
                            Object.defineProperty(
                                this,
                                "isUpdateFullStateCompleted",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: !1,
                                },
                            ),
                            (this.deviceConfig = e.deviceConfig),
                            (this.variables = e.variables),
                            (this.stateController = new O({
                                deviceConfig: this.deviceConfig,
                            })),
                            (this.connector = new Y({
                                config: {
                                    device: this.deviceConfig.info,
                                    oauth: e.oauth,
                                    multiAuthUserId: e.multiAuthUserId,
                                    redirectorConnectionConfig: {
                                        protocol: "wss://",
                                        host: e.ynisonConnectionConfig
                                            .ynisonHost,
                                        path: e.ynisonConnectionConfig
                                            .redirectorPath,
                                    },
                                    hubConnectionConfig: {
                                        protocol: "wss://",
                                        path: e.ynisonConnectionConfig
                                            .hubConnectioPath,
                                    },
                                    defaultReconnectTimeoutMS:
                                        e.ynisonConnectionConfig
                                            .reconnectTimeout,
                                    reconnectAttemptsLimit:
                                        e.ynisonConnectionConfig
                                            .reconnectAttempts,
                                },
                            })),
                            this.connector.on(
                                o.RECEIVE_MESSAGE,
                                this.onMessageReceived.bind(this),
                            ),
                            this.stateController.on(
                                n.UPDATED,
                                this.onStateChanged.bind(this),
                                "WSConnector",
                            ),
                            this.connector.state.connectionState.onChange(
                                function (e) {
                                    switch (e) {
                                        case a.CONNECTED:
                                            t.onConnected();
                                            break;
                                        case a.DISCONNECTED:
                                            t.onDisconnected();
                                    }
                                },
                            );
                    }
                    return (
                        Object.defineProperty(e.prototype, "isActive", {
                            get: function () {
                                var e =
                                    this.stateController.currentState
                                        .active_device_id_optional;
                                return !!(
                                    e && e === this.deviceConfig.info.device_id
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "onMessageReceived",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = this.getMessageContext(e);
                                    if (
                                        (this.updateFullStateCompletion(t),
                                        !this.shouldIgnoreMessage(t))
                                    ) {
                                        var i = this.processMessageState(e, t);
                                        this.stateController.updateState(i);
                                    }
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "getMessageContext",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return {
                                        isCurrentUpdateFullStateMessage:
                                            e.rawData.rid ===
                                            this.updateFullStateMessageRid,
                                        deviceTransition:
                                            this.getDeviceStateTransition(e),
                                    };
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "getDeviceStateTransition",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t =
                                            e.rawData
                                                .active_device_id_optional ===
                                            this.deviceConfig.info.device_id,
                                        i =
                                            e.rawData
                                                .active_device_id_optional !==
                                            this.stateController.currentState
                                                .active_device_id_optional;
                                    return {
                                        willBecomeActive: !this.isActive && t,
                                        willBecomePassive: this.isActive && !t,
                                        willStayPassive: !this.isActive && !t,
                                        isAnotherActiveDeviceUpdated:
                                            !this.isActive && !t && i,
                                    };
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "shouldIgnoreMessage",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return (
                                        !e.deviceTransition
                                            .isAnotherActiveDeviceUpdated &&
                                        this.shouldIgnorePlayerStateUpdate(e)
                                    );
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "shouldIgnorePlayerStateUpdate",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return (
                                        !this.isUpdateFullStateCompleted ||
                                        (e.isCurrentUpdateFullStateMessage
                                            ? !1 ===
                                              this.stateController.currentState
                                                  .player_state.status.paused
                                            : this.variables.isShadow ||
                                              e.deviceTransition
                                                  .willStayPassive)
                                    );
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "processMessageState",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, t) {
                                    var i = e.rawData;
                                    return (this.isActive ||
                                        (i =
                                            this.overrideIncomingDeviceVolume(
                                                i,
                                            )),
                                    this.shouldIgnorePlayerStateUpdate(t))
                                        ? this.createActiveDeviceStateUpdate(i)
                                        : this.shouldOverridePauseState(t)
                                          ? this.createPausedStateUpdate(i)
                                          : {
                                                newState: i,
                                                trigger: "WSConnector",
                                            };
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "updateFullStateCompletion",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    this.isUpdateFullStateCompleted =
                                        this.isUpdateFullStateCompleted ||
                                        e.isCurrentUpdateFullStateMessage;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "shouldOverridePauseState",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return (
                                        (e.isCurrentUpdateFullStateMessage &&
                                            e.deviceTransition
                                                .willStayPassive) ||
                                        e.deviceTransition.willBecomePassive
                                    );
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "createPausedStateUpdate",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = m(e);
                                    return (
                                        (t.player_state.status.paused = !0),
                                        (t.player_state.status.version = y(
                                            this.deviceConfig.info.device_id,
                                            0,
                                        )),
                                        {
                                            newState: t,
                                            skipVersionCompare: !0,
                                            trigger: "WSConnector",
                                        }
                                    );
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "overrideIncomingDeviceVolume",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t,
                                        i,
                                        n,
                                        r,
                                        a,
                                        o = this,
                                        s = m(e),
                                        c = this.stateController.currentState,
                                        l = s.devices.find(function (e) {
                                            var t;
                                            return (
                                                (null == (t = e.info)
                                                    ? void 0
                                                    : t.device_id) ===
                                                o.deviceConfig.info.device_id
                                            );
                                        }),
                                        u = c.devices.find(function (e) {
                                            var t;
                                            return (
                                                (null == (t = e.info)
                                                    ? void 0
                                                    : t.device_id) ===
                                                o.deviceConfig.info.device_id
                                            );
                                        });
                                    if (l) {
                                        var p = {
                                            volume:
                                                null !=
                                                (n =
                                                    null !=
                                                    (i =
                                                        null ==
                                                        (t =
                                                            null == u
                                                                ? void 0
                                                                : u.volume_info)
                                                            ? void 0
                                                            : t.volume)
                                                        ? i
                                                        : this.deviceConfig
                                                              .defaultVolume)
                                                    ? n
                                                    : 0.5,
                                            version:
                                                null !=
                                                (a =
                                                    null ==
                                                    (r =
                                                        null == u
                                                            ? void 0
                                                            : u.volume_info)
                                                        ? void 0
                                                        : r.version)
                                                    ? a
                                                    : null,
                                        };
                                        (l.volume = p.volume),
                                            (l.volume_info = p);
                                    }
                                    return s;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "createActiveDeviceStateUpdate",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var t = m(e);
                                    return (
                                        (t.player_state = m(
                                            this.stateController.currentState
                                                .player_state,
                                        )),
                                        {
                                            newState: t,
                                            skipVersionCompare: !0,
                                            trigger: "WSConnector",
                                        }
                                    );
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "processOutgoingPlayerState",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return H(H({}, e), {
                                        status: this.processOutgoingPlayerStatus(
                                            e.status,
                                        ),
                                    });
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "processOutgoingPlayerStatus",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    return this.variables.isShadow
                                        ? H(H({}, e), { paused: !0 })
                                        : e;
                                },
                            },
                        ),
                        Object.defineProperty(
                            e.prototype,
                            "createOutgoingDeviceData",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    var e,
                                        t,
                                        i = this,
                                        n =
                                            this.stateController.currentState.devices.find(
                                                function (e) {
                                                    var t;
                                                    return (
                                                        (null == (t = e.info)
                                                            ? void 0
                                                            : t.device_id) ===
                                                        i.deviceConfig.info
                                                            .device_id
                                                    );
                                                },
                                            );
                                    return W(
                                        this.deviceConfig.info,
                                        {
                                            value:
                                                null !=
                                                (t =
                                                    null ==
                                                    (e =
                                                        null == n
                                                            ? void 0
                                                            : n.volume_info)
                                                        ? void 0
                                                        : e.volume)
                                                    ? t
                                                    : this.deviceConfig
                                                          .defaultVolume,
                                            granularity:
                                                this.deviceConfig
                                                    .volumeGranularity,
                                        },
                                        { isShadow: this.variables.isShadow },
                                    );
                                },
                            },
                        ),
                        Object.defineProperty(e.prototype, "onStateChanged", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t,
                                    i,
                                    n = !!(
                                        this.stateController.currentState
                                            .active_device_id_optional &&
                                        !this.isActive
                                    );
                                this.isUpdateFullStateCompleted &&
                                    !n &&
                                    ((t = e.diff).player_state &&
                                    t.player_state.player_queue
                                        ? this.connector.updatePlayerState({
                                              player_state:
                                                  this.processOutgoingPlayerState(
                                                      e.state.player_state,
                                                  ),
                                          })
                                        : (i = e.diff).player_state &&
                                          i.player_state.status &&
                                          this.connector.updatePlayingStatus({
                                              playing_status:
                                                  this.processOutgoingPlayerStatus(
                                                      e.state.player_state
                                                          .status,
                                                  ),
                                          }),
                                    e.diff.deviceVolume &&
                                        this.isActive &&
                                        this.connector.updateVolumeInfo({
                                            device_id:
                                                this.deviceConfig.info
                                                    .device_id,
                                            volume_info: e.diff.deviceVolume,
                                        }));
                            },
                        }),
                        Object.defineProperty(e.prototype, "onConnected", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                var e;
                                this.updateFullStateMessageRid =
                                    this.connector.updateFullState(
                                        ((e = this.createOutgoingDeviceData()),
                                        {
                                            player_state:
                                                this.processOutgoingPlayerState(
                                                    this.stateController
                                                        .currentState
                                                        .player_state,
                                                ),
                                            device: e,
                                            is_currently_active:
                                                (this.variables.isShadow, !1),
                                            sync_state_from_eov_optional: null,
                                        }),
                                    );
                            },
                        }),
                        Object.defineProperty(e.prototype, "onDisconnected", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                (this.isUpdateFullStateCompleted = !1),
                                    (this.updateFullStateMessageRid = null);
                            },
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "interceptActivity",
                            {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    void 0 === e && (e = f.INTERCEPT_EAGER),
                                        this.connector.updatePlayerState(
                                            {
                                                player_state:
                                                    this.stateController
                                                        .currentState
                                                        .player_state,
                                            },
                                            { activity_interception_type: e },
                                        );
                                },
                            },
                        ),
                        Object.defineProperty(e.prototype, "becomePassive", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                this.connector.updateActiveDevice({
                                    device_id_optional: null,
                                });
                                var e = this.stateController.currentState;
                                (e.active_device_id_optional = null),
                                    (e.player_state.status.paused = !0),
                                    (e.player_state.status.version = y(
                                        this.deviceConfig.info.device_id,
                                    )),
                                    this.stateController.updateState({
                                        newState: e,
                                        trigger: "WSConnector",
                                    });
                            },
                        }),
                        Object.defineProperty(e.prototype, "updateVariables", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                Object.assign(this.variables, e);
                            },
                        }),
                        Object.defineProperty(e.prototype, "updateDeviceInfo", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                Object.assign(this.deviceConfig.info, e);
                            },
                        }),
                        e
                    );
                })();
        },
        71068: (e, t, i) => {
            i.d(t, { c: () => o });
            var n = i(86211),
                r = i(94967),
                a = i(11936);
            class o extends r.X {
                async progressSync(e, t) {
                    return (
                        await this.httpClient.post(
                            "streams/progress/sync",
                            this.createHttpOptions({
                                timeoutKey: "progressSync",
                                params: e,
                                json: {
                                    lastSyncTimestamp: e.lastSyncTimestamp,
                                    trackStreams: e.trackStreams,
                                },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            "streams/progress/mark-album-finished",
                            this.createHttpOptions({
                                timeoutKey: "markAlbumFinished",
                                params: e,
                                searchParams: (0, a.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            "streams/progress/mark-album-unfinished",
                            this.createHttpOptions({
                                timeoutKey: "markAlbumUnfinished",
                                params: e,
                                searchParams: (0, a.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            "streams/progress/mark-finished",
                            this.createHttpOptions({
                                timeoutKey: "markFinished",
                                params: e,
                                searchParams: (0, a.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            "streams/progress/mark-unfinished",
                            this.createHttpOptions({
                                timeoutKey: "markUnfinished",
                                params: e,
                                searchParams: (0, a.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async progressSaveCurrent(e, t) {
                    return (
                        await this.httpClient.post(
                            "streams/progress/save-current",
                            this.createHttpOptions({
                                timeoutKey: "progressSaveCurrent",
                                params: e,
                                searchParams: (0, a.P)({
                                    trackId: e.trackId,
                                    positionSec: e.positionSec,
                                    trackLengthSec: e.trackLengthSec,
                                    finished: e.finished,
                                    timestamp: e.timestamp,
                                }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t),
                        (0, n._)(this, "httpClient", void 0),
                        (0, n._)(this, "config", void 0),
                        (this.httpClient = e),
                        (this.config = t);
                }
            }
        },
    },
]);
