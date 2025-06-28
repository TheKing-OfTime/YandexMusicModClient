"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4954],
  {
    98030: function (e, t, i) {
      i.d(t, {
        $: function () {
          return l;
        },
      });
      var n,
        r,
        o = i(51838),
        a = i(19910),
        s = i(1005);
      ((n = r || (r = {})).WEB = "YandexMusicWebNext"),
        (n.DESKTOP = "YandexMusicDesktopApp");
      let c = (e, t) => "".concat(e, "/").concat(t),
        l = () => {
          {
            let e = (0, s.b)() || "1.0.0";
            return c("".concat(r.DESKTOP).concat((0, a.y)((0, o.X)())), e);
          }
        };
    },
    37778: function (e, t, i) {
      i.d(t, {
        h: function () {
          return a;
        },
      });
      var n = i(27198),
        r = i(8356),
        o = i(49498);
      class a extends r.c {
        async progressSync(e, t) {
          var i;
          return (
            await this.httpClient.post("streams/progress/sync", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(e),
              json: {
                lastSyncTimestamp: e.lastSyncTimestamp,
                trackStreams: e.trackStreams,
              },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.progressSync,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        async markAlbumFinished(e, t) {
          var i;
          return (
            await this.httpClient.post("streams/progress/mark-album-finished", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(e),
              searchParams: (0, o.f)({ albumId: e.albumId }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.markAlbumFinished,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        async markAlbumUnfinished(e, t) {
          var i;
          return (
            await this.httpClient.post(
              "streams/progress/mark-album-unfinished",
              {
                prefixUrl: this.config.prefixUrl,
                headers: this.createRequestHeadersFromParams(e),
                searchParams: (0, o.f)({ albumId: e.albumId }),
                retry: this.getRetryPolicyConfig(),
                timeout:
                  null === (i = this.config.timeouts) || void 0 === i
                    ? void 0
                    : i.markAlbumUnfinished,
                signal: null == t ? void 0 : t.signal,
              },
            )
          ).json();
        }
        async markFinished(e, t) {
          var i;
          return (
            await this.httpClient.post("streams/progress/mark-finished", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(e),
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, o.f)({ trackId: e.trackId }),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.markFinished,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        async markUnfinished(e, t) {
          var i;
          return (
            await this.httpClient.post("streams/progress/mark-unfinished", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(e),
              searchParams: (0, o.f)({ trackId: e.trackId }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.markAlbumUnfinished,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        async progressSaveCurrent(e, t) {
          var i;
          return (
            await this.httpClient.post("streams/progress/save-current", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(e),
              searchParams: (0, o.f)({
                trackId: e.trackId,
                positionSec: e.positionSec,
                trackLengthSec: e.trackLengthSec,
                finished: e.finished,
                timestamp: e.timestamp,
              }),
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (i = this.config.timeouts) || void 0 === i
                  ? void 0
                  : i.progressSaveCurrent,
              signal: null == t ? void 0 : t.signal,
            })
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
    65227: function (e, t, i) {
      i.d(t, {
        Yi: function () {
          return y;
        },
        x4: function () {
          return u;
        },
        QJ: function () {
          return z;
        },
        jB: function () {
          return m;
        },
        P2: function () {
          return g;
        },
        zh: function () {
          return C;
        },
        zE: function () {
          return _;
        },
        $L: function () {
          return Y;
        },
        Cs: function () {
          return O;
        },
      }),
        ((u || (u = {})).UPDATED = "UPDATED");
      var n,
        r,
        o,
        a,
        s,
        c,
        l,
        u,
        f,
        p,
        d,
        v,
        h,
        y = {
          UNSPECIFIED: "UNSPECIFIED",
          WEB: "WEB",
          ANDROID: "ANDROID",
          IOS: "IOS",
          SMART_SPEAKER: "SMART_SPEAKER",
          WEB_TV: "WEB_TV",
          ANDROID_TV: "ANDROID_TV",
          APPLE_TV: "APPLE_TV",
        },
        _ = {
          UNSPECIFIED: "UNSPECIFIED",
          NONE: "NONE",
          ONE: "ONE",
          ALL: "ALL",
        },
        b = { DO_NOT_INTERCEPT_BY_DEFAULT: "DO_NOT_INTERCEPT_BY_DEFAULT" },
        m = {
          UNSPECIFIED: "UNSPECIFIED",
          TRACK: "TRACK",
          LOCAL_TRACK: "LOCAL_TRACK",
          INFINITE: "INFINITE",
          VIDEO_CLIP: "VIDEO_CLIP",
        },
        g = {
          BASED_ON_ENTITY_BY_DEFAULT: "BASED_ON_ENTITY_BY_DEFAULT",
          USER_TRACKS: "USER_TRACKS",
          DOWNLOADED_TRACKS: "DOWNLOADED_TRACKS",
          SEARCH: "SEARCH",
          MUSIC_HISTORY: "MUSIC_HISTORY",
          MUSIC_HISTORY_SEARCH: "MUSIC_HISTORY_SEARCH",
          ARTIST_MY_COLLECTION: "ARTIST_MY_COLLECTION",
          ARTIST_FAMILIAR_FROM_WAVE: "ARTIST_FAMILIAR_FROM_WAVE",
        },
        C = {
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
        O = function (e, t) {
          return {
            device_id: e,
            version: Math.floor(0x7fffffffffffffff * Math.random()) + 0,
            timestamp_ms: void 0 !== t ? t : Date.now(),
          };
        };
      function S(e) {
        var t = O(e, 0);
        return {
          player_state: {
            player_queue: {
              current_playable_index: -1,
              entity_id: "",
              entity_type: C.VARIOUS,
              playable_list: [],
              options: { repeat_mode: _.NONE },
              shuffle_optional: null,
              entity_context: g.BASED_ON_ENTITY_BY_DEFAULT,
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
      function E(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function R(e, t, i) {
        return (
          void 0 === e && (e = !1),
          !!e || !t || !i || Number(t.timestamp_ms) < Number(i.timestamp_ms)
        );
      }
      function D(e) {
        var t = e.active_device_id_optional;
        return e.devices.find(function (e) {
          return e.info.device_id === t;
        });
      }
      var P = function () {
          return (P =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        w = (function () {
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
              Object.defineProperty(this, "lastRemoteDeviceChangingState", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "lastRemoteDeviceChangingStateTS", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "listenersMap", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.options = e),
              (this.state = S(e.device.device_id)),
              (this.prevState = S(e.device.device_id)),
              (this.diffCalculators = {
                active_device_id_optional:
                  this.calculateActiveDeviceDiff.bind(this),
                devices: this.calculateDevicesDiff.bind(this),
                player_state: {
                  player_queue: {
                    entity_id: this.calculateEntityIdDiff.bind(this),
                    entity_type: this.calculateEntityTypeDiff.bind(this),
                    entity_context: function () {},
                    current_playable_index:
                      this.calculateCurrentPlayableIndexDiff.bind(this),
                    playable_list: this.calculatePlayableListDiff.bind(this),
                    options: {
                      repeat_mode: this.calculateRepeatDiff.bind(this),
                    },
                    version: function () {},
                    shuffle_optional: this.calculcateShuffleDiff.bind(this),
                    from_optional: function () {},
                    initial_entity_optional: function () {},
                    adding_options_optional: function () {},
                    queue: function () {},
                  },
                  status: {
                    progress_ms: this.calculateProgressMsDiff.bind(this),
                    duration_ms: function () {},
                    paused: this.calculatePausedDiff.bind(this),
                    playback_speed: this.calculateSpeedDiff.bind(this),
                    version: function () {},
                  },
                  player_queue_inject_optional: function () {},
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
                var n = this.listenersMap.get(e);
                n
                  ? n.push({ callback: t, trigger: i })
                  : this.listenersMap.set(e, [{ callback: t, trigger: i }]);
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
                return E(this.state);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fullState", {
              get: function () {
                return E({
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
                var t = [this.diffCalculators];
                this.diff = {};
                var i = this.options,
                  n = i.diffWhileActiveOnly,
                  r = i.device.device_id;
                try {
                  var o = e.newState.active_device_id_optional,
                    a = e.skipDeviceActivityCheck,
                    s = e.isSetNewState,
                    c = this.state.active_device_id_optional;
                  if (!(void 0 !== a && a) && n && r !== c && r !== o)
                    this.calculateActiveDeviceDiff(e);
                  else {
                    for (; t.length > 0; )
                      for (
                        var l = t.pop(), f = 0, p = Object.keys(l);
                        f < p.length;
                        f++
                      ) {
                        var d = l[p[f]];
                        "function" == typeof d ? d(e) : t.push(d);
                      }
                    var v = Object.keys(this.diff);
                    if ((void 0 === s || s) && v.length) {
                      var h = E(this.state);
                      v.forEach(function (t) {
                        h[t] = e.newState[t];
                      }),
                        (this.prevState = E(this.state)),
                        (this.state = h);
                    }
                  }
                  var y = P(P({}, this.fullState), { options: e });
                  this.emit(u.UPDATED, y, e.trigger);
                } catch (e) {
                  return;
                }
              },
            }),
            Object.defineProperty(e.prototype, "calculateActiveDeviceDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.active_device_id_optional;
                t !== this.state.active_device_id_optional &&
                  (this.diff.active_device_id_optional = t);
              },
            }),
            Object.defineProperty(e.prototype, "calculateDevicesDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState,
                  i = e.skipVersionCompare,
                  n = (function (e, t, i) {
                    if (!t || !i || t.info.device_id !== i.info.device_id)
                      return { isVolumeChanged: !1, isNewVersion: !1 };
                    var n = t.volume_info,
                      r = i.volume_info,
                      o = R(e, n.version, r.version);
                    return {
                      isVolumeChanged:
                        n.volume !== r.volume &&
                        Math.abs(r.volume - n.volume) > 0.02,
                      isNewVersion: o,
                    };
                  })(void 0 !== i && i, D(this.state), D(t)),
                  r = n.isVolumeChanged,
                  o = n.isNewVersion,
                  a = (function (e, t) {
                    var i = { isAnyoneConnectionChanged: !1 };
                    if (e.length < t.length)
                      for (
                        var n = function (t) {
                            e.find(function (e) {
                              return e.info.device_id === t.info.device_id;
                            }) ||
                              (i = {
                                isAnyoneConnectionChanged: !0,
                                changedConnectionStatusDevice: t,
                              });
                          },
                          r = 0;
                        r < t.length;
                        r++
                      ) {
                        var o = t[r];
                        n(o);
                      }
                    else if (e.length === t.length)
                      for (
                        var a = function (t) {
                            var n = e.find(function (e) {
                              return e.info.device_id === t.info.device_id;
                            });
                            n &&
                              n.is_offline !== t.is_offline &&
                              (i = {
                                isAnyoneConnectionChanged: !0,
                                changedConnectionStatusDevice: t,
                              });
                          },
                          s = 0;
                        s < t.length;
                        s++
                      ) {
                        var o = t[s];
                        a(o);
                      }
                    return i;
                  })(this.state.devices, t.devices).isAnyoneConnectionChanged;
                ((r && o) || a) && (this.diff.devices = t.devices);
              },
            }),
            Object.defineProperty(e.prototype, "calculateEntityIdDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  i = e.skipVersionCompare,
                  n = t.entity_id,
                  r = t.version,
                  o = this.state.player_state.player_queue,
                  a = o.entity_id;
                R(void 0 !== i && i, o.version, r) &&
                  a !== n &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.entity_id = n));
              },
            }),
            Object.defineProperty(e.prototype, "calculateEntityTypeDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  i = t.entity_type,
                  n = t.version,
                  r = e.skipVersionCompare,
                  o = this.state.player_state.player_queue,
                  a = o.entity_type;
                R(void 0 !== r && r, o.version, n) &&
                  a !== i &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.entity_type = i));
              },
            }),
            Object.defineProperty(
              e.prototype,
              "calculateCurrentPlayableIndexDiff",
              {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = e.newState.player_state.player_queue,
                    i = e.skipVersionCompare,
                    n = t.entity_id,
                    r = t.current_playable_index,
                    o = t.version,
                    a = this.state.player_state.player_queue,
                    s = a.entity_id,
                    c = a.current_playable_index;
                  R(void 0 !== i && i, a.version, o) &&
                    s === n &&
                    c !== r &&
                    (this.initPlayerState(!0, !1),
                    this.diff.player_state &&
                      this.diff.player_state.player_queue &&
                      (this.diff.player_state.player_queue.current_playable_index =
                        r));
                },
              },
            ),
            Object.defineProperty(e.prototype, "calculatePlayableListDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  i = e.skipVersionCompare,
                  n = t.playable_list,
                  r = t.version,
                  o = this.state.player_state.player_queue,
                  a = o.playable_list,
                  s = R(void 0 !== i && i, o.version, r),
                  c = (function (e, t) {
                    var i, n;
                    if (e.length > 0 && t.length > 0 && e.length === t.length) {
                      for (var r = e.length, o = 0; o < r; o++)
                        if (
                          t[o] &&
                          (null === (i = e[o]) || void 0 === i
                            ? void 0
                            : i.playable_id) !==
                            (null === (n = t[o]) || void 0 === n
                              ? void 0
                              : n.playable_id)
                        )
                          return !1;
                      return !0;
                    }
                    return !1;
                  })(a, n);
                s &&
                  !c &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.playable_list = n));
              },
            }),
            Object.defineProperty(e.prototype, "calculcateShuffleDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  i = t.shuffle_optional,
                  n = t.version,
                  r = e.skipVersionCompare,
                  o = this.state.player_state.player_queue,
                  a = o.shuffle_optional,
                  s = R(void 0 !== r && r, o.version, n),
                  c = (function (e, t) {
                    if (!e && !t) return !0;
                    if (
                      e &&
                      t &&
                      e.playable_indices.length === t.playable_indices.length
                    ) {
                      for (
                        var i = !0, n = 0;
                        n <= e.playable_indices.length;
                        n++
                      )
                        if (e.playable_indices[n] !== t.playable_indices[n]) {
                          i = !1;
                          break;
                        }
                      return i;
                    }
                    return !1;
                  })(a, i);
                s &&
                  !c &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (i
                      ? (this.diff.player_state.player_queue.shuffle_optional =
                          i)
                      : (this.diff.player_state.player_queue.shuffle_optional =
                          { playable_indices: [] })));
              },
            }),
            Object.defineProperty(e.prototype, "calculateRepeatDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  i = t.options,
                  n = t.version,
                  r = e.skipVersionCompare,
                  o = i.repeat_mode,
                  a = this.state.player_state.player_queue,
                  s = a.options,
                  c = a.version,
                  l = s.repeat_mode;
                R(void 0 !== r && r, c, n) &&
                  l !== o &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.options = i));
              },
            }),
            Object.defineProperty(e.prototype, "calculateProgressMsDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t,
                  i,
                  n = e.newState.player_state.status,
                  r = e.skipVersionCompare,
                  o = n.progress_ms,
                  a = n.version,
                  s = this.state.player_state.status,
                  c = s.progress_ms,
                  l = R(void 0 !== r && r, s.version, a),
                  u =
                    (t = Number(o)) !== (i = Number(c)) &&
                    (i < 1500 || Math.abs(t - i) > 1e3);
                l &&
                  u &&
                  (this.initPlayerState(!1, !0),
                  this.diff.player_state &&
                    this.diff.player_state.status &&
                    (this.diff.player_state.status.progress_ms = o));
              },
            }),
            Object.defineProperty(e.prototype, "calculateSpeedDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.status,
                  i = t.playback_speed,
                  n = t.version,
                  r = e.skipVersionCompare,
                  o = this.state.player_state.status,
                  a = o.playback_speed;
                R(void 0 !== r && r, o.version, n) &&
                  a !== i &&
                  (this.initPlayerState(!1, !0),
                  this.diff.player_state &&
                    this.diff.player_state.status &&
                    (this.diff.player_state.status.playback_speed = i));
              },
            }),
            Object.defineProperty(e.prototype, "calculatePausedDiff", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.status,
                  i = e.skipVersionCompare,
                  n = t.paused,
                  r = t.version,
                  o = this.state.player_state.status,
                  a = o.paused;
                R(void 0 !== i && i, o.version, r) &&
                  a !== n &&
                  (this.initPlayerState(!1, !0),
                  this.diff.player_state &&
                    this.diff.player_state.status &&
                    (this.diff.player_state.status.paused = n));
              },
            }),
            Object.defineProperty(e.prototype, "initPlayerState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.diff.player_state || (this.diff.player_state = {}),
                  e &&
                    !this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue = {}),
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
                    o = e.devices,
                    a = e.active_device_id_optional,
                    s = this.options.device.device_id,
                    c = [n, r],
                    l = o.find(function (e) {
                      return e.info.device_id === a;
                    });
                  void 0 !== l && c.push(l.volume_info.version);
                  var u = c
                    .filter(function (e) {
                      return 0 !== Number(null == e ? void 0 : e.timestamp_ms);
                    })
                    .filter(function (e) {
                      return (
                        o.find(function (t) {
                          return (
                            t.info.device_id ===
                            (null == e ? void 0 : e.device_id)
                          );
                        }) && (null == e ? void 0 : e.device_id) !== s
                      );
                    });
                  if (u.length > 0) {
                    var f = u.sort(function (e, t) {
                        return (
                          Number(null == t ? void 0 : t.timestamp_ms) -
                          Number(null == e ? void 0 : e.timestamp_ms)
                        );
                      })[0],
                      p = o.find(function (e) {
                        return (
                          e.info.device_id ===
                          (null == f ? void 0 : f.device_id)
                        );
                      });
                    this.lastRemoteDeviceChangingState &&
                      p &&
                      this.lastRemoteDeviceChangingState.info.device_id ===
                        p.info.device_id &&
                      !this.lastRemoteDeviceChangingState.is_offline &&
                      p.is_offline &&
                      (this.lastRemoteDeviceChangingState = E(p)),
                      ((void 0 === this.lastRemoteDeviceChangingState && p) ||
                        (this.lastRemoteDeviceChangingState &&
                          p &&
                          this.lastRemoteDeviceChangingState.info.device_id !==
                            p.info.device_id) ||
                        (this.lastRemoteDeviceChangingState &&
                          p &&
                          this.lastRemoteDeviceChangingState.info.device_id ===
                            p.info.device_id &&
                          this.lastRemoteDeviceChangingState.is_offline &&
                          !p.is_offline &&
                          !this.diff.devices)) &&
                        f &&
                        ((this.lastRemoteDeviceChangingState = E(p)),
                        (this.lastRemoteDeviceChangingStateTS = Number(
                          f.timestamp_ms,
                        )),
                        (t = {
                          device: E(p),
                          timestampMs: Number(f.timestamp_ms),
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
                    device: this.lastRemoteDeviceChangingState,
                    timestampMs: this.lastRemoteDeviceChangingStateTS,
                  };
                },
              },
            ),
            Object.defineProperty(e.prototype, "getOnlineRemoteDevices", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.state,
                  t = e.devices,
                  i = e.active_device_id_optional;
                return t.filter(function (e) {
                  var t = [y.ANDROID, y.IOS, y.WEB].includes(e.info.type);
                  return !e.is_offline && e.info.device_id !== i && t;
                });
              },
            }),
            e
          );
        })();
      ((n = f || (f = {})).PRODUCTION = "ynison.music.yandex.ru"),
        (n.QA = "qa.ynison.music.yandex.ru"),
        ((r = p || (p = {})).CONNECTING = "CONNECTING"),
        (r.CONNECTED = "CONNECTED"),
        (r.DISCONNECTED = "DISCONNECTED"),
        (r.WAITING_FOR_RECONNECT = "WAITING_FOR_RECONNECT"),
        (r.READY_TO_RECONNECT = "READY_TO_RECONNECT"),
        ((o = d || (d = {})).RECIEVE_MESSAGE = "RECIEVE_MESSAGE"),
        (o.REDIRECTOR_ERROR = "REDIRECTOR_ERROR"),
        (o.HUB_ERROR = "HUB_ERROR");
      var I = i(58597);
      ((a = v || (v = {})).ynisonBackoffMillis = "ynison-backoff-millis"),
        (a.ynisonErrorCode = "ynison-error-code"),
        (a.ynisonGoAwayForSeconds = "ynison-go-away-for-seconds");
      var T = i(83190),
        A =
          ((s = function (e, t) {
            return (s =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = e;
            }
            s(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        N = function () {
          return (N =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        j = function (e, t) {
          var i = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (i[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(e);
              r < n.length;
              r++
            )
              0 > t.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (i[n[r]] = e[n[r]]);
          return i;
        },
        k = (function (e) {
          function t(i, n) {
            void 0 === n && (n = {});
            var r = this,
              o = n.code,
              a = j(n, ["code"]);
            return (
              Object.defineProperty(
                (r =
                  e.call(
                    this,
                    i,
                    N({ code: void 0 === o ? "E_HUB_EXCEPTION" : o }, a),
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
          return A(t, e), t;
        })(T.y),
        U = i(54765),
        q = function (e) {
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
            (this.redirectorResponse = new U.wi(e.redirectorResponse)),
            (this.connectionState = new U.wi(e.connectionState));
        },
        L =
          ((c = function (e, t) {
            return (c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = e;
            }
            c(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        M = function () {
          return (M =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        F = function (e, t) {
          var i = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (i[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(e);
              r < n.length;
              r++
            )
              0 > t.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (i[n[r]] = e[n[r]]);
          return i;
        },
        x = (function (e) {
          function t(i, n) {
            void 0 === n && (n = {});
            var r = this,
              o = n.code,
              a = F(n, ["code"]);
            return (
              Object.defineProperty(
                (r =
                  e.call(
                    this,
                    i,
                    M({ code: void 0 === o ? "E_REDIRECTOR_EXCEPTION" : o }, a),
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
          return L(t, e), t;
        })(T.y);
      function V(e) {
        var t;
        switch (e) {
          case y.WEB:
            t = 1;
            break;
          case y.WEB_TV:
            t = 5;
            break;
          default:
            t = 1;
        }
        return t;
      }
      function Y(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      ((l = h || (h = {})).ynisonDeviceId = "Ynison-Device-Id"),
        (l.ynisonRedirectTicket = "Ynison-Redirect-Ticket"),
        (l.ynisonSessionId = "Ynison-Session-Id"),
        (l.ynisonDeviceInfo = "Ynison-Device-Info"),
        (l.multiAuthUserId = "X-Yandex-Music-Multi-Auth-User-Id");
      var B = function (e, t) {
          var i,
            n,
            r,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(s) {
            return function (c) {
              return (function (s) {
                if (i) throw TypeError("Generator is already executing.");
                for (; o && ((o = 0), s[0] && (a = 0)), a; )
                  try {
                    if (
                      ((i = 1),
                      n &&
                        (r =
                          2 & s[0]
                            ? n.return
                            : s[0]
                              ? n.throw || ((r = n.return) && r.call(n), 0)
                              : n.next) &&
                        !(r = r.call(n, s[1])).done)
                    )
                      return r;
                    switch (((n = 0), r && (s = [2 & s[0], r.value]), s[0])) {
                      case 0:
                      case 1:
                        r = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (n = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                          (6 === s[0] || 2 === s[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === s[0] &&
                          (!r || (s[1] > r[0] && s[1] < r[3]))
                        ) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = s);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(s);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (n = 0);
                  } finally {
                    i = r = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, c]);
            };
          }
        },
        H = (function () {
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
                    return B(this, function (i) {
                      return [
                        2,
                        new Promise(function (i, n) {
                          var r,
                            o,
                            a,
                            s,
                            c,
                            l,
                            u = e.oauth,
                            f = e.multiAuthUserId,
                            p =
                              ((a = (r = t.device).device_id),
                              (s = r.app_name),
                              (c = r.app_version),
                              (l = V(r.type)),
                              ((o = {})[h.ynisonDeviceId] = a),
                              (o[h.ynisonDeviceInfo] = JSON.stringify({
                                app_name: s,
                                app_version: c,
                                type: l,
                              })),
                              o);
                          void 0 !== u &&
                            (p.authorization = "OAuth ".concat(u)),
                            void 0 !== f &&
                              (p["X-Yandex-Music-Multi-Auth-User-Id"] =
                                String(f));
                          var d = new WebSocket(
                              Object.values(t.connectionConfig).join(""),
                              [
                                "Bearer",
                                "v2",
                                encodeURIComponent(JSON.stringify(p)),
                              ],
                            ),
                            v = function (e) {
                              try {
                                var t = JSON.parse(e.data);
                                "error" in t
                                  ? (d.close(),
                                    n(
                                      new x("Error message from redirector", {
                                        data: { redirectorResponse: t.error },
                                      }),
                                    ))
                                  : (d.close(), i(t));
                              } catch (e) {
                                new x(
                                  "Error while processing message from redirector",
                                  {
                                    data: { redirectorResponse: {} },
                                    cause: Y(e),
                                  },
                                );
                              }
                            },
                            y = function () {
                              n(
                                new x("Error in connection to redirector", {
                                  data: { redirectorResponse: {} },
                                }),
                              );
                            },
                            _ = function () {
                              d.removeEventListener("message", v),
                                d.removeEventListener("error", y),
                                d.removeEventListener("close", _);
                            };
                          d.addEventListener("message", v),
                            d.addEventListener("error", y),
                            d.addEventListener("close", _);
                        }),
                      ];
                    });
                  }),
                  new (n || (n = Promise))(function (e, o) {
                    function a(e) {
                      try {
                        c(r.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function s(e) {
                      try {
                        c(r.throw(e));
                      } catch (e) {
                        o(e);
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
                          ).then(a, s);
                    }
                    c((r = r.apply(t, i || [])).next());
                  })
                );
              },
            }),
            e
          );
        })(),
        W = i(77282),
        G = function () {
          return (G =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        K = function (e, t) {
          var i = (0, W.Z)(),
            n = G(G({}, e), { rid: i });
          if (t) {
            var r = t.player_action_timestamp_ms,
              o = void 0 === r ? Date.now() : r,
              a = t.activity_interception_type,
              s = void 0 === a ? b.DO_NOT_INTERCEPT_BY_DEFAULT : a;
            (n.player_action_timestamp_ms = o),
              (n.activity_interception_type = s);
          } else
            (n.player_action_timestamp_ms = Date.now()),
              (n.activity_interception_type = b.DO_NOT_INTERCEPT_BY_DEFAULT);
          return { request: n, rid: i };
        },
        J = function () {
          return (J =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        X = (function () {
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
                value: new I.TinyEmitter(),
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
                value: new q({
                  redirectorResponse: null,
                  connectionState: p.DISCONNECTED,
                }),
              }),
              (this.connectorConfig = e.config),
              (this.redirectorSocket = new H({
                device: this.connectorConfig.device,
                connectionConfig:
                  this.connectorConfig.redirectorConnectionConfig,
              })),
              this.state.connectionState.onChange(function (e) {
                e === p.DISCONNECTED &&
                  t.socket &&
                  (t.socket.close(), (t.socket = null));
              });
          }
          return (
            Object.defineProperty(e.prototype, "config", {
              get: function () {
                return E(this.connectorConfig);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "updateFullState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var i = J({}, e);
                (i.player_state.player_queue.version = O(
                  this.connectorConfig.device.device_id,
                  0,
                )),
                  (i.player_state.status.version = O(
                    this.connectorConfig.device.device_id,
                    0,
                  ));
                var n = K(
                    { update_full_state: i },
                    J({ player_action_timestamp_ms: 0 }, t),
                  ),
                  r = n.request,
                  o = n.rid;
                return this.sendRequest(r), o;
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayingStatus", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var i = J({}, e);
                i.playing_status.version = O(
                  this.connectorConfig.device.device_id,
                );
                var n = K({ update_playing_status: i }, t),
                  r = n.request,
                  o = n.rid;
                return this.sendRequest(r), o;
              },
            }),
            Object.defineProperty(e.prototype, "updateActiveDevice", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var i = K({ update_active_device: e }, t),
                  n = i.request,
                  r = i.rid;
                return this.sendRequest(n), r;
              },
            }),
            Object.defineProperty(e.prototype, "updateSessionParams", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var i = K({ update_session_params: e }, t),
                  n = i.request,
                  r = i.rid;
                return this.sendRequest(n), r;
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayerState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var i = J({}, e);
                (i.player_state.player_queue.version = O(
                  this.connectorConfig.device.device_id,
                )),
                  (i.player_state.status.version = O(
                    this.connectorConfig.device.device_id,
                  ));
                var n = K({ update_player_state: i }, t),
                  r = n.request,
                  o = n.rid;
                return this.sendRequest(r), o;
              },
            }),
            Object.defineProperty(e.prototype, "updateVolumeInfo", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var i = J({}, e);
                i.volume_info.version = O(
                  this.connectorConfig.device.device_id,
                );
                var n = K({ update_volume_info: i }, t),
                  r = n.request,
                  o = n.rid;
                return this.sendRequest(r), o;
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
                void 0 !== i && (this.connectorConfig.oauth = i),
                  void 0 !== n && (this.connectorConfig.multiAuthUserId = n),
                  [p.DISCONNECTED, p.READY_TO_RECONNECT].includes(
                    this.state.connectionState.value,
                  ) &&
                    ((this.state.connectionState.value = p.CONNECTING),
                    this.redirectorSocket
                      .getHub({
                        oauth: this.connectorConfig.oauth,
                        multiAuthUserId: this.connectorConfig.multiAuthUserId,
                      })
                      .then(function (e) {
                        (t.state.redirectorResponse.value = e),
                          t.connectToHub();
                      })
                      .catch(function (e) {
                        if (
                          ((t.state.connectionState.value = p.DISCONNECTED),
                          !(
                            16 === e.data.redirectorResponse.grpc_code &&
                            401 === e.data.redirectorResponse.http_code
                          ) &&
                            t.reconnectAttempts <
                              t.connectorConfig.reconnectAttemptsLimit)
                        ) {
                          var i =
                            e.data.redirectorResponse.extra_headers &&
                            e.data.redirectorResponse.extra_headers[
                              v.ynisonGoAwayForSeconds
                            ]
                              ? 1e3 *
                                Number(
                                  e.data.redirectorResponse.extra_headers[
                                    v.ynisonGoAwayForSeconds
                                  ],
                                )
                              : t.connectorConfig.defaultReconnectTimeoutMS;
                          t.reconnect({ timeout: i });
                        } else
                          (t.reconnectAttempts = 0),
                            t.emitter.emit(d.REDIRECTOR_ERROR, e);
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
                  (this.state.connectionState.value = p.DISCONNECTED);
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
                  o = this.connectorConfig.hubConnectionConfig,
                  a = o.protocol,
                  s = o.path;
                if (this.state.redirectorResponse.value) {
                  var c,
                    l,
                    u,
                    f,
                    v,
                    y,
                    _,
                    b,
                    m,
                    g = this.state.redirectorResponse.value.host,
                    C =
                      ((c = this.state.redirectorResponse.value),
                      (u = n.type),
                      (f = n.app_name),
                      (v = n.app_version),
                      (y = n.device_id),
                      (_ = c.session_id),
                      (b = c.redirect_ticket),
                      (m = V(u)),
                      ((l = {})[h.ynisonDeviceId] = y),
                      (l[h.ynisonRedirectTicket] = b),
                      (l[h.ynisonSessionId] = _),
                      (l[h.ynisonDeviceInfo] = JSON.stringify({
                        app_name: f,
                        app_version: v,
                        type: m,
                      })),
                      l);
                  void 0 !== i && (C.authorization = "OAuth ".concat(i)),
                    void 0 !== r &&
                      (C["X-Yandex-Music-Multi-Auth-User-Id"] = String(r));
                  var O = "".concat(a).concat(g).concat(s),
                    S = ["Bearer", "v2", encodeURIComponent(JSON.stringify(C))];
                  (this.socket = new WebSocket(O, S)),
                    this.socket.addEventListener("message", function (t) {
                      e.onRecieveMessage(t);
                    }),
                    this.socket.addEventListener("error", function () {
                      (e.state.connectionState.value = p.DISCONNECTED),
                        e.reconnectAttempts <
                        e.connectorConfig.reconnectAttemptsLimit
                          ? e.reconnect()
                          : ((e.reconnectAttempts = 0),
                            e.emitter.emit(
                              d.HUB_ERROR,
                              new k("Error in connection to hub", {
                                data: {
                                  redirectorResponse: e.state.redirectorResponse
                                    .value
                                    ? e.state.redirectorResponse.value
                                    : {},
                                  hubResponse: {},
                                },
                              }),
                            ));
                    }),
                    this.socket.addEventListener("open", function () {
                      e.state.connectionState.value = p.CONNECTED;
                    }),
                    this.socket.addEventListener("close", function () {
                      e.state.connectionState.value = p.DISCONNECTED;
                    });
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
                      ? this.connectorConfig.defaultReconnectTimeoutMS
                      : i;
                this.state.connectionState.value === p.DISCONNECTED &&
                  ((this.reconnectAttempts += 1),
                  (this.reconnectTimeout = setTimeout(function () {
                    (t.state.connectionState.value = p.READY_TO_RECONNECT),
                      t.connect({});
                  }, n)),
                  (this.state.connectionState.value = p.WAITING_FOR_RECONNECT));
              },
            }),
            Object.defineProperty(e.prototype, "onRecieveMessage", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                try {
                  var t = JSON.parse(e.data);
                  if ("error" in t) {
                    if (
                      ((this.state.connectionState.value = p.DISCONNECTED),
                      this.reconnectAttempts <
                        this.connectorConfig.reconnectAttemptsLimit)
                    ) {
                      var i = t.error.details[v.ynisonGoAwayForSeconds]
                        ? 1e3 *
                          Number(t.error.details[v.ynisonGoAwayForSeconds])
                        : this.connectorConfig.defaultReconnectTimeoutMS;
                      this.reconnect({ timeout: i });
                    } else
                      (this.reconnectAttempts = 0),
                        this.emitter.emit(
                          d.HUB_ERROR,
                          new k("Error message from hub", {
                            data: {
                              redirectorResponse: this.state.redirectorResponse
                                .value
                                ? this.state.redirectorResponse.value
                                : {},
                              hubResponse: t.error,
                            },
                          }),
                        );
                  } else
                    (this.reconnectAttempts = 0),
                      this.emitter.emit(d.RECIEVE_MESSAGE, { rawData: t });
                } catch (e) {
                  this.emitter.emit(
                    d.HUB_ERROR,
                    new k("Error while processing message from hub", {
                      data: {
                        redirectorResponse: this.state.redirectorResponse.value
                          ? this.state.redirectorResponse.value
                          : {},
                        hubResponse: {},
                      },
                      cause: Y(e),
                    }),
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
                  this.state.connectionState.value === p.CONNECTED &&
                  this.socket.send(JSON.stringify(e));
              },
            }),
            e
          );
        })(),
        z = (function () {
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
              Object.defineProperty(this, "updateFullStateMessageRid", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "isUpdateFullStateComplited", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              (this.deviceConfig = e.deviceConfig),
              (this.variables = e.variables),
              (this.stateController = new w({
                device: e.deviceConfig,
                diffWhileActiveOnly: !1,
              })),
              (this.connector = new X({
                config: {
                  device: e.deviceConfig,
                  oauth: e.oauth,
                  multiAuthUserId: e.multiAuthUserId,
                  redirectorConnectionConfig: {
                    protocol: "wss://",
                    host: e.ynisonConnectionConfig.ynisonHost,
                    path: e.ynisonConnectionConfig.redirectorPath,
                  },
                  hubConnectionConfig: {
                    protocol: "wss://",
                    path: e.ynisonConnectionConfig.hubConnectioPath,
                  },
                  defaultReconnectTimeoutMS:
                    e.ynisonConnectionConfig.reconnectTimeout,
                  reconnectAttemptsLimit:
                    e.ynisonConnectionConfig.reconnectAttempts,
                },
              })),
              this.connector.on(
                d.RECIEVE_MESSAGE,
                this.onMessageRecieved.bind(this),
              ),
              this.stateController.on(
                u.UPDATED,
                this.onStateChanged.bind(this),
                "WSConnector",
              ),
              this.connector.state.connectionState.onChange(function (e) {
                switch (e) {
                  case p.CONNECTED:
                    t.onConnected();
                    break;
                  case p.DISCONNECTED:
                    t.onDisconnected();
                }
              });
          }
          return (
            Object.defineProperty(e.prototype, "onMessageRecieved", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                (this.variables.shadow && this.isUpdateFullStateComplited) ||
                  ((this.isUpdateFullStateComplited =
                    e.rawData.rid === this.updateFullStateMessageRid),
                  this.isUpdateFullStateComplited &&
                    this.stateController.updateState({
                      newState: e.rawData,
                      trigger: "WSConnector",
                    }));
              },
            }),
            Object.defineProperty(e.prototype, "onStateChanged", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t, i, n, r;
                !this.isUpdateFullStateComplited ||
                  (this.variables.shadow &&
                    ((t = this.deviceConfig.device_id),
                    (i = e.state.active_device_id_optional) && i !== t)) ||
                  ((n = e.diff).player_state && n.player_state.player_queue
                    ? this.connector.updatePlayerState({
                        player_state: e.state.player_state,
                      })
                    : (r = e.diff).player_state &&
                      r.player_state.status &&
                      this.connector.updatePlayingStatus({
                        playing_status: e.state.player_state.status,
                      }));
              },
            }),
            Object.defineProperty(e.prototype, "onConnected", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e;
                this.updateFullStateMessageRid = this.connector.updateFullState(
                  ((e = this.deviceConfig),
                  {
                    player_state:
                      this.stateController.currentState.player_state,
                    device: {
                      volume: 1,
                      capabilities: {
                        can_be_player: !0,
                        can_be_remote_controller: !1,
                        volume_granularity: 16,
                      },
                      info: e,
                      volume_info: { volume: 0, version: null },
                      is_shadow: !(window?.ENABLE_YNISON_REMOTE_CONTROL ?? false),
                    },
                    is_currently_active: !1,
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
                (this.isUpdateFullStateComplited = !1),
                  (this.updateFullStateMessageRid = null);
              },
            }),
            e
          );
        })();
    },
  },
]);
