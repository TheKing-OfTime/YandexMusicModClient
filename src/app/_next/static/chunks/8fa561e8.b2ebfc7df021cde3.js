"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1032],
  {
    94379: function (e, t, i) {
      let r, s, a;
      i.d(t, {
        ZB: function () {
          return w;
        },
        ZP: function () {
          return sz;
        },
        zW: function () {
          return C;
        },
      });
      var n,
        l,
        o,
        h,
        d,
        u,
        c,
        f,
        g,
        m,
        p,
        E,
        T,
        y,
        v,
        S,
        A = { exports: {} };
      (n =
        /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/),
        (l = /^(?=([^\/?#]*))\1([^]*)$/),
        (o = /(?:\/|^)\.(?=\/)/g),
        (h = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
        (d = {
          buildAbsoluteURL: function (e, t, i) {
            if (((i = i || {}), (e = e.trim()), !(t = t.trim()))) {
              if (!i.alwaysNormalize) return e;
              var r = d.parseURL(e);
              if (!r) throw Error("Error trying to parse base URL.");
              return (r.path = d.normalizePath(r.path)), d.buildURLFromParts(r);
            }
            var s = d.parseURL(t);
            if (!s) throw Error("Error trying to parse relative URL.");
            if (s.scheme)
              return i.alwaysNormalize
                ? ((s.path = d.normalizePath(s.path)), d.buildURLFromParts(s))
                : t;
            var a = d.parseURL(e);
            if (!a) throw Error("Error trying to parse base URL.");
            if (!a.netLoc && a.path && "/" !== a.path[0]) {
              var n = l.exec(a.path);
              (a.netLoc = n[1]), (a.path = n[2]);
            }
            a.netLoc && !a.path && (a.path = "/");
            var o = {
              scheme: a.scheme,
              netLoc: s.netLoc,
              path: null,
              params: s.params,
              query: s.query,
              fragment: s.fragment,
            };
            if (!s.netLoc && ((o.netLoc = a.netLoc), "/" !== s.path[0])) {
              if (s.path) {
                var h = a.path,
                  u = h.substring(0, h.lastIndexOf("/") + 1) + s.path;
                o.path = d.normalizePath(u);
              } else
                (o.path = a.path),
                  s.params ||
                    ((o.params = a.params), s.query || (o.query = a.query));
            }
            return (
              null === o.path &&
                (o.path = i.alwaysNormalize ? d.normalizePath(s.path) : s.path),
              d.buildURLFromParts(o)
            );
          },
          parseURL: function (e) {
            var t = n.exec(e);
            return t
              ? {
                  scheme: t[1] || "",
                  netLoc: t[2] || "",
                  path: t[3] || "",
                  params: t[4] || "",
                  query: t[5] || "",
                  fragment: t[6] || "",
                }
              : null;
          },
          normalizePath: function (e) {
            for (
              e = e.split("").reverse().join("").replace(o, "");
              e.length !== (e = e.replace(h, "")).length;

            );
            return e.split("").reverse().join("");
          },
          buildURLFromParts: function (e) {
            return (
              e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            );
          },
        }),
        (A.exports = d);
      var L = A.exports;
      function R(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(i), !0).forEach(function (t) {
                !(function (e, t, i) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var i = e[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var r = i.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = i);
                })(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : R(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t),
                  );
                });
        }
        return e;
      }
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      let b =
          Number.isFinite ||
          function (e) {
            return "number" == typeof e && isFinite(e);
          },
        k =
          Number.isSafeInteger ||
          function (e) {
            return "number" == typeof e && Math.abs(e) <= _;
          },
        _ = Number.MAX_SAFE_INTEGER || 9007199254740991,
        C =
          (((u = {}).MEDIA_ATTACHING = "hlsMediaAttaching"),
          (u.MEDIA_ATTACHED = "hlsMediaAttached"),
          (u.MEDIA_DETACHING = "hlsMediaDetaching"),
          (u.MEDIA_DETACHED = "hlsMediaDetached"),
          (u.BUFFER_RESET = "hlsBufferReset"),
          (u.BUFFER_CODECS = "hlsBufferCodecs"),
          (u.BUFFER_CREATED = "hlsBufferCreated"),
          (u.BUFFER_APPENDING = "hlsBufferAppending"),
          (u.BUFFER_APPENDED = "hlsBufferAppended"),
          (u.BUFFER_EOS = "hlsBufferEos"),
          (u.BUFFER_FLUSHING = "hlsBufferFlushing"),
          (u.BUFFER_FLUSHED = "hlsBufferFlushed"),
          (u.MANIFEST_LOADING = "hlsManifestLoading"),
          (u.MANIFEST_LOADED = "hlsManifestLoaded"),
          (u.MANIFEST_PARSED = "hlsManifestParsed"),
          (u.LEVEL_SWITCHING = "hlsLevelSwitching"),
          (u.LEVEL_SWITCHED = "hlsLevelSwitched"),
          (u.LEVEL_LOADING = "hlsLevelLoading"),
          (u.LEVEL_LOADED = "hlsLevelLoaded"),
          (u.LEVEL_UPDATED = "hlsLevelUpdated"),
          (u.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
          (u.LEVELS_UPDATED = "hlsLevelsUpdated"),
          (u.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
          (u.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
          (u.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
          (u.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
          (u.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
          (u.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
          (u.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
          (u.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
          (u.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
          (u.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
          (u.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
          (u.CUES_PARSED = "hlsCuesParsed"),
          (u.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
          (u.INIT_PTS_FOUND = "hlsInitPtsFound"),
          (u.FRAG_LOADING = "hlsFragLoading"),
          (u.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
          (u.FRAG_LOADED = "hlsFragLoaded"),
          (u.FRAG_DECRYPTED = "hlsFragDecrypted"),
          (u.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
          (u.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
          (u.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
          (u.FRAG_PARSED = "hlsFragParsed"),
          (u.FRAG_BUFFERED = "hlsFragBuffered"),
          (u.FRAG_CHANGED = "hlsFragChanged"),
          (u.FPS_DROP = "hlsFpsDrop"),
          (u.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
          (u.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated"),
          (u.ERROR = "hlsError"),
          (u.DESTROYING = "hlsDestroying"),
          (u.KEY_LOADING = "hlsKeyLoading"),
          (u.KEY_LOADED = "hlsKeyLoaded"),
          (u.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
          (u.BACK_BUFFER_REACHED = "hlsBackBufferReached"),
          (u.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded"),
          u),
        w =
          (((c = {}).NETWORK_ERROR = "networkError"),
          (c.MEDIA_ERROR = "mediaError"),
          (c.KEY_SYSTEM_ERROR = "keySystemError"),
          (c.MUX_ERROR = "muxError"),
          (c.OTHER_ERROR = "otherError"),
          c),
        P =
          (((f = {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
          (f.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
          (f.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
          (f.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense"),
          (f.KEY_SYSTEM_LICENSE_REQUEST_FAILED =
            "keySystemLicenseRequestFailed"),
          (f.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED =
            "keySystemServerCertificateRequestFailed"),
          (f.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED =
            "keySystemServerCertificateUpdateFailed"),
          (f.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed"),
          (f.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED =
            "keySystemStatusOutputRestricted"),
          (f.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError"),
          (f.MANIFEST_LOAD_ERROR = "manifestLoadError"),
          (f.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
          (f.MANIFEST_PARSING_ERROR = "manifestParsingError"),
          (f.MANIFEST_INCOMPATIBLE_CODECS_ERROR =
            "manifestIncompatibleCodecsError"),
          (f.LEVEL_EMPTY_ERROR = "levelEmptyError"),
          (f.LEVEL_LOAD_ERROR = "levelLoadError"),
          (f.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
          (f.LEVEL_PARSING_ERROR = "levelParsingError"),
          (f.LEVEL_SWITCH_ERROR = "levelSwitchError"),
          (f.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
          (f.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
          (f.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
          (f.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
          (f.FRAG_LOAD_ERROR = "fragLoadError"),
          (f.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
          (f.FRAG_DECRYPT_ERROR = "fragDecryptError"),
          (f.FRAG_PARSING_ERROR = "fragParsingError"),
          (f.FRAG_GAP = "fragGap"),
          (f.REMUX_ALLOC_ERROR = "remuxAllocError"),
          (f.KEY_LOAD_ERROR = "keyLoadError"),
          (f.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
          (f.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
          (f.BUFFER_INCOMPATIBLE_CODECS_ERROR =
            "bufferIncompatibleCodecsError"),
          (f.BUFFER_APPEND_ERROR = "bufferAppendError"),
          (f.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
          (f.BUFFER_STALLED_ERROR = "bufferStalledError"),
          (f.BUFFER_FULL_ERROR = "bufferFullError"),
          (f.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
          (f.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
          (f.INTERNAL_EXCEPTION = "internalException"),
          (f.INTERNAL_ABORTED = "aborted"),
          (f.UNKNOWN = "unknown"),
          f),
        x = function () {},
        O = { trace: x, debug: x, log: x, warn: x, info: x, error: x },
        F = O,
        M = F,
        N = /^(\d+)x(\d+)$/,
        U = /(.+?)=(".*?"|.*?)(?:,|$)/g;
      class B {
        constructor(e) {
          "string" == typeof e && (e = B.parseAttrList(e)), I(this, e);
        }
        get clientAttrs() {
          return Object.keys(this).filter((e) => "X-" === e.substring(0, 2));
        }
        decimalInteger(e) {
          let t = parseInt(this[e], 10);
          return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
        }
        hexadecimalInteger(e) {
          if (!this[e]) return null;
          {
            let t = (this[e] || "0x").slice(2),
              i = new Uint8Array(
                (t = (1 & t.length ? "0" : "") + t).length / 2,
              );
            for (let e = 0; e < t.length / 2; e++)
              i[e] = parseInt(t.slice(2 * e, 2 * e + 2), 16);
            return i;
          }
        }
        hexadecimalIntegerAsNumber(e) {
          let t = parseInt(this[e], 16);
          return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
        }
        decimalFloatingPoint(e) {
          return parseFloat(this[e]);
        }
        optionalFloat(e, t) {
          let i = this[e];
          return i ? parseFloat(i) : t;
        }
        enumeratedString(e) {
          return this[e];
        }
        bool(e) {
          return "YES" === this[e];
        }
        decimalResolution(e) {
          let t = N.exec(this[e]);
          if (null !== t)
            return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };
        }
        static parseAttrList(e) {
          let t;
          let i = {};
          for (U.lastIndex = 0; null !== (t = U.exec(e)); ) {
            let e = t[2];
            0 === e.indexOf('"') &&
              e.lastIndexOf('"') === e.length - 1 &&
              (e = e.slice(1, -1)),
              (i[t[1].trim()] = e);
          }
          return i;
        }
      }
      class $ {
        constructor(e, t) {
          if (
            ((this.attr = void 0),
            (this._startDate = void 0),
            (this._endDate = void 0),
            (this._badValueForSameId = void 0),
            t)
          ) {
            let i = t.attr;
            for (let t in i)
              if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== i[t]) {
                M.warn(
                  `DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`,
                ),
                  (this._badValueForSameId = t);
                break;
              }
            e = I(new B({}), i, e);
          }
          if (
            ((this.attr = e),
            (this._startDate = new Date(e["START-DATE"])),
            "END-DATE" in this.attr)
          ) {
            let e = new Date(this.attr["END-DATE"]);
            b(e.getTime()) && (this._endDate = e);
          }
        }
        get id() {
          return this.attr.ID;
        }
        get class() {
          return this.attr.CLASS;
        }
        get startDate() {
          return this._startDate;
        }
        get endDate() {
          if (this._endDate) return this._endDate;
          let e = this.duration;
          return null !== e
            ? new Date(this._startDate.getTime() + 1e3 * e)
            : null;
        }
        get duration() {
          if ("DURATION" in this.attr) {
            let e = this.attr.decimalFloatingPoint("DURATION");
            if (b(e)) return e;
          } else if (this._endDate)
            return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
          return null;
        }
        get plannedDuration() {
          return "PLANNED-DURATION" in this.attr
            ? this.attr.decimalFloatingPoint("PLANNED-DURATION")
            : null;
        }
        get endOnNext() {
          return this.attr.bool("END-ON-NEXT");
        }
        get isValid() {
          return (
            !!this.id &&
            !this._badValueForSameId &&
            b(this.startDate.getTime()) &&
            (null === this.duration || this.duration >= 0) &&
            (!this.endOnNext || !!this.class)
          );
        }
      }
      class G {
        constructor() {
          (this.aborted = !1),
            (this.loaded = 0),
            (this.retry = 0),
            (this.total = 0),
            (this.chunkCount = 0),
            (this.bwEstimate = 0),
            (this.loading = { start: 0, first: 0, end: 0 }),
            (this.parsing = { start: 0, end: 0 }),
            (this.buffering = { start: 0, first: 0, end: 0 });
        }
      }
      var K = { AUDIO: "audio", VIDEO: "video", AUDIOVIDEO: "audiovideo" };
      class V {
        constructor(e) {
          (this._byteRange = null),
            (this._url = null),
            (this.baseurl = void 0),
            (this.relurl = void 0),
            (this.elementaryStreams = {
              [K.AUDIO]: null,
              [K.VIDEO]: null,
              [K.AUDIOVIDEO]: null,
            }),
            (this.baseurl = e);
        }
        setByteRange(e, t) {
          let i;
          let r = e.split("@", 2);
          (i =
            1 === r.length
              ? (null == t ? void 0 : t.byteRangeEndOffset) || 0
              : parseInt(r[1])),
            (this._byteRange = [i, parseInt(r[0]) + i]);
        }
        get byteRange() {
          return this._byteRange ? this._byteRange : [];
        }
        get byteRangeStartOffset() {
          return this.byteRange[0];
        }
        get byteRangeEndOffset() {
          return this.byteRange[1];
        }
        get url() {
          return (
            !this._url &&
              this.baseurl &&
              this.relurl &&
              (this._url = L.buildAbsoluteURL(this.baseurl, this.relurl, {
                alwaysNormalize: !0,
              })),
            this._url || ""
          );
        }
        set url(e) {
          this._url = e;
        }
      }
      class H extends V {
        constructor(e, t) {
          super(t),
            (this._decryptdata = null),
            (this.rawProgramDateTime = null),
            (this.programDateTime = null),
            (this.tagList = []),
            (this.duration = 0),
            (this.sn = 0),
            (this.levelkeys = void 0),
            (this.type = void 0),
            (this.loader = null),
            (this.keyLoader = null),
            (this.level = -1),
            (this.cc = 0),
            (this.startPTS = void 0),
            (this.endPTS = void 0),
            (this.startDTS = void 0),
            (this.endDTS = void 0),
            (this.start = 0),
            (this.deltaPTS = void 0),
            (this.maxStartPTS = void 0),
            (this.minEndPTS = void 0),
            (this.stats = new G()),
            (this.data = void 0),
            (this.bitrateTest = !1),
            (this.title = null),
            (this.initSegment = null),
            (this.endList = void 0),
            (this.gap = void 0),
            (this.urlId = 0),
            (this.type = e);
        }
        get decryptdata() {
          let { levelkeys: e } = this;
          if (!e && !this._decryptdata) return null;
          if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
            let e = this.levelkeys.identity;
            if (e) this._decryptdata = e.getDecryptData(this.sn);
            else {
              let e = Object.keys(this.levelkeys);
              if (1 === e.length)
                return (this._decryptdata = this.levelkeys[e[0]].getDecryptData(
                  this.sn,
                ));
            }
          }
          return this._decryptdata;
        }
        get end() {
          return this.start + this.duration;
        }
        get endProgramDateTime() {
          if (null === this.programDateTime || !b(this.programDateTime))
            return null;
          let e = b(this.duration) ? this.duration : 0;
          return this.programDateTime + 1e3 * e;
        }
        get encrypted() {
          var e;
          if (null != (e = this._decryptdata) && e.encrypted) return !0;
          if (this.levelkeys) {
            let e = Object.keys(this.levelkeys),
              t = e.length;
            if (t > 1 || (1 === t && this.levelkeys[e[0]].encrypted)) return !0;
          }
          return !1;
        }
        setKeyFormat(e) {
          if (this.levelkeys) {
            let t = this.levelkeys[e];
            t &&
              !this._decryptdata &&
              (this._decryptdata = t.getDecryptData(this.sn));
          }
        }
        abortRequests() {
          var e, t;
          null == (e = this.loader) || e.abort(),
            null == (t = this.keyLoader) || t.abort();
        }
        setElementaryStreamInfo(e, t, i, r, s, a = !1) {
          let { elementaryStreams: n } = this,
            l = n[e];
          if (!l) {
            n[e] = {
              startPTS: t,
              endPTS: i,
              startDTS: r,
              endDTS: s,
              partial: a,
            };
            return;
          }
          (l.startPTS = Math.min(l.startPTS, t)),
            (l.endPTS = Math.max(l.endPTS, i)),
            (l.startDTS = Math.min(l.startDTS, r)),
            (l.endDTS = Math.max(l.endDTS, s));
        }
        clearElementaryStreamInfo() {
          let { elementaryStreams: e } = this;
          (e[K.AUDIO] = null), (e[K.VIDEO] = null), (e[K.AUDIOVIDEO] = null);
        }
      }
      class Y extends V {
        constructor(e, t, i, r, s) {
          super(i),
            (this.fragOffset = 0),
            (this.duration = 0),
            (this.gap = !1),
            (this.independent = !1),
            (this.relurl = void 0),
            (this.fragment = void 0),
            (this.index = void 0),
            (this.stats = new G()),
            (this.duration = e.decimalFloatingPoint("DURATION")),
            (this.gap = e.bool("GAP")),
            (this.independent = e.bool("INDEPENDENT")),
            (this.relurl = e.enumeratedString("URI")),
            (this.fragment = t),
            (this.index = r);
          let a = e.enumeratedString("BYTERANGE");
          a && this.setByteRange(a, s),
            s && (this.fragOffset = s.fragOffset + s.duration);
        }
        get start() {
          return this.fragment.start + this.fragOffset;
        }
        get end() {
          return this.start + this.duration;
        }
        get loaded() {
          let { elementaryStreams: e } = this;
          return !!(e.audio || e.video || e.audiovideo);
        }
      }
      class W {
        constructor(e) {
          (this.PTSKnown = !1),
            (this.alignedSliding = !1),
            (this.averagetargetduration = void 0),
            (this.endCC = 0),
            (this.endSN = 0),
            (this.fragments = void 0),
            (this.fragmentHint = void 0),
            (this.partList = null),
            (this.dateRanges = void 0),
            (this.live = !0),
            (this.ageHeader = 0),
            (this.advancedDateTime = void 0),
            (this.updated = !0),
            (this.advanced = !0),
            (this.availabilityDelay = void 0),
            (this.misses = 0),
            (this.startCC = 0),
            (this.startSN = 0),
            (this.startTimeOffset = null),
            (this.targetduration = 0),
            (this.totalduration = 0),
            (this.type = null),
            (this.url = void 0),
            (this.m3u8 = ""),
            (this.version = null),
            (this.canBlockReload = !1),
            (this.canSkipUntil = 0),
            (this.canSkipDateRanges = !1),
            (this.skippedSegments = 0),
            (this.recentlyRemovedDateranges = void 0),
            (this.partHoldBack = 0),
            (this.holdBack = 0),
            (this.partTarget = 0),
            (this.preloadHint = void 0),
            (this.renditionReports = void 0),
            (this.tuneInGoal = 0),
            (this.deltaUpdateFailed = void 0),
            (this.driftStartTime = 0),
            (this.driftEndTime = 0),
            (this.driftStart = 0),
            (this.driftEnd = 0),
            (this.encryptedFragments = void 0),
            (this.playlistParsingError = null),
            (this.variableList = null),
            (this.hasVariableRefs = !1),
            (this.fragments = []),
            (this.encryptedFragments = []),
            (this.dateRanges = {}),
            (this.url = e);
        }
        reloaded(e) {
          if (!e) {
            (this.advanced = !0), (this.updated = !0);
            return;
          }
          let t = this.lastPartSn - e.lastPartSn,
            i = this.lastPartIndex - e.lastPartIndex;
          (this.updated = this.endSN !== e.endSN || !!i || !!t || !this.live),
            (this.advanced =
              this.endSN > e.endSN || t > 0 || (0 === t && i > 0)),
            this.updated || this.advanced
              ? (this.misses = Math.floor(0.6 * e.misses))
              : (this.misses = e.misses + 1),
            (this.availabilityDelay = e.availabilityDelay);
        }
        get hasProgramDateTime() {
          return (
            !!this.fragments.length &&
            b(this.fragments[this.fragments.length - 1].programDateTime)
          );
        }
        get levelTargetDuration() {
          return this.averagetargetduration || this.targetduration || 10;
        }
        get drift() {
          let e = this.driftEndTime - this.driftStartTime;
          return e > 0 ? (1e3 * (this.driftEnd - this.driftStart)) / e : 1;
        }
        get edge() {
          return this.partEnd || this.fragmentEnd;
        }
        get partEnd() {
          var e;
          return null != (e = this.partList) && e.length
            ? this.partList[this.partList.length - 1].end
            : this.fragmentEnd;
        }
        get fragmentEnd() {
          var e;
          return null != (e = this.fragments) && e.length
            ? this.fragments[this.fragments.length - 1].end
            : 0;
        }
        get age() {
          return this.advancedDateTime
            ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3
            : 0;
        }
        get lastPartIndex() {
          var e;
          return null != (e = this.partList) && e.length
            ? this.partList[this.partList.length - 1].index
            : -1;
        }
        get lastPartSn() {
          var e;
          return null != (e = this.partList) && e.length
            ? this.partList[this.partList.length - 1].fragment.sn
            : this.endSN;
        }
      }
      function j(e) {
        return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
      }
      function q(e) {
        return Uint8Array.from(unescape(encodeURIComponent(e)), (e) =>
          e.charCodeAt(0),
        );
      }
      let X = "undefined" != typeof self ? self : void 0;
      var z = {
          CLEARKEY: "org.w3.clearkey",
          FAIRPLAY: "com.apple.fps",
          PLAYREADY: "com.microsoft.playready",
          WIDEVINE: "com.widevine.alpha",
        },
        Q = {
          CLEARKEY: "org.w3.clearkey",
          FAIRPLAY: "com.apple.streamingkeydelivery",
          PLAYREADY: "com.microsoft.playready",
          WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        };
      function J(e) {
        switch (e) {
          case Q.FAIRPLAY:
            return z.FAIRPLAY;
          case Q.PLAYREADY:
            return z.PLAYREADY;
          case Q.WIDEVINE:
            return z.WIDEVINE;
          case Q.CLEARKEY:
            return z.CLEARKEY;
        }
      }
      var Z = {
        CENC: "1077efecc0b24d02ace33c1e52e2fb4b",
        CLEARKEY: "e2719d58a985b3c9781ab030af78d30e",
        PLAYREADY: "9a04f07998404286ab92e65be0885f95",
        WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed",
      };
      function ee(e) {
        return e === Z.WIDEVINE
          ? z.WIDEVINE
          : e === Z.PLAYREADY
            ? z.PLAYREADY
            : e === Z.CENC || e === Z.CLEARKEY
              ? z.CLEARKEY
              : void 0;
      }
      function et(e) {
        switch (e) {
          case z.FAIRPLAY:
            return Q.FAIRPLAY;
          case z.PLAYREADY:
            return Q.PLAYREADY;
          case z.WIDEVINE:
            return Q.WIDEVINE;
          case z.CLEARKEY:
            return Q.CLEARKEY;
        }
      }
      function ei(e) {
        let { drmSystems: t, widevineLicenseUrl: i } = e,
          r = t
            ? [z.FAIRPLAY, z.WIDEVINE, z.PLAYREADY, z.CLEARKEY].filter(
                (e) => !!t[e],
              )
            : [];
        return !r[z.WIDEVINE] && i && r.push(z.WIDEVINE), r;
      }
      let er =
        null != X && null != (g = X.navigator) && g.requestMediaKeySystemAccess
          ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
          : null;
      function es(e) {
        let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
          i = String.fromCharCode.apply(null, Array.from(t)),
          r = i.substring(i.indexOf("<"), i.length),
          s = new DOMParser()
            .parseFromString(r, "text/xml")
            .getElementsByTagName("KID")[0];
        if (s) {
          let e = s.childNodes[0]
            ? s.childNodes[0].nodeValue
            : s.getAttribute("VALUE");
          if (e) {
            let t = j(e).subarray(0, 16);
            return (
              !(function (e) {
                let t = function (e, t, i) {
                  let r = e[t];
                  (e[t] = e[i]), (e[i] = r);
                };
                t(e, 0, 3), t(e, 1, 2), t(e, 4, 5), t(e, 6, 7);
              })(t),
              t
            );
          }
        }
        return null;
      }
      function ea(e, t, i) {
        return Uint8Array.prototype.slice
          ? e.slice(t, i)
          : new Uint8Array(Array.prototype.slice.call(e, t, i));
      }
      let en = (e, t) =>
          t + 10 <= e.length &&
          73 === e[t] &&
          68 === e[t + 1] &&
          51 === e[t + 2] &&
          e[t + 3] < 255 &&
          e[t + 4] < 255 &&
          e[t + 6] < 128 &&
          e[t + 7] < 128 &&
          e[t + 8] < 128 &&
          e[t + 9] < 128,
        el = (e, t) =>
          t + 10 <= e.length &&
          51 === e[t] &&
          68 === e[t + 1] &&
          73 === e[t + 2] &&
          e[t + 3] < 255 &&
          e[t + 4] < 255 &&
          e[t + 6] < 128 &&
          e[t + 7] < 128 &&
          e[t + 8] < 128 &&
          e[t + 9] < 128,
        eo = (e, t) => {
          let i = t,
            r = 0;
          for (; en(e, t); )
            (r += 10 + eh(e, t + 6)), el(e, t + 10) && (r += 10), (t += r);
          if (r > 0) return e.subarray(i, i + r);
        },
        eh = (e, t) =>
          ((127 & e[t]) << 21) |
          ((127 & e[t + 1]) << 14) |
          ((127 & e[t + 2]) << 7) |
          (127 & e[t + 3]),
        ed = (e, t) => en(e, t) && eh(e, t + 6) + 10 <= e.length - t,
        eu = (e) => {
          let t = eg(e);
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            if (ec(i)) return ey(i);
          }
        },
        ec = (e) =>
          e &&
          "PRIV" === e.key &&
          "com.apple.streaming.transportStreamTimestamp" === e.info,
        ef = (e) => {
          let t = String.fromCharCode(e[0], e[1], e[2], e[3]),
            i = eh(e, 4);
          return { type: t, size: i, data: e.subarray(10, 10 + i) };
        },
        eg = (e) => {
          let t = 0,
            i = [];
          for (; en(e, t); ) {
            let r = eh(e, t + 6),
              s = (t += 10) + r;
            for (; t + 8 < s; ) {
              let r = ef(e.subarray(t)),
                s = em(r);
              s && i.push(s), (t += r.size + 10);
            }
            el(e, t) && (t += 10);
          }
          return i;
        },
        em = (e) =>
          "PRIV" === e.type ? ep(e) : "W" === e.type[0] ? eT(e) : eE(e),
        ep = (e) => {
          if (e.size < 2) return;
          let t = ev(e.data, !0),
            i = new Uint8Array(e.data.subarray(t.length + 1));
          return { key: e.type, info: t, data: i.buffer };
        },
        eE = (e) => {
          if (e.size < 2) return;
          if ("TXXX" === e.type) {
            let t = 1,
              i = ev(e.data.subarray(t), !0);
            t += i.length + 1;
            let r = ev(e.data.subarray(t));
            return { key: e.type, info: i, data: r };
          }
          let t = ev(e.data.subarray(1));
          return { key: e.type, data: t };
        },
        eT = (e) => {
          if ("WXXX" === e.type) {
            if (e.size < 2) return;
            let t = 1,
              i = ev(e.data.subarray(t), !0);
            t += i.length + 1;
            let r = ev(e.data.subarray(t));
            return { key: e.type, info: i, data: r };
          }
          let t = ev(e.data);
          return { key: e.type, data: t };
        },
        ey = (e) => {
          if (8 === e.data.byteLength) {
            let t = new Uint8Array(e.data),
              i = 1 & t[3],
              r = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
            return (r /= 45), i && (r += 47721858.84), Math.round(r);
          }
        },
        ev = (e, t = !1) => {
          let i, s;
          let a = (function () {
            if (!navigator.userAgent.includes("PlayStation 4"))
              return (
                r ||
                  void 0 === self.TextDecoder ||
                  (r = new self.TextDecoder("utf-8")),
                r
              );
          })();
          if (a) {
            let i = a.decode(e);
            if (t) {
              let e = i.indexOf("\0");
              return -1 !== e ? i.substring(0, e) : i;
            }
            return i.replace(/\0/g, "");
          }
          let n = e.length,
            l = "",
            o = 0;
          for (; o < n && (0 !== (i = e[o++]) || !t); )
            if (0 !== i && 3 !== i)
              switch (i >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  l += String.fromCharCode(i);
                  break;
                case 12:
                case 13:
                  l += String.fromCharCode(((31 & i) << 6) | (63 & e[o++]));
                  break;
                case 14:
                  l += String.fromCharCode(
                    ((15 & i) << 12) |
                      ((63 & e[o++]) << 6) |
                      ((63 & e[o++]) << 0),
                  );
              }
          return l;
        },
        eS = {
          hexDump: function (e) {
            let t = "";
            for (let i = 0; i < e.length; i++) {
              let r = e[i].toString(16);
              r.length < 2 && (r = "0" + r), (t += r);
            }
            return t;
          },
        },
        eA = [].push,
        eL = { video: 1, audio: 2, id3: 3, text: 4 };
      function eR(e) {
        return String.fromCharCode.apply(null, e);
      }
      function eD(e, t) {
        let i = (e[t] << 8) | e[t + 1];
        return i < 0 ? 65536 + i : i;
      }
      function eI(e, t) {
        let i = ek(e, t);
        return i < 0 ? 4294967296 + i : i;
      }
      function eb(e, t) {
        let i = eI(e, t);
        return (i *= 4294967296), (i += eI(e, t + 4));
      }
      function ek(e, t) {
        return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
      }
      function e_(e, t, i) {
        (e[t] = i >> 24),
          (e[t + 1] = (i >> 16) & 255),
          (e[t + 2] = (i >> 8) & 255),
          (e[t + 3] = 255 & i);
      }
      function eC(e, t) {
        let i = [];
        if (!t.length) return i;
        let r = e.byteLength;
        for (let s = 0; s < r; ) {
          let a = eI(e, s),
            n = eR(e.subarray(s + 4, s + 8)),
            l = a > 1 ? s + a : r;
          if (n === t[0]) {
            if (1 === t.length) i.push(e.subarray(s + 8, l));
            else {
              let r = eC(e.subarray(s + 8, l), t.slice(1));
              r.length && eA.apply(i, r);
            }
          }
          s = l;
        }
        return i;
      }
      function ew(e) {
        let t = [],
          i = eC(e, ["moov", "trak"]);
        for (let e = 0; e < i.length; e++) {
          let r = i[e],
            s = eC(r, ["tkhd"])[0];
          if (s) {
            let e = s[0],
              i = eI(s, 0 === e ? 12 : 20),
              a = eC(r, ["mdia", "mdhd"])[0];
            if (a) {
              e = a[0];
              let s = eI(a, 0 === e ? 12 : 20),
                n = eC(r, ["mdia", "hdlr"])[0];
              if (n) {
                let e = eR(n.subarray(8, 12)),
                  a = { soun: K.AUDIO, vide: K.VIDEO }[e];
                if (a) {
                  let e = (function (e) {
                    let t = e.subarray(8),
                      i = t.subarray(86),
                      r = eR(t.subarray(4, 8)),
                      s = r,
                      a = "enca" === r || "encv" === r;
                    if (a) {
                      let e = eC(t, [r])[0].subarray("enca" === r ? 28 : 78);
                      eC(e, ["sinf"]).forEach((e) => {
                        let t = eC(e, ["schm"])[0];
                        if (t) {
                          let i = eR(t.subarray(4, 8));
                          if ("cbcs" === i || "cenc" === i) {
                            let t = eC(e, ["frma"])[0];
                            t && (s = eR(t));
                          }
                        }
                      });
                    }
                    switch (s) {
                      case "avc1":
                      case "avc2":
                      case "avc3":
                      case "avc4": {
                        let e = eC(i, ["avcC"])[0];
                        s += "." + ex(e[1]) + ex(e[2]) + ex(e[3]);
                        break;
                      }
                      case "mp4a": {
                        let e = eC(t, [r])[0],
                          i = eC(e.subarray(28), ["esds"])[0];
                        if (i && i.length > 12) {
                          let e = 4;
                          if (3 !== i[e++]) break;
                          e = eP(i, e) + 2;
                          let t = i[e++];
                          if (
                            (128 & t && (e += 2),
                            64 & t && (e += i[e++]),
                            4 !== i[e++])
                          )
                            break;
                          e = eP(i, e);
                          let r = i[e++];
                          if (64 === r) s += "." + ex(r);
                          else break;
                          if (((e += 12), 5 !== i[e++])) break;
                          e = eP(i, e);
                          let a = i[e++],
                            n = (248 & a) >> 3;
                          31 === n &&
                            (n += 1 + ((7 & a) << 3) + ((224 & i[e]) >> 5)),
                            (s += "." + n);
                        }
                        break;
                      }
                      case "hvc1":
                      case "hev1": {
                        let e = eC(i, ["hvcC"])[0],
                          t = e[1],
                          r = ["", "A", "B", "C"][t >> 6],
                          a = eI(e, 2),
                          n = e[12],
                          l = e.subarray(6, 12);
                        s +=
                          "." +
                          r +
                          (31 & t) +
                          "." +
                          a.toString(16).toUpperCase() +
                          "." +
                          ((32 & t) >> 5 ? "H" : "L") +
                          n;
                        let o = "";
                        for (let e = l.length; e--; ) {
                          let t = l[e];
                          (t || o) &&
                            (o = "." + t.toString(16).toUpperCase() + o);
                        }
                        s += o;
                        break;
                      }
                      case "dvh1":
                      case "dvhe": {
                        let e = eC(i, ["dvcC"])[0],
                          t = (e[2] >> 1) & 127,
                          r = ((e[2] << 5) & 32) | ((e[3] >> 3) & 31);
                        s += "." + eO(t) + "." + eO(r);
                        break;
                      }
                      case "vp09": {
                        let e = eC(i, ["vpcC"])[0],
                          t = e[4],
                          r = e[5],
                          a = (e[6] >> 4) & 15;
                        s += "." + eO(t) + "." + eO(r) + "." + eO(a);
                        break;
                      }
                      case "av01": {
                        let e = eC(i, ["av1C"])[0],
                          t = e[1] >>> 5,
                          r = 31 & e[1],
                          a = e[2] >>> 7 ? "H" : "M",
                          n = (64 & e[2]) >> 6,
                          l = (32 & e[2]) >> 5,
                          o = (16 & e[2]) >> 4,
                          h = (8 & e[2]) >> 3,
                          d = (4 & e[2]) >> 2,
                          u = 3 & e[2];
                        s +=
                          "." +
                          t +
                          "." +
                          eO(r) +
                          a +
                          "." +
                          eO(2 === t && n ? (l ? 12 : 10) : n ? 10 : 8) +
                          "." +
                          o +
                          "." +
                          h +
                          d +
                          u +
                          "." +
                          eO(1) +
                          "." +
                          eO(1) +
                          "." +
                          eO(1) +
                          ".0";
                      }
                    }
                    return { codec: s, encrypted: a };
                  })(eC(r, ["mdia", "minf", "stbl", "stsd"])[0]);
                  (t[i] = { timescale: s, type: a }),
                    (t[a] = D({ timescale: s, id: i }, e));
                }
              }
            }
          }
        }
        return (
          eC(e, ["moov", "mvex", "trex"]).forEach((e) => {
            let i = t[eI(e, 4)];
            i && (i.default = { duration: eI(e, 12), flags: eI(e, 20) });
          }),
          t
        );
      }
      function eP(e, t) {
        let i = t + 5;
        for (; 128 & e[t++] && t < i; );
        return t;
      }
      function ex(e) {
        return ("0" + e.toString(16).toUpperCase()).slice(-2);
      }
      function eO(e) {
        return (e < 10 ? "0" : "") + e;
      }
      function eF(e) {
        let t = eC(e, ["schm"])[0];
        if (t) {
          let i = eR(t.subarray(4, 8));
          if ("cbcs" === i || "cenc" === i) return eC(e, ["schi", "tenc"])[0];
        }
        return null;
      }
      function eM(e, t) {
        let i = new Uint8Array(e.length + t.length);
        return i.set(e), i.set(t, e.length), i;
      }
      function eN(e, t) {
        let i = [],
          r = t.samples,
          s = t.timescale,
          a = t.id,
          n = !1;
        return (
          eC(r, ["moof"]).map((l) => {
            let o = l.byteOffset - 8;
            eC(l, ["traf"]).map((l) => {
              let h = eC(l, ["tfdt"]).map((e) => {
                let t = e[0],
                  i = eI(e, 4);
                return 1 === t && ((i *= 4294967296), (i += eI(e, 8))), i / s;
              })[0];
              return (
                void 0 !== h && (e = h),
                eC(l, ["tfhd"]).map((h) => {
                  let d = eI(h, 4),
                    u = 16777215 & eI(h, 0),
                    c = 0,
                    f = 0,
                    g = 8;
                  d === a &&
                    ((1 & u) != 0 && (g += 8),
                    (2 & u) != 0 && (g += 4),
                    (8 & u) != 0 && ((c = eI(h, g)), (g += 4)),
                    (16 & u) != 0 && ((f = eI(h, g)), (g += 4)),
                    (32 & u) != 0 && (g += 4),
                    "video" === t.type &&
                      (n = (function (e) {
                        if (!e) return !1;
                        let t = e.indexOf("."),
                          i = t < 0 ? e : e.substring(0, t);
                        return (
                          "hvc1" === i ||
                          "hev1" === i ||
                          "dvh1" === i ||
                          "dvhe" === i
                        );
                      })(t.codec)),
                    eC(l, ["trun"]).map((a) => {
                      let l = a[0],
                        h = 16777215 & eI(a, 0),
                        d = 0,
                        u = (256 & h) != 0,
                        g = 0,
                        m = (512 & h) != 0,
                        p = 0,
                        E = (1024 & h) != 0,
                        T = (2048 & h) != 0,
                        y = 0,
                        v = eI(a, 4),
                        S = 8;
                      (1 & h) != 0 && ((d = eI(a, S)), (S += 4)),
                        (4 & h) != 0 && (S += 4);
                      let A = d + o;
                      for (let o = 0; o < v; o++) {
                        if (
                          (u ? ((g = eI(a, S)), (S += 4)) : (g = c),
                          m ? ((p = eI(a, S)), (S += 4)) : (p = f),
                          E && (S += 4),
                          T && ((y = 0 === l ? eI(a, S) : ek(a, S)), (S += 4)),
                          t.type === K.VIDEO)
                        ) {
                          let t = 0;
                          for (; t < p; ) {
                            let a = eI(r, A);
                            (A += 4),
                              (function (e, t) {
                                if (!e) return 6 == (31 & t);
                                {
                                  let e = (t >> 1) & 63;
                                  return 39 === e || 40 === e;
                                }
                              })(n, r[A]) &&
                                eU(
                                  r.subarray(A, A + a),
                                  n ? 2 : 1,
                                  e + y / s,
                                  i,
                                ),
                              (A += a),
                              (t += a + 4);
                          }
                        }
                        e += g / s;
                      }
                    }));
                })
              );
            });
          }),
          i
        );
      }
      function eU(e, t, i, r) {
        let s;
        let a = eB(e);
        s = 0 + t;
        let n = 0,
          l = 0,
          o = 0;
        for (; s < a.length; ) {
          n = 0;
          do {
            if (s >= a.length) break;
            n += o = a[s++];
          } while (255 === o);
          l = 0;
          do {
            if (s >= a.length) break;
            l += o = a[s++];
          } while (255 === o);
          let e = a.length - s,
            t = s;
          if (l < e) s += l;
          else if (l > e) {
            M.error(
              `Malformed SEI payload. ${l} is too small, only ${e} bytes left to parse.`,
            );
            break;
          }
          if (4 === n) {
            if (181 === a[t++]) {
              let e = eD(a, t);
              if (((t += 2), 49 === e)) {
                let e = eI(a, t);
                if (((t += 4), 1195456820 === e)) {
                  let e = a[t++];
                  if (3 === e) {
                    let s = a[t++],
                      l = 31 & s,
                      o = 64 & s,
                      h = o ? 2 + 3 * l : 0,
                      d = new Uint8Array(h);
                    if (o) {
                      d[0] = s;
                      for (let e = 1; e < h; e++) d[e] = a[t++];
                    }
                    r.push({ type: e, payloadType: n, pts: i, bytes: d });
                  }
                }
              }
            }
          } else if (5 === n && l > 16) {
            let e = [];
            for (let i = 0; i < 16; i++) {
              let r = a[t++].toString(16);
              e.push(1 == r.length ? "0" + r : r),
                (3 === i || 5 === i || 7 === i || 9 === i) && e.push("-");
            }
            let s = l - 16,
              o = new Uint8Array(s);
            for (let e = 0; e < s; e++) o[e] = a[t++];
            r.push({
              payloadType: n,
              pts: i,
              uuid: e.join(""),
              userData: ev(o),
              userDataBytes: o,
            });
          }
        }
      }
      function eB(e) {
        let t = e.byteLength,
          i = [],
          r = 1;
        for (; r < t - 2; )
          0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2]
            ? (i.push(r + 2), (r += 2))
            : r++;
        if (0 === i.length) return e;
        let s = t - i.length,
          a = new Uint8Array(s),
          n = 0;
        for (r = 0; r < s; n++, r++)
          n === i[0] && (n++, i.shift()), (a[r] = e[n]);
        return a;
      }
      let e$ = {};
      class eG {
        static clearKeyUriToKeyIdMap() {
          e$ = {};
        }
        constructor(e, t, i, r = [1], s = null) {
          (this.uri = void 0),
            (this.method = void 0),
            (this.keyFormat = void 0),
            (this.keyFormatVersions = void 0),
            (this.encrypted = void 0),
            (this.isCommonEncryption = void 0),
            (this.iv = null),
            (this.key = null),
            (this.keyId = null),
            (this.pssh = null),
            (this.method = e),
            (this.uri = t),
            (this.keyFormat = i),
            (this.keyFormatVersions = r),
            (this.iv = s),
            (this.encrypted = !!e && "NONE" !== e),
            (this.isCommonEncryption = this.encrypted && "AES-128" !== e);
        }
        isSupported() {
          if (this.method) {
            if ("AES-128" === this.method || "NONE" === this.method) return !0;
            if ("identity" === this.keyFormat)
              return "SAMPLE-AES" === this.method;
            switch (this.keyFormat) {
              case Q.FAIRPLAY:
              case Q.WIDEVINE:
              case Q.PLAYREADY:
              case Q.CLEARKEY:
                return (
                  -1 !==
                  [
                    "ISO-23001-7",
                    "SAMPLE-AES",
                    "SAMPLE-AES-CENC",
                    "SAMPLE-AES-CTR",
                  ].indexOf(this.method)
                );
            }
          }
          return !1;
        }
        getDecryptData(e) {
          if (!this.encrypted || !this.uri) return null;
          if ("AES-128" === this.method && this.uri && !this.iv) {
            "number" != typeof e &&
              ("AES-128" !== this.method ||
                this.iv ||
                M.warn(
                  `missing IV for initialization segment with method="${this.method}" - compliance issue`,
                ),
              (e = 0));
            let t = (function (e) {
              let t = new Uint8Array(16);
              for (let i = 12; i < 16; i++) t[i] = (e >> (8 * (15 - i))) & 255;
              return t;
            })(e);
            return new eG(
              this.method,
              this.uri,
              "identity",
              this.keyFormatVersions,
              t,
            );
          }
          let t = (function (e) {
            let t = e.split(":"),
              i = null;
            if ("data" === t[0] && 2 === t.length) {
              let e = t[1].split(";"),
                r = e[e.length - 1].split(",");
              if (2 === r.length) {
                let t = "base64" === r[0],
                  s = r[1];
                t
                  ? (e.splice(-1, 1), (i = j(s)))
                  : (i = (function (e) {
                      let t = q(e).subarray(0, 16),
                        i = new Uint8Array(16);
                      return i.set(t, 16 - t.length), i;
                    })(s));
              }
            }
            return i;
          })(this.uri);
          if (t)
            switch (this.keyFormat) {
              case Q.WIDEVINE:
                (this.pssh = t),
                  t.length >= 22 &&
                    (this.keyId = t.subarray(t.length - 22, t.length - 6));
                break;
              case Q.PLAYREADY: {
                let e = new Uint8Array([
                  154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224,
                  136, 95, 149,
                ]);
                (this.pssh = (function (e, t, i) {
                  let r, s;
                  if (16 !== e.byteLength)
                    throw RangeError("Invalid system id");
                  (r = new Uint8Array()), (s = new Uint8Array());
                  let a = new Uint8Array(4);
                  return (
                    i &&
                      i.byteLength > 0 &&
                      new DataView(a.buffer).setUint32(0, i.byteLength, !1),
                    (function (e, ...t) {
                      let i = t.length,
                        r = 8,
                        s = i;
                      for (; s--; ) r += t[s].byteLength;
                      let a = new Uint8Array(r);
                      for (
                        a[0] = (r >> 24) & 255,
                          a[1] = (r >> 16) & 255,
                          a[2] = (r >> 8) & 255,
                          a[3] = 255 & r,
                          a.set(e, 4),
                          s = 0,
                          r = 8;
                        s < i;
                        s++
                      )
                        a.set(t[s], r), (r += t[s].byteLength);
                      return a;
                    })(
                      [112, 115, 115, 104],
                      new Uint8Array([0, 0, 0, 0]),
                      e,
                      s,
                      r,
                      a,
                      i || new Uint8Array(),
                    )
                  );
                })(e, 0, t)),
                  (this.keyId = es(t));
                break;
              }
              default: {
                let e = t.subarray(0, 16);
                if (16 !== e.length) {
                  let t = new Uint8Array(16);
                  t.set(e, 16 - e.length), (e = t);
                }
                this.keyId = e;
              }
            }
          if (!this.keyId || 16 !== this.keyId.byteLength) {
            let e = e$[this.uri];
            if (!e) {
              let t = Object.keys(e$).length % Number.MAX_SAFE_INTEGER;
              new DataView((e = new Uint8Array(16)).buffer, 12, 4).setUint32(
                0,
                t,
              ),
                (e$[this.uri] = e);
            }
            this.keyId = e;
          }
          return this;
        }
      }
      let eK = /\{\$([a-zA-Z0-9-_]+)\}/g;
      function eV(e, t, i) {
        if (null !== e.variableList || e.hasVariableRefs)
          for (let r = i.length; r--; ) {
            let s = i[r],
              a = t[s];
            a && (t[s] = eH(e, a));
          }
      }
      function eH(e, t) {
        if (null !== e.variableList || e.hasVariableRefs) {
          let i = e.variableList;
          return t.replace(eK, (t) => {
            let r = t.substring(2, t.length - 1),
              s = null == i ? void 0 : i[r];
            return void 0 === s
              ? (e.playlistParsingError ||
                  (e.playlistParsingError = Error(
                    `Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r}"`,
                  )),
                t)
              : s;
          });
        }
        return t;
      }
      function eY(e, t, i) {
        let r,
          s,
          a = e.variableList;
        if ((a || (e.variableList = a = {}), "QUERYPARAM" in t)) {
          r = t.QUERYPARAM;
          try {
            let e = new self.URL(i).searchParams;
            if (e.has(r)) s = e.get(r);
            else
              throw Error(
                `"${r}" does not match any query parameter in URI: "${i}"`,
              );
          } catch (t) {
            e.playlistParsingError ||
              (e.playlistParsingError = Error(
                `EXT-X-DEFINE QUERYPARAM: ${t.message}`,
              ));
          }
        } else (r = t.NAME), (s = t.VALUE);
        r in a
          ? e.playlistParsingError ||
            (e.playlistParsingError = Error(
              `EXT-X-DEFINE duplicate Variable Name declarations: "${r}"`,
            ))
          : (a[r] = s || "");
      }
      function eW(e = !0) {
        if ("undefined" != typeof self)
          return (
            ((e || !self.MediaSource) && self.ManagedMediaSource) ||
            self.MediaSource ||
            self.WebKitMediaSource
          );
      }
      let ej = {
        audio: {
          a3ds: 1,
          "ac-3": 0.95,
          "ac-4": 1,
          alac: 0.9,
          alaw: 1,
          dra1: 1,
          "dts+": 1,
          "dts-": 1,
          dtsc: 1,
          dtse: 1,
          dtsh: 1,
          "ec-3": 0.9,
          enca: 1,
          fLaC: 0.9,
          flac: 0.9,
          FLAC: 0.9,
          g719: 1,
          g726: 1,
          m4ae: 1,
          mha1: 1,
          mha2: 1,
          mhm1: 1,
          mhm2: 1,
          mlpa: 1,
          mp4a: 1,
          "raw ": 1,
          Opus: 1,
          opus: 1,
          samr: 1,
          sawb: 1,
          sawp: 1,
          sevc: 1,
          sqcp: 1,
          ssmv: 1,
          twos: 1,
          ulaw: 1,
        },
        video: {
          avc1: 1,
          avc2: 1,
          avc3: 1,
          avc4: 1,
          avcp: 1,
          av01: 0.8,
          drac: 1,
          dva1: 1,
          dvav: 1,
          dvh1: 0.7,
          dvhe: 0.7,
          encv: 1,
          hev1: 0.75,
          hvc1: 0.75,
          mjp2: 1,
          mp4v: 1,
          mvc1: 1,
          mvc2: 1,
          mvc3: 1,
          mvc4: 1,
          resv: 1,
          rv60: 1,
          s263: 1,
          svc1: 1,
          svc2: 1,
          "vc-1": 1,
          vp08: 1,
          vp09: 0.9,
        },
        text: { stpp: 1, wvtt: 1 },
      };
      function eq(e, t, i = !0) {
        return !e.split(",").some((e) => !eX(e, t, i));
      }
      function eX(e, t, i = !0) {
        var r;
        let s = eW(i);
        return (
          null != (r = null == s ? void 0 : s.isTypeSupported(ez(e, t))) && r
        );
      }
      function ez(e, t) {
        return `${t}/mp4;codecs="${e}"`;
      }
      function eQ(e) {
        if (e) {
          let t = e.substring(0, 4);
          return ej.video[t];
        }
        return 2;
      }
      function eJ(e) {
        return e.split(",").reduce((e, t) => {
          let i = ej.video[t];
          return i
            ? (2 * i + e) / (e ? 3 : 2)
            : (ej.audio[t] + e) / (e ? 2 : 1);
        }, 0);
      }
      let eZ = {},
        e0 = /flac|opus/i;
      function e1(e, t = !0) {
        return e.replace(e0, (e) =>
          (function (e, t = !0) {
            if (eZ[e]) return eZ[e];
            let i = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"] }[
              e
            ];
            for (let r = 0; r < i.length; r++)
              if (eX(i[r], "audio", t)) return (eZ[e] = i[r]), i[r];
            return e;
          })(e.toLowerCase(), t),
        );
      }
      function e2(e, t) {
        return e && "mp4a" !== e ? e : t ? t.split(",")[0] : t;
      }
      let e4 =
          /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
        e3 = /#EXT-X-MEDIA:(.*)/g,
        e5 = /^#EXT(?:INF|-X-TARGETDURATION):/m,
        e8 = RegExp(
          [
            /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
            /(?!#) *(\S[^\r\n]*)/.source,
            /#EXT-X-BYTERANGE:*(.+)/.source,
            /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
            /#.*/.source,
          ].join("|"),
          "g",
        ),
        e6 = new RegExp(
          [
            /#(EXTM3U)/.source,
            /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/
              .source,
            /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/
              .source,
            /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,
            /(#)([^:]*):(.*)/.source,
            /(#)(.*)(?:.*)\r?\n?/.source,
          ].join("|"),
        );
      class e9 {
        static findGroup(e, t) {
          for (let i = 0; i < e.length; i++) {
            let r = e[i];
            if (r.id === t) return r;
          }
        }
        static resolve(e, t) {
          return L.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });
        }
        static isMediaPlaylist(e) {
          return e5.test(e);
        }
        static parseMasterPlaylist(e, t) {
          var i;
          let r;
          let s = {
              contentSteering: null,
              levels: [],
              playlistParsingError: null,
              sessionData: null,
              sessionKeys: null,
              startTimeOffset: null,
              variableList: null,
              hasVariableRefs: eK.test(e),
            },
            a = [];
          for (e4.lastIndex = 0; null != (r = e4.exec(e)); )
            if (r[1]) {
              let e = new B(r[1]);
              eV(s, e, [
                "CODECS",
                "SUPPLEMENTAL-CODECS",
                "ALLOWED-CPC",
                "PATHWAY-ID",
                "STABLE-VARIANT-ID",
                "AUDIO",
                "VIDEO",
                "SUBTITLES",
                "CLOSED-CAPTIONS",
                "NAME",
              ]);
              let n = eH(s, r[2]),
                l = {
                  attrs: e,
                  bitrate:
                    e.decimalInteger("BANDWIDTH") ||
                    e.decimalInteger("AVERAGE-BANDWIDTH"),
                  name: e.NAME,
                  url: e9.resolve(n, t),
                },
                o = e.decimalResolution("RESOLUTION");
              o && ((l.width = o.width), (l.height = o.height)),
                (function (e, t) {
                  let i = (e || "").split(/[ ,]+/).filter((e) => e);
                  ["video", "audio", "text"].forEach((e) => {
                    let r = i.filter((t) =>
                      (function (e, t) {
                        let i = ej[t];
                        return !!i && !!i[e.slice(0, 4)];
                      })(t, e),
                    );
                    r.length &&
                      ((t[`${e}Codec`] = r.join(",")),
                      (i = i.filter((e) => -1 === r.indexOf(e))));
                  }),
                    (t.unknownCodecs = i);
                })(e.CODECS, l),
                (null != (i = l.unknownCodecs) && i.length) || a.push(l),
                s.levels.push(l);
            } else if (r[3]) {
              let e = r[3],
                i = r[4];
              switch (e) {
                case "SESSION-DATA": {
                  let e = new B(i);
                  eV(s, e, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                  let t = e["DATA-ID"];
                  t &&
                    (null === s.sessionData && (s.sessionData = {}),
                    (s.sessionData[t] = e));
                  break;
                }
                case "SESSION-KEY": {
                  let e = e7(i, t, s);
                  e.encrypted && e.isSupported()
                    ? (null === s.sessionKeys && (s.sessionKeys = []),
                      s.sessionKeys.push(e))
                    : M.warn(
                        `[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${i}"`,
                      );
                  break;
                }
                case "DEFINE":
                  {
                    let e = new B(i);
                    eV(s, e, ["NAME", "VALUE", "QUERYPARAM"]), eY(s, e, t);
                  }
                  break;
                case "CONTENT-STEERING": {
                  let e = new B(i);
                  eV(s, e, ["SERVER-URI", "PATHWAY-ID"]),
                    (s.contentSteering = {
                      uri: e9.resolve(e["SERVER-URI"], t),
                      pathwayId: e["PATHWAY-ID"] || ".",
                    });
                  break;
                }
                case "START":
                  s.startTimeOffset = te(i);
              }
            }
          let n = a.length > 0 && a.length < s.levels.length;
          return (
            (s.levels = n ? a : s.levels),
            0 === s.levels.length &&
              (s.playlistParsingError = Error("no levels found in manifest")),
            s
          );
        }
        static parseMasterPlaylistMedia(e, t, i) {
          let r;
          let s = {},
            a = i.levels,
            n = {
              AUDIO: a.map((e) => ({
                id: e.attrs.AUDIO,
                audioCodec: e.audioCodec,
              })),
              SUBTITLES: a.map((e) => ({
                id: e.attrs.SUBTITLES,
                textCodec: e.textCodec,
              })),
              "CLOSED-CAPTIONS": [],
            },
            l = 0;
          for (e3.lastIndex = 0; null !== (r = e3.exec(e)); ) {
            let e = new B(r[1]),
              a = e.TYPE;
            if (a) {
              let r = n[a],
                o = s[a] || [];
              (s[a] = o),
                eV(i, e, [
                  "URI",
                  "GROUP-ID",
                  "LANGUAGE",
                  "ASSOC-LANGUAGE",
                  "STABLE-RENDITION-ID",
                  "NAME",
                  "INSTREAM-ID",
                  "CHARACTERISTICS",
                  "CHANNELS",
                ]);
              let h = e.LANGUAGE,
                d = e["ASSOC-LANGUAGE"],
                u = e.CHANNELS,
                c = e.CHARACTERISTICS,
                f = e["INSTREAM-ID"],
                g = {
                  attrs: e,
                  bitrate: 0,
                  id: l++,
                  groupId: e["GROUP-ID"] || "",
                  name: e.NAME || h || "",
                  type: a,
                  default: e.bool("DEFAULT"),
                  autoselect: e.bool("AUTOSELECT"),
                  forced: e.bool("FORCED"),
                  lang: h,
                  url: e.URI ? e9.resolve(e.URI, t) : "",
                };
              if (
                (d && (g.assocLang = d),
                u && (g.channels = u),
                c && (g.characteristics = c),
                f && (g.instreamId = f),
                null != r && r.length)
              ) {
                let e = e9.findGroup(r, g.groupId) || r[0];
                tt(g, e, "audioCodec"), tt(g, e, "textCodec");
              }
              o.push(g);
            }
          }
          return s;
        }
        static parseLevelPlaylist(e, t, i, r, s, a) {
          let n, l, o;
          let h = new W(t),
            d = h.fragments,
            u = null,
            c = 0,
            f = 0,
            g = 0,
            m = 0,
            p = null,
            E = new H(r, t),
            T = -1,
            y = !1,
            v = null;
          for (
            e8.lastIndex = 0, h.m3u8 = e, h.hasVariableRefs = eK.test(e);
            null !== (n = e8.exec(e));

          ) {
            y &&
              ((y = !1),
              ((E = new H(r, t)).start = g),
              (E.sn = c),
              (E.cc = m),
              (E.level = i),
              u &&
                ((E.initSegment = u),
                (E.rawProgramDateTime = u.rawProgramDateTime),
                (u.rawProgramDateTime = null),
                v && (E.setByteRange(v), (v = null))));
            let e = n[1];
            if (e) {
              E.duration = parseFloat(e);
              let t = (" " + n[2]).slice(1);
              (E.title = t || null),
                E.tagList.push(t ? ["INF", e, t] : ["INF", e]);
            } else if (n[3]) {
              if (b(E.duration)) {
                (E.start = g),
                  o && ts(E, o, h),
                  (E.sn = c),
                  (E.level = i),
                  (E.cc = m),
                  d.push(E);
                let e = (" " + n[3]).slice(1);
                (E.relurl = eH(h, e)),
                  ti(E, p),
                  (p = E),
                  (g += E.duration),
                  c++,
                  (f = 0),
                  (y = !0);
              }
            } else if (n[4]) {
              let e = (" " + n[4]).slice(1);
              p ? E.setByteRange(e, p) : E.setByteRange(e);
            } else if (n[5])
              (E.rawProgramDateTime = (" " + n[5]).slice(1)),
                E.tagList.push(["PROGRAM-DATE-TIME", E.rawProgramDateTime]),
                -1 === T && (T = d.length);
            else {
              if (!(n = n[0].match(e6))) {
                M.warn("No matches on slow regex match for level playlist!");
                continue;
              }
              for (l = 1; l < n.length && void 0 === n[l]; l++);
              let e = (" " + n[l]).slice(1),
                s = (" " + n[l + 1]).slice(1),
                g = n[l + 2] ? (" " + n[l + 2]).slice(1) : "";
              switch (e) {
                case "PLAYLIST-TYPE":
                  h.type = s.toUpperCase();
                  break;
                case "MEDIA-SEQUENCE":
                  c = h.startSN = parseInt(s);
                  break;
                case "SKIP": {
                  let e = new B(s);
                  eV(h, e, ["RECENTLY-REMOVED-DATERANGES"]);
                  let t = e.decimalInteger("SKIPPED-SEGMENTS");
                  if (b(t)) {
                    h.skippedSegments = t;
                    for (let e = t; e--; ) d.unshift(null);
                    c += t;
                  }
                  let i = e.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                  i && (h.recentlyRemovedDateranges = i.split("	"));
                  break;
                }
                case "TARGETDURATION":
                  h.targetduration = Math.max(parseInt(s), 1);
                  break;
                case "VERSION":
                  h.version = parseInt(s);
                  break;
                case "INDEPENDENT-SEGMENTS":
                case "EXTM3U":
                  break;
                case "ENDLIST":
                  h.live = !1;
                  break;
                case "#":
                  (s || g) && E.tagList.push(g ? [s, g] : [s]);
                  break;
                case "DISCONTINUITY":
                  m++, E.tagList.push(["DIS"]);
                  break;
                case "GAP":
                  (E.gap = !0), E.tagList.push([e]);
                  break;
                case "BITRATE":
                  E.tagList.push([e, s]);
                  break;
                case "DATERANGE": {
                  let e = new B(s);
                  eV(h, e, [
                    "ID",
                    "CLASS",
                    "START-DATE",
                    "END-DATE",
                    "SCTE35-CMD",
                    "SCTE35-OUT",
                    "SCTE35-IN",
                  ]),
                    eV(h, e, e.clientAttrs);
                  let t = new $(e, h.dateRanges[e.ID]);
                  t.isValid || h.skippedSegments
                    ? (h.dateRanges[t.id] = t)
                    : M.warn(`Ignoring invalid DATERANGE tag: "${s}"`),
                    E.tagList.push(["EXT-X-DATERANGE", s]);
                  break;
                }
                case "DEFINE":
                  {
                    let e = new B(s);
                    eV(h, e, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]),
                      "IMPORT" in e
                        ? (function (e, t, i) {
                            let r = t.IMPORT;
                            if (i && r in i) {
                              let t = e.variableList;
                              t || (e.variableList = t = {}), (t[r] = i[r]);
                            } else
                              e.playlistParsingError ||
                                (e.playlistParsingError = Error(
                                  `EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`,
                                ));
                          })(h, e, a)
                        : eY(h, e, t);
                  }
                  break;
                case "DISCONTINUITY-SEQUENCE":
                  m = parseInt(s);
                  break;
                case "KEY": {
                  let e = e7(s, t, h);
                  if (e.isSupported()) {
                    if ("NONE" === e.method) {
                      o = void 0;
                      break;
                    }
                    o || (o = {}),
                      o[e.keyFormat] && (o = I({}, o)),
                      (o[e.keyFormat] = e);
                  } else
                    M.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${s}"`);
                  break;
                }
                case "START":
                  h.startTimeOffset = te(s);
                  break;
                case "MAP": {
                  let e = new B(s);
                  if ((eV(h, e, ["BYTERANGE", "URI"]), E.duration)) {
                    let s = new H(r, t);
                    tr(s, e, i, o),
                      (u = s),
                      (E.initSegment = u),
                      u.rawProgramDateTime &&
                        !E.rawProgramDateTime &&
                        (E.rawProgramDateTime = u.rawProgramDateTime);
                  } else {
                    let t = E.byteRangeEndOffset;
                    if (t) {
                      let e = E.byteRangeStartOffset;
                      v = `${t - e}@${e}`;
                    } else v = null;
                    tr(E, e, i, o), (u = E), (y = !0);
                  }
                  break;
                }
                case "SERVER-CONTROL": {
                  let e = new B(s);
                  (h.canBlockReload = e.bool("CAN-BLOCK-RELOAD")),
                    (h.canSkipUntil = e.optionalFloat("CAN-SKIP-UNTIL", 0)),
                    (h.canSkipDateRanges =
                      h.canSkipUntil > 0 && e.bool("CAN-SKIP-DATERANGES")),
                    (h.partHoldBack = e.optionalFloat("PART-HOLD-BACK", 0)),
                    (h.holdBack = e.optionalFloat("HOLD-BACK", 0));
                  break;
                }
                case "PART-INF": {
                  let e = new B(s);
                  h.partTarget = e.decimalFloatingPoint("PART-TARGET");
                  break;
                }
                case "PART": {
                  let e = h.partList;
                  e || (e = h.partList = []);
                  let i = f > 0 ? e[e.length - 1] : void 0,
                    r = f++,
                    a = new B(s);
                  eV(h, a, ["BYTERANGE", "URI"]);
                  let n = new Y(a, E, t, r, i);
                  e.push(n), (E.duration += n.duration);
                  break;
                }
                case "PRELOAD-HINT": {
                  let e = new B(s);
                  eV(h, e, ["URI"]), (h.preloadHint = e);
                  break;
                }
                case "RENDITION-REPORT": {
                  let e = new B(s);
                  eV(h, e, ["URI"]),
                    (h.renditionReports = h.renditionReports || []),
                    h.renditionReports.push(e);
                  break;
                }
                default:
                  M.warn(`line parsed but not handled: ${n}`);
              }
            }
          }
          p && !p.relurl
            ? (d.pop(), (g -= p.duration), h.partList && (h.fragmentHint = p))
            : h.partList &&
              (ti(E, p), (E.cc = m), (h.fragmentHint = E), o && ts(E, o, h));
          let S = d.length,
            A = d[0],
            L = d[S - 1];
          if ((g += h.skippedSegments * h.targetduration) > 0 && S && L) {
            h.averagetargetduration = g / S;
            let e = L.sn;
            (h.endSN = "initSegment" !== e ? e : 0),
              h.live || (L.endList = !0),
              A && (h.startCC = A.cc);
          } else (h.endSN = 0), (h.startCC = 0);
          return (
            h.fragmentHint && (g += h.fragmentHint.duration),
            (h.totalduration = g),
            (h.endCC = m),
            T > 0 &&
              (function (e, t) {
                let i = e[t];
                for (let r = t; r--; ) {
                  let t = e[r];
                  if (!t) return;
                  (t.programDateTime = i.programDateTime - 1e3 * t.duration),
                    (i = t);
                }
              })(d, T),
            h
          );
        }
      }
      function e7(e, t, i) {
        var r, s;
        let a = new B(e);
        eV(i, a, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
        let n = null != (r = a.METHOD) ? r : "",
          l = a.URI,
          o = a.hexadecimalInteger("IV"),
          h = a.KEYFORMATVERSIONS,
          d = null != (s = a.KEYFORMAT) ? s : "identity";
        return (
          l && a.IV && !o && M.error(`Invalid IV: ${a.IV}`),
          new eG(
            n,
            l ? e9.resolve(l, t) : "",
            d,
            (h || "1").split("/").map(Number).filter(Number.isFinite),
            o,
          )
        );
      }
      function te(e) {
        let t = new B(e).decimalFloatingPoint("TIME-OFFSET");
        return b(t) ? t : null;
      }
      function tt(e, t, i) {
        let r = t[i];
        r && (e[i] = r);
      }
      function ti(e, t) {
        e.rawProgramDateTime
          ? (e.programDateTime = Date.parse(e.rawProgramDateTime))
          : null != t &&
            t.programDateTime &&
            (e.programDateTime = t.endProgramDateTime),
          b(e.programDateTime) ||
            ((e.programDateTime = null), (e.rawProgramDateTime = null));
      }
      function tr(e, t, i, r) {
        (e.relurl = t.URI),
          t.BYTERANGE && e.setByteRange(t.BYTERANGE),
          (e.level = i),
          (e.sn = "initSegment"),
          r && (e.levelkeys = r),
          (e.initSegment = null);
      }
      function ts(e, t, i) {
        e.levelkeys = t;
        let { encryptedFragments: r } = i;
        (!r.length || r[r.length - 1].levelkeys !== t) &&
          Object.keys(t).some((e) => t[e].isCommonEncryption) &&
          r.push(e);
      }
      var ta = {
          MANIFEST: "manifest",
          LEVEL: "level",
          AUDIO_TRACK: "audioTrack",
          SUBTITLE_TRACK: "subtitleTrack",
        },
        tn = { MAIN: "main", AUDIO: "audio", SUBTITLE: "subtitle" };
      function tl(e) {
        let { type: t } = e;
        switch (t) {
          case ta.AUDIO_TRACK:
            return tn.AUDIO;
          case ta.SUBTITLE_TRACK:
            return tn.SUBTITLE;
          default:
            return tn.MAIN;
        }
      }
      function to(e, t) {
        let i = e.url;
        return (void 0 === i || 0 === i.indexOf("data:")) && (i = t.url), i;
      }
      class th {
        constructor(e) {
          (this.hls = void 0),
            (this.loaders = Object.create(null)),
            (this.variableList = null),
            (this.hls = e),
            this.registerListeners();
        }
        startLoad(e) {}
        stopLoad() {
          this.destroyInternalLoaders();
        }
        registerListeners() {
          let { hls: e } = this;
          e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(C.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
            e.on(C.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
        }
        unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(C.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
            e.off(C.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
        }
        createInternalLoader(e) {
          let t = this.hls.config,
            i = t.pLoader,
            r = t.loader,
            s = new (i || r)(t);
          return (this.loaders[e.type] = s), s;
        }
        getInternalLoader(e) {
          return this.loaders[e.type];
        }
        resetInternalLoader(e) {
          this.loaders[e] && delete this.loaders[e];
        }
        destroyInternalLoaders() {
          for (let e in this.loaders) {
            let t = this.loaders[e];
            t && t.destroy(), this.resetInternalLoader(e);
          }
        }
        destroy() {
          (this.variableList = null),
            this.unregisterListeners(),
            this.destroyInternalLoaders();
        }
        onManifestLoading(e, t) {
          let { url: i } = t;
          (this.variableList = null),
            this.load({
              id: null,
              level: 0,
              responseType: "text",
              type: ta.MANIFEST,
              url: i,
              deliveryDirectives: null,
            });
        }
        onLevelLoading(e, t) {
          let {
            id: i,
            level: r,
            pathwayId: s,
            url: a,
            deliveryDirectives: n,
          } = t;
          this.load({
            id: i,
            level: r,
            pathwayId: s,
            responseType: "text",
            type: ta.LEVEL,
            url: a,
            deliveryDirectives: n,
          });
        }
        onAudioTrackLoading(e, t) {
          let { id: i, groupId: r, url: s, deliveryDirectives: a } = t;
          this.load({
            id: i,
            groupId: r,
            level: null,
            responseType: "text",
            type: ta.AUDIO_TRACK,
            url: s,
            deliveryDirectives: a,
          });
        }
        onSubtitleTrackLoading(e, t) {
          let { id: i, groupId: r, url: s, deliveryDirectives: a } = t;
          this.load({
            id: i,
            groupId: r,
            level: null,
            responseType: "text",
            type: ta.SUBTITLE_TRACK,
            url: s,
            deliveryDirectives: a,
          });
        }
        load(e) {
          var t;
          let i;
          let r = this.hls.config,
            s = this.getInternalLoader(e);
          if (s) {
            let t = s.context;
            if (t && t.url === e.url && t.level === e.level) {
              M.trace("[playlist-loader]: playlist request ongoing");
              return;
            }
            M.log(
              `[playlist-loader]: aborting previous loader for type: ${e.type}`,
            ),
              s.abort();
          }
          if (
            ((i =
              e.type === ta.MANIFEST
                ? r.manifestLoadPolicy.default
                : I({}, r.playlistLoadPolicy.default, {
                    timeoutRetry: null,
                    errorRetry: null,
                  })),
            (s = this.createInternalLoader(e)),
            b(null == (t = e.deliveryDirectives) ? void 0 : t.part))
          ) {
            let t;
            if (
              (e.type === ta.LEVEL && null !== e.level
                ? (t = this.hls.levels[e.level].details)
                : e.type === ta.AUDIO_TRACK && null !== e.id
                  ? (t = this.hls.audioTracks[e.id].details)
                  : e.type === ta.SUBTITLE_TRACK &&
                    null !== e.id &&
                    (t = this.hls.subtitleTracks[e.id].details),
              t)
            ) {
              let e = t.partTarget,
                r = t.targetduration;
              if (e && r) {
                let t = 1e3 * Math.max(3 * e, 0.8 * r);
                i = I({}, i, {
                  maxTimeToFirstByteMs: Math.min(t, i.maxTimeToFirstByteMs),
                  maxLoadTimeMs: Math.min(t, i.maxTimeToFirstByteMs),
                });
              }
            }
          }
          let a = i.errorRetry || i.timeoutRetry || {},
            n = {
              loadPolicy: i,
              timeout: i.maxLoadTimeMs,
              maxRetry: a.maxNumRetry || 0,
              retryDelay: a.retryDelayMs || 0,
              maxRetryDelay: a.maxRetryDelayMs || 0,
            };
          s.load(e, n, {
            onSuccess: (e, t, i, r) => {
              let s = this.getInternalLoader(i);
              this.resetInternalLoader(i.type);
              let a = e.data;
              if (0 !== a.indexOf("#EXTM3U")) {
                this.handleManifestParsingError(
                  e,
                  i,
                  Error("no EXTM3U delimiter"),
                  r || null,
                  t,
                );
                return;
              }
              (t.parsing.start = performance.now()),
                e9.isMediaPlaylist(a)
                  ? this.handleTrackOrLevelPlaylist(e, t, i, r || null, s)
                  : this.handleMasterPlaylist(e, t, i, r);
            },
            onError: (e, t, i, r) => {
              this.handleNetworkError(t, i, !1, e, r);
            },
            onTimeout: (e, t, i) => {
              this.handleNetworkError(t, i, !0, void 0, e);
            },
          });
        }
        handleMasterPlaylist(e, t, i, r) {
          let s = this.hls,
            a = e.data,
            n = to(e, i),
            l = e9.parseMasterPlaylist(a, n);
          if (l.playlistParsingError) {
            this.handleManifestParsingError(e, i, l.playlistParsingError, r, t);
            return;
          }
          let {
            contentSteering: o,
            levels: h,
            sessionData: d,
            sessionKeys: u,
            startTimeOffset: c,
            variableList: f,
          } = l;
          this.variableList = f;
          let {
            AUDIO: g = [],
            SUBTITLES: m,
            "CLOSED-CAPTIONS": p,
          } = e9.parseMasterPlaylistMedia(a, n, l);
          g.length &&
            !g.some((e) => !e.url) &&
            h[0].audioCodec &&
            !h[0].attrs.AUDIO &&
            (M.log(
              "[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one",
            ),
            g.unshift({
              type: "main",
              name: "main",
              groupId: "main",
              default: !1,
              autoselect: !1,
              forced: !1,
              id: -1,
              attrs: new B({}),
              bitrate: 0,
              url: "",
            })),
            s.trigger(C.MANIFEST_LOADED, {
              levels: h,
              audioTracks: g,
              subtitles: m,
              captions: p,
              contentSteering: o,
              url: n,
              stats: t,
              networkDetails: r,
              sessionData: d,
              sessionKeys: u,
              startTimeOffset: c,
              variableList: f,
            });
        }
        handleTrackOrLevelPlaylist(e, t, i, r, s) {
          let a = this.hls,
            { id: n, level: l, type: o } = i,
            h = to(e, i),
            d = b(l) ? l : b(n) ? n : 0,
            u = tl(i),
            c = e9.parseLevelPlaylist(e.data, h, d, u, 0, this.variableList);
          if (o === ta.MANIFEST) {
            let e = {
              attrs: new B({}),
              bitrate: 0,
              details: c,
              name: "",
              url: h,
            };
            a.trigger(C.MANIFEST_LOADED, {
              levels: [e],
              audioTracks: [],
              url: h,
              stats: t,
              networkDetails: r,
              sessionData: null,
              sessionKeys: null,
              contentSteering: null,
              startTimeOffset: null,
              variableList: null,
            });
          }
          (t.parsing.end = performance.now()),
            (i.levelDetails = c),
            this.handlePlaylistLoaded(c, e, t, i, r, s);
        }
        handleManifestParsingError(e, t, i, r, s) {
          this.hls.trigger(C.ERROR, {
            type: w.NETWORK_ERROR,
            details: P.MANIFEST_PARSING_ERROR,
            fatal: t.type === ta.MANIFEST,
            url: e.url,
            err: i,
            error: i,
            reason: i.message,
            response: e,
            context: t,
            networkDetails: r,
            stats: s,
          });
        }
        handleNetworkError(e, t, i = !1, r, s) {
          let a = `A network ${i ? "timeout" : "error" + (r ? " (status " + r.code + ")" : "")} occurred while loading ${e.type}`;
          e.type === ta.LEVEL
            ? (a += `: ${e.level} id: ${e.id}`)
            : (e.type === ta.AUDIO_TRACK || e.type === ta.SUBTITLE_TRACK) &&
              (a += ` id: ${e.id} group-id: "${e.groupId}"`);
          let n = Error(a);
          M.warn(`[playlist-loader]: ${a}`);
          let l = P.UNKNOWN,
            o = !1,
            h = this.getInternalLoader(e);
          switch (e.type) {
            case ta.MANIFEST:
              (l = i ? P.MANIFEST_LOAD_TIMEOUT : P.MANIFEST_LOAD_ERROR),
                (o = !0);
              break;
            case ta.LEVEL:
              (l = i ? P.LEVEL_LOAD_TIMEOUT : P.LEVEL_LOAD_ERROR), (o = !1);
              break;
            case ta.AUDIO_TRACK:
              (l = i ? P.AUDIO_TRACK_LOAD_TIMEOUT : P.AUDIO_TRACK_LOAD_ERROR),
                (o = !1);
              break;
            case ta.SUBTITLE_TRACK:
              (l = i ? P.SUBTITLE_TRACK_LOAD_TIMEOUT : P.SUBTITLE_LOAD_ERROR),
                (o = !1);
          }
          h && this.resetInternalLoader(e.type);
          let d = {
            type: w.NETWORK_ERROR,
            details: l,
            fatal: o,
            url: e.url,
            loader: h,
            context: e,
            error: n,
            networkDetails: t,
            stats: s,
          };
          if (r) {
            let i = (null == t ? void 0 : t.url) || e.url;
            d.response = D({ url: i, data: void 0 }, r);
          }
          this.hls.trigger(C.ERROR, d);
        }
        handlePlaylistLoaded(e, t, i, r, s, a) {
          let n = this.hls,
            { type: l, level: o, id: h, groupId: d, deliveryDirectives: u } = r,
            c = to(t, r),
            f = tl(r),
            g = "number" == typeof r.level && f === tn.MAIN ? o : void 0;
          if (!e.fragments.length) {
            let e = Error("No Segments found in Playlist");
            n.trigger(C.ERROR, {
              type: w.NETWORK_ERROR,
              details: P.LEVEL_EMPTY_ERROR,
              fatal: !1,
              url: c,
              error: e,
              reason: e.message,
              response: t,
              context: r,
              level: g,
              parent: f,
              networkDetails: s,
              stats: i,
            });
            return;
          }
          e.targetduration ||
            (e.playlistParsingError = Error("Missing Target Duration"));
          let m = e.playlistParsingError;
          if (m) {
            n.trigger(C.ERROR, {
              type: w.NETWORK_ERROR,
              details: P.LEVEL_PARSING_ERROR,
              fatal: !1,
              url: c,
              error: m,
              reason: m.message,
              response: t,
              context: r,
              level: g,
              parent: f,
              networkDetails: s,
              stats: i,
            });
            return;
          }
          switch (
            (e.live &&
              a &&
              (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0),
              (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)),
            l)
          ) {
            case ta.MANIFEST:
            case ta.LEVEL:
              n.trigger(C.LEVEL_LOADED, {
                details: e,
                level: g || 0,
                id: h || 0,
                stats: i,
                networkDetails: s,
                deliveryDirectives: u,
              });
              break;
            case ta.AUDIO_TRACK:
              n.trigger(C.AUDIO_TRACK_LOADED, {
                details: e,
                id: h || 0,
                groupId: d || "",
                stats: i,
                networkDetails: s,
                deliveryDirectives: u,
              });
              break;
            case ta.SUBTITLE_TRACK:
              n.trigger(C.SUBTITLE_TRACK_LOADED, {
                details: e,
                id: h || 0,
                groupId: d || "",
                stats: i,
                networkDetails: s,
                deliveryDirectives: u,
              });
          }
        }
      }
      function td(e, t) {
        let i;
        try {
          i = new Event("addtrack");
        } catch (e) {
          (i = document.createEvent("Event")).initEvent("addtrack", !1, !1);
        }
        (i.track = e), t.dispatchEvent(i);
      }
      function tu(e, t) {
        let i = e.mode;
        if (
          ("disabled" === i && (e.mode = "hidden"),
          e.cues && !e.cues.getCueById(t.id))
        )
          try {
            if ((e.addCue(t), !e.cues.getCueById(t.id)))
              throw Error(`addCue is failed for: ${t}`);
          } catch (i) {
            M.debug(`[texttrack-utils]: ${i}`);
            try {
              let i = new self.TextTrackCue(t.startTime, t.endTime, t.text);
              (i.id = t.id), e.addCue(i);
            } catch (e) {
              M.debug(
                `[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e}`,
              );
            }
          }
        "disabled" === i && (e.mode = i);
      }
      function tc(e) {
        let t = e.mode;
        if (("disabled" === t && (e.mode = "hidden"), e.cues))
          for (let t = e.cues.length; t--; ) e.removeCue(e.cues[t]);
        "disabled" === t && (e.mode = t);
      }
      function tf(e, t, i, r) {
        let s = e.mode;
        if (
          ("disabled" === s && (e.mode = "hidden"), e.cues && e.cues.length > 0)
        ) {
          let s = (function (e, t, i) {
            let r = [],
              s = (function (e, t) {
                if (t < e[0].startTime) return 0;
                let i = e.length - 1;
                if (t > e[i].endTime) return -1;
                let r = 0,
                  s = i;
                for (; r <= s; ) {
                  let a = Math.floor((s + r) / 2);
                  if (t < e[a].startTime) s = a - 1;
                  else {
                    if (!(t > e[a].startTime) || !(r < i)) return a;
                    r = a + 1;
                  }
                }
                return e[r].startTime - t < t - e[s].startTime ? r : s;
              })(e, t);
            if (s > -1)
              for (let a = s, n = e.length; a < n; a++) {
                let s = e[a];
                if (s.startTime >= t && s.endTime <= i) r.push(s);
                else if (s.startTime > i) break;
              }
            return r;
          })(e.cues, t, i);
          for (let t = 0; t < s.length; t++)
            (!r || r(s[t])) && e.removeCue(s[t]);
        }
        "disabled" === s && (e.mode = s);
      }
      function tg(e) {
        let t = [];
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          ("subtitles" === r.kind || "captions" === r.kind) &&
            r.label &&
            t.push(e[i]);
        }
        return t;
      }
      var tm = {
        audioId3: "org.id3",
        dateRange: "com.apple.quicktime.HLS",
        emsg: "https://aomedia.org/emsg/ID3",
      };
      function tp() {
        if ("undefined" != typeof self) return self.VTTCue || self.TextTrackCue;
      }
      function tE(e, t, i, r, s) {
        let a = new e(t, i, "");
        try {
          (a.value = r), s && (a.type = s);
        } catch (n) {
          a = new e(t, i, JSON.stringify(s ? D({ type: s }, r) : r));
        }
        return a;
      }
      let tT = (() => {
        let e = tp();
        try {
          e && new e(0, Number.POSITIVE_INFINITY, "");
        } catch (e) {
          return Number.MAX_VALUE;
        }
        return Number.POSITIVE_INFINITY;
      })();
      function ty(e, t) {
        return e.getTime() / 1e3 - t;
      }
      class tv {
        constructor(e) {
          (this.hls = void 0),
            (this.id3Track = null),
            (this.media = null),
            (this.dateRangeCuesAppended = {}),
            (this.hls = e),
            this._registerListeners();
        }
        destroy() {
          this._unregisterListeners(),
            (this.id3Track = null),
            (this.media = null),
            (this.dateRangeCuesAppended = {}),
            (this.hls = null);
        }
        _registerListeners() {
          let { hls: e } = this;
          e.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
            e.on(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(C.LEVEL_UPDATED, this.onLevelUpdated, this);
        }
        _unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
            e.off(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(C.LEVEL_UPDATED, this.onLevelUpdated, this);
        }
        onMediaAttached(e, t) {
          this.media = t.media;
        }
        onMediaDetaching() {
          this.id3Track &&
            (tc(this.id3Track),
            (this.id3Track = null),
            (this.media = null),
            (this.dateRangeCuesAppended = {}));
        }
        onManifestLoading() {
          this.dateRangeCuesAppended = {};
        }
        createTrack(e) {
          let t = this.getID3Track(e.textTracks);
          return (t.mode = "hidden"), t;
        }
        getID3Track(e) {
          if (this.media) {
            for (let t = 0; t < e.length; t++) {
              let i = e[t];
              if ("metadata" === i.kind && "id3" === i.label)
                return td(i, this.media), i;
            }
            return this.media.addTextTrack("metadata", "id3");
          }
        }
        onFragParsingMetadata(e, t) {
          if (!this.media) return;
          let {
            hls: {
              config: { enableEmsgMetadataCues: i, enableID3MetadataCues: r },
            },
          } = this;
          if (!i && !r) return;
          let { samples: s } = t;
          this.id3Track || (this.id3Track = this.createTrack(this.media));
          let a = tp();
          if (a)
            for (let e = 0; e < s.length; e++) {
              let t = s[e].type;
              if ((t === tm.emsg && !i) || !r) continue;
              let n = eg(s[e].data);
              if (n) {
                let i = s[e].pts,
                  r = i + s[e].duration;
                r > tT && (r = tT), r - i <= 0 && (r = i + 0.25);
                for (let e = 0; e < n.length; e++) {
                  let s = n[e];
                  if (!ec(s)) {
                    this.updateId3CueEnds(i, t);
                    let e = tE(a, i, r, s, t);
                    e && this.id3Track.addCue(e);
                  }
                }
              }
            }
        }
        updateId3CueEnds(e, t) {
          var i;
          let r = null == (i = this.id3Track) ? void 0 : i.cues;
          if (r)
            for (let i = r.length; i--; ) {
              let s = r[i];
              s.type === t &&
                s.startTime < e &&
                s.endTime === tT &&
                (s.endTime = e);
            }
        }
        onBufferFlushing(e, { startOffset: t, endOffset: i, type: r }) {
          let { id3Track: s, hls: a } = this;
          if (!a) return;
          let {
            config: { enableEmsgMetadataCues: n, enableID3MetadataCues: l },
          } = a;
          s &&
            (n || l) &&
            tf(
              s,
              t,
              i,
              "audio" === r
                ? (e) => e.type === tm.audioId3 && l
                : "video" === r
                  ? (e) => e.type === tm.emsg && n
                  : (e) =>
                      (e.type === tm.audioId3 && l) ||
                      (e.type === tm.emsg && n),
            );
        }
        onLevelUpdated(e, { details: t }) {
          if (
            !this.media ||
            !t.hasProgramDateTime ||
            !this.hls.config.enableDateRangeMetadataCues
          )
            return;
          let { dateRangeCuesAppended: i, id3Track: r } = this,
            { dateRanges: s } = t,
            a = Object.keys(s);
          if (r) {
            let e = Object.keys(i).filter((e) => !a.includes(e));
            for (let t = e.length; t--; ) {
              let s = e[t];
              Object.keys(i[s].cues).forEach((e) => {
                r.removeCue(i[s].cues[e]);
              }),
                delete i[s];
            }
          }
          let n = t.fragments[t.fragments.length - 1];
          if (0 === a.length || !b(null == n ? void 0 : n.programDateTime))
            return;
          this.id3Track || (this.id3Track = this.createTrack(this.media));
          let l = n.programDateTime / 1e3 - n.start,
            o = tp();
          for (let e = 0; e < a.length; e++) {
            let t = a[e],
              r = s[t],
              n = ty(r.startDate, l),
              d = i[t],
              u = (null == d ? void 0 : d.cues) || {},
              c = (null == d ? void 0 : d.durationKnown) || !1,
              f = tT,
              g = r.endDate;
            if (g) (f = ty(g, l)), (c = !0);
            else if (r.endOnNext && !c) {
              let e = a.reduce((e, t) => {
                if (t !== r.id) {
                  let i = s[t];
                  if (
                    i.class === r.class &&
                    i.startDate > r.startDate &&
                    (!e || r.startDate < e.startDate)
                  )
                    return i;
                }
                return e;
              }, null);
              e && ((f = ty(e.startDate, l)), (c = !0));
            }
            let m = Object.keys(r.attr);
            for (let e = 0; e < m.length; e++) {
              var h;
              let i = m[e];
              if (
                !(
                  "ID" !== i &&
                  "CLASS" !== i &&
                  "START-DATE" !== i &&
                  "DURATION" !== i &&
                  "END-DATE" !== i &&
                  "END-ON-NEXT" !== i
                )
              )
                continue;
              let s = u[i];
              if (s) c && !d.durationKnown && (s.endTime = f);
              else if (o) {
                let e = r.attr[i];
                ("SCTE35-OUT" === i || "SCTE35-IN" === i) &&
                  ((h = e),
                  (e = Uint8Array.from(
                    h
                      .replace(/^0x/, "")
                      .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
                      .replace(/ +$/, "")
                      .split(" "),
                  ).buffer));
                let s = tE(o, n, f, { key: i, data: e }, tm.dateRange);
                s && ((s.id = t), this.id3Track.addCue(s), (u[i] = s));
              }
            }
            i[t] = { cues: u, dateRange: r, durationKnown: c };
          }
        }
      }
      class tS {
        constructor(e) {
          (this.hls = void 0),
            (this.config = void 0),
            (this.media = null),
            (this.levelDetails = null),
            (this.currentTime = 0),
            (this.stallCount = 0),
            (this._latency = null),
            (this.timeupdateHandler = () => this.timeupdate()),
            (this.hls = e),
            (this.config = e.config),
            this.registerListeners();
        }
        get latency() {
          return this._latency || 0;
        }
        get maxLatency() {
          let { config: e, levelDetails: t } = this;
          return void 0 !== e.liveMaxLatencyDuration
            ? e.liveMaxLatencyDuration
            : t
              ? e.liveMaxLatencyDurationCount * t.targetduration
              : 0;
        }
        get targetLatency() {
          let { levelDetails: e } = this;
          if (null === e) return null;
          let { holdBack: t, partHoldBack: i, targetduration: r } = e,
            {
              liveSyncDuration: s,
              liveSyncDurationCount: a,
              lowLatencyMode: n,
            } = this.config,
            l = this.hls.userConfig,
            o = (n && i) || t;
          return (
            (l.liveSyncDuration || l.liveSyncDurationCount || 0 === o) &&
              (o = void 0 !== s ? s : a * r),
            o + Math.min(1 * this.stallCount, r)
          );
        }
        get liveSyncPosition() {
          let e = this.estimateLiveEdge(),
            t = this.targetLatency,
            i = this.levelDetails;
          if (null === e || null === t || null === i) return null;
          let r = i.edge,
            s = e - t - this.edgeStalled;
          return Math.min(
            Math.max(r - i.totalduration, s),
            r -
              ((this.config.lowLatencyMode && i.partTarget) ||
                i.targetduration),
          );
        }
        get drift() {
          let { levelDetails: e } = this;
          return null === e ? 1 : e.drift;
        }
        get edgeStalled() {
          let { levelDetails: e } = this;
          if (null === e) return 0;
          let t =
            3 *
            ((this.config.lowLatencyMode && e.partTarget) || e.targetduration);
          return Math.max(e.age - t, 0);
        }
        get forwardBufferLength() {
          let { media: e, levelDetails: t } = this;
          if (!e || !t) return 0;
          let i = e.buffered.length;
          return (i ? e.buffered.end(i - 1) : t.edge) - this.currentTime;
        }
        destroy() {
          this.unregisterListeners(),
            this.onMediaDetaching(),
            (this.levelDetails = null),
            (this.hls = this.timeupdateHandler = null);
        }
        registerListeners() {
          this.hls.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            this.hls.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.on(C.LEVEL_UPDATED, this.onLevelUpdated, this),
            this.hls.on(C.ERROR, this.onError, this);
        }
        unregisterListeners() {
          this.hls.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            this.hls.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.off(C.LEVEL_UPDATED, this.onLevelUpdated, this),
            this.hls.off(C.ERROR, this.onError, this);
        }
        onMediaAttached(e, t) {
          (this.media = t.media),
            this.media.addEventListener("timeupdate", this.timeupdateHandler);
        }
        onMediaDetaching() {
          this.media &&
            (this.media.removeEventListener(
              "timeupdate",
              this.timeupdateHandler,
            ),
            (this.media = null));
        }
        onManifestLoading() {
          (this.levelDetails = null),
            (this._latency = null),
            (this.stallCount = 0);
        }
        onLevelUpdated(e, { details: t }) {
          (this.levelDetails = t),
            t.advanced && this.timeupdate(),
            !t.live &&
              this.media &&
              this.media.removeEventListener(
                "timeupdate",
                this.timeupdateHandler,
              );
        }
        onError(e, t) {
          var i;
          t.details === P.BUFFER_STALLED_ERROR &&
            (this.stallCount++,
            null != (i = this.levelDetails) &&
              i.live &&
              M.warn(
                "[playback-rate-controller]: Stall detected, adjusting target latency",
              ));
        }
        timeupdate() {
          let { media: e, levelDetails: t } = this;
          if (!e || !t) return;
          this.currentTime = e.currentTime;
          let i = this.computeLatency();
          if (null === i) return;
          this._latency = i;
          let { lowLatencyMode: r, maxLiveSyncPlaybackRate: s } = this.config;
          if (!r || 1 === s || !t.live) return;
          let a = this.targetLatency;
          if (null === a) return;
          let n = i - a;
          if (
            n < Math.min(this.maxLatency, a + t.targetduration) &&
            n > 0.05 &&
            this.forwardBufferLength > 1
          ) {
            let t =
              Math.round(
                (2 / (1 + Math.exp(-0.75 * n - this.edgeStalled))) * 20,
              ) / 20;
            e.playbackRate = Math.min(
              Math.min(2, Math.max(1, s)),
              Math.max(1, t),
            );
          } else
            1 !== e.playbackRate &&
              0 !== e.playbackRate &&
              (e.playbackRate = 1);
        }
        estimateLiveEdge() {
          let { levelDetails: e } = this;
          return null === e ? null : e.edge + e.age;
        }
        computeLatency() {
          let e = this.estimateLiveEdge();
          return null === e ? null : e - this.currentTime;
        }
      }
      let tA = ["NONE", "TYPE-0", "TYPE-1", null],
        tL = ["SDR", "PQ", "HLG"];
      var tR = { No: "", Yes: "YES", v2: "v2" };
      function tD(e) {
        let { canSkipUntil: t, canSkipDateRanges: i, age: r } = e;
        return t && r < t / 2 ? (i ? tR.v2 : tR.Yes) : tR.No;
      }
      class tI {
        constructor(e, t, i) {
          (this.msn = void 0),
            (this.part = void 0),
            (this.skip = void 0),
            (this.msn = e),
            (this.part = t),
            (this.skip = i);
        }
        addDirectives(e) {
          let t = new self.URL(e);
          return (
            void 0 !== this.msn &&
              t.searchParams.set("_HLS_msn", this.msn.toString()),
            void 0 !== this.part &&
              t.searchParams.set("_HLS_part", this.part.toString()),
            this.skip && t.searchParams.set("_HLS_skip", this.skip),
            t.href
          );
        }
      }
      class tb {
        constructor(e) {
          (this._attrs = void 0),
            (this.audioCodec = void 0),
            (this.bitrate = void 0),
            (this.codecSet = void 0),
            (this.url = void 0),
            (this.frameRate = void 0),
            (this.height = void 0),
            (this.id = void 0),
            (this.name = void 0),
            (this.videoCodec = void 0),
            (this.width = void 0),
            (this.details = void 0),
            (this.fragmentError = 0),
            (this.loadError = 0),
            (this.loaded = void 0),
            (this.realBitrate = 0),
            (this.supportedPromise = void 0),
            (this.supportedResult = void 0),
            (this._avgBitrate = 0),
            (this._audioGroups = void 0),
            (this._subtitleGroups = void 0),
            (this._urlId = 0),
            (this.url = [e.url]),
            (this._attrs = [e.attrs]),
            (this.bitrate = e.bitrate),
            e.details && (this.details = e.details),
            (this.id = e.id || 0),
            (this.name = e.name),
            (this.width = e.width || 0),
            (this.height = e.height || 0),
            (this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0)),
            (this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH")),
            (this.audioCodec = e.audioCodec),
            (this.videoCodec = e.videoCodec),
            (this.codecSet = [e.videoCodec, e.audioCodec]
              .filter((e) => !!e)
              .map((e) => e.substring(0, 4))
              .join(",")),
            this.addGroupId("audio", e.attrs.AUDIO),
            this.addGroupId("text", e.attrs.SUBTITLES);
        }
        get maxBitrate() {
          return Math.max(this.realBitrate, this.bitrate);
        }
        get averageBitrate() {
          return this._avgBitrate || this.realBitrate || this.bitrate;
        }
        get attrs() {
          return this._attrs[0];
        }
        get codecs() {
          return this.attrs.CODECS || "";
        }
        get pathwayId() {
          return this.attrs["PATHWAY-ID"] || ".";
        }
        get videoRange() {
          return this.attrs["VIDEO-RANGE"] || "SDR";
        }
        get score() {
          return this.attrs.optionalFloat("SCORE", 0);
        }
        get uri() {
          return this.url[0] || "";
        }
        hasAudioGroup(e) {
          return tk(this._audioGroups, e);
        }
        hasSubtitleGroup(e) {
          return tk(this._subtitleGroups, e);
        }
        get audioGroups() {
          return this._audioGroups;
        }
        get subtitleGroups() {
          return this._subtitleGroups;
        }
        addGroupId(e, t) {
          if (t) {
            if ("audio" === e) {
              let e = this._audioGroups;
              e || (e = this._audioGroups = []),
                -1 === e.indexOf(t) && e.push(t);
            } else if ("text" === e) {
              let e = this._subtitleGroups;
              e || (e = this._subtitleGroups = []),
                -1 === e.indexOf(t) && e.push(t);
            }
          }
        }
        get urlId() {
          return 0;
        }
        set urlId(e) {}
        get audioGroupIds() {
          return this.audioGroups ? [this.audioGroupId] : void 0;
        }
        get textGroupIds() {
          return this.subtitleGroups ? [this.textGroupId] : void 0;
        }
        get audioGroupId() {
          var e;
          return null == (e = this.audioGroups) ? void 0 : e[0];
        }
        get textGroupId() {
          var e;
          return null == (e = this.subtitleGroups) ? void 0 : e[0];
        }
        addFallback() {}
      }
      function tk(e, t) {
        return !!t && !!e && -1 !== e.indexOf(t);
      }
      function t_(e, t) {
        let i = t.startPTS;
        if (b(i)) {
          let r,
            s = 0;
          t.sn > e.sn
            ? ((s = i - e.start), (r = e))
            : ((s = e.start - i), (r = t)),
            r.duration !== s && (r.duration = s);
        } else
          t.sn > e.sn
            ? e.cc === t.cc && e.minEndPTS
              ? (t.start = e.start + (e.minEndPTS - e.start))
              : (t.start = e.start + e.duration)
            : (t.start = Math.max(e.start - t.duration, 0));
      }
      function tC(e, t, i, r, s, a) {
        let n;
        r - i <= 0 &&
          (M.warn("Fragment should have a positive duration", t),
          (r = i + t.duration),
          (a = s + t.duration));
        let l = i,
          o = r,
          h = t.startPTS,
          d = t.endPTS;
        if (b(h)) {
          let e = Math.abs(h - i);
          b(t.deltaPTS)
            ? (t.deltaPTS = Math.max(e, t.deltaPTS))
            : (t.deltaPTS = e),
            (l = Math.max(i, h)),
            (i = Math.min(i, h)),
            (s = Math.min(s, t.startDTS)),
            (o = Math.min(r, d)),
            (r = Math.max(r, d)),
            (a = Math.max(a, t.endDTS));
        }
        let u = i - t.start;
        0 !== t.start && (t.start = i),
          (t.duration = r - t.start),
          (t.startPTS = i),
          (t.maxStartPTS = l),
          (t.startDTS = s),
          (t.endPTS = r),
          (t.minEndPTS = o),
          (t.endDTS = a);
        let c = t.sn;
        if (!e || c < e.startSN || c > e.endSN) return 0;
        let f = c - e.startSN,
          g = e.fragments;
        for (g[f] = t, n = f; n > 0; n--) t_(g[n], g[n - 1]);
        for (n = f; n < g.length - 1; n++) t_(g[n], g[n + 1]);
        return (
          e.fragmentHint && t_(g[g.length - 1], e.fragmentHint),
          (e.PTSKnown = e.alignedSliding = !0),
          u
        );
      }
      function tw(e, t) {
        let i = t.startSN + t.skippedSegments - e.startSN,
          r = e.fragments;
        i < 0 || i >= r.length || tP(t, r[i].start);
      }
      function tP(e, t) {
        if (t) {
          let i = e.fragments;
          for (let r = e.skippedSegments; r < i.length; r++) i[r].start += t;
          e.fragmentHint && (e.fragmentHint.start += t);
        }
      }
      function tx(e, t, i) {
        var r;
        return null != e && e.details
          ? tO(null == (r = e.details) ? void 0 : r.partList, t, i)
          : null;
      }
      function tO(e, t, i) {
        if (e)
          for (let r = e.length; r--; ) {
            let s = e[r];
            if (s.index === i && s.fragment.sn === t) return s;
          }
        return null;
      }
      function tF(e) {
        e.forEach((e, t) => {
          let { details: i } = e;
          null != i &&
            i.fragments &&
            i.fragments.forEach((e) => {
              e.level = t;
            });
        });
      }
      function tM(e) {
        switch (e.details) {
          case P.FRAG_LOAD_TIMEOUT:
          case P.KEY_LOAD_TIMEOUT:
          case P.LEVEL_LOAD_TIMEOUT:
          case P.MANIFEST_LOAD_TIMEOUT:
            return !0;
        }
        return !1;
      }
      function tN(e, t) {
        let i = tM(t);
        return e.default[`${i ? "timeout" : "error"}Retry`];
      }
      function tU(e, t) {
        return Math.min(
          ("linear" === e.backoff ? 1 : Math.pow(2, t)) * e.retryDelayMs,
          e.maxRetryDelayMs,
        );
      }
      function tB(e) {
        return D(D({}, e), { errorRetry: null, timeoutRetry: null });
      }
      function t$(e, t, i, r) {
        if (!e) return !1;
        let s = null == r ? void 0 : r.code,
          a =
            t < e.maxNumRetry &&
            ((0 === s && !1 === navigator.onLine) ||
              (!!s && (s < 400 || s > 499)) ||
              !!i);
        return e.shouldRetry ? e.shouldRetry(e, t, i, r, a) : a;
      }
      let tG = function (e, t) {
        let i = 0,
          r = e.length - 1,
          s = null,
          a = null;
        for (; i <= r; ) {
          let n = t((a = e[(s = ((i + r) / 2) | 0)]));
          if (n > 0) i = s + 1;
          else {
            if (!(n < 0)) return a;
            r = s - 1;
          }
        }
        return null;
      };
      function tK(e, t, i = 0, r = 0, s = 0.005) {
        let a = null;
        if (e) {
          a = t[e.sn - t[0].sn + 1] || null;
          let r = e.endDTS - i;
          r > 0 && r < 15e-7 && (i += 15e-7);
        } else 0 === i && 0 === t[0].start && (a = t[0]);
        if (
          a &&
          (((!e || e.level === a.level) && 0 === tV(i, r, a)) ||
            (function (e, t, i) {
              if (
                t &&
                0 === t.start &&
                t.level < e.level &&
                (t.endPTS || 0) > 0
              ) {
                let r = t.tagList.reduce(
                  (e, t) => ("INF" === t[0] && (e += parseFloat(t[1])), e),
                  i,
                );
                return e.start <= r;
              }
              return !1;
            })(a, e, Math.min(s, r)))
        )
          return a;
        let n = tG(t, tV.bind(null, i, r));
        return n && (n !== e || !a) ? n : a;
      }
      function tV(e = 0, t = 0, i) {
        if (i.start <= e && i.start + i.duration > e) return 0;
        let r = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
        return i.start + i.duration - r <= e
          ? 1
          : i.start - r > e && i.start
            ? -1
            : 0;
      }
      var tH = {
          DoNothing: 0,
          SendAlternateToPenaltyBox: 2,
          RemoveAlternatePermanently: 3,
          RetryRequest: 5,
        },
        tY = {
          None: 0,
          MoveAllAlternatesMatchingHost: 1,
          MoveAllAlternatesMatchingHDCP: 2,
        };
      class tW {
        constructor(e) {
          (this.hls = void 0),
            (this.playlistError = 0),
            (this.penalizedRenditions = {}),
            (this.log = void 0),
            (this.warn = void 0),
            (this.error = void 0),
            (this.hls = e),
            (this.log = M.log.bind(M, "[info]:")),
            (this.warn = M.warn.bind(M, "[warning]:")),
            (this.error = M.error.bind(M, "[error]:")),
            this.registerListeners();
        }
        registerListeners() {
          let e = this.hls;
          e.on(C.ERROR, this.onError, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.LEVEL_UPDATED, this.onLevelUpdated, this);
        }
        unregisterListeners() {
          let e = this.hls;
          e &&
            (e.off(C.ERROR, this.onError, this),
            e.off(C.ERROR, this.onErrorOut, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.LEVEL_UPDATED, this.onLevelUpdated, this));
        }
        destroy() {
          this.unregisterListeners(),
            (this.hls = null),
            (this.penalizedRenditions = {});
        }
        startLoad(e) {}
        stopLoad() {
          this.playlistError = 0;
        }
        getVariantLevelIndex(e) {
          return (null == e ? void 0 : e.type) === tn.MAIN
            ? e.level
            : this.hls.loadLevel;
        }
        onManifestLoading() {
          (this.playlistError = 0), (this.penalizedRenditions = {});
        }
        onLevelUpdated() {
          this.playlistError = 0;
        }
        onError(e, t) {
          var i, r, s, a;
          if (t.fatal) return;
          let n = this.hls,
            l = t.context;
          switch (t.details) {
            case P.FRAG_LOAD_ERROR:
            case P.FRAG_LOAD_TIMEOUT:
            case P.KEY_LOAD_ERROR:
            case P.KEY_LOAD_TIMEOUT:
              t.errorAction = this.getFragRetryOrSwitchAction(t);
              return;
            case P.FRAG_PARSING_ERROR:
              if (null != (i = t.frag) && i.gap) {
                t.errorAction = { action: tH.DoNothing, flags: tY.None };
                return;
              }
            case P.FRAG_GAP:
            case P.FRAG_DECRYPT_ERROR:
              (t.errorAction = this.getFragRetryOrSwitchAction(t)),
                (t.errorAction.action = tH.SendAlternateToPenaltyBox);
              return;
            case P.LEVEL_EMPTY_ERROR:
            case P.LEVEL_PARSING_ERROR:
              {
                let e = t.parent === tn.MAIN ? t.level : n.loadLevel;
                t.details === P.LEVEL_EMPTY_ERROR &&
                null != (s = t.context) &&
                null != (a = s.levelDetails) &&
                a.live
                  ? (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, e))
                  : ((t.levelRetry = !1),
                    (t.errorAction = this.getLevelSwitchAction(t, e)));
              }
              return;
            case P.LEVEL_LOAD_ERROR:
            case P.LEVEL_LOAD_TIMEOUT:
              "number" == typeof (null == l ? void 0 : l.level) &&
                (t.errorAction = this.getPlaylistRetryOrSwitchAction(
                  t,
                  l.level,
                ));
              return;
            case P.AUDIO_TRACK_LOAD_ERROR:
            case P.AUDIO_TRACK_LOAD_TIMEOUT:
            case P.SUBTITLE_LOAD_ERROR:
            case P.SUBTITLE_TRACK_LOAD_TIMEOUT:
              if (l) {
                let e = n.levels[n.loadLevel];
                e &&
                  ((l.type === ta.AUDIO_TRACK && e.hasAudioGroup(l.groupId)) ||
                    (l.type === ta.SUBTITLE_TRACK &&
                      e.hasSubtitleGroup(l.groupId))) &&
                  ((t.errorAction = this.getPlaylistRetryOrSwitchAction(
                    t,
                    n.loadLevel,
                  )),
                  (t.errorAction.action = tH.SendAlternateToPenaltyBox),
                  (t.errorAction.flags = tY.MoveAllAlternatesMatchingHost));
              }
              return;
            case P.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
              {
                let e = n.levels[n.loadLevel],
                  i = null == e ? void 0 : e.attrs["HDCP-LEVEL"];
                i
                  ? (t.errorAction = {
                      action: tH.SendAlternateToPenaltyBox,
                      flags: tY.MoveAllAlternatesMatchingHDCP,
                      hdcpLevel: i,
                    })
                  : this.keySystemError(t);
              }
              return;
            case P.BUFFER_ADD_CODEC_ERROR:
            case P.REMUX_ALLOC_ERROR:
            case P.BUFFER_APPEND_ERROR:
              t.errorAction = this.getLevelSwitchAction(
                t,
                null != (r = t.level) ? r : n.loadLevel,
              );
              return;
            case P.INTERNAL_EXCEPTION:
            case P.BUFFER_APPENDING_ERROR:
            case P.BUFFER_FULL_ERROR:
            case P.LEVEL_SWITCH_ERROR:
            case P.BUFFER_STALLED_ERROR:
            case P.BUFFER_SEEK_OVER_HOLE:
            case P.BUFFER_NUDGE_ON_STALL:
              t.errorAction = { action: tH.DoNothing, flags: tY.None };
              return;
          }
          t.type === w.KEY_SYSTEM_ERROR && this.keySystemError(t);
        }
        keySystemError(e) {
          let t = this.getVariantLevelIndex(e.frag);
          (e.levelRetry = !1),
            (e.errorAction = this.getLevelSwitchAction(e, t));
        }
        getPlaylistRetryOrSwitchAction(e, t) {
          let i = tN(this.hls.config.playlistLoadPolicy, e),
            r = this.playlistError++;
          if (t$(i, r, tM(e), e.response))
            return {
              action: tH.RetryRequest,
              flags: tY.None,
              retryConfig: i,
              retryCount: r,
            };
          let s = this.getLevelSwitchAction(e, t);
          return i && ((s.retryConfig = i), (s.retryCount = r)), s;
        }
        getFragRetryOrSwitchAction(e) {
          let t = this.hls,
            i = this.getVariantLevelIndex(e.frag),
            r = t.levels[i],
            { fragLoadPolicy: s, keyLoadPolicy: a } = t.config,
            n = tN(e.details.startsWith("key") ? a : s, e),
            l = t.levels.reduce((e, t) => e + t.fragmentError, 0);
          if (
            r &&
            (e.details !== P.FRAG_GAP && r.fragmentError++,
            t$(n, l, tM(e), e.response))
          )
            return {
              action: tH.RetryRequest,
              flags: tY.None,
              retryConfig: n,
              retryCount: l,
            };
          let o = this.getLevelSwitchAction(e, i);
          return n && ((o.retryConfig = n), (o.retryCount = l)), o;
        }
        getLevelSwitchAction(e, t) {
          let i = this.hls;
          null == t && (t = i.loadLevel);
          let r = this.hls.levels[t];
          if (r) {
            var s, a, n, l;
            let t = e.details;
            r.loadError++, t === P.BUFFER_APPEND_ERROR && r.fragmentError++;
            let o = -1,
              { levels: h, loadLevel: d, minAutoLevel: u, maxAutoLevel: c } = i;
            i.autoLevelEnabled || (i.loadLevel = -1);
            let f = null == (s = e.frag) ? void 0 : s.type,
              g =
                ((f === tn.AUDIO && t === P.FRAG_PARSING_ERROR) ||
                  ("audio" === e.sourceBufferName &&
                    (t === P.BUFFER_ADD_CODEC_ERROR ||
                      t === P.BUFFER_APPEND_ERROR))) &&
                h.some(({ audioCodec: e }) => r.audioCodec !== e),
              m =
                "video" === e.sourceBufferName &&
                (t === P.BUFFER_ADD_CODEC_ERROR ||
                  t === P.BUFFER_APPEND_ERROR) &&
                h.some(
                  ({ codecSet: e, audioCodec: t }) =>
                    r.codecSet !== e && r.audioCodec === t,
                ),
              { type: p, groupId: E } = null != (a = e.context) ? a : {};
            for (let i = h.length; i--; ) {
              let s = (i + d) % h.length;
              if (s !== d && s >= u && s <= c && 0 === h[s].loadError) {
                let i = h[s];
                if (t === P.FRAG_GAP && f === tn.MAIN && e.frag) {
                  let t = h[s].details;
                  if (t) {
                    let i = tK(e.frag, t.fragments, e.frag.start);
                    if (null != i && i.gap) continue;
                  }
                } else if (
                  (p === ta.AUDIO_TRACK && i.hasAudioGroup(E)) ||
                  (p === ta.SUBTITLE_TRACK && i.hasSubtitleGroup(E))
                )
                  continue;
                else if (
                  (f === tn.AUDIO &&
                    null != (n = r.audioGroups) &&
                    n.some((e) => i.hasAudioGroup(e))) ||
                  (f === tn.SUBTITLE &&
                    null != (l = r.subtitleGroups) &&
                    l.some((e) => i.hasSubtitleGroup(e))) ||
                  (g && r.audioCodec === i.audioCodec) ||
                  (!g && r.audioCodec !== i.audioCodec) ||
                  (m && r.codecSet === i.codecSet)
                )
                  continue;
                o = s;
                break;
              }
            }
            if (o > -1 && i.loadLevel !== o)
              return (
                (e.levelRetry = !0),
                (this.playlistError = 0),
                {
                  action: tH.SendAlternateToPenaltyBox,
                  flags: tY.None,
                  nextAutoLevel: o,
                }
              );
          }
          return {
            action: tH.SendAlternateToPenaltyBox,
            flags: tY.MoveAllAlternatesMatchingHost,
          };
        }
        onErrorOut(e, t) {
          var i;
          switch (null == (i = t.errorAction) ? void 0 : i.action) {
            case tH.DoNothing:
              break;
            case tH.SendAlternateToPenaltyBox:
              this.sendAlternateToPenaltyBox(t),
                t.errorAction.resolved || t.details === P.FRAG_GAP
                  ? /MediaSource readyState: ended/.test(t.error.message) &&
                    (this.warn(
                      `MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`,
                    ),
                    this.hls.recoverMediaError())
                  : (t.fatal = !0);
            case tH.RetryRequest:
          }
          if (t.fatal) {
            this.hls.stopLoad();
            return;
          }
        }
        sendAlternateToPenaltyBox(e) {
          let t = this.hls,
            i = e.errorAction;
          if (!i) return;
          let { flags: r, hdcpLevel: s, nextAutoLevel: a } = i;
          switch (r) {
            case tY.None:
              this.switchLevel(e, a);
              break;
            case tY.MoveAllAlternatesMatchingHDCP:
              s &&
                ((t.maxHdcpLevel = tA[tA.indexOf(s) - 1]), (i.resolved = !0)),
                this.warn(
                  `Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`,
                );
          }
          i.resolved || this.switchLevel(e, a);
        }
        switchLevel(e, t) {
          void 0 !== t &&
            e.errorAction &&
            (this.warn(`switching to level ${t} after ${e.details}`),
            (this.hls.nextAutoLevel = t),
            (e.errorAction.resolved = !0),
            (this.hls.nextLoadLevel = this.hls.nextAutoLevel));
        }
      }
      class tj {
        constructor(e, t) {
          (this.hls = void 0),
            (this.timer = -1),
            (this.requestScheduled = -1),
            (this.canLoad = !1),
            (this.log = void 0),
            (this.warn = void 0),
            (this.log = M.log.bind(M, `${t}:`)),
            (this.warn = M.warn.bind(M, `${t}:`)),
            (this.hls = e);
        }
        destroy() {
          this.clearTimer(), (this.hls = this.log = this.warn = null);
        }
        clearTimer() {
          -1 !== this.timer &&
            (self.clearTimeout(this.timer), (this.timer = -1));
        }
        startLoad() {
          (this.canLoad = !0),
            (this.requestScheduled = -1),
            this.loadPlaylist();
        }
        stopLoad() {
          (this.canLoad = !1), this.clearTimer();
        }
        switchParams(e, t, i) {
          let r = null == t ? void 0 : t.renditionReports;
          if (r) {
            let s = -1;
            for (let i = 0; i < r.length; i++) {
              let a;
              let n = r[i];
              try {
                a = new self.URL(n.URI, t.url).href;
              } catch (e) {
                M.warn(
                  `Could not construct new URL for Rendition Report: ${e}`,
                ),
                  (a = n.URI || "");
              }
              if (a === e) {
                s = i;
                break;
              }
              a === e.substring(0, a.length) && (s = i);
            }
            if (-1 !== s) {
              let e = r[s],
                a =
                  parseInt(e["LAST-MSN"]) ||
                  (null == t ? void 0 : t.lastPartSn),
                n =
                  parseInt(e["LAST-PART"]) ||
                  (null == t ? void 0 : t.lastPartIndex);
              if (this.hls.config.lowLatencyMode) {
                let e = Math.min(t.age - t.partTarget, t.targetduration);
                n >= 0 && e > t.partTarget && (n += 1);
              }
              return new tI(a, n >= 0 ? n : void 0, i && tD(i));
            }
          }
        }
        loadPlaylist(e) {
          -1 === this.requestScheduled &&
            (this.requestScheduled = self.performance.now());
        }
        shouldLoadPlaylist(e) {
          return (
            this.canLoad && !!e && !!e.url && (!e.details || e.details.live)
          );
        }
        shouldReloadPlaylist(e) {
          return (
            -1 === this.timer &&
            -1 === this.requestScheduled &&
            this.shouldLoadPlaylist(e)
          );
        }
        playlistLoaded(e, t, i) {
          let { details: r, stats: s } = t,
            a = self.performance.now(),
            n = s.loading.first ? Math.max(0, a - s.loading.first) : 0;
          if (
            ((r.advancedDateTime = Date.now() - n),
            r.live || (null != i && i.live))
          ) {
            let n, l, o;
            if (
              (r.reloaded(i),
              i &&
                this.log(
                  `live playlist ${e} ${r.advanced ? "REFRESHED " + r.lastPartSn + "-" + r.lastPartIndex : r.updated ? "UPDATED" : "MISSED"}`,
                ),
              i &&
                r.fragments.length > 0 &&
                (function (e, t) {
                  let i,
                    r = null,
                    s = e.fragments;
                  for (let e = s.length - 1; e >= 0; e--) {
                    let t = s[e].initSegment;
                    if (t) {
                      r = t;
                      break;
                    }
                  }
                  e.fragmentHint && delete e.fragmentHint.endPTS,
                    (function (e, t, i) {
                      let r = t.skippedSegments,
                        s = Math.max(e.startSN, t.startSN) - t.startSN,
                        a =
                          (e.fragmentHint ? 1 : 0) +
                          (r ? t.endSN : Math.min(e.endSN, t.endSN)) -
                          t.startSN,
                        n = t.startSN - e.startSN,
                        l = t.fragmentHint
                          ? t.fragments.concat(t.fragmentHint)
                          : t.fragments,
                        o = e.fragmentHint
                          ? e.fragments.concat(e.fragmentHint)
                          : e.fragments;
                      for (let e = s; e <= a; e++) {
                        let s = o[n + e],
                          a = l[e];
                        r && !a && e < r && (a = t.fragments[e] = s),
                          s && a && i(s, a, e, l);
                      }
                    })(e, t, (e, s, a, n) => {
                      if (t.skippedSegments && s.cc !== e.cc) {
                        let t = e.cc - s.cc;
                        for (let e = a; e < n.length; e++) n[e].cc += t;
                      }
                      b(e.startPTS) &&
                        b(e.endPTS) &&
                        ((s.start = s.startPTS = e.startPTS),
                        (s.startDTS = e.startDTS),
                        (s.maxStartPTS = e.maxStartPTS),
                        (s.endPTS = e.endPTS),
                        (s.endDTS = e.endDTS),
                        (s.minEndPTS = e.minEndPTS),
                        (s.duration = e.endPTS - e.startPTS),
                        s.duration && (i = s),
                        (t.PTSKnown = t.alignedSliding = !0)),
                        (s.elementaryStreams = e.elementaryStreams),
                        (s.loader = e.loader),
                        (s.stats = e.stats),
                        e.initSegment &&
                          ((s.initSegment = e.initSegment),
                          (r = e.initSegment));
                    });
                  let a = t.fragments;
                  if (
                    (r &&
                      (t.fragmentHint ? a.concat(t.fragmentHint) : a).forEach(
                        (e) => {
                          var t;
                          e &&
                            (!e.initSegment ||
                              e.initSegment.relurl ===
                                (null == (t = r) ? void 0 : t.relurl)) &&
                            (e.initSegment = r);
                        },
                      ),
                    t.skippedSegments)
                  ) {
                    if (
                      ((t.deltaUpdateFailed = a.some((e) => !e)),
                      t.deltaUpdateFailed)
                    ) {
                      M.warn(
                        "[level-helper] Previous playlist missing segments skipped in delta playlist",
                      );
                      for (let e = t.skippedSegments; e--; ) a.shift();
                      t.startSN = a[0].sn;
                    } else
                      t.canSkipDateRanges &&
                        (t.dateRanges = (function (e, t, i) {
                          let r = I({}, e);
                          return (
                            i &&
                              i.forEach((e) => {
                                delete r[e];
                              }),
                            Object.keys(t).forEach((e) => {
                              let i = new $(t[e].attr, r[e]);
                              i.isValid
                                ? (r[e] = i)
                                : M.warn(
                                    `Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(t[e].attr)}"`,
                                  );
                            }),
                            r
                          );
                        })(
                          e.dateRanges,
                          t.dateRanges,
                          t.recentlyRemovedDateranges,
                        ));
                    (t.startCC = t.fragments[0].cc),
                      (t.endCC = a[a.length - 1].cc);
                  }
                  (function (e, t, i) {
                    if (e && t) {
                      let r = 0;
                      for (let s = 0, a = e.length; s <= a; s++) {
                        let a = e[s],
                          n = t[s + r];
                        a &&
                        n &&
                        a.index === n.index &&
                        a.fragment.sn === n.fragment.sn
                          ? i(a, n)
                          : r--;
                      }
                    }
                  })(e.partList, t.partList, (e, t) => {
                    (t.elementaryStreams = e.elementaryStreams),
                      (t.stats = e.stats);
                  }),
                    i
                      ? tC(t, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS)
                      : tw(e, t),
                    a.length && (t.totalduration = t.edge - a[0].start),
                    (t.driftStartTime = e.driftStartTime),
                    (t.driftStart = e.driftStart);
                  let n = t.advancedDateTime;
                  if (t.advanced && n) {
                    let e = t.edge;
                    t.driftStart ||
                      ((t.driftStartTime = n), (t.driftStart = e)),
                      (t.driftEndTime = n),
                      (t.driftEnd = e);
                  } else
                    (t.driftEndTime = e.driftEndTime),
                      (t.driftEnd = e.driftEnd),
                      (t.advancedDateTime = e.advancedDateTime);
                })(i, r),
              !this.canLoad || !r.live)
            )
              return;
            if (r.canBlockReload && r.endSN && r.advanced) {
              let e = this.hls.config.lowLatencyMode,
                s = r.lastPartSn,
                a = r.endSN,
                h = r.lastPartIndex,
                d = s === a;
              -1 !== h
                ? ((l = d ? a + 1 : s), (o = d ? (e ? 0 : h) : h + 1))
                : (l = a + 1);
              let u = r.age,
                c = Math.min(
                  u + r.ageHeader - r.partTarget,
                  1.5 * r.targetduration,
                );
              if (c > 0) {
                if (i && c > i.tuneInGoal)
                  this.warn(
                    `CDN Tune-in goal increased from: ${i.tuneInGoal} to: ${c} with playlist age: ${r.age}`,
                  ),
                    (c = 0);
                else {
                  let e = Math.floor(c / r.targetduration);
                  (l += e),
                    void 0 !== o &&
                      (o += Math.round((c % r.targetduration) / r.partTarget)),
                    this.log(
                      `CDN Tune-in age: ${r.ageHeader}s last advanced ${u.toFixed(2)}s goal: ${c} skip sn ${e} to part ${o}`,
                    );
                }
                r.tuneInGoal = c;
              }
              if (
                ((n = this.getDeliveryDirectives(
                  r,
                  t.deliveryDirectives,
                  l,
                  o,
                )),
                e || !d)
              ) {
                this.loadPlaylist(n);
                return;
              }
            } else
              (r.canBlockReload || r.canSkipUntil) &&
                (n = this.getDeliveryDirectives(r, t.deliveryDirectives, l, o));
            let h = this.hls.mainForwardBufferInfo,
              d = h ? h.end - h.len : 0,
              u = (r.edge - d) * 1e3,
              c = (function (e, t = 1 / 0) {
                let i = 1e3 * e.targetduration;
                if (e.updated) {
                  let r = e.fragments;
                  if (r.length && 4 * i > t) {
                    let e = 1e3 * r[r.length - 1].duration;
                    e < i && (i = e);
                  }
                } else i /= 2;
                return Math.round(i);
              })(r, u);
            r.updated &&
              a > this.requestScheduled + c &&
              (this.requestScheduled = s.loading.start),
              void 0 !== l && r.canBlockReload
                ? (this.requestScheduled =
                    s.loading.first + c - (1e3 * r.partTarget || 1e3))
                : -1 === this.requestScheduled || this.requestScheduled + c < a
                  ? (this.requestScheduled = a)
                  : this.requestScheduled - a <= 0 &&
                    (this.requestScheduled += c);
            let f = this.requestScheduled - a;
            (f = Math.max(0, f)),
              this.log(`reload live playlist ${e} in ${Math.round(f)} ms`),
              (this.timer = self.setTimeout(() => this.loadPlaylist(n), f));
          } else this.clearTimer();
        }
        getDeliveryDirectives(e, t, i, r) {
          let s = tD(e);
          return (
            null != t &&
              t.skip &&
              e.deltaUpdateFailed &&
              ((i = t.msn), (r = t.part), (s = tR.No)),
            new tI(i, r, s)
          );
        }
        checkRetry(e) {
          let t = e.details,
            i = tM(e),
            r = e.errorAction,
            { action: s, retryCount: a = 0, retryConfig: n } = r || {},
            l =
              !!r &&
              !!n &&
              (s === tH.RetryRequest ||
                (!r.resolved && s === tH.SendAlternateToPenaltyBox));
          if (l) {
            var o;
            if (((this.requestScheduled = -1), a >= n.maxNumRetry)) return !1;
            if (i && null != (o = e.context) && o.deliveryDirectives)
              this.warn(
                `Retrying playlist loading ${a + 1}/${n.maxNumRetry} after "${t}" without delivery-directives`,
              ),
                this.loadPlaylist();
            else {
              let e = tU(n, a);
              (this.timer = self.setTimeout(() => this.loadPlaylist(), e)),
                this.warn(
                  `Retrying playlist loading ${a + 1}/${n.maxNumRetry} after "${t}" in ${e}ms`,
                );
            }
            (e.levelRetry = !0), (r.resolved = !0);
          }
          return l;
        }
      }
      class tq {
        constructor(e, t = 0, i = 0) {
          (this.halfLife = void 0),
            (this.alpha_ = void 0),
            (this.estimate_ = void 0),
            (this.totalWeight_ = void 0),
            (this.halfLife = e),
            (this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0),
            (this.estimate_ = t),
            (this.totalWeight_ = i);
        }
        sample(e, t) {
          let i = Math.pow(this.alpha_, e);
          (this.estimate_ = t * (1 - i) + i * this.estimate_),
            (this.totalWeight_ += e);
        }
        getTotalWeight() {
          return this.totalWeight_;
        }
        getEstimate() {
          if (this.alpha_) {
            let e = 1 - Math.pow(this.alpha_, this.totalWeight_);
            if (e) return this.estimate_ / e;
          }
          return this.estimate_;
        }
      }
      class tX {
        constructor(e, t, i, r = 100) {
          (this.defaultEstimate_ = void 0),
            (this.minWeight_ = void 0),
            (this.minDelayMs_ = void 0),
            (this.slow_ = void 0),
            (this.fast_ = void 0),
            (this.defaultTTFB_ = void 0),
            (this.ttfb_ = void 0),
            (this.defaultEstimate_ = i),
            (this.minWeight_ = 0.001),
            (this.minDelayMs_ = 50),
            (this.slow_ = new tq(e)),
            (this.fast_ = new tq(t)),
            (this.defaultTTFB_ = r),
            (this.ttfb_ = new tq(e));
        }
        update(e, t) {
          let { slow_: i, fast_: r, ttfb_: s } = this;
          i.halfLife !== e &&
            (this.slow_ = new tq(e, i.getEstimate(), i.getTotalWeight())),
            r.halfLife !== t &&
              (this.fast_ = new tq(t, r.getEstimate(), r.getTotalWeight())),
            s.halfLife !== e &&
              (this.ttfb_ = new tq(e, s.getEstimate(), s.getTotalWeight()));
        }
        sample(e, t) {
          let i = (e = Math.max(e, this.minDelayMs_)) / 1e3,
            r = (8 * t) / i;
          this.fast_.sample(i, r), this.slow_.sample(i, r);
        }
        sampleTTFB(e) {
          this.ttfb_.sample(
            Math.sqrt(2) * Math.exp(-Math.pow(e / 1e3, 2) / 2),
            Math.max(e, 5),
          );
        }
        canEstimate() {
          return this.fast_.getTotalWeight() >= this.minWeight_;
        }
        getEstimate() {
          return this.canEstimate()
            ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
            : this.defaultEstimate_;
        }
        getEstimateTTFB() {
          return this.ttfb_.getTotalWeight() >= this.minWeight_
            ? this.ttfb_.getEstimate()
            : this.defaultTTFB_;
        }
        destroy() {}
      }
      let tz = {
          supported: !0,
          configurations: [],
          decodingInfoResults: [
            { supported: !0, powerEfficient: !0, smooth: !0 },
          ],
        },
        tQ = {};
      function tJ(e, t) {
        M.log(`[abr] start candidates with "${e}" ignored because ${t}`);
      }
      function tZ(e, t, i) {
        if ("attrs" in e) {
          let i = t.indexOf(e);
          if (-1 !== i) return i;
        }
        for (let r = 0; r < t.length; r++) if (t0(e, t[r], i)) return r;
        return -1;
      }
      function t0(e, t, i) {
        let { groupId: r, name: s, lang: a, assocLang: n, default: l } = e,
          o = e.forced;
        return (
          (void 0 === r || t.groupId === r) &&
          (void 0 === s || t.name === s) &&
          (void 0 === a || t.lang === a) &&
          (void 0 === a || t.assocLang === n) &&
          (void 0 === l || t.default === l) &&
          (void 0 === o || t.forced === o) &&
          (!("characteristics" in e) ||
            (function (e, t = "") {
              let i = e.split(","),
                r = t.split(",");
              return (
                i.length === r.length && !i.some((e) => -1 === r.indexOf(e))
              );
            })(e.characteristics || "", t.characteristics)) &&
          (void 0 === i || i(e, t))
        );
      }
      function t1(e, t) {
        let { audioCodec: i, channels: r } = e;
        return (
          (void 0 === i ||
            (t.audioCodec || "").substring(0, 4) === i.substring(0, 4)) &&
          (void 0 === r || r === (t.channels || "2"))
        );
      }
      function t2(e, t, i) {
        for (let r = t; r > -1; r--) if (i(e[r])) return r;
        for (let r = t + 1; r < e.length; r++) if (i(e[r])) return r;
        return -1;
      }
      class t4 {
        constructor(e) {
          (this.hls = void 0),
            (this.lastLevelLoadSec = 0),
            (this.lastLoadedFragLevel = -1),
            (this.firstSelection = -1),
            (this._nextAutoLevel = -1),
            (this.nextAutoLevelKey = ""),
            (this.audioTracksByGroup = null),
            (this.codecTiers = null),
            (this.timer = -1),
            (this.fragCurrent = null),
            (this.partCurrent = null),
            (this.bitrateTestDelay = 0),
            (this.bwEstimator = void 0),
            (this._abandonRulesCheck = () => {
              let e;
              let { fragCurrent: t, partCurrent: i, hls: r } = this,
                { autoLevelEnabled: s, media: a } = r;
              if (!t || !a) return;
              let n = performance.now(),
                l = i ? i.stats : t.stats,
                o = i ? i.duration : t.duration,
                h = n - l.loading.start,
                d = r.minAutoLevel;
              if (
                l.aborted ||
                (l.loaded && l.loaded === l.total) ||
                t.level <= d
              ) {
                this.clearTimer(), (this._nextAutoLevel = -1);
                return;
              }
              if (!s || a.paused || !a.playbackRate || !a.readyState) return;
              let u = r.mainForwardBufferInfo;
              if (null === u) return;
              let c = this.bwEstimator.getEstimateTTFB(),
                f = Math.abs(a.playbackRate);
              if (h <= Math.max(c, (o / (2 * f)) * 1e3)) return;
              let g = u.len / f,
                m = l.loading.first ? l.loading.first - l.loading.start : -1,
                p = l.loaded && m > -1,
                E = this.getBwEstimate(),
                T = r.levels,
                y = T[t.level],
                v =
                  l.total ||
                  Math.max(l.loaded, Math.round((o * y.averageBitrate) / 8)),
                S = p ? h - m : h;
              S < 1 && p && (S = Math.min(h, (8 * l.loaded) / E));
              let A = p ? (1e3 * l.loaded) / S : 0,
                L = A ? (v - l.loaded) / A : (8 * v) / E + c / 1e3;
              if (L <= g) return;
              let R = A ? 8 * A : E,
                D = Number.POSITIVE_INFINITY;
              for (e = t.level - 1; e > d; e--) {
                let t = T[e].maxBitrate;
                if (
                  (D = this.getTimeToLoadFrag(
                    c / 1e3,
                    R,
                    o * t,
                    !T[e].details,
                  )) < g
                )
                  break;
              }
              if (D >= L || D > 10 * o) return;
              (r.nextLoadLevel = r.nextAutoLevel = e),
                p
                  ? this.bwEstimator.sample(h - Math.min(c, m), l.loaded)
                  : this.bwEstimator.sampleTTFB(h);
              let I = T[e].maxBitrate;
              this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > I &&
                this.resetEstimator(I),
                this.clearTimer(),
                M.warn(`[abr] Fragment ${t.sn}${i ? " part " + i.index : ""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${g.toFixed(3)} s
      Estimated load time for current fragment: ${L.toFixed(3)} s
      Estimated load time for down switch fragment: ${D.toFixed(3)} s
      TTFB estimate: ${0 | m} ms
      Current BW estimate: ${b(E) ? 0 | E : "Unknown"} bps
      New BW estimate: ${0 | this.getBwEstimate()} bps
      Switching to level ${e} @ ${0 | I} bps`),
                r.trigger(C.FRAG_LOAD_EMERGENCY_ABORTED, {
                  frag: t,
                  part: i,
                  stats: l,
                });
            }),
            (this.hls = e),
            (this.bwEstimator = this.initEstimator()),
            this.registerListeners();
        }
        resetEstimator(e) {
          e &&
            (M.log(`setting initial bwe to ${e}`),
            (this.hls.config.abrEwmaDefaultEstimate = e)),
            (this.firstSelection = -1),
            (this.bwEstimator = this.initEstimator());
        }
        initEstimator() {
          let e = this.hls.config;
          return new tX(
            e.abrEwmaSlowVoD,
            e.abrEwmaFastVoD,
            e.abrEwmaDefaultEstimate,
          );
        }
        registerListeners() {
          let { hls: e } = this;
          e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.FRAG_LOADING, this.onFragLoading, this),
            e.on(C.FRAG_LOADED, this.onFragLoaded, this),
            e.on(C.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(C.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.on(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(C.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this),
            e.on(C.ERROR, this.onError, this);
        }
        unregisterListeners() {
          let { hls: e } = this;
          e &&
            (e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.FRAG_LOADING, this.onFragLoading, this),
            e.off(C.FRAG_LOADED, this.onFragLoaded, this),
            e.off(C.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(C.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.off(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(C.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this),
            e.off(C.ERROR, this.onError, this));
        }
        destroy() {
          this.unregisterListeners(),
            this.clearTimer(),
            (this.hls = this._abandonRulesCheck = null),
            (this.fragCurrent = this.partCurrent = null);
        }
        onManifestLoading(e, t) {
          (this.lastLoadedFragLevel = -1),
            (this.firstSelection = -1),
            (this.lastLevelLoadSec = 0),
            (this.fragCurrent = this.partCurrent = null),
            this.onLevelsUpdated(),
            this.clearTimer();
        }
        onLevelsUpdated() {
          this.lastLoadedFragLevel > -1 &&
            this.fragCurrent &&
            (this.lastLoadedFragLevel = this.fragCurrent.level),
            (this._nextAutoLevel = -1),
            this.onMaxAutoLevelUpdated(),
            (this.codecTiers = null),
            (this.audioTracksByGroup = null);
        }
        onMaxAutoLevelUpdated() {
          (this.firstSelection = -1), (this.nextAutoLevelKey = "");
        }
        onFragLoading(e, t) {
          let i = t.frag;
          if (!this.ignoreFragment(i)) {
            if (!i.bitrateTest) {
              var r;
              (this.fragCurrent = i),
                (this.partCurrent = null != (r = t.part) ? r : null);
            }
            this.clearTimer(),
              (this.timer = self.setInterval(this._abandonRulesCheck, 100));
          }
        }
        onLevelSwitching(e, t) {
          this.clearTimer();
        }
        onError(e, t) {
          if (!t.fatal)
            switch (t.details) {
              case P.BUFFER_ADD_CODEC_ERROR:
              case P.BUFFER_APPEND_ERROR:
                (this.lastLoadedFragLevel = -1), (this.firstSelection = -1);
                break;
              case P.FRAG_LOAD_TIMEOUT: {
                let e = t.frag,
                  { fragCurrent: i, partCurrent: r } = this;
                if (e && i && e.sn === i.sn && e.level === i.level) {
                  let t = performance.now(),
                    i = r ? r.stats : e.stats,
                    s = t - i.loading.start,
                    a = i.loading.first
                      ? i.loading.first - i.loading.start
                      : -1;
                  if (i.loaded && a > -1) {
                    let e = this.bwEstimator.getEstimateTTFB();
                    this.bwEstimator.sample(s - Math.min(e, a), i.loaded);
                  } else this.bwEstimator.sampleTTFB(s);
                }
              }
            }
        }
        getTimeToLoadFrag(e, t, i, r) {
          return e + i / t + (r ? this.lastLevelLoadSec : 0);
        }
        onLevelLoaded(e, t) {
          let i = this.hls.config,
            { loading: r } = t.stats,
            s = r.end - r.start;
          b(s) && (this.lastLevelLoadSec = s / 1e3),
            t.details.live
              ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive)
              : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD);
        }
        onFragLoaded(e, { frag: t, part: i }) {
          let r = i ? i.stats : t.stats;
          if (
            (t.type === tn.MAIN &&
              this.bwEstimator.sampleTTFB(r.loading.first - r.loading.start),
            !this.ignoreFragment(t))
          ) {
            if (
              (this.clearTimer(),
              t.level === this._nextAutoLevel && (this._nextAutoLevel = -1),
              (this.firstSelection = -1),
              this.hls.config.abrMaxWithRealBitrate)
            ) {
              let e = i ? i.duration : t.duration,
                s = this.hls.levels[t.level],
                a = (s.loaded ? s.loaded.bytes : 0) + r.loaded,
                n = (s.loaded ? s.loaded.duration : 0) + e;
              (s.loaded = { bytes: a, duration: n }),
                (s.realBitrate = Math.round((8 * a) / n));
            }
            if (t.bitrateTest) {
              let e = { stats: r, frag: t, part: i, id: t.type };
              this.onFragBuffered(C.FRAG_BUFFERED, e), (t.bitrateTest = !1);
            } else this.lastLoadedFragLevel = t.level;
          }
        }
        onFragBuffered(e, t) {
          let { frag: i, part: r } = t,
            s = null != r && r.stats.loaded ? r.stats : i.stats;
          if (s.aborted || this.ignoreFragment(i)) return;
          let a =
            s.parsing.end -
            s.loading.start -
            Math.min(
              s.loading.first - s.loading.start,
              this.bwEstimator.getEstimateTTFB(),
            );
          this.bwEstimator.sample(a, s.loaded),
            (s.bwEstimate = this.getBwEstimate()),
            i.bitrateTest
              ? (this.bitrateTestDelay = a / 1e3)
              : (this.bitrateTestDelay = 0);
        }
        ignoreFragment(e) {
          return e.type !== tn.MAIN || "initSegment" === e.sn;
        }
        clearTimer() {
          this.timer > -1 &&
            (self.clearInterval(this.timer), (this.timer = -1));
        }
        get firstAutoLevel() {
          let { maxAutoLevel: e, minAutoLevel: t } = this.hls,
            i = this.getBwEstimate(),
            r = this.hls.config.maxStarvationDelay,
            s = this.findBestLevel(i, t, e, 0, r, 1, 1);
          if (s > -1) return s;
          let a = this.hls.firstLevel,
            n = Math.min(Math.max(a, t), e);
          return (
            M.warn(
              `[abr] Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${n}`,
            ),
            n
          );
        }
        get forcedAutoLevel() {
          return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
        }
        get nextAutoLevel() {
          let e = this.forcedAutoLevel,
            t = this.bwEstimator.canEstimate(),
            i = this.lastLoadedFragLevel > -1;
          if (
            -1 !== e &&
            (!t || !i || this.nextAutoLevelKey === this.getAutoLevelKey())
          )
            return e;
          let r = t && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
          if (-1 !== e) {
            let t = this.hls.levels;
            if (t.length > Math.max(e, r) && t[e].loadError <= t[r].loadError)
              return e;
          }
          return (
            (this._nextAutoLevel = r),
            (this.nextAutoLevelKey = this.getAutoLevelKey()),
            r
          );
        }
        getAutoLevelKey() {
          return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
        }
        getNextABRAutoLevel() {
          let { fragCurrent: e, partCurrent: t, hls: i } = this,
            { maxAutoLevel: r, config: s, minAutoLevel: a } = i,
            n = t ? t.duration : e ? e.duration : 0,
            l = this.getBwEstimate(),
            o = this.getStarvationDelay(),
            h = s.abrBandWidthFactor,
            d = s.abrBandWidthUpFactor;
          if (o) {
            let e = this.findBestLevel(l, a, r, o, 0, h, d);
            if (e >= 0) return e;
          }
          let u = n ? Math.min(n, s.maxStarvationDelay) : s.maxStarvationDelay;
          if (!o) {
            let e = this.bitrateTestDelay;
            e &&
              ((u =
                (n ? Math.min(n, s.maxLoadingDelay) : s.maxLoadingDelay) - e),
              M.info(
                `[abr] bitrate test took ${Math.round(1e3 * e)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * u)} ms`,
              ),
              (h = d = 1));
          }
          let c = this.findBestLevel(l, a, r, o, u, h, d);
          if (
            (M.info(
              `[abr] ${o ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${c}`,
            ),
            c > -1)
          )
            return c;
          let f = i.levels[a],
            g = i.levels[i.loadLevel];
          return (null == f ? void 0 : f.bitrate) <
            (null == g ? void 0 : g.bitrate)
            ? a
            : i.loadLevel;
        }
        getStarvationDelay() {
          let e = this.hls,
            t = e.media;
          if (!t) return 1 / 0;
          let i = t && 0 !== t.playbackRate ? Math.abs(t.playbackRate) : 1,
            r = e.mainForwardBufferInfo;
          return (r ? r.len : 0) / i;
        }
        getBwEstimate() {
          return this.bwEstimator.canEstimate()
            ? this.bwEstimator.getEstimate()
            : this.hls.config.abrEwmaDefaultEstimate;
        }
        findBestLevel(e, t, i, r, s, a, n) {
          var l, o;
          let h;
          let d = r + s,
            u = this.lastLoadedFragLevel,
            c = -1 === u ? this.hls.firstLevel : u,
            { fragCurrent: f, partCurrent: g } = this,
            {
              levels: m,
              allAudioTracks: p,
              loadLevel: E,
              config: T,
            } = this.hls;
          if (1 === m.length) return 0;
          let y = m[c],
            v = !!(null != y && null != (l = y.details) && l.live),
            S = -1 === E || -1 === u,
            A = "SDR",
            L = (null == y ? void 0 : y.frameRate) || 0,
            { audioPreference: R, videoPreference: I } = T,
            k =
              this.audioTracksByGroup ||
              (this.audioTracksByGroup = p.reduce(
                (e, t) => {
                  let i = e.groups[t.groupId];
                  i ||
                    (i = e.groups[t.groupId] =
                      {
                        tracks: [],
                        channels: { 2: 0 },
                        hasDefault: !1,
                        hasAutoSelect: !1,
                      }),
                    i.tracks.push(t);
                  let r = t.channels || "2";
                  return (
                    (i.channels[r] = (i.channels[r] || 0) + 1),
                    (i.hasDefault = i.hasDefault || t.default),
                    (i.hasAutoSelect = i.hasAutoSelect || t.autoselect),
                    i.hasDefault && (e.hasDefaultAudio = !0),
                    i.hasAutoSelect && (e.hasAutoSelectAudio = !0),
                    e
                  );
                },
                { hasDefaultAudio: !1, hasAutoSelectAudio: !1, groups: {} },
              ));
          if (S) {
            if (-1 !== this.firstSelection) return this.firstSelection;
            let r = (function (e, t, i, r, s) {
                var a;
                let n, l;
                let o = Object.keys(e),
                  h = null == r ? void 0 : r.channels,
                  d = null == r ? void 0 : r.audioCodec,
                  u = h && 2 === parseInt(h),
                  c = !0,
                  f = !1,
                  g = 1 / 0,
                  m = 1 / 0,
                  p = 1 / 0,
                  E = 0,
                  T = [],
                  { preferHDR: y, allowedVideoRanges: v } =
                    ((n = !1),
                    (l = []),
                    (a = t) && ((n = "SDR" !== a), (l = [a])),
                    s &&
                      ((l = s.allowedVideoRanges || tL.slice(0)),
                      (l = (n =
                        void 0 !== s.preferHDR
                          ? s.preferHDR
                          : (function () {
                              if ("function" == typeof matchMedia) {
                                let e = matchMedia("(dynamic-range: high)"),
                                  t = matchMedia("bad query");
                                if (e.media !== t.media)
                                  return !0 === e.matches;
                              }
                              return !1;
                            })())
                        ? l.filter((e) => "SDR" !== e)
                        : ["SDR"])),
                    { preferHDR: n, allowedVideoRanges: l });
                for (let t = o.length; t--; ) {
                  let i = e[o[t]];
                  (c = i.channels[2] > 0),
                    (g = Math.min(g, i.minHeight)),
                    (m = Math.min(m, i.minFramerate)),
                    (p = Math.min(p, i.minBitrate));
                  let r = v.filter((e) => i.videoRanges[e] > 0);
                  r.length > 0 && ((f = !0), (T = r));
                }
                (g = b(g) ? g : 0), (m = b(m) ? m : 0);
                let S = Math.max(1080, g),
                  A = Math.max(30, m);
                return (
                  (i = Math.max((p = b(p) ? p : i), i)),
                  f || ((t = void 0), (T = [])),
                  {
                    codecSet: o.reduce(
                      (t, r) => {
                        let s = e[r];
                        if (r === t) return t;
                        if (s.minBitrate > i)
                          return (
                            tJ(
                              r,
                              `min bitrate of ${s.minBitrate} > current estimate of ${i}`,
                            ),
                            t
                          );
                        if (!s.hasDefaultAudio)
                          return (
                            tJ(
                              r,
                              "no renditions with default or auto-select sound found",
                            ),
                            t
                          );
                        if (d && r.indexOf(d.substring(0, 4)) % 5 != 0)
                          return (
                            tJ(r, `audio codec preference "${d}" not found`), t
                          );
                        if (h && !u) {
                          if (!s.channels[h])
                            return (
                              tJ(
                                r,
                                `no renditions with ${h} channel sound found (channels options: ${Object.keys(s.channels)})`,
                              ),
                              t
                            );
                        } else if ((!d || u) && c && 0 === s.channels["2"])
                          return (
                            tJ(r, "no renditions with stereo sound found"), t
                          );
                        return s.minHeight > S
                          ? (tJ(
                              r,
                              `min resolution of ${s.minHeight} > maximum of ${S}`,
                            ),
                            t)
                          : s.minFramerate > A
                            ? (tJ(
                                r,
                                `min framerate of ${s.minFramerate} > maximum of ${A}`,
                              ),
                              t)
                            : T.some((e) => s.videoRanges[e] > 0)
                              ? s.maxScore < E
                                ? (tJ(
                                    r,
                                    `max score of ${s.maxScore} < selected max of ${E}`,
                                  ),
                                  t)
                                : t &&
                                    (eJ(r) >= eJ(t) ||
                                      s.fragmentError > e[t].fragmentError)
                                  ? t
                                  : ((E = s.maxScore), r)
                              : (tJ(
                                  r,
                                  `no variants with VIDEO-RANGE of ${JSON.stringify(T)} found`,
                                ),
                                t);
                      },
                      void 0,
                    ),
                    videoRanges: T,
                    preferHDR: y,
                    minFramerate: m,
                    minBitrate: p,
                  }
                );
              })(
                this.codecTiers ||
                  (this.codecTiers = m.slice(t, i + 1).reduce((e, t) => {
                    if (!t.codecSet) return e;
                    let i = t.audioGroups,
                      r = e[t.codecSet];
                    r ||
                      (e[t.codecSet] = r =
                        {
                          minBitrate: 1 / 0,
                          minHeight: 1 / 0,
                          minFramerate: 1 / 0,
                          maxScore: 0,
                          videoRanges: { SDR: 0 },
                          channels: { 2: 0 },
                          hasDefaultAudio: !i,
                          fragmentError: 0,
                        }),
                      (r.minBitrate = Math.min(r.minBitrate, t.bitrate));
                    let s = Math.min(t.height, t.width);
                    return (
                      (r.minHeight = Math.min(r.minHeight, s)),
                      (r.minFramerate = Math.min(r.minFramerate, t.frameRate)),
                      (r.maxScore = Math.max(r.maxScore, t.score)),
                      (r.fragmentError += t.fragmentError),
                      (r.videoRanges[t.videoRange] =
                        (r.videoRanges[t.videoRange] || 0) + 1),
                      i &&
                        i.forEach((e) => {
                          if (!e) return;
                          let t = k.groups[e];
                          t &&
                            ((r.hasDefaultAudio =
                              r.hasDefaultAudio || k.hasDefaultAudio
                                ? t.hasDefault
                                : t.hasAutoSelect ||
                                  (!k.hasDefaultAudio &&
                                    !k.hasAutoSelectAudio)),
                            Object.keys(t.channels).forEach((e) => {
                              r.channels[e] =
                                (r.channels[e] || 0) + t.channels[e];
                            }));
                        }),
                      e
                    );
                  }, {})),
                A,
                e,
                R,
                I,
              ),
              {
                codecSet: s,
                videoRanges: a,
                minFramerate: n,
                minBitrate: l,
                preferHDR: o,
              } = r;
            (h = s),
              (A = o ? a[a.length - 1] : a[0]),
              (L = n),
              (e = Math.max(e, l)),
              M.log(`[abr] picked start tier ${JSON.stringify(r)}`);
          } else
            (h = null == y ? void 0 : y.codecSet),
              (A = null == y ? void 0 : y.videoRange);
          let _ = g ? g.duration : f ? f.duration : 0,
            C = this.bwEstimator.getEstimateTTFB() / 1e3,
            w = [];
          for (let l = i; l >= t; l--) {
            let t;
            let f = m[l],
              p = l > c;
            if (!f) continue;
            if (
              T.useMediaCapabilities &&
              !f.supportedResult &&
              !f.supportedPromise
            ) {
              let t = navigator.mediaCapabilities;
              "function" == typeof (null == t ? void 0 : t.decodingInfo) &&
              (function (e, t, i, r, s, a) {
                let n = e.audioCodec ? e.audioGroups : null,
                  l = null == a ? void 0 : a.audioCodec,
                  o = null == a ? void 0 : a.channels,
                  h = o ? parseInt(o) : l ? 1 / 0 : 2,
                  d = null;
                if (null != n && n.length)
                  try {
                    d =
                      1 === n.length && n[0]
                        ? t.groups[n[0]].channels
                        : n.reduce(
                            (e, i) => {
                              if (i) {
                                let r = t.groups[i];
                                if (!r)
                                  throw Error(
                                    `Audio track group ${i} not found`,
                                  );
                                Object.keys(r.channels).forEach((t) => {
                                  e[t] = (e[t] || 0) + r.channels[t];
                                });
                              }
                              return e;
                            },
                            { 2: 0 },
                          );
                  } catch (e) {
                    return !0;
                  }
                return (
                  (void 0 !== e.videoCodec &&
                    ((e.width > 1920 && e.height > 1088) ||
                      (e.height > 1920 && e.width > 1088) ||
                      e.frameRate > Math.max(r, 30) ||
                      ("SDR" !== e.videoRange && e.videoRange !== i) ||
                      e.bitrate > Math.max(s, 8e6))) ||
                  (!!d && b(h) && Object.keys(d).some((e) => parseInt(e) > h))
                );
              })(f, k, A, L, e, R)
                ? ((f.supportedPromise = (function (e, t, i) {
                    let r = e.videoCodec,
                      s = e.audioCodec;
                    if (!r || !s || !i) return Promise.resolve(tz);
                    let a = {
                        width: e.width,
                        height: e.height,
                        bitrate: Math.ceil(
                          Math.max(0.9 * e.bitrate, e.averageBitrate),
                        ),
                        framerate: e.frameRate || 30,
                      },
                      n = e.videoRange;
                    "SDR" !== n && (a.transferFunction = n.toLowerCase());
                    let l = r
                      .split(",")
                      .map((e) => ({
                        type: "media-source",
                        video: D(D({}, a), {}, { contentType: ez(e, "video") }),
                      }));
                    return (
                      s &&
                        e.audioGroups &&
                        e.audioGroups.forEach((e) => {
                          var i;
                          e &&
                            (null == (i = t.groups[e]) ||
                              i.tracks.forEach((t) => {
                                if (t.groupId === e) {
                                  let e = parseFloat(t.channels || "");
                                  b(e) &&
                                    e > 2 &&
                                    l.push.apply(
                                      l,
                                      s
                                        .split(",")
                                        .map((t) => ({
                                          type: "media-source",
                                          audio: {
                                            contentType: ez(t, "audio"),
                                            channels: "" + e,
                                          },
                                        })),
                                    );
                                }
                              }));
                        }),
                      Promise.all(
                        l.map((e) => {
                          let t = (function (e) {
                            let { audio: t, video: i } = e,
                              r = i || t;
                            if (r) {
                              let e = r.contentType.split('"')[1];
                              if (i)
                                return `r${i.height}x${i.width}f${Math.ceil(i.framerate)}${i.transferFunction || "sd"}_${e}_${Math.ceil(i.bitrate / 1e5)}`;
                              if (t)
                                return `c${t.channels}${t.spatialRendering ? "s" : "n"}_${e}`;
                            }
                            return "";
                          })(e);
                          return tQ[t] || (tQ[t] = i.decodingInfo(e));
                        }),
                      )
                        .then((e) => ({
                          supported: !e.some((e) => !e.supported),
                          configurations: l,
                          decodingInfoResults: e,
                        }))
                        .catch((e) => ({
                          supported: !1,
                          configurations: l,
                          decodingInfoResults: [],
                          error: e,
                        }))
                    );
                  })(f, k, t)),
                  f.supportedPromise.then((e) => {
                    if (!this.hls) return;
                    f.supportedResult = e;
                    let t = this.hls.levels,
                      i = t.indexOf(f);
                    e.error
                      ? M.warn(
                          `[abr] MediaCapabilities decodingInfo error: "${e.error}" for level ${i} ${JSON.stringify(e)}`,
                        )
                      : !e.supported &&
                        (M.warn(
                          `[abr] Unsupported MediaCapabilities decodingInfo result for level ${i} ${JSON.stringify(e)}`,
                        ),
                        i > -1 &&
                          t.length > 1 &&
                          (M.log(`[abr] Removing unsupported level ${i}`),
                          this.hls.removeLevel(i)));
                  }))
                : (f.supportedResult = tz);
            }
            if (
              (h && f.codecSet !== h) ||
              (A && f.videoRange !== A) ||
              (p && L > f.frameRate) ||
              (!p && L > 0 && L < f.frameRate) ||
              (f.supportedResult &&
                !(
                  null != (o = f.supportedResult.decodingInfoResults) &&
                  o[0].smooth
                ))
            ) {
              w.push(l);
              continue;
            }
            let I = f.details,
              P =
                (g
                  ? null == I
                    ? void 0
                    : I.partTarget
                  : null == I
                    ? void 0
                    : I.averagetargetduration) || _;
            t = p ? n * e : a * e;
            let x =
                _ && r >= 2 * _ && 0 === s
                  ? m[l].averageBitrate
                  : m[l].maxBitrate,
              O = this.getTimeToLoadFrag(C, t, x * P, void 0 === I);
            if (
              t >= x &&
              (l === u || (0 === f.loadError && 0 === f.fragmentError)) &&
              (O <= C || !b(O) || (v && !this.bitrateTestDelay) || O < d)
            ) {
              let e = this.forcedAutoLevel;
              return (
                l !== E &&
                  (-1 === e || e !== E) &&
                  (w.length &&
                    M.trace(
                      `[abr] Skipped level(s) ${w.join(",")} of ${i} max with CODECS and VIDEO-RANGE:"${m[w[0]].codecs}" ${m[w[0]].videoRange}; not compatible with "${y.codecs}" ${A}`,
                    ),
                  M.info(
                    `[abr] switch candidate:${c}->${l} adjustedbw(${Math.round(t)})-bitrate=${Math.round(t - x)} ttfb:${C.toFixed(1)} avgDuration:${P.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${O.toFixed(1)} firstSelection:${S} codecSet:${h} videoRange:${A} hls.loadLevel:${E}`,
                  )),
                S && (this.firstSelection = l),
                l
              );
            }
          }
          return -1;
        }
        set nextAutoLevel(e) {
          let { maxAutoLevel: t, minAutoLevel: i } = this.hls,
            r = Math.min(Math.max(e, i), t);
          this._nextAutoLevel !== r &&
            ((this.nextAutoLevelKey = ""), (this._nextAutoLevel = r));
        }
      }
      class t3 {
        constructor() {
          (this._boundTick = void 0),
            (this._tickTimer = null),
            (this._tickInterval = null),
            (this._tickCallCount = 0),
            (this._boundTick = this.tick.bind(this));
        }
        destroy() {
          this.onHandlerDestroying(), this.onHandlerDestroyed();
        }
        onHandlerDestroying() {
          this.clearNextTick(), this.clearInterval();
        }
        onHandlerDestroyed() {}
        hasInterval() {
          return !!this._tickInterval;
        }
        hasNextTick() {
          return !!this._tickTimer;
        }
        setInterval(e) {
          return (
            !this._tickInterval &&
            ((this._tickCallCount = 0),
            (this._tickInterval = self.setInterval(this._boundTick, e)),
            !0)
          );
        }
        clearInterval() {
          return (
            !!this._tickInterval &&
            (self.clearInterval(this._tickInterval),
            (this._tickInterval = null),
            !0)
          );
        }
        clearNextTick() {
          return (
            !!this._tickTimer &&
            (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0)
          );
        }
        tick() {
          this._tickCallCount++,
            1 === this._tickCallCount &&
              (this.doTick(),
              this._tickCallCount > 1 && this.tickImmediate(),
              (this._tickCallCount = 0));
        }
        tickImmediate() {
          this.clearNextTick(),
            (this._tickTimer = self.setTimeout(this._boundTick, 0));
        }
        doTick() {}
      }
      var t5 = {
        NOT_LOADED: "NOT_LOADED",
        APPENDING: "APPENDING",
        PARTIAL: "PARTIAL",
        OK: "OK",
      };
      class t8 {
        constructor(e) {
          (this.activePartLists = Object.create(null)),
            (this.endListFragments = Object.create(null)),
            (this.fragments = Object.create(null)),
            (this.timeRanges = Object.create(null)),
            (this.bufferPadding = 0.2),
            (this.hls = void 0),
            (this.hasGaps = !1),
            (this.hls = e),
            this._registerListeners();
        }
        _registerListeners() {
          let { hls: e } = this;
          e.on(C.BUFFER_APPENDED, this.onBufferAppended, this),
            e.on(C.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(C.FRAG_LOADED, this.onFragLoaded, this);
        }
        _unregisterListeners() {
          let { hls: e } = this;
          e.off(C.BUFFER_APPENDED, this.onBufferAppended, this),
            e.off(C.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(C.FRAG_LOADED, this.onFragLoaded, this);
        }
        destroy() {
          this._unregisterListeners(),
            (this.fragments =
              this.activePartLists =
              this.endListFragments =
              this.timeRanges =
                null);
        }
        getAppendedFrag(e, t) {
          let i = this.activePartLists[t];
          if (i)
            for (let t = i.length; t--; ) {
              let r = i[t];
              if (!r) break;
              let s = r.end;
              if (r.start <= e && null !== s && e <= s) return r;
            }
          return this.getBufferedFrag(e, t);
        }
        getBufferedFrag(e, t) {
          let { fragments: i } = this,
            r = Object.keys(i);
          for (let s = r.length; s--; ) {
            let a = i[r[s]];
            if ((null == a ? void 0 : a.body.type) === t && a.buffered) {
              let t = a.body;
              if (t.start <= e && e <= t.end) return t;
            }
          }
          return null;
        }
        detectEvictedFragments(e, t, i, r) {
          this.timeRanges && (this.timeRanges[e] = t);
          let s = (null == r ? void 0 : r.fragment.sn) || -1;
          Object.keys(this.fragments).forEach((r) => {
            let a = this.fragments[r];
            if (!a || s >= a.body.sn) return;
            if (!a.buffered && !a.loaded) {
              a.body.type === i && this.removeFragment(a.body);
              return;
            }
            let n = a.range[e];
            n &&
              n.time.some((e) => {
                let i = !this.isTimeBuffered(e.startPTS, e.endPTS, t);
                return i && this.removeFragment(a.body), i;
              });
          });
        }
        detectPartialFragments(e) {
          let t = this.timeRanges,
            { frag: i, part: r } = e;
          if (!t || "initSegment" === i.sn) return;
          let s = t9(i),
            a = this.fragments[s];
          if (!a || (a.buffered && i.gap)) return;
          let n = !i.relurl;
          Object.keys(t).forEach((e) => {
            let s = i.elementaryStreams[e];
            if (!s) return;
            let l = t[e],
              o = n || !0 === s.partial;
            a.range[e] = this.getBufferedTimes(i, r, o, l);
          }),
            (a.loaded = null),
            Object.keys(a.range).length
              ? ((a.buffered = !0),
                (a.body.endList = i.endList || a.body.endList) &&
                  (this.endListFragments[a.body.type] = a),
                t6(a) || this.removeParts(i.sn - 1, i.type))
              : this.removeFragment(a.body);
        }
        removeParts(e, t) {
          let i = this.activePartLists[t];
          i && (this.activePartLists[t] = i.filter((t) => t.fragment.sn >= e));
        }
        fragBuffered(e, t) {
          let i = t9(e),
            r = this.fragments[i];
          !r &&
            t &&
            ((r = this.fragments[i] =
              {
                body: e,
                appendedPTS: null,
                loaded: null,
                buffered: !1,
                range: Object.create(null),
              }),
            e.gap && (this.hasGaps = !0)),
            r && ((r.loaded = null), (r.buffered = !0));
        }
        getBufferedTimes(e, t, i, r) {
          let s = { time: [], partial: i },
            a = e.start,
            n = e.end,
            l = e.minEndPTS || n,
            o = e.maxStartPTS || a;
          for (let e = 0; e < r.length; e++) {
            let t = r.start(e) - this.bufferPadding,
              i = r.end(e) + this.bufferPadding;
            if (o >= t && l <= i) {
              s.time.push({
                startPTS: Math.max(a, r.start(e)),
                endPTS: Math.min(n, r.end(e)),
              });
              break;
            }
            if (a < i && n > t) {
              let t = Math.max(a, r.start(e)),
                i = Math.min(n, r.end(e));
              i > t &&
                ((s.partial = !0), s.time.push({ startPTS: t, endPTS: i }));
            } else if (n <= t) break;
          }
          return s;
        }
        getPartialFragment(e) {
          let t,
            i,
            r,
            s = null,
            a = 0,
            { bufferPadding: n, fragments: l } = this;
          return (
            Object.keys(l).forEach((o) => {
              let h = l[o];
              h &&
                t6(h) &&
                ((i = h.body.start - n),
                (r = h.body.end + n),
                e >= i &&
                  e <= r &&
                  a <= (t = Math.min(e - i, r - e)) &&
                  ((s = h.body), (a = t)));
            }),
            s
          );
        }
        isEndListAppended(e) {
          let t = this.endListFragments[e];
          return void 0 !== t && (t.buffered || t6(t));
        }
        getState(e) {
          let t = t9(e),
            i = this.fragments[t];
          return i
            ? i.buffered
              ? t6(i)
                ? t5.PARTIAL
                : t5.OK
              : t5.APPENDING
            : t5.NOT_LOADED;
        }
        isTimeBuffered(e, t, i) {
          let r, s;
          for (let a = 0; a < i.length; a++) {
            if (
              ((r = i.start(a) - this.bufferPadding),
              (s = i.end(a) + this.bufferPadding),
              e >= r && t <= s)
            )
              return !0;
            if (t <= r) break;
          }
          return !1;
        }
        onFragLoaded(e, t) {
          let { frag: i, part: r } = t;
          if ("initSegment" === i.sn || i.bitrateTest) return;
          let s = t9(i);
          this.fragments[s] = {
            body: i,
            appendedPTS: null,
            loaded: r ? null : t,
            buffered: !1,
            range: Object.create(null),
          };
        }
        onBufferAppended(e, t) {
          let { frag: i, part: r, timeRanges: s } = t;
          if ("initSegment" === i.sn) return;
          let a = i.type;
          if (r) {
            let e = this.activePartLists[a];
            e || (this.activePartLists[a] = e = []), e.push(r);
          }
          (this.timeRanges = s),
            Object.keys(s).forEach((e) => {
              let t = s[e];
              this.detectEvictedFragments(e, t, a, r);
            });
        }
        onFragBuffered(e, t) {
          this.detectPartialFragments(t);
        }
        hasFragment(e) {
          let t = t9(e);
          return !!this.fragments[t];
        }
        hasParts(e) {
          var t;
          return !!(null != (t = this.activePartLists[e]) && t.length);
        }
        removeFragmentsInRange(e, t, i, r, s) {
          (!r || this.hasGaps) &&
            Object.keys(this.fragments).forEach((a) => {
              let n = this.fragments[a];
              if (!n) return;
              let l = n.body;
              l.type === i &&
                (!r || l.gap) &&
                l.start < t &&
                l.end > e &&
                (n.buffered || s) &&
                this.removeFragment(l);
            });
        }
        removeFragment(e) {
          let t = t9(e);
          (e.stats.loaded = 0), e.clearElementaryStreamInfo();
          let i = this.activePartLists[e.type];
          if (i) {
            let t = e.sn;
            this.activePartLists[e.type] = i.filter((e) => e.fragment.sn !== t);
          }
          delete this.fragments[t],
            e.endList && delete this.endListFragments[e.type];
        }
        removeAllFragments() {
          (this.fragments = Object.create(null)),
            (this.endListFragments = Object.create(null)),
            (this.activePartLists = Object.create(null)),
            (this.hasGaps = !1);
        }
      }
      function t6(e) {
        var t, i, r;
        return (
          e.buffered &&
          (e.body.gap ||
            (null == (t = e.range.video) ? void 0 : t.partial) ||
            (null == (i = e.range.audio) ? void 0 : i.partial) ||
            (null == (r = e.range.audiovideo) ? void 0 : r.partial))
        );
      }
      function t9(e) {
        return `${e.type}_${e.level}_${e.sn}`;
      }
      let t7 = { length: 0, start: () => 0, end: () => 0 };
      class ie {
        static isBuffered(e, t) {
          try {
            if (e) {
              let i = ie.getBuffered(e);
              for (let e = 0; e < i.length; e++)
                if (t >= i.start(e) && t <= i.end(e)) return !0;
            }
          } catch (e) {}
          return !1;
        }
        static bufferInfo(e, t, i) {
          try {
            if (e) {
              let r;
              let s = ie.getBuffered(e),
                a = [];
              for (r = 0; r < s.length; r++)
                a.push({ start: s.start(r), end: s.end(r) });
              return this.bufferedInfo(a, t, i);
            }
          } catch (e) {}
          return { len: 0, start: t, end: t, nextStart: void 0 };
        }
        static bufferedInfo(e, t, i) {
          let r;
          (t = Math.max(0, t)),
            e.sort(function (e, t) {
              return e.start - t.start || t.end - e.end;
            });
          let s = [];
          if (i)
            for (let t = 0; t < e.length; t++) {
              let r = s.length;
              if (r) {
                let a = s[r - 1].end;
                e[t].start - a < i
                  ? e[t].end > a && (s[r - 1].end = e[t].end)
                  : s.push(e[t]);
              } else s.push(e[t]);
            }
          else s = e;
          let a = 0,
            n = t,
            l = t;
          for (let e = 0; e < s.length; e++) {
            let o = s[e].start,
              h = s[e].end;
            if (t + i >= o && t < h) (n = o), (a = (l = h) - t);
            else if (t + i < o) {
              r = o;
              break;
            }
          }
          return { len: a, start: n || 0, end: l || 0, nextStart: r };
        }
        static getBuffered(e) {
          try {
            return e.buffered;
          } catch (e) {
            return M.log("failed to get media.buffered", e), t7;
          }
        }
      }
      class it {
        constructor(e, t, i, r = 0, s = -1, a = !1) {
          (this.level = void 0),
            (this.sn = void 0),
            (this.part = void 0),
            (this.id = void 0),
            (this.size = void 0),
            (this.partial = void 0),
            (this.transmuxing = ii()),
            (this.buffering = { audio: ii(), video: ii(), audiovideo: ii() }),
            (this.level = e),
            (this.sn = t),
            (this.id = i),
            (this.size = r),
            (this.part = s),
            (this.partial = a);
        }
      }
      function ii() {
        return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
      }
      function ir(e, t) {
        for (let r = 0, s = e.length; r < s; r++) {
          var i;
          if ((null == (i = e[r]) ? void 0 : i.cc) === t) return e[r];
        }
        return null;
      }
      function is(e, t) {
        if (e) {
          let i = e.start + t;
          (e.start = e.startPTS = i), (e.endPTS = i + e.duration);
        }
      }
      function ia(e, t) {
        let i = t.fragments;
        for (let t = 0, r = i.length; t < r; t++) is(i[t], e);
        t.fragmentHint && is(t.fragmentHint, e), (t.alignedSliding = !0);
      }
      function il(e, t) {
        let i, r;
        if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
        let s = e.fragments,
          a = t.fragments;
        if (!s.length || !a.length) return;
        let n = Math.min(t.endCC, e.endCC);
        t.startCC < n && e.startCC < n && ((i = ir(a, n)), (r = ir(s, n))),
          (i && r) ||
            (r =
              ir(s, (i = a[Math.floor(a.length / 2)]).cc) ||
              s[Math.floor(s.length / 2)]);
        let l = i.programDateTime,
          o = r.programDateTime;
        l && o && ia((o - l) / 1e3 - (r.start - i.start), e);
      }
      class io {
        constructor(e) {
          (this.config = void 0),
            (this.loader = null),
            (this.partLoadTimeout = -1),
            (this.config = e);
        }
        destroy() {
          this.loader && (this.loader.destroy(), (this.loader = null));
        }
        abort() {
          this.loader && this.loader.abort();
        }
        load(e, t) {
          let i = e.url;
          if (!i)
            return Promise.reject(
              new iu({
                type: w.NETWORK_ERROR,
                details: P.FRAG_LOAD_ERROR,
                fatal: !1,
                frag: e,
                error: Error(
                  `Fragment does not have a ${i ? "part list" : "url"}`,
                ),
                networkDetails: null,
              }),
            );
          this.abort();
          let r = this.config,
            s = r.fLoader,
            a = r.loader;
          return new Promise((n, l) => {
            if ((this.loader && this.loader.destroy(), e.gap)) {
              if (e.tagList.some((e) => "GAP" === e[0])) {
                l(id(e));
                return;
              }
              e.gap = !1;
            }
            let o = (this.loader = e.loader = s ? new s(r) : new a(r)),
              h = ih(e),
              d = tB(r.fragLoadPolicy.default),
              u = {
                loadPolicy: d,
                timeout: d.maxLoadTimeMs,
                maxRetry: 0,
                retryDelay: 0,
                maxRetryDelay: 0,
                highWaterMark: "initSegment" === e.sn ? 1 / 0 : 131072,
              };
            (e.stats = o.stats),
              o.load(h, u, {
                onSuccess: (t, i, r, s) => {
                  this.resetLoader(e, o);
                  let a = t.data;
                  r.resetIV &&
                    e.decryptdata &&
                    ((e.decryptdata.iv = new Uint8Array(a.slice(0, 16))),
                    (a = a.slice(16))),
                    n({ frag: e, part: null, payload: a, networkDetails: s });
                },
                onError: (t, r, s, a) => {
                  this.resetLoader(e, o),
                    l(
                      new iu({
                        type: w.NETWORK_ERROR,
                        details: P.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: e,
                        response: D({ url: i, data: void 0 }, t),
                        error: Error(`HTTP Error ${t.code} ${t.text}`),
                        networkDetails: s,
                        stats: a,
                      }),
                    );
                },
                onAbort: (t, i, r) => {
                  this.resetLoader(e, o),
                    l(
                      new iu({
                        type: w.NETWORK_ERROR,
                        details: P.INTERNAL_ABORTED,
                        fatal: !1,
                        frag: e,
                        error: Error("Aborted"),
                        networkDetails: r,
                        stats: t,
                      }),
                    );
                },
                onTimeout: (t, i, r) => {
                  this.resetLoader(e, o),
                    l(
                      new iu({
                        type: w.NETWORK_ERROR,
                        details: P.FRAG_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: e,
                        error: Error(`Timeout after ${u.timeout}ms`),
                        networkDetails: r,
                        stats: t,
                      }),
                    );
                },
                onProgress: (i, r, s, a) => {
                  t &&
                    t({ frag: e, part: null, payload: s, networkDetails: a });
                },
              });
          });
        }
        loadPart(e, t, i) {
          this.abort();
          let r = this.config,
            s = r.fLoader,
            a = r.loader;
          return new Promise((n, l) => {
            if ((this.loader && this.loader.destroy(), e.gap || t.gap)) {
              l(id(e, t));
              return;
            }
            let o = (this.loader = e.loader = s ? new s(r) : new a(r)),
              h = ih(e, t),
              d = tB(r.fragLoadPolicy.default),
              u = {
                loadPolicy: d,
                timeout: d.maxLoadTimeMs,
                maxRetry: 0,
                retryDelay: 0,
                maxRetryDelay: 0,
                highWaterMark: 131072,
              };
            (t.stats = o.stats),
              o.load(h, u, {
                onSuccess: (r, s, a, l) => {
                  this.resetLoader(e, o), this.updateStatsFromPart(e, t);
                  let h = {
                    frag: e,
                    part: t,
                    payload: r.data,
                    networkDetails: l,
                  };
                  i(h), n(h);
                },
                onError: (i, r, s, a) => {
                  this.resetLoader(e, o),
                    l(
                      new iu({
                        type: w.NETWORK_ERROR,
                        details: P.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: e,
                        part: t,
                        response: D({ url: h.url, data: void 0 }, i),
                        error: Error(`HTTP Error ${i.code} ${i.text}`),
                        networkDetails: s,
                        stats: a,
                      }),
                    );
                },
                onAbort: (i, r, s) => {
                  (e.stats.aborted = t.stats.aborted),
                    this.resetLoader(e, o),
                    l(
                      new iu({
                        type: w.NETWORK_ERROR,
                        details: P.INTERNAL_ABORTED,
                        fatal: !1,
                        frag: e,
                        part: t,
                        error: Error("Aborted"),
                        networkDetails: s,
                        stats: i,
                      }),
                    );
                },
                onTimeout: (i, r, s) => {
                  this.resetLoader(e, o),
                    l(
                      new iu({
                        type: w.NETWORK_ERROR,
                        details: P.FRAG_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: e,
                        part: t,
                        error: Error(`Timeout after ${u.timeout}ms`),
                        networkDetails: s,
                        stats: i,
                      }),
                    );
                },
              });
          });
        }
        updateStatsFromPart(e, t) {
          let i = e.stats,
            r = t.stats,
            s = r.total;
          if (((i.loaded += r.loaded), s)) {
            let r = Math.round(e.duration / t.duration),
              a = Math.min(Math.round(i.loaded / s), r),
              n = (r - a) * Math.round(i.loaded / a);
            i.total = i.loaded + n;
          } else i.total = Math.max(i.loaded, i.total);
          let a = i.loading,
            n = r.loading;
          a.start
            ? (a.first += n.first - n.start)
            : ((a.start = n.start), (a.first = n.first)),
            (a.end = n.end);
        }
        resetLoader(e, t) {
          (e.loader = null),
            this.loader === t &&
              (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
            t.destroy();
        }
      }
      function ih(e, t = null) {
        let i = t || e,
          r = {
            frag: e,
            part: t,
            responseType: "arraybuffer",
            url: i.url,
            headers: {},
            rangeStart: 0,
            rangeEnd: 0,
          },
          s = i.byteRangeStartOffset,
          a = i.byteRangeEndOffset;
        if (b(s) && b(a)) {
          var n;
          let t = s,
            i = a;
          if (
            "initSegment" === e.sn &&
            (null == (n = e.decryptdata) ? void 0 : n.method) === "AES-128"
          ) {
            let e = a - s;
            e % 16 && (i = a + (16 - (e % 16))),
              0 !== s && ((r.resetIV = !0), (t = s - 16));
          }
          (r.rangeStart = t), (r.rangeEnd = i);
        }
        return r;
      }
      function id(e, t) {
        let i = Error(`GAP ${e.gap ? "tag" : "attribute"} found`),
          r = {
            type: w.MEDIA_ERROR,
            details: P.FRAG_GAP,
            fatal: !1,
            frag: e,
            error: i,
            networkDetails: null,
          };
        return t && (r.part = t), ((t || e).stats.aborted = !0), new iu(r);
      }
      class iu extends Error {
        constructor(e) {
          super(e.error.message), (this.data = void 0), (this.data = e);
        }
      }
      class ic {
        constructor(e, t) {
          (this.subtle = void 0),
            (this.aesIV = void 0),
            (this.subtle = e),
            (this.aesIV = t);
        }
        decrypt(e, t) {
          return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e);
        }
      }
      class ig {
        constructor(e, t) {
          (this.subtle = void 0),
            (this.key = void 0),
            (this.subtle = e),
            (this.key = t);
        }
        expandKey() {
          return this.subtle.importKey(
            "raw",
            this.key,
            { name: "AES-CBC" },
            !1,
            ["encrypt", "decrypt"],
          );
        }
      }
      class im {
        constructor() {
          (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
            (this.subMix = [
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
            ]),
            (this.invSubMix = [
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
            ]),
            (this.sBox = new Uint32Array(256)),
            (this.invSBox = new Uint32Array(256)),
            (this.key = new Uint32Array(0)),
            (this.ksRows = 0),
            (this.keySize = 0),
            (this.keySchedule = void 0),
            (this.invKeySchedule = void 0),
            this.initTable();
        }
        uint8ArrayToUint32Array_(e) {
          let t = new DataView(e),
            i = new Uint32Array(4);
          for (let e = 0; e < 4; e++) i[e] = t.getUint32(4 * e);
          return i;
        }
        initTable() {
          let e = this.sBox,
            t = this.invSBox,
            i = this.subMix,
            r = i[0],
            s = i[1],
            a = i[2],
            n = i[3],
            l = this.invSubMix,
            o = l[0],
            h = l[1],
            d = l[2],
            u = l[3],
            c = new Uint32Array(256),
            f = 0,
            g = 0,
            m = 0;
          for (m = 0; m < 256; m++)
            m < 128 ? (c[m] = m << 1) : (c[m] = (m << 1) ^ 283);
          for (m = 0; m < 256; m++) {
            let i = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4);
            (i = (i >>> 8) ^ (255 & i) ^ 99), (e[f] = i), (t[i] = f);
            let l = c[f],
              m = c[l],
              p = c[m],
              E = (257 * c[i]) ^ (16843008 * i);
            (r[f] = (E << 24) | (E >>> 8)),
              (s[f] = (E << 16) | (E >>> 16)),
              (a[f] = (E << 8) | (E >>> 24)),
              (n[f] = E),
              (E = (16843009 * p) ^ (65537 * m) ^ (257 * l) ^ (16843008 * f)),
              (o[i] = (E << 24) | (E >>> 8)),
              (h[i] = (E << 16) | (E >>> 16)),
              (d[i] = (E << 8) | (E >>> 24)),
              (u[i] = E),
              f ? ((f = l ^ c[c[c[p ^ l]]]), (g ^= c[c[g]])) : (f = g = 1);
          }
        }
        expandKey(e) {
          let t, i, r, s;
          let a = this.uint8ArrayToUint32Array_(e),
            n = !0,
            l = 0;
          for (; l < a.length && n; ) (n = a[l] === this.key[l]), l++;
          if (n) return;
          this.key = a;
          let o = (this.keySize = a.length);
          if (4 !== o && 6 !== o && 8 !== o)
            throw Error("Invalid aes key size=" + o);
          let h = (this.ksRows = (o + 6 + 1) * 4),
            d = (this.keySchedule = new Uint32Array(h)),
            u = (this.invKeySchedule = new Uint32Array(h)),
            c = this.sBox,
            f = this.rcon,
            g = this.invSubMix,
            m = g[0],
            p = g[1],
            E = g[2],
            T = g[3];
          for (t = 0; t < h; t++) {
            if (t < o) {
              r = d[t] = a[t];
              continue;
            }
            (s = r),
              t % o == 0
                ? (s =
                    ((c[(s = (s << 8) | (s >>> 24)) >>> 24] << 24) |
                      (c[(s >>> 16) & 255] << 16) |
                      (c[(s >>> 8) & 255] << 8) |
                      c[255 & s]) ^
                    (f[(t / o) | 0] << 24))
                : o > 6 &&
                  t % o == 4 &&
                  (s =
                    (c[s >>> 24] << 24) |
                    (c[(s >>> 16) & 255] << 16) |
                    (c[(s >>> 8) & 255] << 8) |
                    c[255 & s]),
              (d[t] = r = (d[t - o] ^ s) >>> 0);
          }
          for (i = 0; i < h; i++)
            (t = h - i),
              (s = 3 & i ? d[t] : d[t - 4]),
              i < 4 || t <= 4
                ? (u[i] = s)
                : (u[i] =
                    m[c[s >>> 24]] ^
                    p[c[(s >>> 16) & 255]] ^
                    E[c[(s >>> 8) & 255]] ^
                    T[c[255 & s]]),
              (u[i] = u[i] >>> 0);
        }
        networkToHostOrderSwap(e) {
          return (
            (e << 24) | ((65280 & e) << 8) | ((16711680 & e) >> 8) | (e >>> 24)
          );
        }
        decrypt(e, t, i) {
          let r, s, a, n, l, o, h, d, u, c, f, g, m, p;
          let E = this.keySize + 6,
            T = this.invKeySchedule,
            y = this.invSBox,
            v = this.invSubMix,
            S = v[0],
            A = v[1],
            L = v[2],
            R = v[3],
            D = this.uint8ArrayToUint32Array_(i),
            I = D[0],
            b = D[1],
            k = D[2],
            _ = D[3],
            C = new Int32Array(e),
            w = new Int32Array(C.length),
            P = this.networkToHostOrderSwap;
          for (; t < C.length; ) {
            for (
              p = 1,
                u = P(C[t]),
                c = P(C[t + 1]),
                f = P(C[t + 2]),
                g = P(C[t + 3]),
                l = u ^ T[0],
                o = g ^ T[1],
                h = f ^ T[2],
                d = c ^ T[3],
                m = 4;
              p < E;
              p++
            )
              (r =
                S[l >>> 24] ^
                A[(o >> 16) & 255] ^
                L[(h >> 8) & 255] ^
                R[255 & d] ^
                T[m]),
                (s =
                  S[o >>> 24] ^
                  A[(h >> 16) & 255] ^
                  L[(d >> 8) & 255] ^
                  R[255 & l] ^
                  T[m + 1]),
                (a =
                  S[h >>> 24] ^
                  A[(d >> 16) & 255] ^
                  L[(l >> 8) & 255] ^
                  R[255 & o] ^
                  T[m + 2]),
                (n =
                  S[d >>> 24] ^
                  A[(l >> 16) & 255] ^
                  L[(o >> 8) & 255] ^
                  R[255 & h] ^
                  T[m + 3]),
                (l = r),
                (o = s),
                (h = a),
                (d = n),
                (m += 4);
            (r =
              (y[l >>> 24] << 24) ^
              (y[(o >> 16) & 255] << 16) ^
              (y[(h >> 8) & 255] << 8) ^
              y[255 & d] ^
              T[m]),
              (s =
                (y[o >>> 24] << 24) ^
                (y[(h >> 16) & 255] << 16) ^
                (y[(d >> 8) & 255] << 8) ^
                y[255 & l] ^
                T[m + 1]),
              (a =
                (y[h >>> 24] << 24) ^
                (y[(d >> 16) & 255] << 16) ^
                (y[(l >> 8) & 255] << 8) ^
                y[255 & o] ^
                T[m + 2]),
              (n =
                (y[d >>> 24] << 24) ^
                (y[(l >> 16) & 255] << 16) ^
                (y[(o >> 8) & 255] << 8) ^
                y[255 & h] ^
                T[m + 3]),
              (w[t] = P(r ^ I)),
              (w[t + 1] = P(n ^ b)),
              (w[t + 2] = P(a ^ k)),
              (w[t + 3] = P(s ^ _)),
              (I = u),
              (b = c),
              (k = f),
              (_ = g),
              (t += 4);
          }
          return w.buffer;
        }
      }
      class ip {
        constructor(e, { removePKCS7Padding: t = !0 } = {}) {
          if (
            ((this.logEnabled = !0),
            (this.removePKCS7Padding = void 0),
            (this.subtle = null),
            (this.softwareDecrypter = null),
            (this.key = null),
            (this.fastAesKey = null),
            (this.remainderData = null),
            (this.currentIV = null),
            (this.currentResult = null),
            (this.useSoftware = void 0),
            (this.useSoftware = e.enableSoftwareAES),
            (this.removePKCS7Padding = t),
            t)
          )
            try {
              let e = self.crypto;
              e && (this.subtle = e.subtle || e.webkitSubtle);
            } catch (e) {}
          this.useSoftware = !this.subtle;
        }
        destroy() {
          (this.subtle = null),
            (this.softwareDecrypter = null),
            (this.key = null),
            (this.fastAesKey = null),
            (this.remainderData = null),
            (this.currentIV = null),
            (this.currentResult = null);
        }
        isSync() {
          return this.useSoftware;
        }
        flush() {
          let { currentResult: e, remainderData: t } = this;
          if (!e || t) return this.reset(), null;
          let i = new Uint8Array(e);
          return (this.reset(), this.removePKCS7Padding)
            ? (function (e) {
                let t = e.byteLength,
                  i = t && new DataView(e.buffer).getUint8(t - 1);
                return i ? ea(e, 0, t - i) : e;
              })(i)
            : i;
        }
        reset() {
          (this.currentResult = null),
            (this.currentIV = null),
            (this.remainderData = null),
            this.softwareDecrypter && (this.softwareDecrypter = null);
        }
        decrypt(e, t, i) {
          return this.useSoftware
            ? new Promise((r, s) => {
                this.softwareDecrypt(new Uint8Array(e), t, i);
                let a = this.flush();
                a
                  ? r(a.buffer)
                  : s(Error("[softwareDecrypt] Failed to decrypt data"));
              })
            : this.webCryptoDecrypt(new Uint8Array(e), t, i);
        }
        softwareDecrypt(e, t, i) {
          let { currentIV: r, currentResult: s, remainderData: a } = this;
          this.logOnce("JS AES decrypt"),
            a && ((e = eM(a, e)), (this.remainderData = null));
          let n = this.getValidChunk(e);
          if (!n.length) return null;
          r && (i = r);
          let l = this.softwareDecrypter;
          return (l || (l = this.softwareDecrypter = new im()),
          l.expandKey(t),
          (this.currentResult = l.decrypt(n.buffer, 0, i)),
          (this.currentIV = ea(n, -16).buffer),
          s)
            ? s
            : null;
        }
        webCryptoDecrypt(e, t, i) {
          if (this.key !== t || !this.fastAesKey) {
            if (!this.subtle)
              return Promise.resolve(this.onWebCryptoError(e, t, i));
            (this.key = t), (this.fastAesKey = new ig(this.subtle, t));
          }
          return this.fastAesKey
            .expandKey()
            .then((t) =>
              this.subtle
                ? (this.logOnce("WebCrypto AES decrypt"),
                  new ic(this.subtle, new Uint8Array(i)).decrypt(e.buffer, t))
                : Promise.reject(Error("web crypto not initialized")),
            )
            .catch(
              (r) => (
                M.warn(
                  `[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`,
                ),
                this.onWebCryptoError(e, t, i)
              ),
            );
        }
        onWebCryptoError(e, t, i) {
          (this.useSoftware = !0),
            (this.logEnabled = !0),
            this.softwareDecrypt(e, t, i);
          let r = this.flush();
          if (r) return r.buffer;
          throw Error("WebCrypto and softwareDecrypt: failed to decrypt data");
        }
        getValidChunk(e) {
          let t = e,
            i = e.length - (e.length % 16);
          return (
            i !== e.length &&
              ((t = ea(e, 0, i)), (this.remainderData = ea(e, i))),
            t
          );
        }
        logOnce(e) {
          this.logEnabled &&
            (M.log(`[decrypter]: ${e}`), (this.logEnabled = !1));
        }
      }
      let iE = {},
        iT = {
          STOPPED: "STOPPED",
          IDLE: "IDLE",
          KEY_LOADING: "KEY_LOADING",
          FRAG_LOADING: "FRAG_LOADING",
          FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
          WAITING_TRACK: "WAITING_TRACK",
          PARSING: "PARSING",
          PARSED: "PARSED",
          ENDED: "ENDED",
          ERROR: "ERROR",
          WAITING_INIT_PTS: "WAITING_INIT_PTS",
          WAITING_LEVEL: "WAITING_LEVEL",
        };
      class iy extends t3 {
        constructor(e, t, i, r, s) {
          super(),
            (this.hls = void 0),
            (this.fragPrevious = null),
            (this.fragCurrent = null),
            (this.fragmentTracker = void 0),
            (this.transmuxer = null),
            (this._state = iT.STOPPED),
            (this.playlistType = void 0),
            (this.media = null),
            (this.mediaBuffer = null),
            (this.config = void 0),
            (this.bitrateTest = !1),
            (this.lastCurrentTime = 0),
            (this.nextLoadPosition = 0),
            (this.startPosition = 0),
            (this.startTimeOffset = null),
            (this.loadedmetadata = !1),
            (this.retryDate = 0),
            (this.levels = null),
            (this.fragmentLoader = void 0),
            (this.keyLoader = void 0),
            (this.levelLastLoaded = null),
            (this.startFragRequested = !1),
            (this.decrypter = void 0),
            (this.initPTS = []),
            (this.buffering = !0),
            (this.onvseeking = null),
            (this.onvended = null),
            (this.logPrefix = ""),
            (this.log = void 0),
            (this.warn = void 0),
            (this.playlistType = s),
            (this.logPrefix = r),
            (this.log = M.log.bind(M, `${r}:`)),
            (this.warn = M.warn.bind(M, `${r}:`)),
            (this.hls = e),
            (this.fragmentLoader = new io(e.config)),
            (this.keyLoader = i),
            (this.fragmentTracker = t),
            (this.config = e.config),
            (this.decrypter = new ip(e.config)),
            e.on(C.MANIFEST_LOADED, this.onManifestLoaded, this);
        }
        doTick() {
          this.onTickEnd();
        }
        onTickEnd() {}
        startLoad(e) {}
        stopLoad() {
          this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
          let e = this.fragCurrent;
          null != e &&
            e.loader &&
            (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
            this.resetTransmuxer(),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.clearInterval(),
            this.clearNextTick(),
            (this.state = iT.STOPPED);
        }
        pauseBuffering() {
          this.buffering = !1;
        }
        resumeBuffering() {
          this.buffering = !0;
        }
        _streamEnded(e, t) {
          if (t.live || e.nextStart || !e.end || !this.media) return !1;
          let i = t.partList;
          if (null != i && i.length) {
            let e = i[i.length - 1];
            return ie.isBuffered(this.media, e.start + e.duration / 2);
          }
          let r = t.fragments[t.fragments.length - 1].type;
          return this.fragmentTracker.isEndListAppended(r);
        }
        getLevelDetails() {
          if (this.levels && null !== this.levelLastLoaded) {
            var e;
            return null == (e = this.levelLastLoaded) ? void 0 : e.details;
          }
        }
        onMediaAttached(e, t) {
          let i = (this.media = this.mediaBuffer = t.media);
          (this.onvseeking = this.onMediaSeeking.bind(this)),
            (this.onvended = this.onMediaEnded.bind(this)),
            i.addEventListener("seeking", this.onvseeking),
            i.addEventListener("ended", this.onvended);
          let r = this.config;
          this.levels &&
            r.autoStartLoad &&
            this.state === iT.STOPPED &&
            this.startLoad(r.startPosition);
        }
        onMediaDetaching() {
          let e = this.media;
          null != e &&
            e.ended &&
            (this.log("MSE detaching and video ended, reset startPosition"),
            (this.startPosition = this.lastCurrentTime = 0)),
            e &&
              this.onvseeking &&
              this.onvended &&
              (e.removeEventListener("seeking", this.onvseeking),
              e.removeEventListener("ended", this.onvended),
              (this.onvseeking = this.onvended = null)),
            this.keyLoader && this.keyLoader.detach(),
            (this.media = this.mediaBuffer = null),
            (this.loadedmetadata = !1),
            this.fragmentTracker.removeAllFragments(),
            this.stopLoad();
        }
        onMediaSeeking() {
          let {
              config: e,
              fragCurrent: t,
              media: i,
              mediaBuffer: r,
              state: s,
            } = this,
            a = i ? i.currentTime : 0,
            n = ie.bufferInfo(r || i, a, e.maxBufferHole);
          if (
            (this.log(
              `media seeking to ${b(a) ? a.toFixed(3) : a}, state: ${s}`,
            ),
            this.state === iT.ENDED)
          )
            this.resetLoadingState();
          else if (t) {
            let i = e.maxFragLookUpTolerance,
              r = t.start - i,
              s = t.start + t.duration + i;
            if (!n.len || s < n.start || r > n.end) {
              let e = a > s;
              (a < r || e) &&
                (e &&
                  t.loader &&
                  (this.log(
                    "seeking outside of buffer while fragment load in progress, cancel fragment load",
                  ),
                  t.abortRequests(),
                  this.resetLoadingState()),
                (this.fragPrevious = null));
            }
          }
          i &&
            (this.fragmentTracker.removeFragmentsInRange(
              a,
              1 / 0,
              this.playlistType,
              !0,
            ),
            (this.lastCurrentTime = a)),
            this.loadedmetadata ||
              n.len ||
              (this.nextLoadPosition = this.startPosition = a),
            this.tickImmediate();
        }
        onMediaEnded() {
          this.startPosition = this.lastCurrentTime = 0;
        }
        onManifestLoaded(e, t) {
          (this.startTimeOffset = t.startTimeOffset), (this.initPTS = []);
        }
        onHandlerDestroying() {
          this.hls.off(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            this.stopLoad(),
            super.onHandlerDestroying(),
            (this.hls = null);
        }
        onHandlerDestroyed() {
          (this.state = iT.STOPPED),
            this.fragmentLoader && this.fragmentLoader.destroy(),
            this.keyLoader && this.keyLoader.destroy(),
            this.decrypter && this.decrypter.destroy(),
            (this.hls =
              this.log =
              this.warn =
              this.decrypter =
              this.keyLoader =
              this.fragmentLoader =
              this.fragmentTracker =
                null),
            super.onHandlerDestroyed();
        }
        loadFragment(e, t, i) {
          this._loadFragForPlayback(e, t, i);
        }
        _loadFragForPlayback(e, t, i) {
          this._doFragLoad(e, t, i, (t) => {
            if (this.fragContextChanged(e)) {
              this.warn(
                `Fragment ${e.sn}${t.part ? " p: " + t.part.index : ""} of level ${e.level} was dropped during download.`,
              ),
                this.fragmentTracker.removeFragment(e);
              return;
            }
            e.stats.chunkCount++, this._handleFragmentLoadProgress(t);
          })
            .then((t) => {
              if (!t) return;
              let i = this.state;
              if (this.fragContextChanged(e)) {
                (i !== iT.FRAG_LOADING &&
                  (this.fragCurrent || i !== iT.PARSING)) ||
                  (this.fragmentTracker.removeFragment(e),
                  (this.state = iT.IDLE));
                return;
              }
              "payload" in t &&
                (this.log(`Loaded fragment ${e.sn} of level ${e.level}`),
                this.hls.trigger(C.FRAG_LOADED, t)),
                this._handleFragmentLoadComplete(t);
            })
            .catch((t) => {
              this.state !== iT.STOPPED &&
                this.state !== iT.ERROR &&
                (this.warn(
                  `Frag error: ${(null == t ? void 0 : t.message) || t}`,
                ),
                this.resetFragmentLoading(e));
            });
        }
        clearTrackerIfNeeded(e) {
          var t;
          let { fragmentTracker: i } = this;
          if (i.getState(e) === t5.APPENDING) {
            let t = e.type,
              r = this.getFwdBufferInfo(this.mediaBuffer, t),
              s = Math.max(e.duration, r ? r.len : this.config.maxBufferLength),
              a = this.backtrackFragment;
            (1 == (a ? e.sn - a.sn : 0) ||
              this.reduceMaxBufferLength(s, e.duration)) &&
              i.removeFragment(e);
          } else
            (null == (t = this.mediaBuffer) ? void 0 : t.buffered.length) === 0
              ? i.removeAllFragments()
              : i.hasParts(e.type) &&
                (i.detectPartialFragments({
                  frag: e,
                  part: null,
                  stats: e.stats,
                  id: e.type,
                }),
                i.getState(e) === t5.PARTIAL && i.removeFragment(e));
        }
        checkLiveUpdate(e) {
          if (e.updated && !e.live) {
            let t = e.fragments[e.fragments.length - 1];
            this.fragmentTracker.detectPartialFragments({
              frag: t,
              part: null,
              stats: t.stats,
              id: t.type,
            });
          }
          e.fragments[0] || (e.deltaUpdateFailed = !0);
        }
        flushMainBuffer(e, t, i = null) {
          e - t &&
            this.hls.trigger(C.BUFFER_FLUSHING, {
              startOffset: e,
              endOffset: t,
              type: i,
            });
        }
        _loadInitSegment(e, t) {
          this._doFragLoad(e, t)
            .then((t) => {
              if (!t || this.fragContextChanged(e) || !this.levels)
                throw Error("init load aborted");
              return t;
            })
            .then((t) => {
              let { hls: i } = this,
                { payload: r } = t,
                s = e.decryptdata;
              if (
                r &&
                r.byteLength > 0 &&
                null != s &&
                s.key &&
                s.iv &&
                "AES-128" === s.method
              ) {
                let a = self.performance.now();
                return this.decrypter
                  .decrypt(new Uint8Array(r), s.key.buffer, s.iv.buffer)
                  .catch((t) => {
                    throw (
                      (i.trigger(C.ERROR, {
                        type: w.MEDIA_ERROR,
                        details: P.FRAG_DECRYPT_ERROR,
                        fatal: !1,
                        error: t,
                        reason: t.message,
                        frag: e,
                      }),
                      t)
                    );
                  })
                  .then((r) => {
                    let s = self.performance.now();
                    return (
                      i.trigger(C.FRAG_DECRYPTED, {
                        frag: e,
                        payload: r,
                        stats: { tstart: a, tdecrypt: s },
                      }),
                      (t.payload = r),
                      this.completeInitSegmentLoad(t)
                    );
                  });
              }
              return this.completeInitSegmentLoad(t);
            })
            .catch((t) => {
              this.state !== iT.STOPPED &&
                this.state !== iT.ERROR &&
                (this.warn(t), this.resetFragmentLoading(e));
            });
        }
        completeInitSegmentLoad(e) {
          let { levels: t } = this;
          if (!t) throw Error("init load aborted, missing levels");
          let i = e.frag.stats;
          (this.state = iT.IDLE),
            (e.frag.data = new Uint8Array(e.payload)),
            (i.parsing.start = i.buffering.start = self.performance.now()),
            (i.parsing.end = i.buffering.end = self.performance.now()),
            this.tick();
        }
        fragContextChanged(e) {
          let { fragCurrent: t } = this;
          return !e || !t || e.sn !== t.sn || e.level !== t.level;
        }
        fragBufferedComplete(e, t) {
          var i, r, s, a, n;
          let l = this.mediaBuffer ? this.mediaBuffer : this.media;
          if (
            (this.log(
              `Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.playlistType === tn.MAIN ? "level" : "track"} ${e.level} (frag:[${(null != (i = e.startPTS) ? i : NaN).toFixed(3)}-${(null != (r = e.endPTS) ? r : NaN).toFixed(3)}] > buffer:${l ? iE.toString(ie.getBuffered(l)) : "(detached)"})`,
            ),
            "initSegment" !== e.sn)
          ) {
            if (e.type !== tn.SUBTITLE) {
              let t = e.elementaryStreams;
              if (!Object.keys(t).some((e) => !!t[e])) {
                this.state = iT.IDLE;
                return;
              }
            }
            let t = null == (n = this.levels) ? void 0 : n[e.level];
            null != t &&
              t.fragmentError &&
              (this.log(
                `Resetting level fragment error count of ${t.fragmentError} on frag buffered`,
              ),
              (t.fragmentError = 0));
          }
          (this.state = iT.IDLE),
            l &&
              (!this.loadedmetadata &&
                e.type == tn.MAIN &&
                l.buffered.length &&
                (null == (s = this.fragCurrent) ? void 0 : s.sn) ===
                  (null == (a = this.fragPrevious) ? void 0 : a.sn) &&
                ((this.loadedmetadata = !0), this.seekToStartPos()),
              this.tick());
        }
        seekToStartPos() {}
        _handleFragmentLoadComplete(e) {
          let { transmuxer: t } = this;
          if (!t) return;
          let { frag: i, part: r, partsLoaded: s } = e,
            a = !s || 0 === s.length || s.some((e) => !e),
            n = new it(
              i.level,
              i.sn,
              i.stats.chunkCount + 1,
              0,
              r ? r.index : -1,
              !a,
            );
          t.flush(n);
        }
        _handleFragmentLoadProgress(e) {}
        _doFragLoad(e, t, i = null, r) {
          var s;
          let a;
          let n = null == t ? void 0 : t.details;
          if (!this.levels || !n)
            throw Error(
              `frag load aborted, missing level${n ? "" : " detail"}s`,
            );
          let l = null;
          if (
            (e.encrypted && !(null != (s = e.decryptdata) && s.key)
              ? (this.log(
                  `Loading key for ${e.sn} of [${n.startSN}-${n.endSN}], ${"[stream-controller]" === this.logPrefix ? "level" : "track"} ${e.level}`,
                ),
                (this.state = iT.KEY_LOADING),
                (this.fragCurrent = e),
                (l = this.keyLoader.load(e).then((e) => {
                  if (!this.fragContextChanged(e.frag))
                    return (
                      this.hls.trigger(C.KEY_LOADED, e),
                      this.state === iT.KEY_LOADING && (this.state = iT.IDLE),
                      e
                    );
                })),
                this.hls.trigger(C.KEY_LOADING, { frag: e }),
                null === this.fragCurrent &&
                  (l = Promise.reject(
                    Error("frag load aborted, context changed in KEY_LOADING"),
                  )))
              : !e.encrypted &&
                n.encryptedFragments.length &&
                this.keyLoader.loadClear(e, n.encryptedFragments),
            (i = Math.max(e.start, i || 0)),
            this.config.lowLatencyMode && "initSegment" !== e.sn)
          ) {
            let s = n.partList;
            if (s && r) {
              i > e.end && n.fragmentHint && (e = n.fragmentHint);
              let a = this.getNextPart(s, e, i);
              if (a > -1) {
                let o;
                let h = s[a];
                return (this.log(
                  `Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${n.startSN}-${n.endSN}] parts [0-${a}-${s.length - 1}] ${"[stream-controller]" === this.logPrefix ? "level" : "track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`,
                ),
                (this.nextLoadPosition = h.start + h.duration),
                (this.state = iT.FRAG_LOADING),
                (o = l
                  ? l
                      .then((i) =>
                        !i || this.fragContextChanged(i.frag)
                          ? null
                          : this.doFragPartsLoad(e, h, t, r),
                      )
                      .catch((e) => this.handleFragLoadError(e))
                  : this.doFragPartsLoad(e, h, t, r).catch((e) =>
                      this.handleFragLoadError(e),
                    )),
                this.hls.trigger(C.FRAG_LOADING, {
                  frag: e,
                  part: h,
                  targetBufferTime: i,
                }),
                null === this.fragCurrent)
                  ? Promise.reject(
                      Error(
                        "frag load aborted, context changed in FRAG_LOADING parts",
                      ),
                    )
                  : o;
              }
              if (!e.url || this.loadedEndOfParts(s, i))
                return Promise.resolve(null);
            }
          }
          this.log(
            `Loading fragment ${e.sn} cc: ${e.cc} ${n ? "of [" + n.startSN + "-" + n.endSN + "] " : ""}${"[stream-controller]" === this.logPrefix ? "level" : "track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`,
          ),
            b(e.sn) &&
              !this.bitrateTest &&
              (this.nextLoadPosition = e.start + e.duration),
            (this.state = iT.FRAG_LOADING);
          let o = this.config.progressive;
          return ((a =
            o && l
              ? l
                  .then((t) =>
                    !t || this.fragContextChanged(null == t ? void 0 : t.frag)
                      ? null
                      : this.fragmentLoader.load(e, r),
                  )
                  .catch((e) => this.handleFragLoadError(e))
              : Promise.all([this.fragmentLoader.load(e, o ? r : void 0), l])
                  .then(([e]) => (!o && e && r && r(e), e))
                  .catch((e) => this.handleFragLoadError(e))),
          this.hls.trigger(C.FRAG_LOADING, { frag: e, targetBufferTime: i }),
          null === this.fragCurrent)
            ? Promise.reject(
                Error("frag load aborted, context changed in FRAG_LOADING"),
              )
            : a;
        }
        doFragPartsLoad(e, t, i, r) {
          return new Promise((s, a) => {
            var n;
            let l = [],
              o = null == (n = i.details) ? void 0 : n.partList,
              h = (t) => {
                this.fragmentLoader
                  .loadPart(e, t, r)
                  .then((r) => {
                    l[t.index] = r;
                    let a = r.part;
                    this.hls.trigger(C.FRAG_LOADED, r);
                    let n =
                      tx(i, e.sn, t.index + 1) || tO(o, e.sn, t.index + 1);
                    if (!n) return s({ frag: e, part: a, partsLoaded: l });
                    h(n);
                  })
                  .catch(a);
              };
            h(t);
          });
        }
        handleFragLoadError(e) {
          if ("data" in e) {
            let t = e.data;
            e.data && t.details === P.INTERNAL_ABORTED
              ? this.handleFragLoadAborted(t.frag, t.part)
              : this.hls.trigger(C.ERROR, t);
          } else
            this.hls.trigger(C.ERROR, {
              type: w.OTHER_ERROR,
              details: P.INTERNAL_EXCEPTION,
              err: e,
              error: e,
              fatal: !0,
            });
          return null;
        }
        _handleTransmuxerFlush(e) {
          let t = this.getCurrentContext(e);
          if (!t || this.state !== iT.PARSING) {
            this.fragCurrent ||
              this.state === iT.STOPPED ||
              this.state === iT.ERROR ||
              (this.state = iT.IDLE);
            return;
          }
          let { frag: i, part: r, level: s } = t,
            a = self.performance.now();
          (i.stats.parsing.end = a),
            r && (r.stats.parsing.end = a),
            this.updateLevelTiming(i, r, s, e.partial);
        }
        getCurrentContext(e) {
          let { levels: t, fragCurrent: i } = this,
            { level: r, sn: s, part: a } = e;
          if (!(null != t && t[r]))
            return (
              this.warn(
                `Levels object was unset while buffering fragment ${s} of level ${r}. The current chunk will not be buffered.`,
              ),
              null
            );
          let n = t[r],
            l = a > -1 ? tx(n, s, a) : null,
            o = l
              ? l.fragment
              : (function (e, t, i) {
                  if (!(null != e && e.details)) return null;
                  let r = e.details,
                    s = r.fragments[t - r.startSN];
                  return s || ((s = r.fragmentHint) && s.sn === t)
                    ? s
                    : t < r.startSN && i && i.sn === t
                      ? i
                      : null;
                })(n, s, i);
          return o
            ? (i && i !== o && (o.stats = i.stats),
              { frag: o, part: l, level: n })
            : null;
        }
        bufferFragmentData(e, t, i, r, s) {
          var a;
          if (!e || this.state !== iT.PARSING) return;
          let { data1: n, data2: l } = e,
            o = n;
          if ((n && l && (o = eM(n, l)), !(null != (a = o) && a.length)))
            return;
          let h = {
            type: e.type,
            frag: t,
            part: i,
            chunkMeta: r,
            parent: t.type,
            data: o,
          };
          if (
            (this.hls.trigger(C.BUFFER_APPENDING, h),
            e.dropped && e.independent && !i)
          ) {
            if (s) return;
            this.flushBufferGap(t);
          }
        }
        flushBufferGap(e) {
          let t = this.media;
          if (!t) return;
          if (!ie.isBuffered(t, t.currentTime)) {
            this.flushMainBuffer(0, e.start);
            return;
          }
          let i = t.currentTime,
            r = ie.bufferInfo(t, i, 0),
            s = e.duration,
            a = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * s),
            n = Math.max(Math.min(e.start - a, r.end - a), i + a);
          e.start - n > a && this.flushMainBuffer(n, e.start);
        }
        getFwdBufferInfo(e, t) {
          let i = this.getLoadPosition();
          return b(i) ? this.getFwdBufferInfoAtPos(e, i, t) : null;
        }
        getFwdBufferInfoAtPos(e, t, i) {
          let {
              config: { maxBufferHole: r },
            } = this,
            s = ie.bufferInfo(e, t, r);
          if (0 === s.len && void 0 !== s.nextStart) {
            let a = this.fragmentTracker.getBufferedFrag(t, i);
            if (a && s.nextStart < a.end)
              return ie.bufferInfo(e, t, Math.max(s.nextStart, r));
          }
          return s;
        }
        getMaxBufferLength(e) {
          let { config: t } = this;
          return Math.min(
            e
              ? Math.max((8 * t.maxBufferSize) / e, t.maxBufferLength)
              : t.maxBufferLength,
            t.maxMaxBufferLength,
          );
        }
        reduceMaxBufferLength(e, t) {
          let i = this.config,
            r = Math.max(Math.min(e - t, i.maxBufferLength), t),
            s = Math.max(e - 3 * t, i.maxMaxBufferLength / 2, r);
          return (
            s >= r &&
            ((i.maxMaxBufferLength = s),
            this.warn(`Reduce max buffer length to ${s}s`),
            !0)
          );
        }
        getAppendedFrag(e, t = tn.MAIN) {
          let i = this.fragmentTracker.getAppendedFrag(e, tn.MAIN);
          return i && "fragment" in i ? i.fragment : i;
        }
        getNextFragment(e, t) {
          let i;
          let r = t.fragments,
            s = r.length;
          if (!s) return null;
          let { config: a } = this,
            n = r[0].start;
          if (t.live) {
            let l = a.initialLiveManifestSize;
            if (s < l)
              return (
                this.warn(
                  `Not enough fragments to start playback (have: ${s}, need: ${l})`,
                ),
                null
              );
            ((t.PTSKnown ||
              this.startFragRequested ||
              -1 !== this.startPosition) &&
              !(e < n)) ||
              ((i = this.getInitialLiveFragment(t, r)),
              (this.startPosition = this.nextLoadPosition =
                i ? this.hls.liveSyncPosition || i.start : e));
          } else e <= n && (i = r[0]);
          if (!i) {
            let r = a.lowLatencyMode ? t.partEnd : t.fragmentEnd;
            i = this.getFragmentAtPosition(e, r, t);
          }
          return this.mapToInitFragWhenRequired(i);
        }
        isLoopLoading(e, t) {
          let i = this.fragmentTracker.getState(e);
          return (
            (i === t5.OK || (i === t5.PARTIAL && !!e.gap)) &&
            this.nextLoadPosition > t
          );
        }
        getNextFragmentLoopLoading(e, t, i, r, s) {
          let a = e.gap,
            n = this.getNextFragment(this.nextLoadPosition, t);
          if (null === n) return n;
          if (((e = n), a && e && !e.gap && i.nextStart)) {
            let t = this.getFwdBufferInfoAtPos(
              this.mediaBuffer ? this.mediaBuffer : this.media,
              i.nextStart,
              r,
            );
            if (null !== t && i.len + t.len >= s)
              return (
                this.log(
                  `buffer full after gaps in "${r}" playlist starting at sn: ${e.sn}`,
                ),
                null
              );
          }
          return e;
        }
        mapToInitFragWhenRequired(e) {
          return null == e ||
            !e.initSegment ||
            (null != e && e.initSegment.data) ||
            this.bitrateTest
            ? e
            : e.initSegment;
        }
        getNextPart(e, t, i) {
          let r = -1,
            s = !1,
            a = !0;
          for (let n = 0, l = e.length; n < l; n++) {
            let l = e[n];
            if (((a = a && !l.independent), r > -1 && i < l.start)) break;
            let o = l.loaded;
            o
              ? (r = -1)
              : (s || l.independent || a) && l.fragment === t && (r = n),
              (s = o);
          }
          return r;
        }
        loadedEndOfParts(e, t) {
          let i = e[e.length - 1];
          return i && t > i.start && i.loaded;
        }
        getInitialLiveFragment(e, t) {
          let i = this.fragPrevious,
            r = null;
          if (i) {
            if (
              (e.hasProgramDateTime &&
                (this.log(
                  `Live playlist, switching playlist, load frag with same PDT: ${i.programDateTime}`,
                ),
                (r = (function (e, t, i) {
                  if (
                    null === t ||
                    !Array.isArray(e) ||
                    !e.length ||
                    !b(t) ||
                    t < (e[0].programDateTime || 0) ||
                    t >= (e[e.length - 1].endProgramDateTime || 0)
                  )
                    return null;
                  i = i || 0;
                  for (let r = 0; r < e.length; ++r) {
                    let s = e[r];
                    if (
                      (function (e, t, i) {
                        let r =
                          1e3 *
                          Math.min(
                            t,
                            i.duration + (i.deltaPTS ? i.deltaPTS : 0),
                          );
                        return (i.endProgramDateTime || 0) - r > e;
                      })(t, i, s)
                    )
                      return s;
                  }
                  return null;
                })(
                  t,
                  i.endProgramDateTime,
                  this.config.maxFragLookUpTolerance,
                ))),
              !r)
            ) {
              let a = i.sn + 1;
              if (a >= e.startSN && a <= e.endSN) {
                let s = t[a - e.startSN];
                i.cc === s.cc &&
                  ((r = s),
                  this.log(
                    `Live playlist, switching playlist, load frag with next SN: ${r.sn}`,
                  ));
              }
              if (!r) {
                var s;
                (s = i.cc),
                  (r = tG(t, (e) => (e.cc < s ? 1 : e.cc > s ? -1 : 0))) &&
                    this.log(
                      `Live playlist, switching playlist, load frag with same CC: ${r.sn}`,
                    );
              }
            }
          } else {
            let t = this.hls.liveSyncPosition;
            null !== t &&
              (r = this.getFragmentAtPosition(
                t,
                this.bitrateTest ? e.fragmentEnd : e.edge,
                e,
              ));
          }
          return r;
        }
        getFragmentAtPosition(e, t, i) {
          let r;
          let { config: s } = this,
            { fragPrevious: a } = this,
            { fragments: n, endSN: l } = i,
            { fragmentHint: o } = i,
            { maxFragLookUpTolerance: h } = s,
            d = i.partList,
            u = !!(s.lowLatencyMode && null != d && d.length && o);
          if (
            (u && o && !this.bitrateTest && ((n = n.concat(o)), (l = o.sn)),
            (r = e < t ? tK(a, n, e, e > t - h ? 0 : h) : n[n.length - 1]))
          ) {
            let e = r.sn - i.startSN,
              t = this.fragmentTracker.getState(r);
            if (
              ((t === t5.OK || (t === t5.PARTIAL && r.gap)) && (a = r),
              a &&
                r.sn === a.sn &&
                (!u || d[0].fragment.sn > r.sn) &&
                a &&
                r.level === a.level)
            ) {
              let t = n[e + 1];
              r =
                r.sn < l && this.fragmentTracker.getState(t) !== t5.OK
                  ? t
                  : null;
            }
          }
          return r;
        }
        synchronizeToLiveEdge(e) {
          let { config: t, media: i } = this;
          if (!i) return;
          let r = this.hls.liveSyncPosition,
            s = i.currentTime,
            a = e.fragments[0].start,
            n = e.edge,
            l = s >= a - t.maxFragLookUpTolerance && s <= n;
          if (null !== r && i.duration > r && (s < r || !l)) {
            let a =
              void 0 !== t.liveMaxLatencyDuration
                ? t.liveMaxLatencyDuration
                : t.liveMaxLatencyDurationCount * e.targetduration;
            ((!l && i.readyState < 4) || s < n - a) &&
              (this.loadedmetadata || (this.nextLoadPosition = r),
              i.readyState &&
                (this.warn(
                  `Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${n}, reset currentTime to : ${r.toFixed(3)}`,
                ),
                (i.currentTime = r)));
          }
        }
        alignPlaylists(e, t, i) {
          let r = e.fragments.length;
          if (!r) return this.warn("No fragments in live playlist"), 0;
          let s = e.fragments[0].start,
            a = e.alignedSliding && b(s);
          if (!t || (!a && !s)) {
            let { fragPrevious: s } = this;
            i &&
              ((function (e, t, i) {
                if (i && (t.endCC > t.startCC || (e && e.cc < t.startCC))) {
                  let e = (function (e, t) {
                    let i = e.fragments,
                      r = t.fragments;
                    if (!r.length || !i.length) {
                      M.log("No fragments to align");
                      return;
                    }
                    let s = ir(i, r[0].cc);
                    if (!s || (s && !s.startPTS)) {
                      M.log("No frag in previous level to align on");
                      return;
                    }
                    return s;
                  })(i, t);
                  e &&
                    b(e.start) &&
                    (M.log(
                      `Adjusting PTS using last level due to CC increase within current level ${t.url}`,
                    ),
                    ia(e.start, t));
                }
              })(s, e, i),
              !e.alignedSliding && i && il(e, i),
              e.alignedSliding || !i || e.skippedSegments || tw(i, e));
            let a = e.fragments[0].start;
            return (
              this.log(
                `Live playlist sliding: ${a.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} prev-sn: ${s ? s.sn : "na"} fragments: ${r}`,
              ),
              a
            );
          }
          return s;
        }
        waitForCdnTuneIn(e) {
          return (
            e.live &&
            e.canBlockReload &&
            e.partTarget &&
            e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget)
          );
        }
        setStartPosition(e, t) {
          let i = this.startPosition;
          if ((i < t && (i = -1), -1 === i || -1 === this.lastCurrentTime)) {
            let r = null !== this.startTimeOffset,
              s = r ? this.startTimeOffset : e.startTimeOffset;
            null !== s && b(s)
              ? ((i = t + s),
                s < 0 && (i += e.totalduration),
                (i = Math.min(Math.max(t, i), t + e.totalduration)),
                this.log(
                  `Start time offset ${s} found in ${r ? "multivariant" : "media"} playlist, adjust startPosition to ${i}`,
                ),
                (this.startPosition = i))
              : e.live
                ? (i = this.hls.liveSyncPosition || t)
                : (this.startPosition = i = 0),
              (this.lastCurrentTime = i);
          }
          this.nextLoadPosition = i;
        }
        getLoadPosition() {
          let { media: e } = this,
            t = 0;
          return (
            this.loadedmetadata && e
              ? (t = e.currentTime)
              : this.nextLoadPosition && (t = this.nextLoadPosition),
            t
          );
        }
        handleFragLoadAborted(e, t) {
          this.transmuxer &&
            "initSegment" !== e.sn &&
            e.stats.aborted &&
            (this.warn(
              `Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} was aborted`,
            ),
            this.resetFragmentLoading(e));
        }
        resetFragmentLoading(e) {
          (this.fragCurrent &&
            (this.fragContextChanged(e) ||
              this.state === iT.FRAG_LOADING_WAITING_RETRY)) ||
            (this.state = iT.IDLE);
        }
        onFragmentOrKeyLoadError(e, t) {
          if (t.chunkMeta && !t.frag) {
            let e = this.getCurrentContext(t.chunkMeta);
            e && (t.frag = e.frag);
          }
          let i = t.frag;
          if (!i || i.type !== e || !this.levels) return;
          if (this.fragContextChanged(i)) {
            var r;
            this.warn(
              `Frag load error must match current frag to retry ${i.url} > ${null == (r = this.fragCurrent) ? void 0 : r.url}`,
            );
            return;
          }
          let s = t.details === P.FRAG_GAP;
          s && this.fragmentTracker.fragBuffered(i, !0);
          let a = t.errorAction,
            { action: n, retryCount: l = 0, retryConfig: o } = a || {};
          if (a && n === tH.RetryRequest && o) {
            this.resetStartWhenNotLoaded(this.levelLastLoaded);
            let r = tU(o, l);
            this.warn(
              `Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${l + 1}/${o.maxNumRetry} in ${r}ms`,
            ),
              (a.resolved = !0),
              (this.retryDate = self.performance.now() + r),
              (this.state = iT.FRAG_LOADING_WAITING_RETRY);
          } else if (o && a) {
            if ((this.resetFragmentErrors(e), l < o.maxNumRetry))
              s || n === tH.RemoveAlternatePermanently || (a.resolved = !0);
            else {
              M.warn(`${t.details} reached or exceeded max retry (${l})`);
              return;
            }
          } else
            (null == a ? void 0 : a.action) === tH.SendAlternateToPenaltyBox
              ? (this.state = iT.WAITING_LEVEL)
              : (this.state = iT.ERROR);
          this.tickImmediate();
        }
        reduceLengthAndFlushBuffer(e) {
          if (this.state === iT.PARSING || this.state === iT.PARSED) {
            let t = e.frag,
              i = e.parent,
              r = this.getFwdBufferInfo(this.mediaBuffer, i),
              s = r && r.len > 0.5;
            s &&
              this.reduceMaxBufferLength(
                r.len,
                (null == t ? void 0 : t.duration) || 10,
              );
            let a = !s;
            return (
              a &&
                this.warn(
                  `Buffer full error while media.currentTime is not buffered, flush ${i} buffer`,
                ),
              t &&
                (this.fragmentTracker.removeFragment(t),
                (this.nextLoadPosition = t.start)),
              this.resetLoadingState(),
              a
            );
          }
          return !1;
        }
        resetFragmentErrors(e) {
          e === tn.AUDIO && (this.fragCurrent = null),
            this.loadedmetadata || (this.startFragRequested = !1),
            this.state !== iT.STOPPED && (this.state = iT.IDLE);
        }
        afterBufferFlushed(e, t, i) {
          if (!e) return;
          let r = ie.getBuffered(e);
          this.fragmentTracker.detectEvictedFragments(t, r, i),
            this.state === iT.ENDED && this.resetLoadingState();
        }
        resetLoadingState() {
          this.log("Reset loading state"),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            (this.state = iT.IDLE);
        }
        resetStartWhenNotLoaded(e) {
          if (!this.loadedmetadata) {
            this.startFragRequested = !1;
            let t = e ? e.details : null;
            null != t && t.live
              ? ((this.startPosition = -1),
                this.setStartPosition(t, 0),
                this.resetLoadingState())
              : (this.nextLoadPosition = this.startPosition);
          }
        }
        resetWhenMissingContext(e) {
          this.warn(
            `The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`,
          ),
            this.removeUnbufferedFrags(),
            this.resetStartWhenNotLoaded(this.levelLastLoaded),
            this.resetLoadingState();
        }
        removeUnbufferedFrags(e = 0) {
          this.fragmentTracker.removeFragmentsInRange(
            e,
            1 / 0,
            this.playlistType,
            !1,
            !0,
          );
        }
        updateLevelTiming(e, t, i, r) {
          var s;
          let a = i.details;
          if (!a) {
            this.warn("level.details undefined");
            return;
          }
          if (
            !Object.keys(e.elementaryStreams).reduce((t, s) => {
              let n = e.elementaryStreams[s];
              if (n) {
                let l = n.endPTS - n.startPTS;
                if (l <= 0)
                  return (
                    this.warn(
                      `Could not parse fragment ${e.sn} ${s} duration reliably (${l})`,
                    ),
                    t || !1
                  );
                let o = r
                  ? 0
                  : tC(a, e, n.startPTS, n.endPTS, n.startDTS, n.endDTS);
                return (
                  this.hls.trigger(C.LEVEL_PTS_UPDATED, {
                    details: a,
                    level: i,
                    drift: o,
                    type: s,
                    frag: e,
                    start: n.startPTS,
                    end: n.endPTS,
                  }),
                  !0
                );
              }
              return t;
            }, !1) &&
            (null == (s = this.transmuxer) ? void 0 : s.error) === null
          ) {
            let t = Error(
              `Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`,
            );
            if (
              (0 === i.fragmentError &&
                (i.fragmentError++,
                (e.gap = !0),
                this.fragmentTracker.removeFragment(e),
                this.fragmentTracker.fragBuffered(e, !0)),
              this.warn(t.message),
              this.hls.trigger(C.ERROR, {
                type: w.MEDIA_ERROR,
                details: P.FRAG_PARSING_ERROR,
                fatal: !1,
                error: t,
                frag: e,
                reason: `Found no media in msn ${e.sn} of level "${i.url}"`,
              }),
              !this.hls)
            )
              return;
            this.resetTransmuxer();
          }
          (this.state = iT.PARSED),
            this.hls.trigger(C.FRAG_PARSED, { frag: e, part: t });
        }
        resetTransmuxer() {
          this.transmuxer &&
            (this.transmuxer.destroy(), (this.transmuxer = null));
        }
        recoverWorkerError(e) {
          "demuxerWorker" === e.event &&
            (this.fragmentTracker.removeAllFragments(),
            this.resetTransmuxer(),
            this.resetStartWhenNotLoaded(this.levelLastLoaded),
            this.resetLoadingState());
        }
        set state(e) {
          let t = this._state;
          t !== e && ((this._state = e), this.log(`${t}->${e}`));
        }
        get state() {
          return this._state;
        }
      }
      class iv {
        constructor() {
          (this.chunks = []), (this.dataLength = 0);
        }
        push(e) {
          this.chunks.push(e), (this.dataLength += e.length);
        }
        flush() {
          let e;
          let { chunks: t, dataLength: i } = this;
          return t.length
            ? ((e =
                1 === t.length
                  ? t[0]
                  : (function (e, t) {
                      let i = new Uint8Array(t),
                        r = 0;
                      for (let t = 0; t < e.length; t++) {
                        let s = e[t];
                        i.set(s, r), (r += s.length);
                      }
                      return i;
                    })(t, i)),
              this.reset(),
              e)
            : new Uint8Array(0);
        }
        reset() {
          (this.chunks.length = 0), (this.dataLength = 0);
        }
      }
      function iS(e = "", t = 9e4) {
        return {
          type: e,
          id: -1,
          pid: -1,
          inputTimeScale: t,
          sequenceNumber: -1,
          samples: [],
          dropped: 0,
        };
      }
      class iA {
        constructor() {
          (this._audioTrack = void 0),
            (this._id3Track = void 0),
            (this.frameIndex = 0),
            (this.cachedData = null),
            (this.basePTS = null),
            (this.initPTS = null),
            (this.lastPTS = null);
        }
        resetInitSegment(e, t, i, r) {
          this._id3Track = {
            type: "id3",
            id: 3,
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: 0,
            samples: [],
            dropped: 0,
          };
        }
        resetTimeStamp(e) {
          (this.initPTS = e), this.resetContiguity();
        }
        resetContiguity() {
          (this.basePTS = null), (this.lastPTS = null), (this.frameIndex = 0);
        }
        canParse(e, t) {
          return !1;
        }
        appendFrame(e, t, i) {}
        demux(e, t) {
          let i;
          this.cachedData &&
            ((e = eM(this.cachedData, e)), (this.cachedData = null));
          let r = eo(e, 0),
            s = r ? r.length : 0,
            a = this._audioTrack,
            n = this._id3Track,
            l = r ? eu(r) : void 0,
            o = e.length;
          for (
            (null === this.basePTS || (0 === this.frameIndex && b(l))) &&
              ((this.basePTS = iL(l, t, this.initPTS)),
              (this.lastPTS = this.basePTS)),
              null === this.lastPTS && (this.lastPTS = this.basePTS),
              r &&
                r.length > 0 &&
                n.samples.push({
                  pts: this.lastPTS,
                  dts: this.lastPTS,
                  data: r,
                  type: tm.audioId3,
                  duration: Number.POSITIVE_INFINITY,
                });
            s < o;

          ) {
            if (this.canParse(e, s)) {
              let t = this.appendFrame(a, e, s);
              t
                ? (this.frameIndex++,
                  (this.lastPTS = t.sample.pts),
                  (s += t.length),
                  (i = s))
                : (s = o);
            } else
              ed(e, s)
                ? ((r = eo(e, s)),
                  n.samples.push({
                    pts: this.lastPTS,
                    dts: this.lastPTS,
                    data: r,
                    type: tm.audioId3,
                    duration: Number.POSITIVE_INFINITY,
                  }),
                  (s += r.length),
                  (i = s))
                : s++;
            if (s === o && i !== o) {
              let t = ea(e, i);
              this.cachedData
                ? (this.cachedData = eM(this.cachedData, t))
                : (this.cachedData = t);
            }
          }
          return {
            audioTrack: a,
            videoTrack: iS(),
            id3Track: n,
            textTrack: iS(),
          };
        }
        demuxSampleAes(e, t, i) {
          return Promise.reject(
            Error(
              `[${this}] This demuxer does not support Sample-AES decryption`,
            ),
          );
        }
        flush(e) {
          let t = this.cachedData;
          return (
            t && ((this.cachedData = null), this.demux(t, 0)),
            {
              audioTrack: this._audioTrack,
              videoTrack: iS(),
              id3Track: this._id3Track,
              textTrack: iS(),
            }
          );
        }
        destroy() {}
      }
      let iL = (e, t, i) =>
        b(e) ? 90 * e : 9e4 * t + (i ? (9e4 * i.baseTime) / i.timescale : 0);
      function iR(e, t) {
        return 255 === e[t] && (246 & e[t + 1]) == 240;
      }
      function iD(e, t) {
        return 1 & e[t + 1] ? 7 : 9;
      }
      function iI(e, t) {
        return (
          ((3 & e[t + 3]) << 11) | (e[t + 4] << 3) | ((224 & e[t + 5]) >>> 5)
        );
      }
      function ib(e, t) {
        return t + 1 < e.length && iR(e, t);
      }
      function ik(e, t, i, r, s) {
        if (!e.samplerate) {
          let a = (function (e, t, i, r) {
            let s, a, n, l;
            let o = navigator.userAgent.toLowerCase(),
              h = [
                96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
                11025, 8e3, 7350,
              ];
            s = ((192 & t[i + 2]) >>> 6) + 1;
            let d = (60 & t[i + 2]) >>> 2;
            if (d > h.length - 1) {
              let t = Error(`invalid ADTS sampling index:${d}`);
              e.emit(C.ERROR, C.ERROR, {
                type: w.MEDIA_ERROR,
                details: P.FRAG_PARSING_ERROR,
                fatal: !0,
                error: t,
                reason: t.message,
              });
              return;
            }
            return (
              (n = ((1 & t[i + 2]) << 2) | ((192 & t[i + 3]) >>> 6)),
              M.log(`manifest codec:${r}, ADTS type:${s}, samplingIndex:${d}`),
              /firefox/i.test(o)
                ? d >= 6
                  ? ((s = 5), (l = [, , , ,]), (a = d - 3))
                  : ((s = 2), (l = [, ,]), (a = d))
                : -1 !== o.indexOf("android")
                  ? ((s = 2), (l = [, ,]), (a = d))
                  : ((s = 5),
                    (l = [, , , ,]),
                    (r &&
                      (-1 !== r.indexOf("mp4a.40.29") ||
                        -1 !== r.indexOf("mp4a.40.5"))) ||
                    (!r && d >= 6)
                      ? (a = d - 3)
                      : (((r &&
                          -1 !== r.indexOf("mp4a.40.2") &&
                          ((d >= 6 && 1 === n) || /vivaldi/i.test(o))) ||
                          (!r && 1 === n)) &&
                          ((s = 2), (l = [, ,])),
                        (a = d))),
              (l[0] = s << 3),
              (l[0] |= (14 & d) >> 1),
              (l[1] |= (1 & d) << 7),
              (l[1] |= n << 3),
              5 === s &&
                ((l[1] |= (14 & a) >> 1),
                (l[2] = (1 & a) << 7),
                (l[2] |= 8),
                (l[3] = 0)),
              {
                config: l,
                samplerate: h[d],
                channelCount: n,
                codec: "mp4a.40." + s,
                manifestCodec: r,
              }
            );
          })(t, i, r, s);
          a &&
            ((e.config = a.config),
            (e.samplerate = a.samplerate),
            (e.channelCount = a.channelCount),
            (e.codec = a.codec),
            (e.manifestCodec = a.manifestCodec),
            M.log(
              `parsed codec:${e.codec}, rate:${a.samplerate}, channels:${a.channelCount}`,
            ));
        }
      }
      function i_(e, t, i, r, s) {
        let a;
        let n = r + (9216e4 / e.samplerate) * s,
          l = (function (e, t) {
            let i = iD(e, t);
            if (t + i <= e.length) {
              let r = iI(e, t) - i;
              if (r > 0) return { headerLength: i, frameLength: r };
            }
          })(t, i);
        if (l) {
          let { frameLength: r, headerLength: s } = l,
            o = s + r,
            h = Math.max(0, i + o - t.length);
          h
            ? (a = new Uint8Array(o - s)).set(t.subarray(i + s, t.length), 0)
            : (a = t.subarray(i + s, i + o));
          let d = { unit: a, pts: n };
          return h || e.samples.push(d), { sample: d, length: o, missing: h };
        }
        let o = t.length - i;
        return (
          (a = new Uint8Array(o)).set(t.subarray(i, t.length), 0),
          { sample: { unit: a, pts: n }, length: o, missing: -1 }
        );
      }
      let iC = null,
        iw = [
          32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32,
          48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40,
          48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64,
          80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48,
          56, 64, 80, 96, 112, 128, 144, 160,
        ],
        iP = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
        ix = [
          [0, 72, 144, 12],
          [0, 0, 0, 0],
          [0, 72, 144, 12],
          [0, 144, 144, 12],
        ],
        iO = [0, 1, 1, 4];
      function iF(e, t, i, r, s) {
        if (i + 24 > t.length) return;
        let a = iM(t, i);
        if (a && i + a.frameLength <= t.length) {
          let n = r + ((9e4 * a.samplesPerFrame) / a.sampleRate) * s,
            l = { unit: t.subarray(i, i + a.frameLength), pts: n, dts: n };
          return (
            (e.config = []),
            (e.channelCount = a.channelCount),
            (e.samplerate = a.sampleRate),
            e.samples.push(l),
            { sample: l, length: a.frameLength, missing: 0 }
          );
        }
      }
      function iM(e, t) {
        let i = (e[t + 1] >> 3) & 3,
          r = (e[t + 1] >> 1) & 3,
          s = (e[t + 2] >> 4) & 15,
          a = (e[t + 2] >> 2) & 3;
        if (1 !== i && 0 !== s && 15 !== s && 3 !== a) {
          let n = (e[t + 2] >> 1) & 1,
            l = e[t + 3] >> 6,
            o = 1e3 * iw[14 * (3 === i ? 3 - r : 3 === r ? 3 : 4) + s - 1],
            h = iP[3 * (3 === i ? 0 : 2 === i ? 1 : 2) + a],
            d = ix[i][r],
            u = iO[r],
            c = Math.floor((d * o) / h + n) * u;
          if (null === iC) {
            let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            iC = e ? parseInt(e[1]) : 0;
          }
          return (
            iC &&
              iC <= 87 &&
              2 === r &&
              o >= 224e3 &&
              0 === l &&
              (e[t + 3] = 128 | e[t + 3]),
            {
              sampleRate: h,
              channelCount: 3 === l ? 1 : 2,
              frameLength: c,
              samplesPerFrame: 8 * d * u,
            }
          );
        }
      }
      function iN(e, t) {
        return 255 === e[t] && (224 & e[t + 1]) == 224 && (6 & e[t + 1]) != 0;
      }
      function iU(e, t) {
        return t + 1 < e.length && iN(e, t);
      }
      function iB(e, t) {
        if (t + 1 < e.length && iN(e, t)) {
          let i = iM(e, t),
            r = 4;
          null != i && i.frameLength && (r = i.frameLength);
          let s = t + r;
          return s === e.length || iU(e, s);
        }
        return !1;
      }
      class i$ extends iA {
        constructor(e, t) {
          super(),
            (this.observer = void 0),
            (this.config = void 0),
            (this.observer = e),
            (this.config = t);
        }
        resetInitSegment(e, t, i, r) {
          super.resetInitSegment(e, t, i, r),
            (this._audioTrack = {
              container: "audio/adts",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              segmentCodec: "aac",
              samples: [],
              manifestCodec: t,
              duration: r,
              inputTimeScale: 9e4,
              dropped: 0,
            });
        }
        static probe(e) {
          if (!e) return !1;
          let t = eo(e, 0),
            i = (null == t ? void 0 : t.length) || 0;
          if (iB(e, i)) return !1;
          for (let t = e.length; i < t; i++)
            if (
              (function (e, t) {
                if (ib(e, t)) {
                  let i = iD(e, t);
                  if (t + i >= e.length) return !1;
                  let r = iI(e, t);
                  if (r <= i) return !1;
                  let s = t + r;
                  return s === e.length || ib(e, s);
                }
                return !1;
              })(e, i)
            )
              return M.log("ADTS sync word found !"), !0;
          return !1;
        }
        canParse(e, t) {
          return t + 5 < e.length && iR(e, t) && iI(e, t) <= e.length - t;
        }
        appendFrame(e, t, i) {
          ik(e, this.observer, t, i, e.manifestCodec);
          let r = i_(e, t, i, this.basePTS, this.frameIndex);
          if (r && 0 === r.missing) return r;
        }
      }
      let iG = /\/emsg[-/]ID3/i;
      class iK {
        constructor(e, t) {
          (this.remainderData = null),
            (this.timeOffset = 0),
            (this.config = void 0),
            (this.videoTrack = void 0),
            (this.audioTrack = void 0),
            (this.id3Track = void 0),
            (this.txtTrack = void 0),
            (this.config = t);
        }
        resetTimeStamp() {}
        resetInitSegment(e, t, i, r) {
          let s = (this.videoTrack = iS("video", 1)),
            a = (this.audioTrack = iS("audio", 1)),
            n = (this.txtTrack = iS("text", 1));
          if (
            ((this.id3Track = iS("id3", 1)),
            (this.timeOffset = 0),
            !(null != e && e.byteLength))
          )
            return;
          let l = ew(e);
          if (l.video) {
            let { id: e, timescale: t, codec: i } = l.video;
            (s.id = e), (s.timescale = n.timescale = t), (s.codec = i);
          }
          if (l.audio) {
            let { id: e, timescale: t, codec: i } = l.audio;
            (a.id = e), (a.timescale = t), (a.codec = i);
          }
          (n.id = eL.text),
            (s.sampleDuration = 0),
            (s.duration = a.duration = r);
        }
        resetContiguity() {
          this.remainderData = null;
        }
        static probe(e) {
          return (function (e) {
            let t = e.byteLength;
            for (let i = 0; i < t; ) {
              let r = eI(e, i);
              if (
                r > 8 &&
                109 === e[i + 4] &&
                111 === e[i + 5] &&
                111 === e[i + 6] &&
                102 === e[i + 7]
              )
                return !0;
              i = r > 1 ? i + r : t;
            }
            return !1;
          })(e);
        }
        demux(e, t) {
          this.timeOffset = t;
          let i = e,
            r = this.videoTrack,
            s = this.txtTrack;
          if (this.config.progressive) {
            this.remainderData && (i = eM(this.remainderData, e));
            let t = (function (e) {
              let t = { valid: null, remainder: null },
                i = eC(e, ["moof"]);
              if (i.length < 2) return (t.remainder = e), t;
              let r = i[i.length - 1];
              return (
                (t.valid = ea(e, 0, r.byteOffset - 8)),
                (t.remainder = ea(e, r.byteOffset - 8)),
                t
              );
            })(i);
            (this.remainderData = t.remainder),
              (r.samples = t.valid || new Uint8Array());
          } else r.samples = i;
          let a = this.extractID3Track(r, t);
          return (
            (s.samples = eN(t, r)),
            {
              videoTrack: r,
              audioTrack: this.audioTrack,
              id3Track: a,
              textTrack: this.txtTrack,
            }
          );
        }
        flush() {
          let e = this.timeOffset,
            t = this.videoTrack,
            i = this.txtTrack;
          (t.samples = this.remainderData || new Uint8Array()),
            (this.remainderData = null);
          let r = this.extractID3Track(t, this.timeOffset);
          return (
            (i.samples = eN(e, t)),
            { videoTrack: t, audioTrack: iS(), id3Track: r, textTrack: iS() }
          );
        }
        extractID3Track(e, t) {
          let i = this.id3Track;
          if (e.samples.length) {
            let r = eC(e.samples, ["emsg"]);
            r &&
              r.forEach((e) => {
                let r = (function (e) {
                  let t = e[0],
                    i = "",
                    r = "",
                    s = 0,
                    a = 0,
                    n = 0,
                    l = 0,
                    o = 0,
                    h = 0;
                  if (0 === t) {
                    for (; "\0" !== eR(e.subarray(h, h + 1)); )
                      (i += eR(e.subarray(h, h + 1))), (h += 1);
                    for (
                      i += eR(e.subarray(h, h + 1)), h += 1;
                      "\0" !== eR(e.subarray(h, h + 1));

                    )
                      (r += eR(e.subarray(h, h + 1))), (h += 1);
                    (r += eR(e.subarray(h, h + 1))),
                      (h += 1),
                      (s = eI(e, 12)),
                      (a = eI(e, 16)),
                      (l = eI(e, 20)),
                      (o = eI(e, 24)),
                      (h = 28);
                  } else if (1 === t) {
                    (h += 4), (s = eI(e, h));
                    let t = eI(e, (h += 4)),
                      a = eI(e, (h += 4));
                    for (
                      h += 4,
                        k((n = 4294967296 * t + a)) ||
                          ((n = Number.MAX_SAFE_INTEGER),
                          M.warn(
                            "Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box",
                          )),
                        l = eI(e, h),
                        h += 4,
                        o = eI(e, h),
                        h += 4;
                      "\0" !== eR(e.subarray(h, h + 1));

                    )
                      (i += eR(e.subarray(h, h + 1))), (h += 1);
                    for (
                      i += eR(e.subarray(h, h + 1)), h += 1;
                      "\0" !== eR(e.subarray(h, h + 1));

                    )
                      (r += eR(e.subarray(h, h + 1))), (h += 1);
                    (r += eR(e.subarray(h, h + 1))), (h += 1);
                  }
                  return {
                    schemeIdUri: i,
                    value: r,
                    timeScale: s,
                    presentationTime: n,
                    presentationTimeDelta: a,
                    eventDuration: l,
                    id: o,
                    payload: e.subarray(h, e.byteLength),
                  };
                })(e);
                if (iG.test(r.schemeIdUri)) {
                  let e = b(r.presentationTime)
                      ? r.presentationTime / r.timeScale
                      : t + r.presentationTimeDelta / r.timeScale,
                    s =
                      4294967295 === r.eventDuration
                        ? Number.POSITIVE_INFINITY
                        : r.eventDuration / r.timeScale;
                  s <= 0.001 && (s = Number.POSITIVE_INFINITY);
                  let a = r.payload;
                  i.samples.push({
                    data: a,
                    len: a.byteLength,
                    dts: e,
                    pts: e,
                    type: tm.emsg,
                    duration: s,
                  });
                }
              });
          }
          return i;
        }
        demuxSampleAes(e, t, i) {
          return Promise.reject(
            Error("The MP4 demuxer does not support SAMPLE-AES decryption"),
          );
        }
        destroy() {}
      }
      let iV = (e, t) => {
        let i = 0,
          r = 5;
        t += 5;
        let s = new Uint32Array(1),
          a = new Uint32Array(1),
          n = new Uint8Array(1);
        for (; r > 0; ) {
          n[0] = e[t];
          let l = Math.min(r, 8),
            o = 8 - l;
          (a[0] = (4278190080 >>> (24 + o)) << o),
            (s[0] = (n[0] & a[0]) >> o),
            (i = i ? (i << l) | s[0] : s[0]),
            (t += 1),
            (r -= l);
        }
        return i;
      };
      class iH extends iA {
        constructor(e) {
          super(), (this.observer = void 0), (this.observer = e);
        }
        resetInitSegment(e, t, i, r) {
          super.resetInitSegment(e, t, i, r),
            (this._audioTrack = {
              container: "audio/ac-3",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              segmentCodec: "ac3",
              samples: [],
              manifestCodec: t,
              duration: r,
              inputTimeScale: 9e4,
              dropped: 0,
            });
        }
        canParse(e, t) {
          return t + 64 < e.length;
        }
        appendFrame(e, t, i) {
          let r = iY(e, t, i, this.basePTS, this.frameIndex);
          if (-1 !== r)
            return {
              sample: e.samples[e.samples.length - 1],
              length: r,
              missing: 0,
            };
        }
        static probe(e) {
          if (!e) return !1;
          let t = eo(e, 0);
          if (!t) return !1;
          let i = t.length;
          return !!(
            11 === e[i] &&
            119 === e[i + 1] &&
            void 0 !== eu(t) &&
            16 > iV(e, i)
          );
        }
      }
      function iY(e, t, i, r, s) {
        if (i + 8 > t.length || 11 !== t[i] || 119 !== t[i + 1]) return -1;
        let a = t[i + 4] >> 6;
        if (a >= 3) return -1;
        let n = [48e3, 44100, 32e3][a],
          l = 63 & t[i + 4],
          o =
            2 *
            [
              64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144,
              96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128,
              140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209,
              288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384,
              320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448,
              487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696,
              960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975,
              1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152,
              1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920,
            ][3 * l + a];
        if (i + o > t.length) return -1;
        let h = t[i + 6] >> 5,
          d = 0;
        2 === h ? (d += 2) : (1 & h && 1 !== h && (d += 2), 4 & h && (d += 2));
        let u = (((t[i + 6] << 8) | t[i + 7]) >> (12 - d)) & 1,
          c = [2, 1, 2, 3, 3, 4, 4, 5][h] + u,
          f = t[i + 5] >> 3,
          g = 7 & t[i + 5],
          m = new Uint8Array([
            (a << 6) | (f << 1) | (g >> 2),
            ((3 & g) << 6) | (h << 3) | (u << 2) | (l >> 4),
            (l << 4) & 224,
          ]),
          p = t.subarray(i, i + o);
        return (
          (e.config = m),
          (e.channelCount = c),
          (e.samplerate = n),
          e.samples.push({ unit: p, pts: r + (1536 / n) * 9e4 * s }),
          o
        );
      }
      class iW {
        constructor() {
          this.VideoSample = null;
        }
        createVideoSample(e, t, i, r) {
          return {
            key: e,
            frame: !1,
            pts: t,
            dts: i,
            units: [],
            debug: r,
            length: 0,
          };
        }
        getLastNalUnit(e) {
          var t;
          let i;
          let r = this.VideoSample;
          if (
            ((r && 0 !== r.units.length) || (r = e[e.length - 1]),
            null != (t = r) && t.units)
          ) {
            let e = r.units;
            i = e[e.length - 1];
          }
          return i;
        }
        pushAccessUnit(e, t) {
          if (e.units.length && e.frame) {
            if (void 0 === e.pts) {
              let i = t.samples,
                r = i.length;
              if (r) {
                let t = i[r - 1];
                (e.pts = t.pts), (e.dts = t.dts);
              } else {
                t.dropped++;
                return;
              }
            }
            t.samples.push(e);
          }
          e.debug.length && M.log(e.pts + "/" + e.dts + ":" + e.debug);
        }
      }
      class ij {
        constructor(e) {
          (this.data = void 0),
            (this.bytesAvailable = void 0),
            (this.word = void 0),
            (this.bitsAvailable = void 0),
            (this.data = e),
            (this.bytesAvailable = e.byteLength),
            (this.word = 0),
            (this.bitsAvailable = 0);
        }
        loadWord() {
          let e = this.data,
            t = this.bytesAvailable,
            i = e.byteLength - t,
            r = new Uint8Array(4),
            s = Math.min(4, t);
          if (0 === s) throw Error("no bytes available");
          r.set(e.subarray(i, i + s)),
            (this.word = new DataView(r.buffer).getUint32(0)),
            (this.bitsAvailable = 8 * s),
            (this.bytesAvailable -= s);
        }
        skipBits(e) {
          let t;
          (e = Math.min(e, 8 * this.bytesAvailable + this.bitsAvailable)),
            this.bitsAvailable > e ||
              ((e -= this.bitsAvailable),
              (t = e >> 3),
              (e -= t << 3),
              (this.bytesAvailable -= t),
              this.loadWord()),
            (this.word <<= e),
            (this.bitsAvailable -= e);
        }
        readBits(e) {
          let t = Math.min(this.bitsAvailable, e),
            i = this.word >>> (32 - t);
          if (
            (e > 32 && M.error("Cannot read more than 32 bits at a time"),
            (this.bitsAvailable -= t),
            this.bitsAvailable > 0)
          )
            this.word <<= t;
          else if (this.bytesAvailable > 0) this.loadWord();
          else throw Error("no bits available");
          return (t = e - t) > 0 && this.bitsAvailable
            ? (i << t) | this.readBits(t)
            : i;
        }
        skipLZ() {
          let e;
          for (e = 0; e < this.bitsAvailable; ++e)
            if ((this.word & (2147483648 >>> e)) != 0)
              return (this.word <<= e), (this.bitsAvailable -= e), e;
          return this.loadWord(), e + this.skipLZ();
        }
        skipUEG() {
          this.skipBits(1 + this.skipLZ());
        }
        skipEG() {
          this.skipBits(1 + this.skipLZ());
        }
        readUEG() {
          let e = this.skipLZ();
          return this.readBits(e + 1) - 1;
        }
        readEG() {
          let e = this.readUEG();
          return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
        }
        readBoolean() {
          return 1 === this.readBits(1);
        }
        readUByte() {
          return this.readBits(8);
        }
        readUShort() {
          return this.readBits(16);
        }
        readUInt() {
          return this.readBits(32);
        }
        skipScalingList(e) {
          let t = 8,
            i = 8;
          for (let r = 0; r < e; r++)
            0 !== i && (i = (t + this.readEG() + 256) % 256),
              (t = 0 === i ? t : i);
        }
        readSPS() {
          let e,
            t,
            i,
            r = 0,
            s = 0,
            a = 0,
            n = 0,
            l = this.readUByte.bind(this),
            o = this.readBits.bind(this),
            h = this.readUEG.bind(this),
            d = this.readBoolean.bind(this),
            u = this.skipBits.bind(this),
            c = this.skipEG.bind(this),
            f = this.skipUEG.bind(this),
            g = this.skipScalingList.bind(this);
          l();
          let m = l();
          if (
            (o(5),
            u(3),
            l(),
            f(),
            100 === m ||
              110 === m ||
              122 === m ||
              244 === m ||
              44 === m ||
              83 === m ||
              86 === m ||
              118 === m ||
              128 === m)
          ) {
            let e = h();
            if ((3 === e && u(1), f(), f(), u(1), d()))
              for (i = 0, t = 3 !== e ? 8 : 12; i < t; i++)
                d() && g(i < 6 ? 16 : 64);
          }
          f();
          let p = h();
          if (0 === p) h();
          else if (1 === p)
            for (u(1), c(), c(), e = h(), i = 0; i < e; i++) c();
          f(), u(1);
          let E = h(),
            T = h(),
            y = o(1);
          0 === y && u(1),
            u(1),
            d() && ((r = h()), (s = h()), (a = h()), (n = h()));
          let v = [1, 1];
          if (d() && d())
            switch (l()) {
              case 1:
                v = [1, 1];
                break;
              case 2:
                v = [12, 11];
                break;
              case 3:
                v = [10, 11];
                break;
              case 4:
                v = [16, 11];
                break;
              case 5:
                v = [40, 33];
                break;
              case 6:
                v = [24, 11];
                break;
              case 7:
                v = [20, 11];
                break;
              case 8:
                v = [32, 11];
                break;
              case 9:
                v = [80, 33];
                break;
              case 10:
                v = [18, 11];
                break;
              case 11:
                v = [15, 11];
                break;
              case 12:
                v = [64, 33];
                break;
              case 13:
                v = [160, 99];
                break;
              case 14:
                v = [4, 3];
                break;
              case 15:
                v = [3, 2];
                break;
              case 16:
                v = [2, 1];
                break;
              case 255:
                v = [(l() << 8) | l(), (l() << 8) | l()];
            }
          return {
            width: Math.ceil((E + 1) * 16 - 2 * r - 2 * s),
            height: (2 - y) * (T + 1) * 16 - (y ? 2 : 4) * (a + n),
            pixelRatio: v,
          };
        }
        readSliceType() {
          return this.readUByte(), this.readUEG(), this.readUEG();
        }
      }
      class iq extends iW {
        parseAVCPES(e, t, i, r, s) {
          let a;
          let n = this.parseAVCNALu(e, i.data),
            l = this.VideoSample,
            o = !1;
          (i.data = null),
            l &&
              n.length &&
              !e.audFound &&
              (this.pushAccessUnit(l, e),
              (l = this.VideoSample =
                this.createVideoSample(!1, i.pts, i.dts, ""))),
            n.forEach((r) => {
              var n, h, d, u;
              switch (r.type) {
                case 1: {
                  let t = !1;
                  a = !0;
                  let s = r.data;
                  if (o && s.length > 4) {
                    let e = new ij(s).readSliceType();
                    (2 === e || 4 === e || 7 === e || 9 === e) && (t = !0);
                  }
                  t &&
                    null != (h = l) &&
                    h.frame &&
                    !l.key &&
                    (this.pushAccessUnit(l, e), (l = this.VideoSample = null)),
                    l ||
                      (l = this.VideoSample =
                        this.createVideoSample(!0, i.pts, i.dts, "")),
                    (l.frame = !0),
                    (l.key = t);
                  break;
                }
                case 5:
                  (a = !0),
                    null != (n = l) &&
                      n.frame &&
                      !l.key &&
                      (this.pushAccessUnit(l, e),
                      (l = this.VideoSample = null)),
                    l ||
                      (l = this.VideoSample =
                        this.createVideoSample(!0, i.pts, i.dts, "")),
                    (l.key = !0),
                    (l.frame = !0);
                  break;
                case 6:
                  (a = !0), eU(r.data, 1, i.pts, t.samples);
                  break;
                case 7: {
                  (a = !0), (o = !0);
                  let t = r.data,
                    i = new ij(t).readSPS();
                  if (
                    !e.sps ||
                    e.width !== i.width ||
                    e.height !== i.height ||
                    (null == (d = e.pixelRatio) ? void 0 : d[0]) !==
                      i.pixelRatio[0] ||
                    (null == (u = e.pixelRatio) ? void 0 : u[1]) !==
                      i.pixelRatio[1]
                  ) {
                    (e.width = i.width),
                      (e.height = i.height),
                      (e.pixelRatio = i.pixelRatio),
                      (e.sps = [t]),
                      (e.duration = s);
                    let r = t.subarray(1, 4),
                      a = "avc1.";
                    for (let e = 0; e < 3; e++) {
                      let t = r[e].toString(16);
                      t.length < 2 && (t = "0" + t), (a += t);
                    }
                    e.codec = a;
                  }
                  break;
                }
                case 8:
                  (a = !0), (e.pps = [r.data]);
                  break;
                case 9:
                  (a = !0),
                    (e.audFound = !0),
                    l && this.pushAccessUnit(l, e),
                    (l = this.VideoSample =
                      this.createVideoSample(!1, i.pts, i.dts, ""));
                  break;
                case 12:
                  a = !0;
                  break;
                default:
                  (a = !1), l && (l.debug += "unknown NAL " + r.type + " ");
              }
              l && a && l.units.push(r);
            }),
            r && l && (this.pushAccessUnit(l, e), (this.VideoSample = null));
        }
        parseAVCNALu(e, t) {
          let i, r, s;
          let a = t.byteLength,
            n = e.naluState || 0,
            l = n,
            o = [],
            h = 0,
            d = -1,
            u = 0;
          for (
            -1 === n && ((d = 0), (u = 31 & t[0]), (n = 0), (h = 1));
            h < a;

          ) {
            if (((i = t[h++]), !n)) {
              n = i ? 0 : 1;
              continue;
            }
            if (1 === n) {
              n = i ? 0 : 2;
              continue;
            }
            if (i) {
              if (1 === i) {
                if (((r = h - n - 1), d >= 0)) {
                  let e = { data: t.subarray(d, r), type: u };
                  o.push(e);
                } else {
                  let i = this.getLastNalUnit(e.samples);
                  i &&
                    (l &&
                      h <= 4 - l &&
                      i.state &&
                      (i.data = i.data.subarray(0, i.data.byteLength - l)),
                    r > 0 &&
                      ((i.data = eM(i.data, t.subarray(0, r))), (i.state = 0)));
                }
                h < a ? ((s = 31 & t[h]), (d = h), (u = s), (n = 0)) : (n = -1);
              } else n = 0;
            } else n = 3;
          }
          if (d >= 0 && n >= 0) {
            let e = { data: t.subarray(d, a), type: u, state: n };
            o.push(e);
          }
          if (0 === o.length) {
            let i = this.getLastNalUnit(e.samples);
            i && (i.data = eM(i.data, t));
          }
          return (e.naluState = n), o;
        }
      }
      class iX {
        constructor(e, t, i) {
          (this.keyData = void 0),
            (this.decrypter = void 0),
            (this.keyData = i),
            (this.decrypter = new ip(t, { removePKCS7Padding: !1 }));
        }
        decryptBuffer(e) {
          return this.decrypter.decrypt(
            e,
            this.keyData.key.buffer,
            this.keyData.iv.buffer,
          );
        }
        decryptAacSample(e, t, i) {
          let r = e[t].unit;
          if (r.length <= 16) return;
          let s = r.subarray(16, r.length - (r.length % 16)),
            a = s.buffer.slice(s.byteOffset, s.byteOffset + s.length);
          this.decryptBuffer(a).then((s) => {
            let a = new Uint8Array(s);
            r.set(a, 16),
              this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, i);
          });
        }
        decryptAacSamples(e, t, i) {
          for (; ; t++) {
            if (t >= e.length) {
              i();
              return;
            }
            if (
              !(e[t].unit.length < 32) &&
              (this.decryptAacSample(e, t, i), !this.decrypter.isSync())
            )
              return;
          }
        }
        getAvcEncryptedData(e) {
          let t = new Int8Array(16 * Math.floor((e.length - 48) / 160) + 16),
            i = 0;
          for (let r = 32; r < e.length - 16; r += 160, i += 16)
            t.set(e.subarray(r, r + 16), i);
          return t;
        }
        getAvcDecryptedUnit(e, t) {
          let i = new Uint8Array(t),
            r = 0;
          for (let t = 32; t < e.length - 16; t += 160, r += 16)
            e.set(i.subarray(r, r + 16), t);
          return e;
        }
        decryptAvcSample(e, t, i, r, s) {
          let a = eB(s.data),
            n = this.getAvcEncryptedData(a);
          this.decryptBuffer(n.buffer).then((n) => {
            (s.data = this.getAvcDecryptedUnit(a, n)),
              this.decrypter.isSync() || this.decryptAvcSamples(e, t, i + 1, r);
          });
        }
        decryptAvcSamples(e, t, i, r) {
          if (e instanceof Uint8Array)
            throw Error("Cannot decrypt samples of type Uint8Array");
          for (; ; t++, i = 0) {
            if (t >= e.length) {
              r();
              return;
            }
            let s = e[t].units;
            for (; !(i >= s.length); i++) {
              let a = s[i];
              if (
                !(a.data.length <= 48) &&
                (1 === a.type || 5 === a.type) &&
                (this.decryptAvcSample(e, t, i, r, a), !this.decrypter.isSync())
              )
                return;
            }
          }
        }
      }
      class iz {
        constructor(e, t, i) {
          (this.observer = void 0),
            (this.config = void 0),
            (this.typeSupported = void 0),
            (this.sampleAes = null),
            (this.pmtParsed = !1),
            (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this._duration = 0),
            (this._pmtId = -1),
            (this._videoTrack = void 0),
            (this._audioTrack = void 0),
            (this._id3Track = void 0),
            (this._txtTrack = void 0),
            (this.aacOverFlow = null),
            (this.remainderData = null),
            (this.videoParser = void 0),
            (this.observer = e),
            (this.config = t),
            (this.typeSupported = i),
            (this.videoParser = new iq());
        }
        static probe(e) {
          let t = iz.syncOffset(e);
          return (
            t > 0 &&
              M.warn(
                `MPEG2-TS detected but first sync word found @ offset ${t}`,
              ),
            -1 !== t
          );
        }
        static syncOffset(e) {
          let t = e.length,
            i = Math.min(940, t - 188) + 1,
            r = 0;
          for (; r < i; ) {
            let s = !1,
              a = -1,
              n = 0;
            for (let l = r; l < t; l += 188)
              if (71 === e[l] && (t - l == 188 || 71 === e[l + 188])) {
                if (
                  (n++,
                  -1 === a &&
                    0 !== (a = l) &&
                    (i = Math.min(a + 18612, e.length - 188) + 1),
                  s || (s = 0 === iQ(e, l)),
                  s && n > 1 && ((0 === a && n > 2) || l + 188 > i))
                )
                  return a;
              } else if (n) return -1;
              else break;
            r++;
          }
          return -1;
        }
        static createTrack(e, t) {
          return {
            container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
            type: e,
            id: eL[e],
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: 0,
            samples: [],
            dropped: 0,
            duration: "audio" === e ? t : void 0,
          };
        }
        resetInitSegment(e, t, i, r) {
          (this.pmtParsed = !1),
            (this._pmtId = -1),
            (this._videoTrack = iz.createTrack("video")),
            (this._audioTrack = iz.createTrack("audio", r)),
            (this._id3Track = iz.createTrack("id3")),
            (this._txtTrack = iz.createTrack("text")),
            (this._audioTrack.segmentCodec = "aac"),
            (this.aacOverFlow = null),
            (this.remainderData = null),
            (this.audioCodec = t),
            (this.videoCodec = i),
            (this._duration = r);
        }
        resetTimeStamp() {}
        resetContiguity() {
          let { _audioTrack: e, _videoTrack: t, _id3Track: i } = this;
          e && (e.pesData = null),
            t && (t.pesData = null),
            i && (i.pesData = null),
            (this.aacOverFlow = null),
            (this.remainderData = null);
        }
        demux(e, t, i = !1, r = !1) {
          let s;
          i || (this.sampleAes = null);
          let a = this._videoTrack,
            n = this._audioTrack,
            l = this._id3Track,
            o = this._txtTrack,
            h = a.pid,
            d = a.pesData,
            u = n.pid,
            c = l.pid,
            f = n.pesData,
            g = l.pesData,
            m = null,
            p = this.pmtParsed,
            E = this._pmtId,
            T = e.length;
          if (
            (this.remainderData &&
              ((T = (e = eM(this.remainderData, e)).length),
              (this.remainderData = null)),
            T < 188 && !r)
          )
            return (
              (this.remainderData = e),
              { audioTrack: n, videoTrack: a, id3Track: l, textTrack: o }
            );
          let y = Math.max(0, iz.syncOffset(e));
          (T -= (T - y) % 188) < e.byteLength &&
            !r &&
            (this.remainderData = new Uint8Array(
              e.buffer,
              T,
              e.buffer.byteLength - T,
            ));
          let v = 0;
          for (let t = y; t < T; t += 188)
            if (71 === e[t]) {
              let r;
              let T = !!(64 & e[t + 1]),
                v = iQ(e, t);
              if ((48 & e[t + 3]) >> 4 > 1) {
                if ((r = t + 5 + e[t + 4]) === t + 188) continue;
              } else r = t + 4;
              switch (v) {
                case h:
                  T &&
                    (d &&
                      (s = i0(d)) &&
                      this.videoParser.parseAVCPES(a, o, s, !1, this._duration),
                    (d = { data: [], size: 0 })),
                    d &&
                      (d.data.push(e.subarray(r, t + 188)),
                      (d.size += t + 188 - r));
                  break;
                case u:
                  if (T) {
                    if (f && (s = i0(f)))
                      switch (n.segmentCodec) {
                        case "aac":
                          this.parseAACPES(n, s);
                          break;
                        case "mp3":
                          this.parseMPEGPES(n, s);
                          break;
                        case "ac3":
                          this.parseAC3PES(n, s);
                      }
                    f = { data: [], size: 0 };
                  }
                  f &&
                    (f.data.push(e.subarray(r, t + 188)),
                    (f.size += t + 188 - r));
                  break;
                case c:
                  T &&
                    (g && (s = i0(g)) && this.parseID3PES(l, s),
                    (g = { data: [], size: 0 })),
                    g &&
                      (g.data.push(e.subarray(r, t + 188)),
                      (g.size += t + 188 - r));
                  break;
                case 0:
                  var S, A;
                  T && (r += e[r] + 1),
                    (E = this._pmtId =
                      ((31 & (S = e)[(A = r) + 10]) << 8) | S[A + 11]);
                  break;
                case E: {
                  T && (r += e[r] + 1);
                  let s = (function (e, t, i, r, s) {
                    let a = {
                        audioPid: -1,
                        videoPid: -1,
                        id3Pid: -1,
                        segmentVideoCodec: "avc",
                        segmentAudioCodec: "aac",
                      },
                      n = ((15 & e[t + 1]) << 8) | e[t + 2],
                      l = t + 3 + n - 4,
                      o = ((15 & e[t + 10]) << 8) | e[t + 11];
                    for (t += 12 + o; t < l; ) {
                      let n = iQ(e, t),
                        l = ((15 & e[t + 3]) << 8) | e[t + 4];
                      switch (e[t]) {
                        case 207:
                          if (!r) {
                            iZ("ADTS AAC");
                            break;
                          }
                        case 15:
                          -1 === a.audioPid && (a.audioPid = n);
                          break;
                        case 21:
                          -1 === a.id3Pid && (a.id3Pid = n);
                          break;
                        case 219:
                          if (!r) {
                            iZ("H.264");
                            break;
                          }
                        case 27:
                          -1 === a.videoPid &&
                            ((a.videoPid = n), (a.segmentVideoCodec = "avc"));
                          break;
                        case 3:
                        case 4:
                          i.mpeg || i.mp3
                            ? -1 === a.audioPid &&
                              ((a.audioPid = n), (a.segmentAudioCodec = "mp3"))
                            : M.log(
                                "MPEG audio found, not supported in this browser",
                              );
                          break;
                        case 193:
                          if (!r) {
                            iZ("AC-3");
                            break;
                          }
                        case 129:
                          i.ac3
                            ? -1 === a.audioPid &&
                              ((a.audioPid = n), (a.segmentAudioCodec = "ac3"))
                            : M.log(
                                "AC-3 audio found, not supported in this browser",
                              );
                          break;
                        case 6:
                          if (-1 === a.audioPid && l > 0) {
                            let r = t + 5,
                              s = l;
                            for (; s > 2; ) {
                              106 === e[r] &&
                                (!0 !== i.ac3
                                  ? M.log(
                                      "AC-3 audio found, not supported in this browser for now",
                                    )
                                  : ((a.audioPid = n),
                                    (a.segmentAudioCodec = "ac3")));
                              let t = e[r + 1] + 2;
                              (r += t), (s -= t);
                            }
                          }
                          break;
                        case 194:
                        case 135:
                          return (
                            iJ(s, Error("Unsupported EC-3 in M2TS found")), a
                          );
                        case 36:
                          return (
                            iJ(s, Error("Unsupported HEVC in M2TS found")), a
                          );
                      }
                      t += l + 5;
                    }
                    return a;
                  })(e, r, this.typeSupported, i, this.observer);
                  (h = s.videoPid) > 0 &&
                    ((a.pid = h), (a.segmentCodec = s.segmentVideoCodec)),
                    (u = s.audioPid) > 0 &&
                      ((n.pid = u), (n.segmentCodec = s.segmentAudioCodec)),
                    (c = s.id3Pid) > 0 && (l.pid = c),
                    null === m ||
                      p ||
                      (M.warn(
                        `MPEG-TS PMT found at ${t} after unknown PID '${m}'. Backtracking to sync byte @${y} to parse all TS packets.`,
                      ),
                      (m = null),
                      (t = y - 188)),
                    (p = this.pmtParsed = !0);
                  break;
                }
                case 17:
                case 8191:
                  break;
                default:
                  m = v;
              }
            } else v++;
          v > 0 &&
            iJ(
              this.observer,
              Error(`Found ${v} TS packet/s that do not start with 0x47`),
            ),
            (a.pesData = d),
            (n.pesData = f),
            (l.pesData = g);
          let L = { audioTrack: n, videoTrack: a, id3Track: l, textTrack: o };
          return r && this.extractRemainingSamples(L), L;
        }
        flush() {
          let e;
          let { remainderData: t } = this;
          return ((this.remainderData = null),
          (e = t
            ? this.demux(t, -1, !1, !0)
            : {
                videoTrack: this._videoTrack,
                audioTrack: this._audioTrack,
                id3Track: this._id3Track,
                textTrack: this._txtTrack,
              }),
          this.extractRemainingSamples(e),
          this.sampleAes)
            ? this.decrypt(e, this.sampleAes)
            : e;
        }
        extractRemainingSamples(e) {
          let t;
          let { audioTrack: i, videoTrack: r, id3Track: s, textTrack: a } = e,
            n = r.pesData,
            l = i.pesData,
            o = s.pesData;
          if (
            (n && (t = i0(n))
              ? (this.videoParser.parseAVCPES(r, a, t, !0, this._duration),
                (r.pesData = null))
              : (r.pesData = n),
            l && (t = i0(l)))
          ) {
            switch (i.segmentCodec) {
              case "aac":
                this.parseAACPES(i, t);
                break;
              case "mp3":
                this.parseMPEGPES(i, t);
                break;
              case "ac3":
                this.parseAC3PES(i, t);
            }
            i.pesData = null;
          } else
            null != l &&
              l.size &&
              M.log(
                "last AAC PES packet truncated,might overlap between fragments",
              ),
              (i.pesData = l);
          o && (t = i0(o))
            ? (this.parseID3PES(s, t), (s.pesData = null))
            : (s.pesData = o);
        }
        demuxSampleAes(e, t, i) {
          let r = this.demux(e, i, !0, !this.config.progressive),
            s = (this.sampleAes = new iX(this.observer, this.config, t));
          return this.decrypt(r, s);
        }
        decrypt(e, t) {
          return new Promise((i) => {
            let { audioTrack: r, videoTrack: s } = e;
            r.samples && "aac" === r.segmentCodec
              ? t.decryptAacSamples(r.samples, 0, () => {
                  s.samples
                    ? t.decryptAvcSamples(s.samples, 0, 0, () => {
                        i(e);
                      })
                    : i(e);
                })
              : s.samples &&
                t.decryptAvcSamples(s.samples, 0, 0, () => {
                  i(e);
                });
          });
        }
        destroy() {
          this._duration = 0;
        }
        parseAACPES(e, t) {
          let i,
            r,
            s,
            a,
            n = 0,
            l = this.aacOverFlow,
            o = t.data;
          if (l) {
            this.aacOverFlow = null;
            let t = l.missing,
              i = l.sample.unit.byteLength;
            -1 === t
              ? (o = eM(l.sample.unit, o))
              : (l.sample.unit.set(o.subarray(0, t), i - t),
                e.samples.push(l.sample),
                (n = l.missing));
          }
          for (i = n, r = o.length; i < r - 1 && !ib(o, i); i++);
          if (i !== n) {
            let e;
            let t = i < r - 1;
            if (
              ((e = t
                ? `AAC PES did not start with ADTS header,offset:${i}`
                : "No ADTS header found in AAC PES"),
              iJ(this.observer, Error(e), t),
              !t)
            )
              return;
          }
          if ((ik(e, this.observer, o, i, this.audioCodec), void 0 !== t.pts))
            s = t.pts;
          else if (l) {
            let t = 9216e4 / e.samplerate;
            s = l.sample.pts + t;
          } else {
            M.warn("[tsdemuxer]: AAC PES unknown PTS");
            return;
          }
          let h = 0;
          for (; i < r; ) {
            if (((a = i_(e, o, i, s, h)), (i += a.length), a.missing)) {
              this.aacOverFlow = a;
              break;
            }
            for (h++; i < r - 1 && !ib(o, i); i++);
          }
        }
        parseMPEGPES(e, t) {
          let i = t.data,
            r = i.length,
            s = 0,
            a = 0,
            n = t.pts;
          if (void 0 === n) {
            M.warn("[tsdemuxer]: MPEG PES unknown PTS");
            return;
          }
          for (; a < r; )
            if (iU(i, a)) {
              let t = iF(e, i, a, n, s);
              if (t) (a += t.length), s++;
              else break;
            } else a++;
        }
        parseAC3PES(e, t) {
          {
            let i;
            let r = t.data,
              s = t.pts;
            if (void 0 === s) {
              M.warn("[tsdemuxer]: AC3 PES unknown PTS");
              return;
            }
            let a = r.length,
              n = 0,
              l = 0;
            for (; l < a && (i = iY(e, r, l, s, n++)) > 0; ) l += i;
          }
        }
        parseID3PES(e, t) {
          if (void 0 === t.pts) {
            M.warn("[tsdemuxer]: ID3 PES unknown PTS");
            return;
          }
          let i = I({}, t, {
            type: this._videoTrack ? tm.emsg : tm.audioId3,
            duration: Number.POSITIVE_INFINITY,
          });
          e.samples.push(i);
        }
      }
      function iQ(e, t) {
        return ((31 & e[t + 1]) << 8) + e[t + 2];
      }
      function iJ(e, t, i) {
        M.warn(`parsing error: ${t.message}`),
          e.emit(C.ERROR, C.ERROR, {
            type: w.MEDIA_ERROR,
            details: P.FRAG_PARSING_ERROR,
            fatal: !1,
            levelRetry: i,
            error: t,
            reason: t.message,
          });
      }
      function iZ(e) {
        M.log(`${e} with AES-128-CBC encryption found in unencrypted stream`);
      }
      function i0(e) {
        let t,
          i,
          r,
          s,
          a,
          n = 0,
          l = e.data;
        if (!e || 0 === e.size) return null;
        for (; l[0].length < 19 && l.length > 1; )
          (l[0] = eM(l[0], l[1])), l.splice(1, 1);
        if (1 === ((t = l[0])[0] << 16) + (t[1] << 8) + t[2]) {
          if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
          let o = t[7];
          192 & o &&
            ((s =
              (14 & t[9]) * 536870912 +
              (255 & t[10]) * 4194304 +
              (254 & t[11]) * 16384 +
              (255 & t[12]) * 128 +
              (254 & t[13]) / 2),
            64 & o
              ? s -
                  (a =
                    (14 & t[14]) * 536870912 +
                    (255 & t[15]) * 4194304 +
                    (254 & t[16]) * 16384 +
                    (255 & t[17]) * 128 +
                    (254 & t[18]) / 2) >
                  54e5 &&
                (M.warn(
                  `${Math.round((s - a) / 9e4)}s delta between PTS and DTS, align them`,
                ),
                (s = a))
              : (a = s));
          let h = (r = t[8]) + 9;
          if (e.size <= h) return null;
          e.size -= h;
          let d = new Uint8Array(e.size);
          for (let e = 0, i = l.length; e < i; e++) {
            let i = (t = l[e]).byteLength;
            if (h) {
              if (h > i) {
                h -= i;
                continue;
              }
              (t = t.subarray(h)), (i -= h), (h = 0);
            }
            d.set(t, n), (n += i);
          }
          return i && (i -= r + 3), { data: d, pts: s, dts: a, len: i };
        }
        return null;
      }
      class i1 extends iA {
        resetInitSegment(e, t, i, r) {
          super.resetInitSegment(e, t, i, r),
            (this._audioTrack = {
              container: "audio/mpeg",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              segmentCodec: "mp3",
              samples: [],
              manifestCodec: t,
              duration: r,
              inputTimeScale: 9e4,
              dropped: 0,
            });
        }
        static probe(e) {
          if (!e) return !1;
          let t = eo(e, 0),
            i = (null == t ? void 0 : t.length) || 0;
          if (
            t &&
            11 === e[i] &&
            119 === e[i + 1] &&
            void 0 !== eu(t) &&
            16 >= iV(e, i)
          )
            return !1;
          for (let t = e.length; i < t; i++)
            if (iB(e, i)) return M.log("MPEG Audio sync word found !"), !0;
          return !1;
        }
        canParse(e, t) {
          return iN(e, t) && 4 <= e.length - t;
        }
        appendFrame(e, t, i) {
          if (null !== this.basePTS)
            return iF(e, t, i, this.basePTS, this.frameIndex);
        }
      }
      class i2 {
        static getSilentFrame(e, t) {
          if ("mp4a.40.2" === e) {
            if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
            if (2 === t)
              return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
            if (3 === t)
              return new Uint8Array([
                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142,
              ]);
            if (4 === t)
              return new Uint8Array([
                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8,
                2, 56,
              ]);
            else if (5 === t)
              return new Uint8Array([
                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153,
                0, 33, 144, 2, 56,
              ]);
            else if (6 === t)
              return new Uint8Array([
                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153,
                0, 33, 144, 2, 0, 178, 0, 32, 8, 224,
              ]);
          } else {
            if (1 === t)
              return new Uint8Array([
                1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241,
                193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
              ]);
            if (2 === t || 3 === t)
              return new Uint8Array([
                1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0,
                6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
              ]);
          }
        }
      }
      class i4 {
        static init() {
          let e;
          for (e in ((i4.types = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            ".mp3": [],
            dac3: [],
            "ac-3": [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
            smhd: [],
          }),
          i4.types))
            i4.types.hasOwnProperty(e) &&
              (i4.types[e] = [
                e.charCodeAt(0),
                e.charCodeAt(1),
                e.charCodeAt(2),
                e.charCodeAt(3),
              ]);
          let t = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101,
              114, 0,
            ]),
            i = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101,
              114, 0,
            ]);
          i4.HDLR_TYPES = { video: t, audio: i };
          let r = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0,
              1,
            ]),
            s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
          (i4.STTS = i4.STSC = i4.STCO = s),
            (i4.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (i4.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
            (i4.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (i4.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
          let a = new Uint8Array([105, 115, 111, 109]),
            n = new Uint8Array([97, 118, 99, 49]),
            l = new Uint8Array([0, 0, 0, 1]);
          (i4.FTYP = i4.box(i4.types.ftyp, a, l, a, n)),
            (i4.DINF = i4.box(i4.types.dinf, i4.box(i4.types.dref, r)));
        }
        static box(e, ...t) {
          let i = 8,
            r = t.length,
            s = r;
          for (; r--; ) i += t[r].byteLength;
          let a = new Uint8Array(i);
          for (
            a[0] = (i >> 24) & 255,
              a[1] = (i >> 16) & 255,
              a[2] = (i >> 8) & 255,
              a[3] = 255 & i,
              a.set(e, 4),
              r = 0,
              i = 8;
            r < s;
            r++
          )
            a.set(t[r], i), (i += t[r].byteLength);
          return a;
        }
        static hdlr(e) {
          return i4.box(i4.types.hdlr, i4.HDLR_TYPES[e]);
        }
        static mdat(e) {
          return i4.box(i4.types.mdat, e);
        }
        static mdhd(e, t) {
          let i = Math.floor((t *= e) / 4294967296),
            r = Math.floor(t % 4294967296);
          return i4.box(
            i4.types.mdhd,
            new Uint8Array([
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              255 & e,
              i >> 24,
              (i >> 16) & 255,
              (i >> 8) & 255,
              255 & i,
              r >> 24,
              (r >> 16) & 255,
              (r >> 8) & 255,
              255 & r,
              85,
              196,
              0,
              0,
            ]),
          );
        }
        static mdia(e) {
          return i4.box(
            i4.types.mdia,
            i4.mdhd(e.timescale, e.duration),
            i4.hdlr(e.type),
            i4.minf(e),
          );
        }
        static mfhd(e) {
          return i4.box(
            i4.types.mfhd,
            new Uint8Array([
              0,
              0,
              0,
              0,
              e >> 24,
              (e >> 16) & 255,
              (e >> 8) & 255,
              255 & e,
            ]),
          );
        }
        static minf(e) {
          return "audio" === e.type
            ? i4.box(
                i4.types.minf,
                i4.box(i4.types.smhd, i4.SMHD),
                i4.DINF,
                i4.stbl(e),
              )
            : i4.box(
                i4.types.minf,
                i4.box(i4.types.vmhd, i4.VMHD),
                i4.DINF,
                i4.stbl(e),
              );
        }
        static moof(e, t, i) {
          return i4.box(i4.types.moof, i4.mfhd(e), i4.traf(i, t));
        }
        static moov(e) {
          let t = e.length,
            i = [];
          for (; t--; ) i[t] = i4.trak(e[t]);
          return i4.box.apply(
            null,
            [i4.types.moov, i4.mvhd(e[0].timescale, e[0].duration)]
              .concat(i)
              .concat(i4.mvex(e)),
          );
        }
        static mvex(e) {
          let t = e.length,
            i = [];
          for (; t--; ) i[t] = i4.trex(e[t]);
          return i4.box.apply(null, [i4.types.mvex, ...i]);
        }
        static mvhd(e, t) {
          let i = Math.floor((t *= e) / 4294967296),
            r = Math.floor(t % 4294967296),
            s = new Uint8Array([
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              255 & e,
              i >> 24,
              (i >> 16) & 255,
              (i >> 8) & 255,
              255 & i,
              r >> 24,
              (r >> 16) & 255,
              (r >> 8) & 255,
              255 & r,
              0,
              1,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              255,
              255,
              255,
              255,
            ]);
          return i4.box(i4.types.mvhd, s);
        }
        static sdtp(e) {
          let t, i;
          let r = e.samples || [],
            s = new Uint8Array(4 + r.length);
          for (t = 0; t < r.length; t++)
            (i = r[t].flags),
              (s[t + 4] =
                (i.dependsOn << 4) | (i.isDependedOn << 2) | i.hasRedundancy);
          return i4.box(i4.types.sdtp, s);
        }
        static stbl(e) {
          return i4.box(
            i4.types.stbl,
            i4.stsd(e),
            i4.box(i4.types.stts, i4.STTS),
            i4.box(i4.types.stsc, i4.STSC),
            i4.box(i4.types.stsz, i4.STSZ),
            i4.box(i4.types.stco, i4.STCO),
          );
        }
        static avc1(e) {
          let t,
            i,
            r,
            s = [],
            a = [];
          for (t = 0; t < e.sps.length; t++)
            (r = (i = e.sps[t]).byteLength),
              s.push((r >>> 8) & 255),
              s.push(255 & r),
              (s = s.concat(Array.prototype.slice.call(i)));
          for (t = 0; t < e.pps.length; t++)
            (r = (i = e.pps[t]).byteLength),
              a.push((r >>> 8) & 255),
              a.push(255 & r),
              (a = a.concat(Array.prototype.slice.call(i)));
          let n = i4.box(
              i4.types.avcC,
              new Uint8Array(
                [1, s[3], s[4], s[5], 255, 224 | e.sps.length]
                  .concat(s)
                  .concat([e.pps.length])
                  .concat(a),
              ),
            ),
            l = e.width,
            o = e.height,
            h = e.pixelRatio[0],
            d = e.pixelRatio[1];
          return i4.box(
            i4.types.avc1,
            new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              (l >> 8) & 255,
              255 & l,
              (o >> 8) & 255,
              255 & o,
              0,
              72,
              0,
              0,
              0,
              72,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              18,
              100,
              97,
              105,
              108,
              121,
              109,
              111,
              116,
              105,
              111,
              110,
              47,
              104,
              108,
              115,
              46,
              106,
              115,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              24,
              17,
              17,
            ]),
            n,
            i4.box(
              i4.types.btrt,
              new Uint8Array([
                0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
              ]),
            ),
            i4.box(
              i4.types.pasp,
              new Uint8Array([
                h >> 24,
                (h >> 16) & 255,
                (h >> 8) & 255,
                255 & h,
                d >> 24,
                (d >> 16) & 255,
                (d >> 8) & 255,
                255 & d,
              ]),
            ),
          );
        }
        static esds(e) {
          let t = e.config.length;
          return new Uint8Array(
            [
              0,
              0,
              0,
              0,
              3,
              23 + t,
              0,
              1,
              0,
              4,
              15 + t,
              64,
              21,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              5,
            ]
              .concat([t])
              .concat(e.config)
              .concat([6, 1, 2]),
          );
        }
        static audioStsd(e) {
          let t = e.samplerate;
          return new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            e.channelCount,
            0,
            16,
            0,
            0,
            0,
            0,
            (t >> 8) & 255,
            255 & t,
            0,
            0,
          ]);
        }
        static mp4a(e) {
          return i4.box(
            i4.types.mp4a,
            i4.audioStsd(e),
            i4.box(i4.types.esds, i4.esds(e)),
          );
        }
        static mp3(e) {
          return i4.box(i4.types[".mp3"], i4.audioStsd(e));
        }
        static ac3(e) {
          return i4.box(
            i4.types["ac-3"],
            i4.audioStsd(e),
            i4.box(i4.types.dac3, e.config),
          );
        }
        static stsd(e) {
          return "audio" !== e.type
            ? i4.box(i4.types.stsd, i4.STSD, i4.avc1(e))
            : "mp3" === e.segmentCodec && "mp3" === e.codec
              ? i4.box(i4.types.stsd, i4.STSD, i4.mp3(e))
              : "ac3" === e.segmentCodec
                ? i4.box(i4.types.stsd, i4.STSD, i4.ac3(e))
                : i4.box(i4.types.stsd, i4.STSD, i4.mp4a(e));
        }
        static tkhd(e) {
          let t = e.id,
            i = e.duration * e.timescale,
            r = e.width,
            s = e.height,
            a = Math.floor(i / 4294967296),
            n = Math.floor(i % 4294967296);
          return i4.box(
            i4.types.tkhd,
            new Uint8Array([
              1,
              0,
              0,
              7,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              255 & t,
              0,
              0,
              0,
              0,
              a >> 24,
              (a >> 16) & 255,
              (a >> 8) & 255,
              255 & a,
              n >> 24,
              (n >> 16) & 255,
              (n >> 8) & 255,
              255 & n,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              (r >> 8) & 255,
              255 & r,
              0,
              0,
              (s >> 8) & 255,
              255 & s,
              0,
              0,
            ]),
          );
        }
        static traf(e, t) {
          let i = i4.sdtp(e),
            r = e.id,
            s = Math.floor(t / 4294967296),
            a = Math.floor(t % 4294967296);
          return i4.box(
            i4.types.traf,
            i4.box(
              i4.types.tfhd,
              new Uint8Array([
                0,
                0,
                0,
                0,
                r >> 24,
                (r >> 16) & 255,
                (r >> 8) & 255,
                255 & r,
              ]),
            ),
            i4.box(
              i4.types.tfdt,
              new Uint8Array([
                1,
                0,
                0,
                0,
                s >> 24,
                (s >> 16) & 255,
                (s >> 8) & 255,
                255 & s,
                a >> 24,
                (a >> 16) & 255,
                (a >> 8) & 255,
                255 & a,
              ]),
            ),
            i4.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8),
            i,
          );
        }
        static trak(e) {
          return (
            (e.duration = e.duration || 4294967295),
            i4.box(i4.types.trak, i4.tkhd(e), i4.mdia(e))
          );
        }
        static trex(e) {
          let t = e.id;
          return i4.box(
            i4.types.trex,
            new Uint8Array([
              0,
              0,
              0,
              0,
              t >> 24,
              (t >> 16) & 255,
              (t >> 8) & 255,
              255 & t,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              1,
            ]),
          );
        }
        static trun(e, t) {
          let i, r, s, a, n, l;
          let o = e.samples || [],
            h = o.length,
            d = 12 + 16 * h,
            u = new Uint8Array(d);
          for (
            t += 8 + d,
              u.set(
                [
                  "video" === e.type ? 1 : 0,
                  0,
                  15,
                  1,
                  (h >>> 24) & 255,
                  (h >>> 16) & 255,
                  (h >>> 8) & 255,
                  255 & h,
                  (t >>> 24) & 255,
                  (t >>> 16) & 255,
                  (t >>> 8) & 255,
                  255 & t,
                ],
                0,
              ),
              i = 0;
            i < h;
            i++
          )
            (s = (r = o[i]).duration),
              (a = r.size),
              (n = r.flags),
              (l = r.cts),
              u.set(
                [
                  (s >>> 24) & 255,
                  (s >>> 16) & 255,
                  (s >>> 8) & 255,
                  255 & s,
                  (a >>> 24) & 255,
                  (a >>> 16) & 255,
                  (a >>> 8) & 255,
                  255 & a,
                  (n.isLeading << 2) | n.dependsOn,
                  (n.isDependedOn << 6) |
                    (n.hasRedundancy << 4) |
                    (n.paddingValue << 1) |
                    n.isNonSync,
                  61440 & n.degradPrio,
                  15 & n.degradPrio,
                  (l >>> 24) & 255,
                  (l >>> 16) & 255,
                  (l >>> 8) & 255,
                  255 & l,
                ],
                12 + 16 * i,
              );
          return i4.box(i4.types.trun, u);
        }
        static initSegment(e) {
          i4.types || i4.init();
          let t = i4.moov(e);
          return eM(i4.FTYP, t);
        }
      }
      function i3(e, t, i = 1, r = !1) {
        let s = e * t * i;
        return r ? Math.round(s) : s;
      }
      function i5(e, t = !1) {
        return i3(e, 1e3, 11111111111111112e-21, t);
      }
      (i4.types = void 0),
        (i4.HDLR_TYPES = void 0),
        (i4.STTS = void 0),
        (i4.STSC = void 0),
        (i4.STCO = void 0),
        (i4.STSZ = void 0),
        (i4.VMHD = void 0),
        (i4.SMHD = void 0),
        (i4.STSD = void 0),
        (i4.FTYP = void 0),
        (i4.DINF = void 0);
      let i8 = null,
        i6 = null;
      class i9 {
        constructor(e, t, i, r = "") {
          if (
            ((this.observer = void 0),
            (this.config = void 0),
            (this.typeSupported = void 0),
            (this.ISGenerated = !1),
            (this._initPTS = null),
            (this._initDTS = null),
            (this.nextAvcDts = null),
            (this.nextAudioPts = null),
            (this.videoSampleDuration = null),
            (this.isAudioContiguous = !1),
            (this.isVideoContiguous = !1),
            (this.videoTrackConfig = void 0),
            (this.observer = e),
            (this.config = t),
            (this.typeSupported = i),
            (this.ISGenerated = !1),
            null === i8)
          ) {
            let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            i8 = e ? parseInt(e[1]) : 0;
          }
          if (null === i6) {
            let e = navigator.userAgent.match(/Safari\/(\d+)/i);
            i6 = e ? parseInt(e[1]) : 0;
          }
        }
        destroy() {
          this.config =
            this.videoTrackConfig =
            this._initPTS =
            this._initDTS =
              null;
        }
        resetTimeStamp(e) {
          M.log("[mp4-remuxer]: initPTS & initDTS reset"),
            (this._initPTS = this._initDTS = e);
        }
        resetNextTimestamp() {
          M.log("[mp4-remuxer]: reset next timestamp"),
            (this.isVideoContiguous = !1),
            (this.isAudioContiguous = !1);
        }
        resetInitSegment() {
          M.log("[mp4-remuxer]: ISGenerated flag reset"),
            (this.ISGenerated = !1),
            (this.videoTrackConfig = void 0);
        }
        getVideoStartPts(e) {
          let t = !1,
            i = e[0].pts,
            r = e.reduce((e, r) => {
              let s = r.pts,
                a = s - e;
              return (a < -4294967296 && ((t = !0), (a = (s = i7(s, i)) - e)),
              a > 0)
                ? e
                : s;
            }, i);
          return t && M.debug("PTS rollover detected"), r;
        }
        remux(e, t, i, r, s, a, n, l) {
          let o, h, d, u, c, f;
          let g = s,
            m = s,
            p = e.pid > -1,
            E = t.pid > -1,
            T = t.samples.length,
            y = e.samples.length > 0,
            v = (n && T > 0) || T > 1;
          if (((!p || y) && (!E || v)) || this.ISGenerated || n) {
            let i;
            if (this.ISGenerated) {
              var S, A, L, R;
              let e = this.videoTrackConfig;
              e &&
                (t.width !== e.width ||
                  t.height !== e.height ||
                  (null == (S = t.pixelRatio) ? void 0 : S[0]) !==
                    (null == (A = e.pixelRatio) ? void 0 : A[0]) ||
                  (null == (L = t.pixelRatio) ? void 0 : L[1]) !==
                    (null == (R = e.pixelRatio) ? void 0 : R[1])) &&
                this.resetInitSegment();
            } else d = this.generateIS(e, t, s, a);
            let r = this.isVideoContiguous,
              n = -1;
            if (
              v &&
              ((n = (function (e) {
                for (let t = 0; t < e.length; t++) if (e[t].key) return t;
                return -1;
              })(t.samples)),
              !r && this.config.forceKeyFrameOnDiscontinuity)
            ) {
              if (((f = !0), n > 0)) {
                M.warn(
                  `[mp4-remuxer]: Dropped ${n} out of ${T} video samples due to a missing keyframe`,
                );
                let e = this.getVideoStartPts(t.samples);
                (t.samples = t.samples.slice(n)),
                  (t.dropped += n),
                  (m += (t.samples[0].pts - e) / t.inputTimeScale),
                  (i = m);
              } else
                -1 === n &&
                  (M.warn(
                    `[mp4-remuxer]: No keyframe found out of ${T} video samples`,
                  ),
                  (f = !1));
            }
            if (this.ISGenerated) {
              if (y && v) {
                let i = this.getVideoStartPts(t.samples),
                  r = (i7(e.samples[0].pts, i) - i) / t.inputTimeScale;
                (g += Math.max(0, r)), (m += Math.max(0, -r));
              }
              if (y) {
                if (
                  (e.samplerate ||
                    (M.warn(
                      "[mp4-remuxer]: regenerate InitSegment as audio detected",
                    ),
                    (d = this.generateIS(e, t, s, a))),
                  (h = this.remuxAudio(
                    e,
                    g,
                    this.isAudioContiguous,
                    a,
                    E || v || l === tn.AUDIO ? m : void 0,
                  )),
                  v)
                ) {
                  let i = h ? h.endPTS - h.startPTS : 0;
                  t.inputTimeScale ||
                    (M.warn(
                      "[mp4-remuxer]: regenerate InitSegment as video detected",
                    ),
                    (d = this.generateIS(e, t, s, a))),
                    (o = this.remuxVideo(t, m, r, i));
                }
              } else v && (o = this.remuxVideo(t, m, r, 0));
              o &&
                ((o.firstKeyFrame = n),
                (o.independent = -1 !== n),
                (o.firstKeyFramePTS = i));
            }
          }
          return (
            this.ISGenerated &&
              this._initPTS &&
              this._initDTS &&
              (i.samples.length && (c = re(i, s, this._initPTS, this._initDTS)),
              r.samples.length && (u = rt(r, s, this._initPTS))),
            {
              audio: h,
              video: o,
              initSegment: d,
              independent: f,
              text: u,
              id3: c,
            }
          );
        }
        generateIS(e, t, i, r) {
          let s, a, n;
          let l = e.samples,
            o = t.samples,
            h = this.typeSupported,
            d = {},
            u = this._initPTS,
            c = !u || r,
            f = "audio/mp4";
          if ((c && (s = a = 1 / 0), e.config && l.length)) {
            switch (((e.timescale = e.samplerate), e.segmentCodec)) {
              case "mp3":
                h.mpeg
                  ? ((f = "audio/mpeg"), (e.codec = ""))
                  : h.mp3 && (e.codec = "mp3");
                break;
              case "ac3":
                e.codec = "ac-3";
            }
            (d.audio = {
              id: "audio",
              container: f,
              codec: e.codec,
              initSegment:
                "mp3" === e.segmentCodec && h.mpeg
                  ? new Uint8Array(0)
                  : i4.initSegment([e]),
              metadata: { channelCount: e.channelCount },
            }),
              c &&
                ((n = e.inputTimeScale),
                u && n === u.timescale
                  ? (c = !1)
                  : (s = a = l[0].pts - Math.round(n * i)));
          }
          if (t.sps && t.pps && o.length) {
            if (
              ((t.timescale = t.inputTimeScale),
              (d.video = {
                id: "main",
                container: "video/mp4",
                codec: t.codec,
                initSegment: i4.initSegment([t]),
                metadata: { width: t.width, height: t.height },
              }),
              c)
            ) {
              if (((n = t.inputTimeScale), u && n === u.timescale)) c = !1;
              else {
                let e = this.getVideoStartPts(o),
                  t = Math.round(n * i);
                (a = Math.min(a, i7(o[0].dts, e) - t)),
                  (s = Math.min(s, e - t));
              }
            }
            this.videoTrackConfig = {
              width: t.width,
              height: t.height,
              pixelRatio: t.pixelRatio,
            };
          }
          if (Object.keys(d).length)
            return (
              (this.ISGenerated = !0),
              c
                ? ((this._initPTS = { baseTime: s, timescale: n }),
                  (this._initDTS = { baseTime: a, timescale: n }))
                : (s = n = void 0),
              { tracks: d, initPTS: s, timescale: n }
            );
        }
        remuxVideo(e, t, i, r) {
          let s, a, n;
          let l = e.inputTimeScale,
            o = e.samples,
            h = [],
            d = o.length,
            u = this._initPTS,
            c = this.nextAvcDts,
            f = 8,
            g = this.videoSampleDuration,
            m = Number.POSITIVE_INFINITY,
            p = Number.NEGATIVE_INFINITY,
            E = !1;
          if (!i || null === c) {
            let e = t * l,
              r = o[0].pts - i7(o[0].dts, o[0].pts);
            i8 && null !== c && 15e3 > Math.abs(e - r - c)
              ? (i = !0)
              : (c = e - r);
          }
          let T = (u.baseTime * l) / u.timescale;
          for (let e = 0; e < d; e++) {
            let t = o[e];
            (t.pts = i7(t.pts - T, c)),
              (t.dts = i7(t.dts - T, c)),
              t.dts < o[e > 0 ? e - 1 : e].dts && (E = !0);
          }
          E &&
            o.sort(function (e, t) {
              let i = e.dts - t.dts,
                r = e.pts - t.pts;
              return i || r;
            }),
            (s = o[0].dts);
          let y = (a = o[o.length - 1].dts) - s,
            v = y ? Math.round(y / (d - 1)) : g || e.inputTimeScale / 30;
          if (i) {
            let e = s - c,
              i = e > v,
              r = e < -1;
            if (
              (i || r) &&
              (i
                ? M.warn(
                    `AVC: ${i5(e, !0)} ms (${e}dts) hole between fragments detected at ${t.toFixed(3)}`,
                  )
                : M.warn(
                    `AVC: ${i5(-e, !0)} ms (${e}dts) overlapping between fragments detected at ${t.toFixed(3)}`,
                  ),
              !r || c >= o[0].pts || i8)
            ) {
              s = c;
              let t = o[0].pts - e;
              if (i) (o[0].dts = s), (o[0].pts = t);
              else
                for (let i = 0; i < o.length && !(o[i].dts > t); i++)
                  (o[i].dts -= e), (o[i].pts -= e);
              M.log(
                `Video: Initial PTS/DTS adjusted: ${i5(t, !0)}/${i5(s, !0)}, delta: ${i5(e, !0)} ms`,
              );
            }
          }
          let S = 0,
            A = 0,
            L = (s = Math.max(0, s));
          for (let e = 0; e < d; e++) {
            let t = o[e],
              i = t.units,
              r = i.length,
              s = 0;
            for (let e = 0; e < r; e++) s += i[e].data.length;
            (A += s),
              (S += r),
              (t.length = s),
              t.dts < L ? ((t.dts = L), (L += (v / 4) | 0 || 1)) : (L = t.dts),
              (m = Math.min(t.pts, m)),
              (p = Math.max(t.pts, p));
          }
          a = o[d - 1].dts;
          let R = A + 4 * S + 8;
          try {
            n = new Uint8Array(R);
          } catch (e) {
            this.observer.emit(C.ERROR, C.ERROR, {
              type: w.MUX_ERROR,
              details: P.REMUX_ALLOC_ERROR,
              fatal: !1,
              error: e,
              bytes: R,
              reason: `fail allocating video mdat ${R}`,
            });
            return;
          }
          let D = new DataView(n.buffer);
          D.setUint32(0, R), n.set(i4.types.mdat, 4);
          let b = !1,
            k = Number.POSITIVE_INFINITY,
            _ = Number.POSITIVE_INFINITY,
            x = Number.NEGATIVE_INFINITY,
            O = Number.NEGATIVE_INFINITY;
          for (let e = 0; e < d; e++) {
            let t;
            let i = o[e],
              s = i.units,
              a = 0;
            for (let e = 0, t = s.length; e < t; e++) {
              let t = s[e],
                i = t.data,
                r = t.data.byteLength;
              D.setUint32(f, r), (f += 4), n.set(i, f), (f += r), (a += 4 + r);
            }
            if (e < d - 1)
              (g = o[e + 1].dts - i.dts), (t = o[e + 1].pts - i.pts);
            else {
              let s = this.config,
                a = e > 0 ? i.dts - o[e - 1].dts : v;
              if (
                ((t = e > 0 ? i.pts - o[e - 1].pts : v),
                s.stretchShortVideoTrack && null !== this.nextAudioPts)
              ) {
                let e = Math.floor(s.maxBufferHole * l),
                  t = (r ? m + r * l : this.nextAudioPts) - i.pts;
                t > e
                  ? ((g = t - a) < 0 ? (g = a) : (b = !0),
                    M.log(
                      `[mp4-remuxer]: It is approximately ${t / 90} ms to the next segment; using duration ${g / 90} ms for the last video frame.`,
                    ))
                  : (g = a);
              } else g = a;
            }
            let u = Math.round(i.pts - i.dts);
            (k = Math.min(k, g)),
              (x = Math.max(x, g)),
              (_ = Math.min(_, t)),
              (O = Math.max(O, t)),
              h.push(new ri(i.key, g, a, u));
          }
          if (h.length) {
            if (i8) {
              if (i8 < 70) {
                let e = h[0].flags;
                (e.dependsOn = 2), (e.isNonSync = 0);
              }
            } else if (i6 && O - _ < x - k && v / x < 0.025 && 0 === h[0].cts) {
              M.warn(
                "Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.",
              );
              let e = s;
              for (let t = 0, i = h.length; t < i; t++) {
                let r = e + h[t].duration,
                  s = e + h[t].cts;
                if (t < i - 1) {
                  let e = r + h[t + 1].cts;
                  h[t].duration = e - s;
                } else h[t].duration = t ? h[t - 1].duration : v;
                (h[t].cts = 0), (e = r);
              }
            }
          }
          (g = b || !g ? v : g),
            (this.nextAvcDts = c = a + g),
            (this.videoSampleDuration = g),
            (this.isVideoContiguous = !0);
          let F = {
            data1: i4.moof(e.sequenceNumber++, s, I({}, e, { samples: h })),
            data2: n,
            startPTS: m / l,
            endPTS: (p + g) / l,
            startDTS: s / l,
            endDTS: c / l,
            type: "video",
            hasAudio: !1,
            hasVideo: !0,
            nb: h.length,
            dropped: e.dropped,
          };
          return (e.samples = []), (e.dropped = 0), F;
        }
        getSamplesPerFrame(e) {
          switch (e.segmentCodec) {
            case "mp3":
              return 1152;
            case "ac3":
              return 1536;
            default:
              return 1024;
          }
        }
        remuxAudio(e, t, i, r, s) {
          let a;
          let n = e.inputTimeScale,
            l = e.samplerate ? e.samplerate : n,
            o = n / l,
            h = this.getSamplesPerFrame(e),
            d = h * o,
            u = this._initPTS,
            c = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
            f = [],
            g = void 0 !== s,
            m = e.samples,
            p = c ? 0 : 8,
            E = this.nextAudioPts || -1,
            T = t * n,
            y = (u.baseTime * n) / u.timescale;
          if (
            ((this.isAudioContiguous = i =
              i ||
              (m.length &&
                E > 0 &&
                ((r && 9e3 > Math.abs(T - E)) ||
                  Math.abs(i7(m[0].pts - y, T) - E) < 20 * d))),
            m.forEach(function (e) {
              e.pts = i7(e.pts - y, T);
            }),
            !i || E < 0)
          ) {
            if (!(m = m.filter((e) => e.pts >= 0)).length) return;
            E = 0 === s ? 0 : r && !g ? Math.max(0, T) : m[0].pts;
          }
          if ("aac" === e.segmentCodec) {
            let t = this.config.maxAudioFramesDrift;
            for (let i = 0, r = E; i < m.length; i++) {
              let s = m[i],
                a = s.pts,
                l = a - r,
                o = Math.abs((1e3 * l) / n);
              if (l <= -t * d && g)
                0 === i &&
                  (M.warn(
                    `Audio frame @ ${(a / n).toFixed(3)}s overlaps nextAudioPts by ${Math.round((1e3 * l) / n)} ms.`,
                  ),
                  (this.nextAudioPts = E = r = a));
              else if (l >= t * d && o < 1e4 && g) {
                let t = Math.round(l / d);
                (r = a - t * d) < 0 && (t--, (r += d)),
                  0 === i && (this.nextAudioPts = E = r),
                  M.warn(
                    `[mp4-remuxer]: Injecting ${t} audio frame @ ${(r / n).toFixed(3)}s due to ${Math.round((1e3 * l) / n)} ms gap.`,
                  );
                for (let a = 0; a < t; a++) {
                  let t = Math.max(r, 0),
                    a = i2.getSilentFrame(
                      e.manifestCodec || e.codec,
                      e.channelCount,
                    );
                  a ||
                    (M.log(
                      "[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead.",
                    ),
                    (a = s.unit.subarray())),
                    m.splice(i, 0, { unit: a, pts: t }),
                    (r += d),
                    i++;
                }
              }
              (s.pts = r), (r += d);
            }
          }
          let v = null,
            S = null,
            A = 0,
            L = m.length;
          for (; L--; ) A += m[L].unit.byteLength;
          for (let t = 0, r = m.length; t < r; t++) {
            let r = m[t],
              s = r.unit,
              n = r.pts;
            if (null !== S) f[t - 1].duration = Math.round((n - S) / o);
            else {
              if ((i && "aac" === e.segmentCodec && (n = E), (v = n), !(A > 0)))
                return;
              A += p;
              try {
                a = new Uint8Array(A);
              } catch (e) {
                this.observer.emit(C.ERROR, C.ERROR, {
                  type: w.MUX_ERROR,
                  details: P.REMUX_ALLOC_ERROR,
                  fatal: !1,
                  error: e,
                  bytes: A,
                  reason: `fail allocating audio mdat ${A}`,
                });
                return;
              }
              c ||
                (new DataView(a.buffer).setUint32(0, A),
                a.set(i4.types.mdat, 4));
            }
            a.set(s, p);
            let l = s.byteLength;
            (p += l), f.push(new ri(!0, h, l, 0)), (S = n);
          }
          let R = f.length;
          if (!R) return;
          let D = f[f.length - 1];
          this.nextAudioPts = E = S + o * D.duration;
          let b = c
            ? new Uint8Array(0)
            : i4.moof(e.sequenceNumber++, v / o, I({}, e, { samples: f }));
          e.samples = [];
          let k = v / n,
            _ = E / n,
            x = {
              data1: b,
              data2: a,
              startPTS: k,
              endPTS: _,
              startDTS: k,
              endDTS: _,
              type: "audio",
              hasAudio: !0,
              hasVideo: !1,
              nb: R,
            };
          return (this.isAudioContiguous = !0), x;
        }
        remuxEmptyAudio(e, t, i, r) {
          let s = e.inputTimeScale,
            a = e.samplerate ? e.samplerate : s,
            n = this.nextAudioPts,
            l = this._initDTS,
            o = (9e4 * l.baseTime) / l.timescale,
            h = (null !== n ? n : r.startDTS * s) + o,
            d = r.endDTS * s + o,
            u = (s / a) * 1024,
            c = Math.ceil((d - h) / u),
            f = i2.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
          if ((M.warn("[mp4-remuxer]: remux empty Audio"), !f)) {
            M.trace(
              "[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec",
            );
            return;
          }
          let g = [];
          for (let e = 0; e < c; e++) {
            let t = h + e * u;
            g.push({ unit: f, pts: t, dts: t });
          }
          return (e.samples = g), this.remuxAudio(e, t, i, !1);
        }
      }
      function i7(e, t) {
        let i;
        if (null === t) return e;
        for (
          i = t < e ? -8589934592 : 8589934592;
          Math.abs(e - t) > 4294967296;

        )
          e += i;
        return e;
      }
      function re(e, t, i, r) {
        let s = e.samples.length;
        if (!s) return;
        let a = e.inputTimeScale;
        for (let n = 0; n < s; n++) {
          let s = e.samples[n];
          (s.pts = i7(s.pts - (i.baseTime * a) / i.timescale, t * a) / a),
            (s.dts = i7(s.dts - (r.baseTime * a) / r.timescale, t * a) / a);
        }
        let n = e.samples;
        return (e.samples = []), { samples: n };
      }
      function rt(e, t, i) {
        let r = e.samples.length;
        if (!r) return;
        let s = e.inputTimeScale;
        for (let a = 0; a < r; a++) {
          let r = e.samples[a];
          r.pts = i7(r.pts - (i.baseTime * s) / i.timescale, t * s) / s;
        }
        e.samples.sort((e, t) => e.pts - t.pts);
        let a = e.samples;
        return (e.samples = []), { samples: a };
      }
      class ri {
        constructor(e, t, i, r) {
          (this.size = void 0),
            (this.duration = void 0),
            (this.cts = void 0),
            (this.flags = void 0),
            (this.duration = t),
            (this.size = i),
            (this.cts = r),
            (this.flags = {
              isLeading: 0,
              isDependedOn: 0,
              hasRedundancy: 0,
              degradPrio: 0,
              dependsOn: e ? 2 : 1,
              isNonSync: e ? 0 : 1,
            });
        }
      }
      class rr {
        constructor() {
          (this.emitInitSegment = !1),
            (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initData = void 0),
            (this.initPTS = null),
            (this.initTracks = void 0),
            (this.lastEndTime = null);
        }
        destroy() {}
        resetTimeStamp(e) {
          (this.initPTS = e), (this.lastEndTime = null);
        }
        resetNextTimestamp() {
          this.lastEndTime = null;
        }
        resetInitSegment(e, t, i, r) {
          (this.audioCodec = t),
            (this.videoCodec = i),
            this.generateInitSegment(
              (function (e, t) {
                if (!e || !t) return e;
                let i = t.keyId;
                return (
                  i &&
                    t.isCommonEncryption &&
                    eC(e, ["moov", "trak"]).forEach((e) => {
                      let t = eC(e, [
                          "mdia",
                          "minf",
                          "stbl",
                          "stsd",
                        ])[0].subarray(8),
                        r = eC(t, ["enca"]),
                        s = r.length > 0;
                      s || (r = eC(t, ["encv"])),
                        r.forEach((e) => {
                          eC(s ? e.subarray(28) : e.subarray(78), [
                            "sinf",
                          ]).forEach((e) => {
                            let t = eF(e);
                            if (t) {
                              let e = t.subarray(8, 24);
                              e.some((e) => 0 !== e) ||
                                (M.log(
                                  `[eme] Patching keyId in 'enc${s ? "a" : "v"}>sinf>>tenc' box: ${eS.hexDump(e)} -> ${eS.hexDump(i)}`,
                                ),
                                t.set(i, 8));
                            }
                          });
                        });
                    }),
                  e
                );
              })(e, r),
            ),
            (this.emitInitSegment = !0);
        }
        generateInitSegment(e) {
          let { audioCodec: t, videoCodec: i } = this;
          if (!(null != e && e.byteLength)) {
            (this.initTracks = void 0), (this.initData = void 0);
            return;
          }
          let r = (this.initData = ew(e));
          r.audio && (t = rs(r.audio, K.AUDIO)),
            r.video && (i = rs(r.video, K.VIDEO));
          let s = {};
          r.audio && r.video
            ? (s.audiovideo = {
                container: "video/mp4",
                codec: t + "," + i,
                initSegment: e,
                id: "main",
              })
            : r.audio
              ? (s.audio = {
                  container: "audio/mp4",
                  codec: t,
                  initSegment: e,
                  id: "audio",
                })
              : r.video
                ? (s.video = {
                    container: "video/mp4",
                    codec: i,
                    initSegment: e,
                    id: "main",
                  })
                : M.warn(
                    "[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes.",
                  ),
            (this.initTracks = s);
        }
        remux(e, t, i, r, s, a) {
          var n, l, o;
          let { initPTS: h, lastEndTime: d } = this,
            u = {
              audio: void 0,
              video: void 0,
              text: r,
              id3: i,
              initSegment: void 0,
            };
          b(d) || (d = this.lastEndTime = s || 0);
          let c = t.samples;
          if (!(null != c && c.length)) return u;
          let f = { initPTS: void 0, timescale: 1 },
            g = this.initData;
          if (
            ((null != (n = g) && n.length) ||
              (this.generateInitSegment(c), (g = this.initData)),
            !(null != (l = g) && l.length))
          )
            return (
              M.warn(
                "[passthrough-remuxer.ts]: Failed to generate initSegment.",
              ),
              u
            );
          this.emitInitSegment &&
            ((f.tracks = this.initTracks), (this.emitInitSegment = !1));
          let m = (function (e, t) {
              let i = 0,
                r = 0,
                s = 0,
                a = eC(e, ["moof", "traf"]);
              for (let e = 0; e < a.length; e++) {
                let n = a[e],
                  l = eC(n, ["tfhd"])[0],
                  o = t[eI(l, 4)];
                if (!o) continue;
                let h = o.default,
                  d = eI(l, 0) | (null == h ? void 0 : h.flags),
                  u = null == h ? void 0 : h.duration;
                8 & d && (u = 2 & d ? eI(l, 12) : eI(l, 8));
                let c = o.timescale || 9e4,
                  f = eC(n, ["trun"]);
                for (let e = 0; e < f.length; e++)
                  (i = (function (e) {
                    let t = eI(e, 0),
                      i = 8;
                    1 & t && (i += 4), 4 & t && (i += 4);
                    let r = 0,
                      s = eI(e, 4);
                    for (let a = 0; a < s; a++)
                      256 & t && ((r += eI(e, i)), (i += 4)),
                        512 & t && (i += 4),
                        1024 & t && (i += 4),
                        2048 & t && (i += 4);
                    return r;
                  })(f[e])) ||
                    !u ||
                    (i = u * eI(f[e], 4)),
                    o.type === K.VIDEO
                      ? (r += i / c)
                      : o.type === K.AUDIO && (s += i / c);
              }
              if (0 === r && 0 === s) {
                let t = 1 / 0,
                  i = 0,
                  r = 0,
                  s = eC(e, ["sidx"]);
                for (let e = 0; e < s.length; e++) {
                  let a = (function (e) {
                    let t = [],
                      i = e[0],
                      r = 8,
                      s = eI(e, 8);
                    r += 4;
                    let a = 0,
                      n = 0;
                    0 === i
                      ? ((a = eI(e, r)), (n = eI(e, r + 4)), (r += 8))
                      : ((a = eb(e, r)), (n = eb(e, r + 8)), (r += 16)),
                      (r += 2);
                    let l = e.length + n,
                      o = eD(e, r);
                    r += 2;
                    for (let i = 0; i < o; i++) {
                      let i = r,
                        a = eI(e, i);
                      i += 4;
                      let n = 2147483647 & a;
                      if (1 == (2147483648 & a) >>> 31)
                        return (
                          M.warn(
                            "SIDX has hierarchical references (not supported)",
                          ),
                          null
                        );
                      let o = eI(e, i);
                      (i += 4),
                        t.push({
                          referenceSize: n,
                          subsegmentDuration: o,
                          info: { duration: o / s, start: l, end: l + n - 1 },
                        }),
                        (l += n),
                        (i += 4),
                        (r = i);
                    }
                    return {
                      earliestPresentationTime: a,
                      timescale: s,
                      version: i,
                      referencesCount: o,
                      references: t,
                    };
                  })(s[e]);
                  null != a &&
                    a.references &&
                    ((t = Math.min(
                      t,
                      a.earliestPresentationTime / a.timescale,
                    )),
                    (r =
                      (i = Math.max(
                        i,
                        a.references.reduce(
                          (e, t) => e + t.info.duration || 0,
                          0,
                        ) +
                          a.earliestPresentationTime / a.timescale,
                      )) - t));
                }
                if (r && b(r)) return r;
              }
              return r || s;
            })(c, g),
            p =
              ((o = g),
              eC(c, ["moof", "traf"]).reduce((e, t) => {
                let i = eC(t, ["tfdt"])[0],
                  r = i[0],
                  s = eC(t, ["tfhd"]).reduce((e, t) => {
                    let s = o[eI(t, 4)];
                    if (s) {
                      let t = eI(i, 4);
                      if (1 === r) {
                        if (4294967295 === t)
                          return (
                            M.warn(
                              "[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time",
                            ),
                            e
                          );
                        (t *= 4294967296), (t += eI(i, 8));
                      }
                      let a = t / (s.timescale || 9e4);
                      if (b(a) && (null === e || a < e)) return a;
                    }
                    return e;
                  }, null);
                return null !== s && b(s) && (null === e || s < e) ? s : e;
              }, null)),
            E = null === p ? s : p;
          ((function (e, t, i, r) {
            if (null === e) return !0;
            let s = Math.max(r, 1);
            return Math.abs(t - e.baseTime / e.timescale - i) > s;
          })(h, E, s, m) ||
            (f.timescale !== h.timescale && a)) &&
            ((f.initPTS = E - s),
            h &&
              1 === h.timescale &&
              M.warn(`Adjusting initPTS by ${f.initPTS - h.baseTime}`),
            (this.initPTS = h = { baseTime: f.initPTS, timescale: 1 }));
          let T = e ? E - h.baseTime / h.timescale : d,
            y = T + m;
          !(function (e, t, i) {
            eC(t, ["moof", "traf"]).forEach((t) => {
              eC(t, ["tfhd"]).forEach((r) => {
                let s = e[eI(r, 4)];
                if (!s) return;
                let a = s.timescale || 9e4;
                eC(t, ["tfdt"]).forEach((e) => {
                  let t = e[0],
                    r = i * a;
                  if (r) {
                    let i = eI(e, 4);
                    if (0 === t) (i -= r), e_(e, 4, (i = Math.max(i, 0)));
                    else {
                      (i *= 4294967296), (i += eI(e, 8)), (i -= r);
                      let t = Math.floor((i = Math.max(i, 0)) / 4294967296),
                        s = Math.floor(i % 4294967296);
                      e_(e, 4, t), e_(e, 8, s);
                    }
                  }
                });
              });
            });
          })(g, c, h.baseTime / h.timescale),
            m > 0
              ? (this.lastEndTime = y)
              : (M.warn("Duration parsed from mp4 should be greater than zero"),
                this.resetNextTimestamp());
          let v = !!g.audio,
            S = !!g.video,
            A = "";
          v && (A += "audio"), S && (A += "video");
          let L = {
            data1: c,
            startPTS: T,
            startDTS: T,
            endPTS: y,
            endDTS: y,
            type: A,
            hasAudio: v,
            hasVideo: S,
            nb: 1,
            dropped: 0,
          };
          return (
            (u.audio = "audio" === L.type ? L : void 0),
            (u.video = "audio" !== L.type ? L : void 0),
            (u.initSegment = f),
            (u.id3 = re(i, s, h, h)),
            r.samples.length && (u.text = rt(r, s, h)),
            u
          );
        }
      }
      function rs(e, t) {
        let i = null == e ? void 0 : e.codec;
        if (i && i.length > 4) return i;
        if (t === K.AUDIO) {
          if ("ec-3" === i || "ac-3" === i || "alac" === i) return i;
          if ("fLaC" === i || "Opus" === i) return e1(i, !1);
          let e = "mp4a.40.5";
          return (
            M.info(
              `Parsed audio codec "${i}" or audio object type not handled. Using "${e}"`,
            ),
            e
          );
        }
        return (M.warn(`Unhandled video codec "${i}"`),
        "hvc1" === i || "hev1" === i)
          ? "hvc1.1.6.L120.90"
          : "av01" === i
            ? "av01.0.04M.08"
            : "avc1.42e01e";
      }
      try {
        s = self.performance.now.bind(self.performance);
      } catch (e) {
        M.debug("Unable to use Performance API on this environment"),
          (s = null == X ? void 0 : X.Date.now);
      }
      let ra = [
        { demux: iK, remux: rr },
        { demux: iz, remux: i9 },
        { demux: i$, remux: i9 },
        { demux: i1, remux: i9 },
      ];
      ra.splice(2, 0, { demux: iH, remux: i9 });
      class rn {
        constructor(e, t, i, r, s) {
          (this.async = !1),
            (this.observer = void 0),
            (this.typeSupported = void 0),
            (this.config = void 0),
            (this.vendor = void 0),
            (this.id = void 0),
            (this.demuxer = void 0),
            (this.remuxer = void 0),
            (this.decrypter = void 0),
            (this.probe = void 0),
            (this.decryptionPromise = null),
            (this.transmuxConfig = void 0),
            (this.currentTransmuxState = void 0),
            (this.observer = e),
            (this.typeSupported = t),
            (this.config = i),
            (this.vendor = r),
            (this.id = s);
        }
        configure(e) {
          (this.transmuxConfig = e), this.decrypter && this.decrypter.reset();
        }
        push(e, t, i, r) {
          let a;
          let n = i.transmuxing;
          n.executeStart = s();
          let l = new Uint8Array(e),
            { currentTransmuxState: o, transmuxConfig: h } = this;
          r && (this.currentTransmuxState = r);
          let {
              contiguous: d,
              discontinuity: u,
              trackSwitch: c,
              accurateTimeOffset: f,
              timeOffset: g,
              initSegmentChange: m,
            } = r || o,
            {
              audioCodec: p,
              videoCodec: E,
              defaultInitPts: T,
              duration: y,
              initSegmentData: v,
            } = h,
            S =
              ((a = null),
              l.byteLength > 0 &&
                (null == t ? void 0 : t.key) != null &&
                null !== t.iv &&
                null != t.method &&
                (a = t),
              a);
          if (S && "AES-128" === S.method) {
            let e = this.getDecrypter();
            if (!e.isSync())
              return (
                (this.decryptionPromise = e
                  .webCryptoDecrypt(l, S.key.buffer, S.iv.buffer)
                  .then((e) => {
                    let t = this.push(e, null, i);
                    return (this.decryptionPromise = null), t;
                  })),
                this.decryptionPromise
              );
            {
              let t = e.softwareDecrypt(l, S.key.buffer, S.iv.buffer);
              if ((i.part > -1 && (t = e.flush()), !t))
                return (n.executeEnd = s()), rl(i);
              l = new Uint8Array(t);
            }
          }
          let A = this.needsProbing(u, c);
          if (A) {
            let e = this.configureTransmuxer(l);
            if (e)
              return (
                M.warn(`[transmuxer] ${e.message}`),
                this.observer.emit(C.ERROR, C.ERROR, {
                  type: w.MEDIA_ERROR,
                  details: P.FRAG_PARSING_ERROR,
                  fatal: !1,
                  error: e,
                  reason: e.message,
                }),
                (n.executeEnd = s()),
                rl(i)
              );
          }
          (u || c || m || A) && this.resetInitSegment(v, p, E, y, t),
            (u || m || A) && this.resetInitialTimestamp(T),
            d || this.resetContiguity();
          let L = this.transmux(l, S, g, f, i),
            R = this.currentTransmuxState;
          return (
            (R.contiguous = !0),
            (R.discontinuity = !1),
            (R.trackSwitch = !1),
            (n.executeEnd = s()),
            L
          );
        }
        flush(e) {
          let t = e.transmuxing;
          t.executeStart = s();
          let {
            decrypter: i,
            currentTransmuxState: r,
            decryptionPromise: a,
          } = this;
          if (a) return a.then(() => this.flush(e));
          let n = [],
            { timeOffset: l } = r;
          if (i) {
            let t = i.flush();
            t && n.push(this.push(t, null, e));
          }
          let { demuxer: o, remuxer: h } = this;
          if (!o || !h) return (t.executeEnd = s()), [rl(e)];
          let d = o.flush(l);
          return ro(d)
            ? d.then((t) => (this.flushRemux(n, t, e), n))
            : (this.flushRemux(n, d, e), n);
        }
        flushRemux(e, t, i) {
          let { audioTrack: r, videoTrack: a, id3Track: n, textTrack: l } = t,
            { accurateTimeOffset: o, timeOffset: h } =
              this.currentTransmuxState;
          M.log(
            `[transmuxer.ts]: Flushed fragment ${i.sn}${i.part > -1 ? " p: " + i.part : ""} of level ${i.level}`,
          );
          let d = this.remuxer.remux(r, a, n, l, h, o, !0, this.id);
          e.push({ remuxResult: d, chunkMeta: i }),
            (i.transmuxing.executeEnd = s());
        }
        resetInitialTimestamp(e) {
          let { demuxer: t, remuxer: i } = this;
          t && i && (t.resetTimeStamp(e), i.resetTimeStamp(e));
        }
        resetContiguity() {
          let { demuxer: e, remuxer: t } = this;
          e && t && (e.resetContiguity(), t.resetNextTimestamp());
        }
        resetInitSegment(e, t, i, r, s) {
          let { demuxer: a, remuxer: n } = this;
          a &&
            n &&
            (a.resetInitSegment(e, t, i, r), n.resetInitSegment(e, t, i, s));
        }
        destroy() {
          this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
            this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
        }
        transmux(e, t, i, r, s) {
          return t && "SAMPLE-AES" === t.method
            ? this.transmuxSampleAes(e, t, i, r, s)
            : this.transmuxUnencrypted(e, i, r, s);
        }
        transmuxUnencrypted(e, t, i, r) {
          let {
            audioTrack: s,
            videoTrack: a,
            id3Track: n,
            textTrack: l,
          } = this.demuxer.demux(e, t, !1, !this.config.progressive);
          return {
            remuxResult: this.remuxer.remux(s, a, n, l, t, i, !1, this.id),
            chunkMeta: r,
          };
        }
        transmuxSampleAes(e, t, i, r, s) {
          return this.demuxer
            .demuxSampleAes(e, t, i)
            .then((e) => ({
              remuxResult: this.remuxer.remux(
                e.audioTrack,
                e.videoTrack,
                e.id3Track,
                e.textTrack,
                i,
                r,
                !1,
                this.id,
              ),
              chunkMeta: s,
            }));
        }
        configureTransmuxer(e) {
          let t;
          let { config: i, observer: r, typeSupported: s, vendor: a } = this;
          for (let i = 0, r = ra.length; i < r; i++) {
            var n;
            if (null != (n = ra[i].demux) && n.probe(e)) {
              t = ra[i];
              break;
            }
          }
          if (!t)
            return Error("Failed to find demuxer by probing fragment data");
          let l = this.demuxer,
            o = this.remuxer,
            h = t.remux,
            d = t.demux;
          (o && o instanceof h) || (this.remuxer = new h(r, i, s, a)),
            (l && l instanceof d) ||
              ((this.demuxer = new d(r, i, s)), (this.probe = d.probe));
        }
        needsProbing(e, t) {
          return !this.demuxer || !this.remuxer || e || t;
        }
        getDecrypter() {
          let e = this.decrypter;
          return e || (e = this.decrypter = new ip(this.config)), e;
        }
      }
      let rl = (e) => ({ remuxResult: {}, chunkMeta: e });
      function ro(e) {
        return "then" in e && e.then instanceof Function;
      }
      class rh {
        constructor(e, t, i, r, s) {
          (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initSegmentData = void 0),
            (this.duration = void 0),
            (this.defaultInitPts = void 0),
            (this.audioCodec = e),
            (this.videoCodec = t),
            (this.initSegmentData = i),
            (this.duration = r),
            (this.defaultInitPts = s || null);
        }
      }
      class rd {
        constructor(e, t, i, r, s, a) {
          (this.discontinuity = void 0),
            (this.contiguous = void 0),
            (this.accurateTimeOffset = void 0),
            (this.trackSwitch = void 0),
            (this.timeOffset = void 0),
            (this.initSegmentChange = void 0),
            (this.discontinuity = e),
            (this.contiguous = t),
            (this.accurateTimeOffset = i),
            (this.trackSwitch = r),
            (this.timeOffset = s),
            (this.initSegmentChange = a);
        }
      }
      var ru = { exports: {} };
      !(function (e) {
        var t = Object.prototype.hasOwnProperty,
          i = "~";
        function r() {}
        function s(e, t, i) {
          (this.fn = e), (this.context = t), (this.once = i || !1);
        }
        function a(e, t, r, a, n) {
          if ("function" != typeof r)
            throw TypeError("The listener must be a function");
          var l = new s(r, a || e, n),
            o = i ? i + t : t;
          return (
            e._events[o]
              ? e._events[o].fn
                ? (e._events[o] = [e._events[o], l])
                : e._events[o].push(l)
              : ((e._events[o] = l), e._eventsCount++),
            e
          );
        }
        function n(e, t) {
          0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
        }
        function l() {
          (this._events = new r()), (this._eventsCount = 0);
        }
        Object.create &&
          ((r.prototype = Object.create(null)), new r().__proto__ || (i = !1)),
          (l.prototype.eventNames = function () {
            var e,
              r,
              s = [];
            if (0 === this._eventsCount) return s;
            for (r in (e = this._events))
              t.call(e, r) && s.push(i ? r.slice(1) : r);
            return Object.getOwnPropertySymbols
              ? s.concat(Object.getOwnPropertySymbols(e))
              : s;
          }),
          (l.prototype.listeners = function (e) {
            var t = i ? i + e : e,
              r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var s = 0, a = r.length, n = Array(a); s < a; s++)
              n[s] = r[s].fn;
            return n;
          }),
          (l.prototype.listenerCount = function (e) {
            var t = i ? i + e : e,
              r = this._events[t];
            return r ? (r.fn ? 1 : r.length) : 0;
          }),
          (l.prototype.emit = function (e, t, r, s, a, n) {
            var l = i ? i + e : e;
            if (!this._events[l]) return !1;
            var o,
              h,
              d = this._events[l],
              u = arguments.length;
            if (d.fn) {
              switch ((d.once && this.removeListener(e, d.fn, void 0, !0), u)) {
                case 1:
                  return d.fn.call(d.context), !0;
                case 2:
                  return d.fn.call(d.context, t), !0;
                case 3:
                  return d.fn.call(d.context, t, r), !0;
                case 4:
                  return d.fn.call(d.context, t, r, s), !0;
                case 5:
                  return d.fn.call(d.context, t, r, s, a), !0;
                case 6:
                  return d.fn.call(d.context, t, r, s, a, n), !0;
              }
              for (h = 1, o = Array(u - 1); h < u; h++) o[h - 1] = arguments[h];
              d.fn.apply(d.context, o);
            } else {
              var c,
                f = d.length;
              for (h = 0; h < f; h++)
                switch (
                  (d[h].once && this.removeListener(e, d[h].fn, void 0, !0), u)
                ) {
                  case 1:
                    d[h].fn.call(d[h].context);
                    break;
                  case 2:
                    d[h].fn.call(d[h].context, t);
                    break;
                  case 3:
                    d[h].fn.call(d[h].context, t, r);
                    break;
                  case 4:
                    d[h].fn.call(d[h].context, t, r, s);
                    break;
                  default:
                    if (!o)
                      for (c = 1, o = Array(u - 1); c < u; c++)
                        o[c - 1] = arguments[c];
                    d[h].fn.apply(d[h].context, o);
                }
            }
            return !0;
          }),
          (l.prototype.on = function (e, t, i) {
            return a(this, e, t, i, !1);
          }),
          (l.prototype.once = function (e, t, i) {
            return a(this, e, t, i, !0);
          }),
          (l.prototype.removeListener = function (e, t, r, s) {
            var a = i ? i + e : e;
            if (!this._events[a]) return this;
            if (!t) return n(this, a), this;
            var l = this._events[a];
            if (l.fn)
              l.fn !== t ||
                (s && !l.once) ||
                (r && l.context !== r) ||
                n(this, a);
            else {
              for (var o = 0, h = [], d = l.length; o < d; o++)
                (l[o].fn !== t ||
                  (s && !l[o].once) ||
                  (r && l[o].context !== r)) &&
                  h.push(l[o]);
              h.length
                ? (this._events[a] = 1 === h.length ? h[0] : h)
                : n(this, a);
            }
            return this;
          }),
          (l.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = i ? i + e : e), this._events[t] && n(this, t))
                : ((this._events = new r()), (this._eventsCount = 0)),
              this
            );
          }),
          (l.prototype.off = l.prototype.removeListener),
          (l.prototype.addListener = l.prototype.on),
          (l.prefixed = i),
          (l.EventEmitter = l),
          (e.exports = l);
      })(ru);
      var rc =
        (m = ru.exports) &&
        m.__esModule &&
        Object.prototype.hasOwnProperty.call(m, "default")
          ? m.default
          : m;
      class rf {
        constructor(e, t, i, r) {
          (this.error = null),
            (this.hls = void 0),
            (this.id = void 0),
            (this.observer = void 0),
            (this.frag = null),
            (this.part = null),
            (this.useWorker = void 0),
            (this.workerContext = null),
            (this.onwmsg = void 0),
            (this.transmuxer = null),
            (this.onTransmuxComplete = void 0),
            (this.onFlush = void 0);
          let s = e.config;
          (this.hls = e),
            (this.id = t),
            (this.useWorker = !!s.enableWorker),
            (this.onTransmuxComplete = i),
            (this.onFlush = r);
          let a = (e, t) => {
            ((t = t || {}).frag = this.frag),
              (t.id = this.id),
              e === C.ERROR && (this.error = t.error),
              this.hls.trigger(e, t);
          };
          (this.observer = new rc()),
            this.observer.on(C.FRAG_DECRYPTED, a),
            this.observer.on(C.ERROR, a);
          let n = eW(s.preferManagedMediaSource) || {
              isTypeSupported: () => !1,
            },
            l = {
              mpeg: n.isTypeSupported("audio/mpeg"),
              mp3: n.isTypeSupported('audio/mp4; codecs="mp3"'),
              ac3: n.isTypeSupported('audio/mp4; codecs="ac-3"'),
            };
          if (
            this.useWorker &&
            "undefined" != typeof Worker &&
            (s.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__)
          ) {
            try {
              s.workerPath
                ? (M.log(`loading Web Worker ${s.workerPath} for "${t}"`),
                  (this.workerContext = (function (e) {
                    let t = new self.URL(e, self.location.href).href;
                    return { worker: new self.Worker(t), scriptURL: t };
                  })(s.workerPath)))
                : (M.log(`injecting Web Worker for "${t}"`),
                  (this.workerContext = (function () {
                    let e = new self.Blob(
                        [
                          `var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`,
                        ],
                        { type: "text/javascript" },
                      ),
                      t = self.URL.createObjectURL(e);
                    return { worker: new self.Worker(t), objectURL: t };
                  })())),
                (this.onwmsg = (e) => this.onWorkerMessage(e));
              let { worker: e } = this.workerContext;
              e.addEventListener("message", this.onwmsg),
                (e.onerror = (e) => {
                  let i = Error(`${e.message}  (${e.filename}:${e.lineno})`);
                  (s.enableWorker = !1),
                    M.warn(`Error in "${t}" Web Worker, fallback to inline`),
                    this.hls.trigger(C.ERROR, {
                      type: w.OTHER_ERROR,
                      details: P.INTERNAL_EXCEPTION,
                      fatal: !1,
                      event: "demuxerWorker",
                      error: i,
                    });
                }),
                e.postMessage({
                  cmd: "init",
                  typeSupported: l,
                  vendor: "",
                  id: t,
                  config: JSON.stringify(s),
                });
            } catch (e) {
              M.warn(
                `Error setting up "${t}" Web Worker, fallback to inline`,
                e,
              ),
                this.resetWorker(),
                (this.error = null),
                (this.transmuxer = new rn(this.observer, l, s, "", t));
            }
            return;
          }
          this.transmuxer = new rn(this.observer, l, s, "", t);
        }
        resetWorker() {
          if (this.workerContext) {
            let { worker: e, objectURL: t } = this.workerContext;
            t && self.URL.revokeObjectURL(t),
              e.removeEventListener("message", this.onwmsg),
              (e.onerror = null),
              e.terminate(),
              (this.workerContext = null);
          }
        }
        destroy() {
          if (this.workerContext) this.resetWorker(), (this.onwmsg = void 0);
          else {
            let e = this.transmuxer;
            e && (e.destroy(), (this.transmuxer = null));
          }
          let e = this.observer;
          e && e.removeAllListeners(),
            (this.frag = null),
            (this.observer = null),
            (this.hls = null);
        }
        push(e, t, i, r, s, a, n, l, o, h) {
          var d, u;
          o.transmuxing.start = self.performance.now();
          let { transmuxer: c } = this,
            f = a ? a.start : s.start,
            g = s.decryptdata,
            m = this.frag,
            p = !(m && s.cc === m.cc),
            E = !(m && o.level === m.level),
            T = m ? o.sn - m.sn : -1,
            y = this.part ? o.part - this.part.index : -1,
            v =
              0 === T &&
              o.id > 1 &&
              o.id === (null == m ? void 0 : m.stats.chunkCount),
            S = !E && (1 === T || (0 === T && (1 === y || (v && y <= 0)))),
            A = self.performance.now();
          (E || T || 0 === s.stats.parsing.start) &&
            (s.stats.parsing.start = A),
            a && (y || !S) && (a.stats.parsing.start = A);
          let L = !(
              m &&
              (null == (d = s.initSegment) ? void 0 : d.url) ===
                (null == (u = m.initSegment) ? void 0 : u.url)
            ),
            R = new rd(p, S, l, E, f, L);
          if (!S || p || L) {
            M.log(`[transmuxer-interface, ${s.type}]: Starting new transmux session for sn: ${o.sn} p: ${o.part} level: ${o.level} id: ${o.id}
        discontinuity: ${p}
        trackSwitch: ${E}
        contiguous: ${S}
        accurateTimeOffset: ${l}
        timeOffset: ${f}
        initSegmentChange: ${L}`);
            let e = new rh(i, r, t, n, h);
            this.configureTransmuxer(e);
          }
          if (((this.frag = s), (this.part = a), this.workerContext))
            this.workerContext.worker.postMessage(
              { cmd: "demux", data: e, decryptdata: g, chunkMeta: o, state: R },
              e instanceof ArrayBuffer ? [e] : [],
            );
          else if (c) {
            let t = c.push(e, g, o, R);
            ro(t)
              ? ((c.async = !0),
                t
                  .then((e) => {
                    this.handleTransmuxComplete(e);
                  })
                  .catch((e) => {
                    this.transmuxerError(
                      e,
                      o,
                      "transmuxer-interface push error",
                    );
                  }))
              : ((c.async = !1), this.handleTransmuxComplete(t));
          }
        }
        flush(e) {
          e.transmuxing.start = self.performance.now();
          let { transmuxer: t } = this;
          if (this.workerContext)
            this.workerContext.worker.postMessage({
              cmd: "flush",
              chunkMeta: e,
            });
          else if (t) {
            let i = t.flush(e);
            ro(i) || t.async
              ? (ro(i) || (i = Promise.resolve(i)),
                i
                  .then((t) => {
                    this.handleFlushResult(t, e);
                  })
                  .catch((t) => {
                    this.transmuxerError(
                      t,
                      e,
                      "transmuxer-interface flush error",
                    );
                  }))
              : this.handleFlushResult(i, e);
          }
        }
        transmuxerError(e, t, i) {
          this.hls &&
            ((this.error = e),
            this.hls.trigger(C.ERROR, {
              type: w.MEDIA_ERROR,
              details: P.FRAG_PARSING_ERROR,
              chunkMeta: t,
              frag: this.frag || void 0,
              fatal: !1,
              error: e,
              err: e,
              reason: i,
            }));
        }
        handleFlushResult(e, t) {
          e.forEach((e) => {
            this.handleTransmuxComplete(e);
          }),
            this.onFlush(t);
        }
        onWorkerMessage(e) {
          let t = e.data;
          if (!(null != t && t.event)) {
            M.warn(
              `worker message received with no ${t ? "event name" : "data"}`,
            );
            return;
          }
          let i = this.hls;
          if (this.hls)
            switch (t.event) {
              case "init": {
                var r;
                let e = null == (r = this.workerContext) ? void 0 : r.objectURL;
                e && self.URL.revokeObjectURL(e);
                break;
              }
              case "transmuxComplete":
                this.handleTransmuxComplete(t.data);
                break;
              case "flush":
                this.onFlush(t.data);
                break;
              case "workerLog":
                M[t.data.logType] && M[t.data.logType](t.data.message);
                break;
              default:
                (t.data = t.data || {}),
                  (t.data.frag = this.frag),
                  (t.data.id = this.id),
                  i.trigger(t.event, t.data);
            }
        }
        configureTransmuxer(e) {
          let { transmuxer: t } = this;
          this.workerContext
            ? this.workerContext.worker.postMessage({
                cmd: "configure",
                config: e,
              })
            : t && t.configure(e);
        }
        handleTransmuxComplete(e) {
          (e.chunkMeta.transmuxing.end = self.performance.now()),
            this.onTransmuxComplete(e);
        }
      }
      class rg extends iy {
        constructor(e, t, i) {
          super(e, t, i, "[audio-stream-controller]", tn.AUDIO),
            (this.videoBuffer = null),
            (this.videoTrackCC = -1),
            (this.waitingVideoCC = -1),
            (this.bufferedTrack = null),
            (this.switchingTrack = null),
            (this.trackId = -1),
            (this.waitingData = null),
            (this.mainDetails = null),
            (this.flushing = !1),
            (this.bufferFlushed = !1),
            (this.cachedTrackLoadedData = null),
            this._registerListeners();
        }
        onHandlerDestroying() {
          this._unregisterListeners(),
            super.onHandlerDestroying(),
            (this.mainDetails = null),
            (this.bufferedTrack = null),
            (this.switchingTrack = null);
        }
        _registerListeners() {
          let { hls: e } = this;
          e.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(C.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
            e.on(C.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.on(C.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.on(C.ERROR, this.onError, this),
            e.on(C.BUFFER_RESET, this.onBufferReset, this),
            e.on(C.BUFFER_CREATED, this.onBufferCreated, this),
            e.on(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(C.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.on(C.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.on(C.FRAG_BUFFERED, this.onFragBuffered, this);
        }
        _unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(C.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
            e.off(C.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.off(C.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.off(C.ERROR, this.onError, this),
            e.off(C.BUFFER_RESET, this.onBufferReset, this),
            e.off(C.BUFFER_CREATED, this.onBufferCreated, this),
            e.off(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(C.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.off(C.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.off(C.FRAG_BUFFERED, this.onFragBuffered, this);
        }
        onInitPtsFound(e, { frag: t, id: i, initPTS: r, timescale: s }) {
          if ("main" === i) {
            let e = t.cc;
            (this.initPTS[t.cc] = { baseTime: r, timescale: s }),
              this.log(`InitPTS for cc: ${e} found from main: ${r}`),
              (this.videoTrackCC = e),
              this.state === iT.WAITING_INIT_PTS && this.tick();
          }
        }
        startLoad(e) {
          if (!this.levels) {
            (this.startPosition = e), (this.state = iT.STOPPED);
            return;
          }
          let t = this.lastCurrentTime;
          this.stopLoad(),
            this.setInterval(100),
            t > 0 && -1 === e
              ? (this.log(
                  `Override startPosition with lastCurrentTime @${t.toFixed(3)}`,
                ),
                (e = t),
                (this.state = iT.IDLE))
              : ((this.loadedmetadata = !1), (this.state = iT.WAITING_TRACK)),
            (this.nextLoadPosition =
              this.startPosition =
              this.lastCurrentTime =
                e),
            this.tick();
        }
        doTick() {
          var e, t;
          switch (this.state) {
            case iT.IDLE:
              this.doTickIdle();
              break;
            case iT.WAITING_TRACK: {
              let { levels: t, trackId: i } = this,
                r =
                  null == t ? void 0 : null == (e = t[i]) ? void 0 : e.details;
              if (r) {
                if (this.waitForCdnTuneIn(r)) break;
                this.state = iT.WAITING_INIT_PTS;
              }
              break;
            }
            case iT.FRAG_LOADING_WAITING_RETRY: {
              let e = performance.now(),
                i = this.retryDate;
              if (!i || e >= i || (null != (t = this.media) && t.seeking)) {
                let { levels: e, trackId: t } = this;
                this.log("RetryDate reached, switch back to IDLE state"),
                  this.resetStartWhenNotLoaded(
                    (null == e ? void 0 : e[t]) || null,
                  ),
                  (this.state = iT.IDLE);
              }
              break;
            }
            case iT.WAITING_INIT_PTS: {
              let e = this.waitingData;
              if (e) {
                let { frag: t, part: i, cache: r, complete: s } = e;
                if (void 0 !== this.initPTS[t.cc]) {
                  (this.waitingData = null),
                    (this.waitingVideoCC = -1),
                    (this.state = iT.FRAG_LOADING);
                  let e = {
                    frag: t,
                    part: i,
                    payload: r.flush(),
                    networkDetails: null,
                  };
                  this._handleFragmentLoadProgress(e),
                    s && super._handleFragmentLoadComplete(e);
                } else if (this.videoTrackCC !== this.waitingVideoCC)
                  this.log(
                    `Waiting fragment cc (${t.cc}) cancelled because video is at cc ${this.videoTrackCC}`,
                  ),
                    this.clearWaitingFragment();
                else {
                  let e = this.getLoadPosition(),
                    i = ie.bufferInfo(
                      this.mediaBuffer,
                      e,
                      this.config.maxBufferHole,
                    );
                  0 > tV(i.end, this.config.maxFragLookUpTolerance, t) &&
                    (this.log(
                      `Waiting fragment cc (${t.cc}) @ ${t.start} cancelled because another fragment at ${i.end} is needed`,
                    ),
                    this.clearWaitingFragment());
                }
              } else this.state = iT.IDLE;
            }
          }
          this.onTickEnd();
        }
        clearWaitingFragment() {
          let e = this.waitingData;
          e &&
            (this.fragmentTracker.removeFragment(e.frag),
            (this.waitingData = null),
            (this.waitingVideoCC = -1),
            (this.state = iT.IDLE));
        }
        resetLoadingState() {
          this.clearWaitingFragment(), super.resetLoadingState();
        }
        onTickEnd() {
          let { media: e } = this;
          null != e && e.readyState && (this.lastCurrentTime = e.currentTime);
        }
        doTickIdle() {
          let { hls: e, levels: t, media: i, trackId: r } = this,
            s = e.config;
          if (
            !this.buffering ||
            (!i && (this.startFragRequested || !s.startFragPrefetch)) ||
            !(null != t && t[r])
          )
            return;
          let a = t[r],
            n = a.details;
          if (
            !n ||
            (n.live && this.levelLastLoaded !== a) ||
            this.waitForCdnTuneIn(n)
          ) {
            this.state = iT.WAITING_TRACK;
            return;
          }
          let l = this.mediaBuffer ? this.mediaBuffer : this.media;
          this.bufferFlushed &&
            l &&
            ((this.bufferFlushed = !1),
            this.afterBufferFlushed(l, K.AUDIO, tn.AUDIO));
          let o = this.getFwdBufferInfo(l, tn.AUDIO);
          if (null === o) return;
          if (!this.switchingTrack && this._streamEnded(o, n)) {
            e.trigger(C.BUFFER_EOS, { type: "audio" }), (this.state = iT.ENDED);
            return;
          }
          let h = this.getFwdBufferInfo(
              this.videoBuffer ? this.videoBuffer : this.media,
              tn.MAIN,
            ),
            d = o.len,
            u = this.getMaxBufferLength(null == h ? void 0 : h.len),
            c = n.fragments,
            f = c[0].start,
            g = this.getLoadPosition(),
            m = this.flushing ? g : o.end;
          if (
            (this.switchingTrack &&
              i &&
              n.PTSKnown &&
              g < f &&
              (o.end > f || o.nextStart) &&
              (this.log(
                "Alt audio track ahead of main track, seek to start of alt audio track",
              ),
              (i.currentTime = f + 0.05)),
            d >= u && !this.switchingTrack && m < c[c.length - 1].start)
          )
            return;
          let p = this.getNextFragment(m, n),
            E = !1;
          if (
            (p &&
              this.isLoopLoading(p, m) &&
              ((E = !!p.gap),
              (p = this.getNextFragmentLoopLoading(p, n, o, tn.MAIN, u))),
            !p)
          ) {
            this.bufferFlushed = !0;
            return;
          }
          let T = h && p.start > h.end + n.targetduration;
          if (T || (!(null != h && h.len) && o.len)) {
            let e = this.getAppendedFrag(p.start, tn.MAIN);
            if (
              null === e ||
              (E || (E = !!e.gap || (!!T && 0 === h.len)),
              (T && !E) || (E && o.nextStart && o.nextStart < e.end))
            )
              return;
          }
          this.loadFragment(p, a, m);
        }
        getMaxBufferLength(e) {
          let t = super.getMaxBufferLength();
          return e
            ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength)
            : t;
        }
        onMediaDetaching() {
          (this.videoBuffer = null),
            (this.bufferFlushed = this.flushing = !1),
            super.onMediaDetaching();
        }
        onAudioTracksUpdated(e, { audioTracks: t }) {
          this.resetTransmuxer(), (this.levels = t.map((e) => new tb(e)));
        }
        onAudioTrackSwitching(e, t) {
          let i = !!t.url;
          this.trackId = t.id;
          let { fragCurrent: r } = this;
          r && (r.abortRequests(), this.removeUnbufferedFrags(r.start)),
            this.resetLoadingState(),
            i ? this.setInterval(100) : this.resetTransmuxer(),
            i
              ? ((this.switchingTrack = t),
                (this.state = iT.IDLE),
                this.flushAudioIfNeeded(t))
              : ((this.switchingTrack = null),
                (this.bufferedTrack = t),
                (this.state = iT.STOPPED)),
            this.tick();
        }
        onManifestLoading() {
          this.fragmentTracker.removeAllFragments(),
            (this.startPosition = this.lastCurrentTime = 0),
            (this.bufferFlushed = this.flushing = !1),
            (this.levels =
              this.mainDetails =
              this.waitingData =
              this.bufferedTrack =
              this.cachedTrackLoadedData =
              this.switchingTrack =
                null),
            (this.startFragRequested = !1),
            (this.trackId = this.videoTrackCC = this.waitingVideoCC = -1);
        }
        onLevelLoaded(e, t) {
          (this.mainDetails = t.details),
            null !== this.cachedTrackLoadedData &&
              (this.hls.trigger(
                C.AUDIO_TRACK_LOADED,
                this.cachedTrackLoadedData,
              ),
              (this.cachedTrackLoadedData = null));
        }
        onAudioTrackLoaded(e, t) {
          var i, r;
          if (null == this.mainDetails) {
            this.cachedTrackLoadedData = t;
            return;
          }
          let { levels: s } = this,
            { details: a, id: n } = t;
          if (!s) {
            this.warn(`Audio tracks were reset while loading level ${n}`);
            return;
          }
          this.log(
            `Audio track ${n} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`,
          );
          let l = s[n],
            o = 0;
          if (a.live || (null != (i = l.details) && i.live)) {
            this.checkLiveUpdate(a);
            let e = this.mainDetails;
            if (a.deltaUpdateFailed || !e) return;
            !l.details && a.hasProgramDateTime && e.hasProgramDateTime
              ? (il(a, e), (o = a.fragments[0].start))
              : (o = this.alignPlaylists(
                  a,
                  l.details,
                  null == (r = this.levelLastLoaded) ? void 0 : r.details,
                ));
          }
          (l.details = a),
            (this.levelLastLoaded = l),
            this.startFragRequested ||
              (!this.mainDetails && a.live) ||
              this.setStartPosition(this.mainDetails || a, o),
            this.state !== iT.WAITING_TRACK ||
              this.waitForCdnTuneIn(a) ||
              (this.state = iT.IDLE),
            this.tick();
        }
        _handleFragmentLoadProgress(e) {
          var t;
          let { frag: i, part: r, payload: s } = e,
            { config: a, trackId: n, levels: l } = this;
          if (!l) {
            this.warn(
              `Audio tracks were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`,
            );
            return;
          }
          let o = l[n];
          if (!o) {
            this.warn("Audio track is undefined on fragment load progress");
            return;
          }
          let h = o.details;
          if (!h) {
            this.warn(
              "Audio track details undefined on fragment load progress",
            ),
              this.removeUnbufferedFrags(i.start);
            return;
          }
          let d = a.defaultAudioCodec || o.audioCodec || "mp4a.40.2",
            u = this.transmuxer;
          u ||
            (u = this.transmuxer =
              new rf(
                this.hls,
                tn.AUDIO,
                this._handleTransmuxComplete.bind(this),
                this._handleTransmuxerFlush.bind(this),
              ));
          let c = this.initPTS[i.cc],
            f = null == (t = i.initSegment) ? void 0 : t.data;
          if (void 0 !== c) {
            let e = r ? r.index : -1,
              t = new it(
                i.level,
                i.sn,
                i.stats.chunkCount,
                s.byteLength,
                e,
                -1 !== e,
              );
            u.push(s, f, d, "", i, r, h.totalduration, !1, t, c);
          } else {
            this.log(
              `Unknown video PTS for cc ${i.cc}, waiting for video PTS before demuxing audio frag ${i.sn} of [${h.startSN} ,${h.endSN}],track ${n}`,
            );
            let { cache: e } = (this.waitingData = this.waitingData || {
              frag: i,
              part: r,
              cache: new iv(),
              complete: !1,
            });
            e.push(new Uint8Array(s)),
              (this.waitingVideoCC = this.videoTrackCC),
              (this.state = iT.WAITING_INIT_PTS);
          }
        }
        _handleFragmentLoadComplete(e) {
          if (this.waitingData) {
            this.waitingData.complete = !0;
            return;
          }
          super._handleFragmentLoadComplete(e);
        }
        onBufferReset() {
          (this.mediaBuffer = this.videoBuffer = null),
            (this.loadedmetadata = !1);
        }
        onBufferCreated(e, t) {
          let i = t.tracks.audio;
          i && (this.mediaBuffer = i.buffer || null),
            t.tracks.video &&
              (this.videoBuffer = t.tracks.video.buffer || null);
        }
        onFragBuffered(e, t) {
          let { frag: i, part: r } = t;
          if (i.type !== tn.AUDIO) {
            if (!this.loadedmetadata && i.type === tn.MAIN) {
              let e = this.videoBuffer || this.media;
              e && ie.getBuffered(e).length && (this.loadedmetadata = !0);
            }
            return;
          }
          if (this.fragContextChanged(i)) {
            this.warn(
              `Fragment ${i.sn}${r ? " p: " + r.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`,
            );
            return;
          }
          if ("initSegment" !== i.sn) {
            this.fragPrevious = i;
            let e = this.switchingTrack;
            e &&
              ((this.bufferedTrack = e),
              (this.switchingTrack = null),
              this.hls.trigger(C.AUDIO_TRACK_SWITCHED, D({}, e)));
          }
          this.fragBufferedComplete(i, r);
        }
        onError(e, t) {
          var i;
          if (t.fatal) {
            this.state = iT.ERROR;
            return;
          }
          switch (t.details) {
            case P.FRAG_GAP:
            case P.FRAG_PARSING_ERROR:
            case P.FRAG_DECRYPT_ERROR:
            case P.FRAG_LOAD_ERROR:
            case P.FRAG_LOAD_TIMEOUT:
            case P.KEY_LOAD_ERROR:
            case P.KEY_LOAD_TIMEOUT:
              this.onFragmentOrKeyLoadError(tn.AUDIO, t);
              break;
            case P.AUDIO_TRACK_LOAD_ERROR:
            case P.AUDIO_TRACK_LOAD_TIMEOUT:
            case P.LEVEL_PARSING_ERROR:
              t.levelRetry ||
                this.state !== iT.WAITING_TRACK ||
                (null == (i = t.context) ? void 0 : i.type) !==
                  ta.AUDIO_TRACK ||
                (this.state = iT.IDLE);
              break;
            case P.BUFFER_APPEND_ERROR:
            case P.BUFFER_FULL_ERROR:
              if (!t.parent || "audio" !== t.parent) return;
              if (t.details === P.BUFFER_APPEND_ERROR) {
                this.resetLoadingState();
                return;
              }
              this.reduceLengthAndFlushBuffer(t) &&
                ((this.bufferedTrack = null),
                super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
              break;
            case P.INTERNAL_EXCEPTION:
              this.recoverWorkerError(t);
          }
        }
        onBufferFlushing(e, { type: t }) {
          t !== K.VIDEO && (this.flushing = !0);
        }
        onBufferFlushed(e, { type: t }) {
          if (t !== K.VIDEO) {
            (this.flushing = !1),
              (this.bufferFlushed = !0),
              this.state === iT.ENDED && (this.state = iT.IDLE);
            let e = this.mediaBuffer || this.media;
            e && (this.afterBufferFlushed(e, t, tn.AUDIO), this.tick());
          }
        }
        _handleTransmuxComplete(e) {
          var t;
          let i = "audio",
            { hls: r } = this,
            { remuxResult: s, chunkMeta: a } = e,
            n = this.getCurrentContext(a);
          if (!n) {
            this.resetWhenMissingContext(a);
            return;
          }
          let { frag: l, part: o, level: h } = n,
            { details: d } = h,
            { audio: u, text: c, id3: f, initSegment: g } = s;
          if (this.fragContextChanged(l) || !d) {
            this.fragmentTracker.removeFragment(l);
            return;
          }
          if (
            ((this.state = iT.PARSING),
            this.switchingTrack &&
              u &&
              this.completeAudioSwitch(this.switchingTrack),
            null != g && g.tracks)
          ) {
            let e = l.initSegment || l;
            this._bufferInitSegment(h, g.tracks, e, a),
              r.trigger(C.FRAG_PARSING_INIT_SEGMENT, {
                frag: e,
                id: i,
                tracks: g.tracks,
              });
          }
          if (u) {
            let { startPTS: e, endPTS: t, startDTS: i, endDTS: r } = u;
            o &&
              (o.elementaryStreams[K.AUDIO] = {
                startPTS: e,
                endPTS: t,
                startDTS: i,
                endDTS: r,
              }),
              l.setElementaryStreamInfo(K.AUDIO, e, t, i, r),
              this.bufferFragmentData(u, l, o, a);
          }
          if (null != f && null != (t = f.samples) && t.length) {
            let e = I({ id: i, frag: l, details: d }, f);
            r.trigger(C.FRAG_PARSING_METADATA, e);
          }
          if (c) {
            let e = I({ id: i, frag: l, details: d }, c);
            r.trigger(C.FRAG_PARSING_USERDATA, e);
          }
        }
        _bufferInitSegment(e, t, i, r) {
          if (this.state !== iT.PARSING) return;
          t.video && delete t.video;
          let s = t.audio;
          if (!s) return;
          s.id = "audio";
          let a = e.audioCodec;
          this.log(
            `Init audio buffer, container:${s.container}, codecs[level/parsed]=[${a}/${s.codec}]`,
          ),
            a && 1 === a.split(",").length && (s.levelCodec = a),
            this.hls.trigger(C.BUFFER_CODECS, t);
          let n = s.initSegment;
          if (null != n && n.byteLength) {
            let e = {
              type: "audio",
              frag: i,
              part: null,
              chunkMeta: r,
              parent: i.type,
              data: n,
            };
            this.hls.trigger(C.BUFFER_APPENDING, e);
          }
          this.tickImmediate();
        }
        loadFragment(e, t, i) {
          let r = this.fragmentTracker.getState(e);
          if (
            ((this.fragCurrent = e),
            this.switchingTrack || r === t5.NOT_LOADED || r === t5.PARTIAL)
          ) {
            var s;
            if ("initSegment" === e.sn) this._loadInitSegment(e, t);
            else if (null != (s = t.details) && s.live && !this.initPTS[e.cc]) {
              this.log(
                `Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`,
              ),
                (this.state = iT.WAITING_INIT_PTS);
              let i = this.mainDetails;
              i &&
                i.fragments[0].start !== t.details.fragments[0].start &&
                il(t.details, i);
            } else (this.startFragRequested = !0), super.loadFragment(e, t, i);
          } else this.clearTrackerIfNeeded(e);
        }
        flushAudioIfNeeded(e) {
          if (this.media && this.bufferedTrack) {
            let {
              name: t,
              lang: i,
              assocLang: r,
              characteristics: s,
              audioCodec: a,
              channels: n,
            } = this.bufferedTrack;
            t0(
              {
                name: t,
                lang: i,
                assocLang: r,
                characteristics: s,
                audioCodec: a,
                channels: n,
              },
              e,
              t1,
            ) ||
              (this.log("Switching audio track : flushing all audio"),
              super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"),
              (this.bufferedTrack = null));
          }
        }
        completeAudioSwitch(e) {
          let { hls: t } = this;
          this.flushAudioIfNeeded(e),
            (this.bufferedTrack = e),
            (this.switchingTrack = null),
            t.trigger(C.AUDIO_TRACK_SWITCHED, D({}, e));
        }
      }
      function rm(e, t) {
        if (e.length !== t.length) return !1;
        for (let i = 0; i < e.length; i++)
          if (!rp(e[i].attrs, t[i].attrs)) return !1;
        return !0;
      }
      function rp(e, t, i) {
        let r = e["STABLE-RENDITION-ID"];
        return r && !i
          ? r === t["STABLE-RENDITION-ID"]
          : !(
              i || [
                "LANGUAGE",
                "NAME",
                "CHARACTERISTICS",
                "AUTOSELECT",
                "DEFAULT",
                "FORCED",
                "ASSOC-LANGUAGE",
              ]
            ).some((i) => e[i] !== t[i]);
      }
      function rE(e, t) {
        return (
          t.label.toLowerCase() === e.name.toLowerCase() &&
          (!t.language ||
            t.language.toLowerCase() === (e.lang || "").toLowerCase())
        );
      }
      class rT extends tj {
        constructor(e) {
          super(e, "[audio-track-controller]"),
            (this.tracks = []),
            (this.groupIds = null),
            (this.tracksInGroup = []),
            (this.trackId = -1),
            (this.currentTrack = null),
            (this.selectDefaultTrack = !0),
            this.registerListeners();
        }
        registerListeners() {
          let { hls: e } = this;
          e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(C.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.on(C.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.on(C.ERROR, this.onError, this);
        }
        unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(C.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.off(C.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.off(C.ERROR, this.onError, this);
        }
        destroy() {
          this.unregisterListeners(),
            (this.tracks.length = 0),
            (this.tracksInGroup.length = 0),
            (this.currentTrack = null),
            super.destroy();
        }
        onManifestLoading() {
          (this.tracks = []),
            (this.tracksInGroup = []),
            (this.groupIds = null),
            (this.currentTrack = null),
            (this.trackId = -1),
            (this.selectDefaultTrack = !0);
        }
        onManifestParsed(e, t) {
          this.tracks = t.audioTracks || [];
        }
        onAudioTrackLoaded(e, t) {
          let { id: i, groupId: r, details: s } = t,
            a = this.tracksInGroup[i];
          if (!a || a.groupId !== r) {
            this.warn(
              `Audio track with id:${i} and group:${r} not found in active group ${null == a ? void 0 : a.groupId}`,
            );
            return;
          }
          let n = a.details;
          (a.details = t.details),
            this.log(
              `Audio track ${i} "${a.name}" lang:${a.lang} group:${r} loaded [${s.startSN}-${s.endSN}]`,
            ),
            i === this.trackId && this.playlistLoaded(i, t, n);
        }
        onLevelLoading(e, t) {
          this.switchLevel(t.level);
        }
        onLevelSwitching(e, t) {
          this.switchLevel(t.level);
        }
        switchLevel(e) {
          let t = this.hls.levels[e];
          if (!t) return;
          let i = t.audioGroups || null,
            r = this.groupIds,
            s = this.currentTrack;
          if (
            !i ||
            (null == r ? void 0 : r.length) !==
              (null == i ? void 0 : i.length) ||
            (null != i &&
              i.some((e) => (null == r ? void 0 : r.indexOf(e)) === -1))
          ) {
            (this.groupIds = i),
              (this.trackId = -1),
              (this.currentTrack = null);
            let e = this.tracks.filter(
              (e) => !i || -1 !== i.indexOf(e.groupId),
            );
            if (e.length)
              this.selectDefaultTrack &&
                !e.some((e) => e.default) &&
                (this.selectDefaultTrack = !1),
                e.forEach((e, t) => {
                  e.id = t;
                });
            else if (!s && !this.tracksInGroup.length) return;
            this.tracksInGroup = e;
            let t = this.hls.config.audioPreference;
            if (!s && t) {
              let i = tZ(t, e, t1);
              if (i > -1) s = e[i];
              else {
                let e = tZ(t, this.tracks);
                s = this.tracks[e];
              }
            }
            let r = this.findTrackId(s);
            -1 === r && s && (r = this.findTrackId(null)),
              this.log(
                `Updating audio tracks, ${e.length} track(s) found in group(s): ${null == i ? void 0 : i.join(",")}`,
              ),
              this.hls.trigger(C.AUDIO_TRACKS_UPDATED, { audioTracks: e });
            let n = this.trackId;
            if (-1 !== r && -1 === n) this.setAudioTrack(r);
            else if (e.length && -1 === n) {
              var a;
              let t = Error(
                `No audio track selected for current audio group-ID(s): ${null == (a = this.groupIds) ? void 0 : a.join(",")} track count: ${e.length}`,
              );
              this.warn(t.message),
                this.hls.trigger(C.ERROR, {
                  type: w.MEDIA_ERROR,
                  details: P.AUDIO_TRACK_LOAD_ERROR,
                  fatal: !0,
                  error: t,
                });
            }
          } else
            this.shouldReloadPlaylist(s) && this.setAudioTrack(this.trackId);
        }
        onError(e, t) {
          !t.fatal &&
            t.context &&
            (t.context.type !== ta.AUDIO_TRACK ||
              t.context.id !== this.trackId ||
              (this.groupIds &&
                -1 === this.groupIds.indexOf(t.context.groupId)) ||
              ((this.requestScheduled = -1), this.checkRetry(t)));
        }
        get allAudioTracks() {
          return this.tracks;
        }
        get audioTracks() {
          return this.tracksInGroup;
        }
        get audioTrack() {
          return this.trackId;
        }
        set audioTrack(e) {
          (this.selectDefaultTrack = !1), this.setAudioTrack(e);
        }
        setAudioOption(e) {
          let t = this.hls;
          if (((t.config.audioPreference = e), e)) {
            let i = this.allAudioTracks;
            if (((this.selectDefaultTrack = !1), i.length)) {
              let r = this.currentTrack;
              if (r && t0(e, r, t1)) return r;
              let s = tZ(e, this.tracksInGroup, t1);
              if (s > -1) {
                let e = this.tracksInGroup[s];
                return this.setAudioTrack(s), e;
              }
              if (r) {
                let r = t.loadLevel;
                -1 === r && (r = t.firstAutoLevel);
                let s = (function (e, t, i, r, s) {
                  let a = t[r],
                    n = t.reduce((e, t, i) => {
                      let r = t.uri;
                      return (e[r] || (e[r] = [])).push(i), e;
                    }, {})[a.uri];
                  n.length > 1 && (r = Math.max.apply(Math, n));
                  let l = a.videoRange,
                    o = a.frameRate,
                    h = a.codecSet.substring(0, 4),
                    d = t2(t, r, (t) => {
                      if (
                        t.videoRange !== l ||
                        t.frameRate !== o ||
                        t.codecSet.substring(0, 4) !== h
                      )
                        return !1;
                      let r = t.audioGroups;
                      return (
                        tZ(
                          e,
                          i.filter((e) => !r || -1 !== r.indexOf(e.groupId)),
                          s,
                        ) > -1
                      );
                    });
                  return d > -1
                    ? d
                    : t2(t, r, (t) => {
                        let r = t.audioGroups;
                        return (
                          tZ(
                            e,
                            i.filter((e) => !r || -1 !== r.indexOf(e.groupId)),
                            s,
                          ) > -1
                        );
                      });
                })(e, t.levels, i, r, t1);
                if (-1 === s) return null;
                t.nextLoadLevel = s;
              }
              if (e.channels || e.audioCodec) {
                let t = tZ(e, i);
                if (t > -1) return i[t];
              }
            }
          }
          return null;
        }
        setAudioTrack(e) {
          let t = this.tracksInGroup;
          if (e < 0 || e >= t.length) {
            this.warn(`Invalid audio track id: ${e}`);
            return;
          }
          this.clearTimer(), (this.selectDefaultTrack = !1);
          let i = this.currentTrack,
            r = t[e],
            s = r.details && !r.details.live;
          if (
            (e === this.trackId && r === i && s) ||
            (this.log(
              `Switching to audio-track ${e} "${r.name}" lang:${r.lang} group:${r.groupId} channels:${r.channels}`,
            ),
            (this.trackId = e),
            (this.currentTrack = r),
            this.hls.trigger(C.AUDIO_TRACK_SWITCHING, D({}, r)),
            s)
          )
            return;
          let a = this.switchParams(
            r.url,
            null == i ? void 0 : i.details,
            r.details,
          );
          this.loadPlaylist(a);
        }
        findTrackId(e) {
          let t = this.tracksInGroup;
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ((!this.selectDefaultTrack || r.default) && (!e || t0(e, r, t1)))
              return i;
          }
          if (e) {
            let {
              name: i,
              lang: r,
              assocLang: s,
              characteristics: a,
              audioCodec: n,
              channels: l,
            } = e;
            for (let e = 0; e < t.length; e++)
              if (
                t0(
                  {
                    name: i,
                    lang: r,
                    assocLang: s,
                    characteristics: a,
                    audioCodec: n,
                    channels: l,
                  },
                  t[e],
                  t1,
                )
              )
                return e;
            for (let i = 0; i < t.length; i++) {
              let r = t[i];
              if (
                rp(e.attrs, r.attrs, [
                  "LANGUAGE",
                  "ASSOC-LANGUAGE",
                  "CHARACTERISTICS",
                ])
              )
                return i;
            }
            for (let i = 0; i < t.length; i++) {
              let r = t[i];
              if (rp(e.attrs, r.attrs, ["LANGUAGE"])) return i;
            }
          }
          return -1;
        }
        loadPlaylist(e) {
          let t = this.currentTrack;
          if (this.shouldLoadPlaylist(t) && t) {
            super.loadPlaylist();
            let i = t.id,
              r = t.groupId,
              s = t.url;
            if (e)
              try {
                s = e.addDirectives(s);
              } catch (e) {
                this.warn(
                  `Could not construct new URL with HLS Delivery Directives: ${e}`,
                );
              }
            this.log(
              `loading audio-track playlist ${i} "${t.name}" lang:${t.lang} group:${r}`,
            ),
              this.clearTimer(),
              this.hls.trigger(C.AUDIO_TRACK_LOADING, {
                url: s,
                id: i,
                groupId: r,
                deliveryDirectives: e || null,
              });
          }
        }
      }
      class ry extends iy {
        constructor(e, t, i) {
          super(e, t, i, "[subtitle-stream-controller]", tn.SUBTITLE),
            (this.currentTrackId = -1),
            (this.tracksBuffered = []),
            (this.mainDetails = null),
            this._registerListeners();
        }
        onHandlerDestroying() {
          this._unregisterListeners(),
            super.onHandlerDestroying(),
            (this.mainDetails = null);
        }
        _registerListeners() {
          let { hls: e } = this;
          e.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(C.ERROR, this.onError, this),
            e.on(C.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
            e.on(C.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
            e.on(C.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.on(C.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
            e.on(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(C.FRAG_BUFFERED, this.onFragBuffered, this);
        }
        _unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(C.ERROR, this.onError, this),
            e.off(
              C.SUBTITLE_TRACKS_UPDATED,
              this.onSubtitleTracksUpdated,
              this,
            ),
            e.off(C.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
            e.off(C.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.off(
              C.SUBTITLE_FRAG_PROCESSED,
              this.onSubtitleFragProcessed,
              this,
            ),
            e.off(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(C.FRAG_BUFFERED, this.onFragBuffered, this);
        }
        startLoad(e) {
          this.stopLoad(),
            (this.state = iT.IDLE),
            this.setInterval(500),
            (this.nextLoadPosition =
              this.startPosition =
              this.lastCurrentTime =
                e),
            this.tick();
        }
        onManifestLoading() {
          (this.mainDetails = null), this.fragmentTracker.removeAllFragments();
        }
        onMediaDetaching() {
          (this.tracksBuffered = []), super.onMediaDetaching();
        }
        onLevelLoaded(e, t) {
          this.mainDetails = t.details;
        }
        onSubtitleFragProcessed(e, t) {
          let i;
          let { frag: r, success: s } = t;
          if (((this.fragPrevious = r), (this.state = iT.IDLE), !s)) return;
          let a = this.tracksBuffered[this.currentTrackId];
          if (!a) return;
          let n = r.start;
          for (let e = 0; e < a.length; e++)
            if (n >= a[e].start && n <= a[e].end) {
              i = a[e];
              break;
            }
          let l = r.start + r.duration;
          i ? (i.end = l) : ((i = { start: n, end: l }), a.push(i)),
            this.fragmentTracker.fragBuffered(r),
            this.fragBufferedComplete(r, null);
        }
        onBufferFlushing(e, t) {
          let { startOffset: i, endOffset: r } = t;
          if (0 === i && r !== Number.POSITIVE_INFINITY) {
            let e = r - 1;
            if (e <= 0) return;
            (t.endOffsetSubtitles = Math.max(0, e)),
              this.tracksBuffered.forEach((t) => {
                for (let i = 0; i < t.length; ) {
                  if (t[i].end <= e) {
                    t.shift();
                    continue;
                  }
                  if (t[i].start < e) t[i].start = e;
                  else break;
                  i++;
                }
              }),
              this.fragmentTracker.removeFragmentsInRange(i, e, tn.SUBTITLE);
          }
        }
        onFragBuffered(e, t) {
          if (!this.loadedmetadata && t.frag.type === tn.MAIN) {
            var i;
            null != (i = this.media) &&
              i.buffered.length &&
              (this.loadedmetadata = !0);
          }
        }
        onError(e, t) {
          let i = t.frag;
          (null == i ? void 0 : i.type) === tn.SUBTITLE &&
            (t.details === P.FRAG_GAP &&
              this.fragmentTracker.fragBuffered(i, !0),
            this.fragCurrent && this.fragCurrent.abortRequests(),
            this.state !== iT.STOPPED && (this.state = iT.IDLE));
        }
        onSubtitleTracksUpdated(e, { subtitleTracks: t }) {
          if (this.levels && rm(this.levels, t)) {
            this.levels = t.map((e) => new tb(e));
            return;
          }
          (this.tracksBuffered = []),
            (this.levels = t.map((e) => {
              let t = new tb(e);
              return (this.tracksBuffered[t.id] = []), t;
            })),
            this.fragmentTracker.removeFragmentsInRange(
              0,
              Number.POSITIVE_INFINITY,
              tn.SUBTITLE,
            ),
            (this.fragPrevious = null),
            (this.mediaBuffer = null);
        }
        onSubtitleTrackSwitch(e, t) {
          var i;
          if (
            ((this.currentTrackId = t.id),
            !(null != (i = this.levels) && i.length) ||
              -1 === this.currentTrackId)
          ) {
            this.clearInterval();
            return;
          }
          let r = this.levels[this.currentTrackId];
          null != r && r.details
            ? (this.mediaBuffer = this.mediaBufferTimeRanges)
            : (this.mediaBuffer = null),
            r && this.setInterval(500);
        }
        onSubtitleTrackLoaded(e, t) {
          var i, r;
          let { currentTrackId: s, levels: a } = this,
            { details: n, id: l } = t;
          if (!a) {
            this.warn(`Subtitle tracks were reset while loading level ${l}`);
            return;
          }
          let o = a[l];
          if (l >= a.length || !o) return;
          this.log(
            `Subtitle track ${l} loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""},duration:${n.totalduration}`,
          ),
            (this.mediaBuffer = this.mediaBufferTimeRanges);
          let h = 0;
          if (n.live || (null != (i = o.details) && i.live)) {
            let e = this.mainDetails;
            if (n.deltaUpdateFailed || !e) return;
            let t = e.fragments[0];
            o.details
              ? 0 ===
                  (h = this.alignPlaylists(
                    n,
                    o.details,
                    null == (r = this.levelLastLoaded) ? void 0 : r.details,
                  )) &&
                t &&
                tP(n, (h = t.start))
              : n.hasProgramDateTime && e.hasProgramDateTime
                ? (il(n, e), (h = n.fragments[0].start))
                : t && tP(n, (h = t.start));
          }
          (o.details = n),
            (this.levelLastLoaded = o),
            l === s &&
              (this.startFragRequested ||
                (!this.mainDetails && n.live) ||
                this.setStartPosition(this.mainDetails || n, h),
              this.tick(),
              n.live &&
                !this.fragCurrent &&
                this.media &&
                this.state === iT.IDLE &&
                !tK(null, n.fragments, this.media.currentTime, 0) &&
                (this.warn("Subtitle playlist not aligned with playback"),
                (o.details = void 0)));
        }
        _handleFragmentLoadComplete(e) {
          let { frag: t, payload: i } = e,
            r = t.decryptdata,
            s = this.hls;
          if (
            !this.fragContextChanged(t) &&
            i &&
            i.byteLength > 0 &&
            null != r &&
            r.key &&
            r.iv &&
            "AES-128" === r.method
          ) {
            let e = performance.now();
            this.decrypter
              .decrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer)
              .catch((e) => {
                throw (
                  (s.trigger(C.ERROR, {
                    type: w.MEDIA_ERROR,
                    details: P.FRAG_DECRYPT_ERROR,
                    fatal: !1,
                    error: e,
                    reason: e.message,
                    frag: t,
                  }),
                  e)
                );
              })
              .then((i) => {
                let r = performance.now();
                s.trigger(C.FRAG_DECRYPTED, {
                  frag: t,
                  payload: i,
                  stats: { tstart: e, tdecrypt: r },
                });
              })
              .catch((e) => {
                this.warn(`${e.name}: ${e.message}`), (this.state = iT.IDLE);
              });
          }
        }
        doTick() {
          if (!this.media) {
            this.state = iT.IDLE;
            return;
          }
          if (this.state === iT.IDLE) {
            let { currentTrackId: e, levels: t } = this,
              i = null == t ? void 0 : t[e];
            if (!i || !t.length || !i.details) return;
            let { config: r } = this,
              s = this.getLoadPosition(),
              { end: a, len: n } = ie.bufferedInfo(
                this.tracksBuffered[this.currentTrackId] || [],
                s,
                r.maxBufferHole,
              ),
              l = this.getFwdBufferInfo(this.media, tn.MAIN),
              o = i.details;
            if (
              n >
              this.getMaxBufferLength(null == l ? void 0 : l.len) +
                o.levelTargetDuration
            )
              return;
            let h = o.fragments,
              d = h.length,
              u = o.edge,
              c = null,
              f = this.fragPrevious;
            if (a < u) {
              let e = r.maxFragLookUpTolerance;
              (c = tK(f, h, Math.max(h[0].start, a), a > u - e ? 0 : e)) ||
                !f ||
                !(f.start < h[0].start) ||
                (c = h[0]);
            } else c = h[d - 1];
            if (!c) return;
            if ("initSegment" !== (c = this.mapToInitFragWhenRequired(c)).sn) {
              let e = h[c.sn - o.startSN - 1];
              e &&
                e.cc === c.cc &&
                this.fragmentTracker.getState(e) === t5.NOT_LOADED &&
                (c = e);
            }
            this.fragmentTracker.getState(c) === t5.NOT_LOADED &&
              this.loadFragment(c, i, a);
          }
        }
        getMaxBufferLength(e) {
          let t = super.getMaxBufferLength();
          return e ? Math.max(t, e) : t;
        }
        loadFragment(e, t, i) {
          (this.fragCurrent = e),
            "initSegment" === e.sn
              ? this._loadInitSegment(e, t)
              : ((this.startFragRequested = !0), super.loadFragment(e, t, i));
        }
        get mediaBufferTimeRanges() {
          return new rv(this.tracksBuffered[this.currentTrackId] || []);
        }
      }
      class rv {
        constructor(e) {
          this.buffered = void 0;
          let t = (t, i, r) => {
            if ((i >>>= 0) > r - 1)
              throw new DOMException(
                `Failed to execute '${t}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`,
              );
            return e[i][t];
          };
          this.buffered = {
            get length() {
              return e.length;
            },
            end: (i) => t("end", i, e.length),
            start: (i) => t("start", i, e.length),
          };
        }
      }
      class rS extends tj {
        constructor(e) {
          super(e, "[subtitle-track-controller]"),
            (this.media = null),
            (this.tracks = []),
            (this.groupIds = null),
            (this.tracksInGroup = []),
            (this.trackId = -1),
            (this.currentTrack = null),
            (this.selectDefaultTrack = !0),
            (this.queuedDefaultTrack = -1),
            (this.asyncPollTrackChange = () => this.pollTrackChange(0)),
            (this.useTextTrackPolling = !1),
            (this.subtitlePollingInterval = -1),
            (this._subtitleDisplay = !0),
            (this.onTextTracksChanged = () => {
              if (
                (this.useTextTrackPolling ||
                  self.clearInterval(this.subtitlePollingInterval),
                !this.media || !this.hls.config.renderTextTracksNatively)
              )
                return;
              let e = null,
                t = tg(this.media.textTracks);
              for (let i = 0; i < t.length; i++)
                if ("hidden" === t[i].mode) e = t[i];
                else if ("showing" === t[i].mode) {
                  e = t[i];
                  break;
                }
              let i = this.findTrackForTextTrack(e);
              this.subtitleTrack !== i && this.setSubtitleTrack(i);
            }),
            this.registerListeners();
        }
        destroy() {
          this.unregisterListeners(),
            (this.tracks.length = 0),
            (this.tracksInGroup.length = 0),
            (this.currentTrack = null),
            (this.onTextTracksChanged = this.asyncPollTrackChange = null),
            super.destroy();
        }
        get subtitleDisplay() {
          return this._subtitleDisplay;
        }
        set subtitleDisplay(e) {
          (this._subtitleDisplay = e),
            this.trackId > -1 && this.toggleTrackModes();
        }
        registerListeners() {
          let { hls: e } = this;
          e.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(C.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.on(C.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.on(C.ERROR, this.onError, this);
        }
        unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(C.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.off(C.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.off(C.ERROR, this.onError, this);
        }
        onMediaAttached(e, t) {
          (this.media = t.media),
            this.media &&
              (this.queuedDefaultTrack > -1 &&
                ((this.subtitleTrack = this.queuedDefaultTrack),
                (this.queuedDefaultTrack = -1)),
              (this.useTextTrackPolling = !(
                this.media.textTracks && "onchange" in this.media.textTracks
              )),
              this.useTextTrackPolling
                ? this.pollTrackChange(500)
                : this.media.textTracks.addEventListener(
                    "change",
                    this.asyncPollTrackChange,
                  ));
        }
        pollTrackChange(e) {
          self.clearInterval(this.subtitlePollingInterval),
            (this.subtitlePollingInterval = self.setInterval(
              this.onTextTracksChanged,
              e,
            ));
        }
        onMediaDetaching() {
          this.media &&
            (self.clearInterval(this.subtitlePollingInterval),
            this.useTextTrackPolling ||
              this.media.textTracks.removeEventListener(
                "change",
                this.asyncPollTrackChange,
              ),
            this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
            tg(this.media.textTracks).forEach((e) => {
              tc(e);
            }),
            (this.subtitleTrack = -1),
            (this.media = null));
        }
        onManifestLoading() {
          (this.tracks = []),
            (this.groupIds = null),
            (this.tracksInGroup = []),
            (this.trackId = -1),
            (this.currentTrack = null),
            (this.selectDefaultTrack = !0);
        }
        onManifestParsed(e, t) {
          this.tracks = t.subtitleTracks;
        }
        onSubtitleTrackLoaded(e, t) {
          let { id: i, groupId: r, details: s } = t,
            a = this.tracksInGroup[i];
          if (!a || a.groupId !== r) {
            this.warn(
              `Subtitle track with id:${i} and group:${r} not found in active group ${null == a ? void 0 : a.groupId}`,
            );
            return;
          }
          let n = a.details;
          (a.details = t.details),
            this.log(
              `Subtitle track ${i} "${a.name}" lang:${a.lang} group:${r} loaded [${s.startSN}-${s.endSN}]`,
            ),
            i === this.trackId && this.playlistLoaded(i, t, n);
        }
        onLevelLoading(e, t) {
          this.switchLevel(t.level);
        }
        onLevelSwitching(e, t) {
          this.switchLevel(t.level);
        }
        switchLevel(e) {
          let t = this.hls.levels[e];
          if (!t) return;
          let i = t.subtitleGroups || null,
            r = this.groupIds,
            s = this.currentTrack;
          if (
            !i ||
            (null == r ? void 0 : r.length) !==
              (null == i ? void 0 : i.length) ||
            (null != i &&
              i.some((e) => (null == r ? void 0 : r.indexOf(e)) === -1))
          ) {
            (this.groupIds = i),
              (this.trackId = -1),
              (this.currentTrack = null);
            let e = this.tracks.filter(
              (e) => !i || -1 !== i.indexOf(e.groupId),
            );
            if (e.length)
              this.selectDefaultTrack &&
                !e.some((e) => e.default) &&
                (this.selectDefaultTrack = !1),
                e.forEach((e, t) => {
                  e.id = t;
                });
            else if (!s && !this.tracksInGroup.length) return;
            this.tracksInGroup = e;
            let t = this.hls.config.subtitlePreference;
            if (!s && t) {
              this.selectDefaultTrack = !1;
              let i = tZ(t, e);
              if (i > -1) s = e[i];
              else {
                let e = tZ(t, this.tracks);
                s = this.tracks[e];
              }
            }
            let r = this.findTrackId(s);
            -1 === r && s && (r = this.findTrackId(null)),
              this.log(
                `Updating subtitle tracks, ${e.length} track(s) found in "${null == i ? void 0 : i.join(",")}" group-id`,
              ),
              this.hls.trigger(C.SUBTITLE_TRACKS_UPDATED, {
                subtitleTracks: e,
              }),
              -1 !== r && -1 === this.trackId && this.setSubtitleTrack(r);
          } else
            this.shouldReloadPlaylist(s) && this.setSubtitleTrack(this.trackId);
        }
        findTrackId(e) {
          let t = this.tracksInGroup,
            i = this.selectDefaultTrack;
          for (let r = 0; r < t.length; r++) {
            let s = t[r];
            if ((!i || s.default) && (i || e) && (!e || t0(s, e))) return r;
          }
          if (e) {
            for (let i = 0; i < t.length; i++) {
              let r = t[i];
              if (
                rp(e.attrs, r.attrs, [
                  "LANGUAGE",
                  "ASSOC-LANGUAGE",
                  "CHARACTERISTICS",
                ])
              )
                return i;
            }
            for (let i = 0; i < t.length; i++) {
              let r = t[i];
              if (rp(e.attrs, r.attrs, ["LANGUAGE"])) return i;
            }
          }
          return -1;
        }
        findTrackForTextTrack(e) {
          if (e) {
            let t = this.tracksInGroup;
            for (let i = 0; i < t.length; i++) if (rE(t[i], e)) return i;
          }
          return -1;
        }
        onError(e, t) {
          !t.fatal &&
            t.context &&
            (t.context.type !== ta.SUBTITLE_TRACK ||
              t.context.id !== this.trackId ||
              (this.groupIds &&
                -1 === this.groupIds.indexOf(t.context.groupId)) ||
              this.checkRetry(t));
        }
        get allSubtitleTracks() {
          return this.tracks;
        }
        get subtitleTracks() {
          return this.tracksInGroup;
        }
        get subtitleTrack() {
          return this.trackId;
        }
        set subtitleTrack(e) {
          (this.selectDefaultTrack = !1), this.setSubtitleTrack(e);
        }
        setSubtitleOption(e) {
          if (((this.hls.config.subtitlePreference = e), e)) {
            let t = this.allSubtitleTracks;
            if (((this.selectDefaultTrack = !1), t.length)) {
              let i = this.currentTrack;
              if (i && t0(e, i)) return i;
              let r = tZ(e, this.tracksInGroup);
              if (r > -1) {
                let e = this.tracksInGroup[r];
                return this.setSubtitleTrack(r), e;
              }
              if (i);
              else {
                let i = tZ(e, t);
                if (i > -1) return t[i];
              }
            }
          }
          return null;
        }
        loadPlaylist(e) {
          super.loadPlaylist();
          let t = this.currentTrack;
          if (this.shouldLoadPlaylist(t) && t) {
            let i = t.id,
              r = t.groupId,
              s = t.url;
            if (e)
              try {
                s = e.addDirectives(s);
              } catch (e) {
                this.warn(
                  `Could not construct new URL with HLS Delivery Directives: ${e}`,
                );
              }
            this.log(`Loading subtitle playlist for id ${i}`),
              this.hls.trigger(C.SUBTITLE_TRACK_LOADING, {
                url: s,
                id: i,
                groupId: r,
                deliveryDirectives: e || null,
              });
          }
        }
        toggleTrackModes() {
          let e;
          let { media: t } = this;
          if (!t) return;
          let i = tg(t.textTracks),
            r = this.currentTrack;
          if (
            (!r ||
              (e = i.filter((e) => rE(r, e))[0]) ||
              this.warn(
                `Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`,
              ),
            [].slice.call(i).forEach((t) => {
              "disabled" !== t.mode && t !== e && (t.mode = "disabled");
            }),
            e)
          ) {
            let t = this.subtitleDisplay ? "showing" : "hidden";
            e.mode !== t && (e.mode = t);
          }
        }
        setSubtitleTrack(e) {
          let t = this.tracksInGroup;
          if (!this.media) {
            this.queuedDefaultTrack = e;
            return;
          }
          if (e < -1 || e >= t.length || !b(e)) {
            this.warn(`Invalid subtitle track id: ${e}`);
            return;
          }
          this.clearTimer(), (this.selectDefaultTrack = !1);
          let i = this.currentTrack,
            r = t[e] || null;
          if (
            ((this.trackId = e),
            (this.currentTrack = r),
            this.toggleTrackModes(),
            !r)
          ) {
            this.hls.trigger(C.SUBTITLE_TRACK_SWITCH, { id: e });
            return;
          }
          let s = !!r.details && !r.details.live;
          if (e === this.trackId && r === i && s) return;
          this.log(
            `Switching to subtitle-track ${e}` +
              (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : ""),
          );
          let { id: a, groupId: n = "", name: l, type: o, url: h } = r;
          this.hls.trigger(C.SUBTITLE_TRACK_SWITCH, {
            id: a,
            groupId: n,
            name: l,
            type: o,
            url: h,
          });
          let d = this.switchParams(
            r.url,
            null == i ? void 0 : i.details,
            r.details,
          );
          this.loadPlaylist(d);
        }
      }
      class rA {
        constructor(e) {
          (this.buffers = void 0),
            (this.queues = { video: [], audio: [], audiovideo: [] }),
            (this.buffers = e);
        }
        append(e, t, i) {
          let r = this.queues[t];
          r.push(e), 1 !== r.length || i || this.executeNext(t);
        }
        insertAbort(e, t) {
          this.queues[t].unshift(e), this.executeNext(t);
        }
        appendBlocker(e) {
          let t;
          let i = new Promise((e) => {
              t = e;
            }),
            r = {
              execute: t,
              onStart: () => {},
              onComplete: () => {},
              onError: () => {},
            };
          return this.append(r, e), i;
        }
        executeNext(e) {
          let t = this.queues[e];
          if (t.length) {
            let i = t[0];
            try {
              i.execute();
            } catch (r) {
              M.warn(
                `[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${r}`,
              ),
                i.onError(r);
              let t = this.buffers[e];
              (null != t && t.updating) || this.shiftAndExecuteNext(e);
            }
          }
        }
        shiftAndExecuteNext(e) {
          this.queues[e].shift(), this.executeNext(e);
        }
        current(e) {
          return this.queues[e][0];
        }
      }
      let rL = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
      class rR {
        constructor(e) {
          var t;
          (this.details = null),
            (this._objectUrl = null),
            (this.operationQueue = void 0),
            (this.listeners = void 0),
            (this.hls = void 0),
            (this.bufferCodecEventsExpected = 0),
            (this._bufferCodecEventsTotal = 0),
            (this.media = null),
            (this.mediaSource = null),
            (this.lastMpegAudioChunk = null),
            (this.appendSource = void 0),
            (this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }),
            (this.tracks = {}),
            (this.pendingTracks = {}),
            (this.sourceBuffer = void 0),
            (this.log = void 0),
            (this.warn = void 0),
            (this.error = void 0),
            (this._onEndStreaming = (e) => {
              this.hls && this.hls.pauseBuffering();
            }),
            (this._onStartStreaming = (e) => {
              this.hls && this.hls.resumeBuffering();
            }),
            (this._onMediaSourceOpen = () => {
              let { media: e, mediaSource: t } = this;
              this.log("Media source opened"),
                e &&
                  (e.removeEventListener("emptied", this._onMediaEmptied),
                  this.updateMediaElementDuration(),
                  this.hls.trigger(C.MEDIA_ATTACHED, {
                    media: e,
                    mediaSource: t,
                  })),
                t &&
                  t.removeEventListener("sourceopen", this._onMediaSourceOpen),
                this.checkPendingTracks();
            }),
            (this._onMediaSourceClose = () => {
              this.log("Media source closed");
            }),
            (this._onMediaSourceEnded = () => {
              this.log("Media source ended");
            }),
            (this._onMediaEmptied = () => {
              let { mediaSrc: e, _objectUrl: t } = this;
              e !== t &&
                M.error(
                  `Media element src was set while attaching MediaSource (${t} > ${e})`,
                );
            }),
            (this.hls = e);
          let i = "[buffer-controller]";
          (this.appendSource =
            ((t = eW(e.config.preferManagedMediaSource)),
            "undefined" != typeof self && t === self.ManagedMediaSource)),
            (this.log = M.log.bind(M, i)),
            (this.warn = M.warn.bind(M, i)),
            (this.error = M.error.bind(M, i)),
            this._initSourceBuffer(),
            this.registerListeners();
        }
        hasSourceTypes() {
          return (
            this.getSourceBufferTypes().length > 0 ||
            Object.keys(this.pendingTracks).length > 0
          );
        }
        destroy() {
          this.unregisterListeners(),
            (this.details = null),
            (this.lastMpegAudioChunk = null),
            (this.hls = null);
        }
        registerListeners() {
          let { hls: e } = this;
          e.on(C.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(C.BUFFER_RESET, this.onBufferReset, this),
            e.on(C.BUFFER_APPENDING, this.onBufferAppending, this),
            e.on(C.BUFFER_CODECS, this.onBufferCodecs, this),
            e.on(C.BUFFER_EOS, this.onBufferEos, this),
            e.on(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(C.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(C.FRAG_PARSED, this.onFragParsed, this),
            e.on(C.FRAG_CHANGED, this.onFragChanged, this);
        }
        unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(C.BUFFER_RESET, this.onBufferReset, this),
            e.off(C.BUFFER_APPENDING, this.onBufferAppending, this),
            e.off(C.BUFFER_CODECS, this.onBufferCodecs, this),
            e.off(C.BUFFER_EOS, this.onBufferEos, this),
            e.off(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(C.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(C.FRAG_PARSED, this.onFragParsed, this),
            e.off(C.FRAG_CHANGED, this.onFragChanged, this);
        }
        _initSourceBuffer() {
          (this.sourceBuffer = {}),
            (this.operationQueue = new rA(this.sourceBuffer)),
            (this.listeners = { audio: [], video: [], audiovideo: [] }),
            (this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }),
            (this.lastMpegAudioChunk = null);
        }
        onManifestLoading() {
          (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0),
            (this.details = null);
        }
        onManifestParsed(e, t) {
          let i = 2;
          ((!t.audio || t.video) && t.altAudio) || (i = 1),
            (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i),
            this.log(
              `${this.bufferCodecEventsExpected} bufferCodec event(s) expected`,
            );
        }
        onMediaAttaching(e, t) {
          let i = (this.media = t.media),
            r = eW(this.appendSource);
          if (i && r) {
            var s;
            let e = (this.mediaSource = new r());
            this.log(
              `created media source: ${null == (s = e.constructor) ? void 0 : s.name}`,
            ),
              e.addEventListener("sourceopen", this._onMediaSourceOpen),
              e.addEventListener("sourceended", this._onMediaSourceEnded),
              e.addEventListener("sourceclose", this._onMediaSourceClose),
              this.appendSource &&
                (e.addEventListener("startstreaming", this._onStartStreaming),
                e.addEventListener("endstreaming", this._onEndStreaming));
            let t = (this._objectUrl = self.URL.createObjectURL(e));
            if (this.appendSource)
              try {
                i.removeAttribute("src");
                let r = self.ManagedMediaSource;
                (i.disableRemotePlayback =
                  i.disableRemotePlayback || (r && e instanceof r)),
                  rD(i),
                  (function (e, t) {
                    let i = self.document.createElement("source");
                    (i.type = "video/mp4"), (i.src = t), e.appendChild(i);
                  })(i, t),
                  i.load();
              } catch (e) {
                i.src = t;
              }
            else i.src = t;
            i.addEventListener("emptied", this._onMediaEmptied);
          }
        }
        onMediaDetaching() {
          let { media: e, mediaSource: t, _objectUrl: i } = this;
          if (t) {
            if ((this.log("media source detaching"), "open" === t.readyState))
              try {
                t.endOfStream();
              } catch (e) {
                this.warn(
                  `onMediaDetaching: ${e.message} while calling endOfStream`,
                );
              }
            this.onBufferReset(),
              t.removeEventListener("sourceopen", this._onMediaSourceOpen),
              t.removeEventListener("sourceended", this._onMediaSourceEnded),
              t.removeEventListener("sourceclose", this._onMediaSourceClose),
              this.appendSource &&
                (t.removeEventListener(
                  "startstreaming",
                  this._onStartStreaming,
                ),
                t.removeEventListener("endstreaming", this._onEndStreaming)),
              e &&
                (e.removeEventListener("emptied", this._onMediaEmptied),
                i && self.URL.revokeObjectURL(i),
                this.mediaSrc === i
                  ? (e.removeAttribute("src"),
                    this.appendSource && rD(e),
                    e.load())
                  : this.warn(
                      "media|source.src was changed by a third party - skip cleanup",
                    )),
              (this.mediaSource = null),
              (this.media = null),
              (this._objectUrl = null),
              (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal),
              (this.pendingTracks = {}),
              (this.tracks = {});
          }
          this.hls.trigger(C.MEDIA_DETACHED, void 0);
        }
        onBufferReset() {
          this.getSourceBufferTypes().forEach((e) => {
            this.resetBuffer(e);
          }),
            this._initSourceBuffer(),
            this.hls.resumeBuffering();
        }
        resetBuffer(e) {
          let t = this.sourceBuffer[e];
          try {
            if (t) {
              var i;
              this.removeBufferListeners(e),
                (this.sourceBuffer[e] = void 0),
                null != (i = this.mediaSource) &&
                  i.sourceBuffers.length &&
                  this.mediaSource.removeSourceBuffer(t);
            }
          } catch (t) {
            this.warn(`onBufferReset ${e}`, t);
          }
        }
        onBufferCodecs(e, t) {
          let i = this.getSourceBufferTypes().length,
            r = Object.keys(t);
          if (
            (r.forEach((e) => {
              if (i) {
                let i = this.tracks[e];
                if (i && "function" == typeof i.buffer.changeType) {
                  var r;
                  let {
                      id: s,
                      codec: a,
                      levelCodec: n,
                      container: l,
                      metadata: o,
                    } = t[e],
                    h = e2(i.codec, i.levelCodec),
                    d = null == h ? void 0 : h.replace(rL, "$1"),
                    u = e2(a, n),
                    c = null == (r = u) ? void 0 : r.replace(rL, "$1");
                  if (u && d !== c) {
                    "audio" === e.slice(0, 5) && (u = e1(u, this.appendSource));
                    let t = `${l};codecs=${u}`;
                    this.appendChangeType(e, t),
                      this.log(`switching codec ${h} to ${u}`),
                      (this.tracks[e] = {
                        buffer: i.buffer,
                        codec: a,
                        container: l,
                        levelCodec: n,
                        metadata: o,
                        id: s,
                      });
                  }
                }
              } else this.pendingTracks[e] = t[e];
            }),
            i)
          )
            return;
          let s = Math.max(this.bufferCodecEventsExpected - 1, 0);
          this.bufferCodecEventsExpected !== s &&
            (this.log(`${s} bufferCodec event(s) expected ${r.join(",")}`),
            (this.bufferCodecEventsExpected = s)),
            this.mediaSource &&
              "open" === this.mediaSource.readyState &&
              this.checkPendingTracks();
        }
        appendChangeType(e, t) {
          let { operationQueue: i } = this;
          i.append(
            {
              execute: () => {
                let r = this.sourceBuffer[e];
                r &&
                  (this.log(`changing ${e} sourceBuffer type to ${t}`),
                  r.changeType(t)),
                  i.shiftAndExecuteNext(e);
              },
              onStart: () => {},
              onComplete: () => {},
              onError: (t) => {
                this.warn(`Failed to change ${e} SourceBuffer type`, t);
              },
            },
            e,
            !!this.pendingTracks[e],
          );
        }
        onBufferAppending(e, t) {
          let { hls: i, operationQueue: r, tracks: s } = this,
            { data: a, type: n, frag: l, part: o, chunkMeta: h } = t,
            d = h.buffering[n],
            u = self.performance.now();
          d.start = u;
          let c = l.stats.buffering,
            f = o ? o.stats.buffering : null;
          0 === c.start && (c.start = u), f && 0 === f.start && (f.start = u);
          let g = s.audio,
            m = !1;
          "audio" === n &&
            (null == g ? void 0 : g.container) === "audio/mpeg" &&
            ((m =
              !this.lastMpegAudioChunk ||
              1 === h.id ||
              this.lastMpegAudioChunk.sn !== h.sn),
            (this.lastMpegAudioChunk = h));
          let p = l.start;
          r.append(
            {
              execute: () => {
                if (((d.executeStart = self.performance.now()), m)) {
                  let e = this.sourceBuffer[n];
                  if (e) {
                    let t = p - e.timestampOffset;
                    Math.abs(t) >= 0.1 &&
                      (this.log(
                        `Updating audio SourceBuffer timestampOffset to ${p} (delta: ${t}) sn: ${l.sn})`,
                      ),
                      (e.timestampOffset = p));
                  }
                }
                this.appendExecutor(a, n);
              },
              onStart: () => {},
              onComplete: () => {
                let e = self.performance.now();
                (d.executeEnd = d.end = e),
                  0 === c.first && (c.first = e),
                  f && 0 === f.first && (f.first = e);
                let { sourceBuffer: t } = this,
                  i = {};
                for (let e in t) i[e] = ie.getBuffered(t[e]);
                (this.appendErrors[n] = 0),
                  "audio" === n || "video" === n
                    ? (this.appendErrors.audiovideo = 0)
                    : ((this.appendErrors.audio = 0),
                      (this.appendErrors.video = 0)),
                  this.hls.trigger(C.BUFFER_APPENDED, {
                    type: n,
                    frag: l,
                    part: o,
                    chunkMeta: h,
                    parent: l.type,
                    timeRanges: i,
                  });
              },
              onError: (e) => {
                let t = {
                  type: w.MEDIA_ERROR,
                  parent: l.type,
                  details: P.BUFFER_APPEND_ERROR,
                  sourceBufferName: n,
                  frag: l,
                  part: o,
                  chunkMeta: h,
                  error: e,
                  err: e,
                  fatal: !1,
                };
                if (e.code === DOMException.QUOTA_EXCEEDED_ERR)
                  t.details = P.BUFFER_FULL_ERROR;
                else {
                  let e = ++this.appendErrors[n];
                  (t.details = P.BUFFER_APPEND_ERROR),
                    this.warn(
                      `Failed ${e}/${i.config.appendErrorMaxRetry} times to append segment in "${n}" sourceBuffer`,
                    ),
                    e >= i.config.appendErrorMaxRetry && (t.fatal = !0);
                }
                i.trigger(C.ERROR, t);
              },
            },
            n,
            !!this.pendingTracks[n],
          );
        }
        onBufferFlushing(e, t) {
          let { operationQueue: i } = this,
            r = (e) => ({
              execute: this.removeExecutor.bind(
                this,
                e,
                t.startOffset,
                t.endOffset,
              ),
              onStart: () => {},
              onComplete: () => {
                this.hls.trigger(C.BUFFER_FLUSHED, { type: e });
              },
              onError: (t) => {
                this.warn(`Failed to remove from ${e} SourceBuffer`, t);
              },
            });
          t.type
            ? i.append(r(t.type), t.type)
            : this.getSourceBufferTypes().forEach((e) => {
                i.append(r(e), e);
              });
        }
        onFragParsed(e, t) {
          let { frag: i, part: r } = t,
            s = [],
            a = r ? r.elementaryStreams : i.elementaryStreams;
          a[K.AUDIOVIDEO]
            ? s.push("audiovideo")
            : (a[K.AUDIO] && s.push("audio"), a[K.VIDEO] && s.push("video")),
            0 === s.length &&
              this.warn(
                `Fragments must have at least one ElementaryStreamType set. type: ${i.type} level: ${i.level} sn: ${i.sn}`,
              ),
            this.blockBuffers(() => {
              let e = self.performance.now();
              (i.stats.buffering.end = e), r && (r.stats.buffering.end = e);
              let t = r ? r.stats : i.stats;
              this.hls.trigger(C.FRAG_BUFFERED, {
                frag: i,
                part: r,
                stats: t,
                id: i.type,
              });
            }, s);
        }
        onFragChanged(e, t) {
          this.trimBuffers();
        }
        onBufferEos(e, t) {
          this.getSourceBufferTypes().reduce((e, i) => {
            let r = this.sourceBuffer[i];
            return (
              !r ||
                (t.type && t.type !== i) ||
                ((r.ending = !0),
                r.ended ||
                  ((r.ended = !0), this.log(`${i} sourceBuffer now EOS`))),
              e && !!(!r || r.ended)
            );
          }, !0) &&
            (this.log("Queueing mediaSource.endOfStream()"),
            this.blockBuffers(() => {
              this.getSourceBufferTypes().forEach((e) => {
                let t = this.sourceBuffer[e];
                t && (t.ending = !1);
              });
              let { mediaSource: e } = this;
              if (!e || "open" !== e.readyState) {
                e &&
                  this.log(
                    `Could not call mediaSource.endOfStream(). mediaSource.readyState: ${e.readyState}`,
                  );
                return;
              }
              this.log("Calling mediaSource.endOfStream()"), e.endOfStream();
            }));
        }
        onLevelUpdated(e, { details: t }) {
          t.fragments.length &&
            ((this.details = t),
            this.getSourceBufferTypes().length
              ? this.blockBuffers(this.updateMediaElementDuration.bind(this))
              : this.updateMediaElementDuration());
        }
        trimBuffers() {
          let { hls: e, details: t, media: i } = this;
          if (!i || null === t || !this.getSourceBufferTypes().length) return;
          let r = e.config,
            s = i.currentTime,
            a = t.levelTargetDuration,
            n =
              t.live && null !== r.liveBackBufferLength
                ? r.liveBackBufferLength
                : r.backBufferLength;
          if (b(n) && n > 0) {
            let e = Math.max(n, a);
            this.flushBackBuffer(s, a, Math.floor(s / a) * a - e);
          }
          if (
            b(r.frontBufferFlushThreshold) &&
            r.frontBufferFlushThreshold > 0
          ) {
            let e = Math.max(
              Math.max(r.maxBufferLength, r.frontBufferFlushThreshold),
              a,
            );
            this.flushFrontBuffer(s, a, Math.floor(s / a) * a + e);
          }
        }
        flushBackBuffer(e, t, i) {
          let { details: r, sourceBuffer: s } = this;
          this.getSourceBufferTypes().forEach((a) => {
            let n = s[a];
            if (n) {
              let s = ie.getBuffered(n);
              if (s.length > 0 && i > s.start(0)) {
                if (
                  (this.hls.trigger(C.BACK_BUFFER_REACHED, { bufferEnd: i }),
                  null != r && r.live)
                )
                  this.hls.trigger(C.LIVE_BACK_BUFFER_REACHED, {
                    bufferEnd: i,
                  });
                else if (n.ended && s.end(s.length - 1) - e < 2 * t) {
                  this.log(
                    `Cannot flush ${a} back buffer while SourceBuffer is in ended state`,
                  );
                  return;
                }
                this.hls.trigger(C.BUFFER_FLUSHING, {
                  startOffset: 0,
                  endOffset: i,
                  type: a,
                });
              }
            }
          });
        }
        flushFrontBuffer(e, t, i) {
          let { sourceBuffer: r } = this;
          this.getSourceBufferTypes().forEach((s) => {
            let a = r[s];
            if (a) {
              let r = ie.getBuffered(a),
                n = r.length;
              if (n < 2) return;
              let l = r.start(n - 1),
                o = r.end(n - 1);
              if (i > l || (e >= l && e <= o)) return;
              if (a.ended && e - o < 2 * t) {
                this.log(
                  `Cannot flush ${s} front buffer while SourceBuffer is in ended state`,
                );
                return;
              }
              this.hls.trigger(C.BUFFER_FLUSHING, {
                startOffset: l,
                endOffset: 1 / 0,
                type: s,
              });
            }
          });
        }
        updateMediaElementDuration() {
          if (
            !this.details ||
            !this.media ||
            !this.mediaSource ||
            "open" !== this.mediaSource.readyState
          )
            return;
          let { details: e, hls: t, media: i, mediaSource: r } = this,
            s = e.fragments[0].start + e.totalduration,
            a = i.duration,
            n = b(r.duration) ? r.duration : 0;
          e.live && t.config.liveDurationInfinity
            ? ((r.duration = 1 / 0), this.updateSeekableRange(e))
            : ((s > n && s > a) || !b(a)) &&
              (this.log(`Updating Media Source duration to ${s.toFixed(3)}`),
              (r.duration = s));
        }
        updateSeekableRange(e) {
          let t = this.mediaSource,
            i = e.fragments;
          if (i.length && e.live && null != t && t.setLiveSeekableRange) {
            let r = Math.max(0, i[0].start),
              s = Math.max(r, r + e.totalduration);
            this.log(
              `Media Source duration is set to ${t.duration}. Setting seekable range to ${r}-${s}.`,
            ),
              t.setLiveSeekableRange(r, s);
          }
        }
        checkPendingTracks() {
          let {
              bufferCodecEventsExpected: e,
              operationQueue: t,
              pendingTracks: i,
            } = this,
            r = Object.keys(i).length;
          if (r && (!e || 2 === r || "audiovideo" in i)) {
            this.createSourceBuffers(i), (this.pendingTracks = {});
            let e = this.getSourceBufferTypes();
            if (e.length)
              this.hls.trigger(C.BUFFER_CREATED, { tracks: this.tracks }),
                e.forEach((e) => {
                  t.executeNext(e);
                });
            else {
              let e = Error(
                "could not create source buffer for media codec(s)",
              );
              this.hls.trigger(C.ERROR, {
                type: w.MEDIA_ERROR,
                details: P.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                fatal: !0,
                error: e,
                reason: e.message,
              });
            }
          }
        }
        createSourceBuffers(e) {
          let { sourceBuffer: t, mediaSource: i } = this;
          if (!i)
            throw Error("createSourceBuffers called when mediaSource was null");
          for (let s in e)
            if (!t[s]) {
              var r;
              let a = e[s];
              if (!a)
                throw Error(
                  `source buffer exists for track ${s}, however track does not`,
                );
              let n =
                (null == (r = a.levelCodec) ? void 0 : r.indexOf(",")) === -1
                  ? a.levelCodec
                  : a.codec;
              n && "audio" === s.slice(0, 5) && (n = e1(n, this.appendSource));
              let l = `${a.container};codecs=${n}`;
              this.log(`creating sourceBuffer(${l})`);
              try {
                let e = (t[s] = i.addSourceBuffer(l));
                this.addBufferListener(s, "updatestart", this._onSBUpdateStart),
                  this.addBufferListener(s, "updateend", this._onSBUpdateEnd),
                  this.addBufferListener(s, "error", this._onSBUpdateError),
                  this.appendSource &&
                    this.addBufferListener(s, "bufferedchange", (e, t) => {
                      let i = t.removedRanges;
                      null != i &&
                        i.length &&
                        this.hls.trigger(C.BUFFER_FLUSHED, { type: s });
                    }),
                  (this.tracks[s] = {
                    buffer: e,
                    codec: n,
                    container: a.container,
                    levelCodec: a.levelCodec,
                    metadata: a.metadata,
                    id: a.id,
                  });
              } catch (e) {
                this.error(
                  `error while trying to add sourceBuffer: ${e.message}`,
                ),
                  this.hls.trigger(C.ERROR, {
                    type: w.MEDIA_ERROR,
                    details: P.BUFFER_ADD_CODEC_ERROR,
                    fatal: !1,
                    error: e,
                    sourceBufferName: s,
                    mimeType: l,
                  });
              }
            }
        }
        get mediaSrc() {
          var e, t;
          let i =
            (null == (e = this.media)
              ? void 0
              : null == (t = e.querySelector)
                ? void 0
                : t.call(e, "source")) || this.media;
          return null == i ? void 0 : i.src;
        }
        _onSBUpdateStart(e) {
          let { operationQueue: t } = this;
          t.current(e).onStart();
        }
        _onSBUpdateEnd(e) {
          var t;
          if (
            (null == (t = this.mediaSource) ? void 0 : t.readyState) ===
            "closed"
          ) {
            this.resetBuffer(e);
            return;
          }
          let { operationQueue: i } = this;
          i.current(e).onComplete(), i.shiftAndExecuteNext(e);
        }
        _onSBUpdateError(e, t) {
          var i;
          let r = Error(
            `${e} SourceBuffer error. MediaSource readyState: ${null == (i = this.mediaSource) ? void 0 : i.readyState}`,
          );
          this.error(`${r}`, t),
            this.hls.trigger(C.ERROR, {
              type: w.MEDIA_ERROR,
              details: P.BUFFER_APPENDING_ERROR,
              sourceBufferName: e,
              error: r,
              fatal: !1,
            });
          let s = this.operationQueue.current(e);
          s && s.onError(r);
        }
        removeExecutor(e, t, i) {
          let {
              media: r,
              mediaSource: s,
              operationQueue: a,
              sourceBuffer: n,
            } = this,
            l = n[e];
          if (!r || !s || !l) {
            this.warn(
              `Attempting to remove from the ${e} SourceBuffer, but it does not exist`,
            ),
              a.shiftAndExecuteNext(e);
            return;
          }
          let o = b(r.duration) ? r.duration : 1 / 0,
            h = b(s.duration) ? s.duration : 1 / 0,
            d = Math.max(0, t),
            u = Math.min(i, o, h);
          u > d && (!l.ending || l.ended)
            ? ((l.ended = !1),
              this.log(`Removing [${d},${u}] from the ${e} SourceBuffer`),
              l.remove(d, u))
            : a.shiftAndExecuteNext(e);
        }
        appendExecutor(e, t) {
          let i = this.sourceBuffer[t];
          if (!i) {
            if (!this.pendingTracks[t])
              throw Error(
                `Attempting to append to the ${t} SourceBuffer, but it does not exist`,
              );
            return;
          }
          (i.ended = !1), i.appendBuffer(e);
        }
        blockBuffers(e, t = this.getSourceBufferTypes()) {
          if (!t.length) {
            this.log(
              "Blocking operation requested, but no SourceBuffers exist",
            ),
              Promise.resolve().then(e);
            return;
          }
          let { operationQueue: i } = this;
          Promise.all(t.map((e) => i.appendBlocker(e))).then(() => {
            e(),
              t.forEach((e) => {
                let t = this.sourceBuffer[e];
                (null != t && t.updating) || i.shiftAndExecuteNext(e);
              });
          });
        }
        getSourceBufferTypes() {
          return Object.keys(this.sourceBuffer);
        }
        addBufferListener(e, t, i) {
          let r = this.sourceBuffer[e];
          if (!r) return;
          let s = i.bind(this, e);
          this.listeners[e].push({ event: t, listener: s }),
            r.addEventListener(t, s);
        }
        removeBufferListeners(e) {
          let t = this.sourceBuffer[e];
          t &&
            this.listeners[e].forEach((e) => {
              t.removeEventListener(e.event, e.listener);
            });
        }
      }
      function rD(e) {
        let t = e.querySelectorAll("source");
        [].slice.call(t).forEach((t) => {
          e.removeChild(t);
        });
      }
      let rI = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          128: 174,
          129: 176,
          130: 189,
          131: 191,
          132: 8482,
          133: 162,
          134: 163,
          135: 9834,
          136: 224,
          137: 32,
          138: 232,
          139: 226,
          140: 234,
          141: 238,
          142: 244,
          143: 251,
          144: 193,
          145: 201,
          146: 211,
          147: 218,
          148: 220,
          149: 252,
          150: 8216,
          151: 161,
          152: 42,
          153: 8217,
          154: 9473,
          155: 169,
          156: 8480,
          157: 8226,
          158: 8220,
          159: 8221,
          160: 192,
          161: 194,
          162: 199,
          163: 200,
          164: 202,
          165: 203,
          166: 235,
          167: 206,
          168: 207,
          169: 239,
          170: 212,
          171: 217,
          172: 249,
          173: 219,
          174: 171,
          175: 187,
          176: 195,
          177: 227,
          178: 205,
          179: 204,
          180: 236,
          181: 210,
          182: 242,
          183: 213,
          184: 245,
          185: 123,
          186: 125,
          187: 92,
          188: 94,
          189: 95,
          190: 124,
          191: 8764,
          192: 196,
          193: 228,
          194: 214,
          195: 246,
          196: 223,
          197: 165,
          198: 164,
          199: 9475,
          200: 197,
          201: 229,
          202: 216,
          203: 248,
          204: 9487,
          205: 9491,
          206: 9495,
          207: 9499,
        },
        rb = (e) => String.fromCharCode(rI[e] || e),
        rk = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
        r_ = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
        rC = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
        rw = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
        rP = [
          "white",
          "green",
          "blue",
          "cyan",
          "red",
          "yellow",
          "magenta",
          "black",
          "transparent",
        ];
      class rx {
        constructor() {
          (this.time = null), (this.verboseLevel = 0);
        }
        log(e, t) {
          if (this.verboseLevel >= e) {
            let i = "function" == typeof t ? t() : t;
            M.log(`${this.time} [${e}] ${i}`);
          }
        }
      }
      let rO = function (e) {
        let t = [];
        for (let i = 0; i < e.length; i++) t.push(e[i].toString(16));
        return t;
      };
      class rF {
        constructor() {
          (this.foreground = "white"),
            (this.underline = !1),
            (this.italics = !1),
            (this.background = "black"),
            (this.flash = !1);
        }
        reset() {
          (this.foreground = "white"),
            (this.underline = !1),
            (this.italics = !1),
            (this.background = "black"),
            (this.flash = !1);
        }
        setStyles(e) {
          let t = ["foreground", "underline", "italics", "background", "flash"];
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            e.hasOwnProperty(r) && (this[r] = e[r]);
          }
        }
        isDefault() {
          return (
            "white" === this.foreground &&
            !this.underline &&
            !this.italics &&
            "black" === this.background &&
            !this.flash
          );
        }
        equals(e) {
          return (
            this.foreground === e.foreground &&
            this.underline === e.underline &&
            this.italics === e.italics &&
            this.background === e.background &&
            this.flash === e.flash
          );
        }
        copy(e) {
          (this.foreground = e.foreground),
            (this.underline = e.underline),
            (this.italics = e.italics),
            (this.background = e.background),
            (this.flash = e.flash);
        }
        toString() {
          return (
            "color=" +
            this.foreground +
            ", underline=" +
            this.underline +
            ", italics=" +
            this.italics +
            ", background=" +
            this.background +
            ", flash=" +
            this.flash
          );
        }
      }
      class rM {
        constructor() {
          (this.uchar = " "), (this.penState = new rF());
        }
        reset() {
          (this.uchar = " "), this.penState.reset();
        }
        setChar(e, t) {
          (this.uchar = e), this.penState.copy(t);
        }
        setPenState(e) {
          this.penState.copy(e);
        }
        equals(e) {
          return this.uchar === e.uchar && this.penState.equals(e.penState);
        }
        copy(e) {
          (this.uchar = e.uchar), this.penState.copy(e.penState);
        }
        isEmpty() {
          return " " === this.uchar && this.penState.isDefault();
        }
      }
      class rN {
        constructor(e) {
          (this.chars = []),
            (this.pos = 0),
            (this.currPenState = new rF()),
            (this.cueStartTime = null),
            (this.logger = void 0);
          for (let e = 0; e < 100; e++) this.chars.push(new rM());
          this.logger = e;
        }
        equals(e) {
          for (let t = 0; t < 100; t++)
            if (!this.chars[t].equals(e.chars[t])) return !1;
          return !0;
        }
        copy(e) {
          for (let t = 0; t < 100; t++) this.chars[t].copy(e.chars[t]);
        }
        isEmpty() {
          let e = !0;
          for (let t = 0; t < 100; t++)
            if (!this.chars[t].isEmpty()) {
              e = !1;
              break;
            }
          return e;
        }
        setCursor(e) {
          this.pos !== e && (this.pos = e),
            this.pos < 0
              ? (this.logger.log(3, "Negative cursor position " + this.pos),
                (this.pos = 0))
              : this.pos > 100 &&
                (this.logger.log(3, "Too large cursor position " + this.pos),
                (this.pos = 100));
        }
        moveCursor(e) {
          let t = this.pos + e;
          if (e > 1)
            for (let e = this.pos + 1; e < t + 1; e++)
              this.chars[e].setPenState(this.currPenState);
          this.setCursor(t);
        }
        backSpace() {
          this.moveCursor(-1),
            this.chars[this.pos].setChar(" ", this.currPenState);
        }
        insertChar(e) {
          e >= 144 && this.backSpace();
          let t = rb(e);
          if (this.pos >= 100) {
            this.logger.log(
              0,
              () =>
                "Cannot insert " +
                e.toString(16) +
                " (" +
                t +
                ") at position " +
                this.pos +
                ". Skipping it!",
            );
            return;
          }
          this.chars[this.pos].setChar(t, this.currPenState),
            this.moveCursor(1);
        }
        clearFromPos(e) {
          let t;
          for (t = e; t < 100; t++) this.chars[t].reset();
        }
        clear() {
          this.clearFromPos(0), (this.pos = 0), this.currPenState.reset();
        }
        clearToEndOfRow() {
          this.clearFromPos(this.pos);
        }
        getTextString() {
          let e = [],
            t = !0;
          for (let i = 0; i < 100; i++) {
            let r = this.chars[i].uchar;
            " " !== r && (t = !1), e.push(r);
          }
          return t ? "" : e.join("");
        }
        setPenStyles(e) {
          this.currPenState.setStyles(e),
            this.chars[this.pos].setPenState(this.currPenState);
        }
      }
      class rU {
        constructor(e) {
          (this.rows = []),
            (this.currRow = 14),
            (this.nrRollUpRows = null),
            (this.lastOutputScreen = null),
            (this.logger = void 0);
          for (let t = 0; t < 15; t++) this.rows.push(new rN(e));
          this.logger = e;
        }
        reset() {
          for (let e = 0; e < 15; e++) this.rows[e].clear();
          this.currRow = 14;
        }
        equals(e) {
          let t = !0;
          for (let i = 0; i < 15; i++)
            if (!this.rows[i].equals(e.rows[i])) {
              t = !1;
              break;
            }
          return t;
        }
        copy(e) {
          for (let t = 0; t < 15; t++) this.rows[t].copy(e.rows[t]);
        }
        isEmpty() {
          let e = !0;
          for (let t = 0; t < 15; t++)
            if (!this.rows[t].isEmpty()) {
              e = !1;
              break;
            }
          return e;
        }
        backSpace() {
          this.rows[this.currRow].backSpace();
        }
        clearToEndOfRow() {
          this.rows[this.currRow].clearToEndOfRow();
        }
        insertChar(e) {
          this.rows[this.currRow].insertChar(e);
        }
        setPen(e) {
          this.rows[this.currRow].setPenStyles(e);
        }
        moveCursor(e) {
          this.rows[this.currRow].moveCursor(e);
        }
        setCursor(e) {
          this.logger.log(2, "setCursor: " + e),
            this.rows[this.currRow].setCursor(e);
        }
        setPAC(e) {
          this.logger.log(2, () => "pacData = " + JSON.stringify(e));
          let t = e.row - 1;
          if (
            (this.nrRollUpRows &&
              t < this.nrRollUpRows - 1 &&
              (t = this.nrRollUpRows - 1),
            this.nrRollUpRows && this.currRow !== t)
          ) {
            for (let e = 0; e < 15; e++) this.rows[e].clear();
            let e = this.currRow + 1 - this.nrRollUpRows,
              i = this.lastOutputScreen;
            if (i) {
              let r = i.rows[e].cueStartTime,
                s = this.logger.time;
              if (null !== r && null !== s && r < s)
                for (let r = 0; r < this.nrRollUpRows; r++)
                  this.rows[t - this.nrRollUpRows + r + 1].copy(i.rows[e + r]);
            }
          }
          this.currRow = t;
          let i = this.rows[this.currRow];
          if (null !== e.indent) {
            let t = Math.max(e.indent - 1, 0);
            i.setCursor(e.indent), (e.color = i.chars[t].penState.foreground);
          }
          let r = {
            foreground: e.color,
            underline: e.underline,
            italics: e.italics,
            background: "black",
            flash: !1,
          };
          this.setPen(r);
        }
        setBkgData(e) {
          this.logger.log(2, () => "bkgData = " + JSON.stringify(e)),
            this.backSpace(),
            this.setPen(e),
            this.insertChar(32);
        }
        setRollUpRows(e) {
          this.nrRollUpRows = e;
        }
        rollUp() {
          if (null === this.nrRollUpRows) {
            this.logger.log(3, "roll_up but nrRollUpRows not set yet");
            return;
          }
          this.logger.log(1, () => this.getDisplayText());
          let e = this.currRow + 1 - this.nrRollUpRows,
            t = this.rows.splice(e, 1)[0];
          t.clear(),
            this.rows.splice(this.currRow, 0, t),
            this.logger.log(2, "Rolling up");
        }
        getDisplayText(e) {
          e = e || !1;
          let t = [],
            i = "",
            r = -1;
          for (let i = 0; i < 15; i++) {
            let s = this.rows[i].getTextString();
            s &&
              ((r = i + 1),
              e ? t.push("Row " + r + ": '" + s + "'") : t.push(s.trim()));
          }
          return (
            t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")),
            i
          );
        }
        getTextAndFormat() {
          return this.rows;
        }
      }
      class rB {
        constructor(e, t, i) {
          (this.chNr = void 0),
            (this.outputFilter = void 0),
            (this.mode = void 0),
            (this.verbose = void 0),
            (this.displayedMemory = void 0),
            (this.nonDisplayedMemory = void 0),
            (this.lastOutputScreen = void 0),
            (this.currRollUpRow = void 0),
            (this.writeScreen = void 0),
            (this.cueStartTime = void 0),
            (this.logger = void 0),
            (this.chNr = e),
            (this.outputFilter = t),
            (this.mode = null),
            (this.verbose = 0),
            (this.displayedMemory = new rU(i)),
            (this.nonDisplayedMemory = new rU(i)),
            (this.lastOutputScreen = new rU(i)),
            (this.currRollUpRow = this.displayedMemory.rows[14]),
            (this.writeScreen = this.displayedMemory),
            (this.mode = null),
            (this.cueStartTime = null),
            (this.logger = i);
        }
        reset() {
          (this.mode = null),
            this.displayedMemory.reset(),
            this.nonDisplayedMemory.reset(),
            this.lastOutputScreen.reset(),
            this.outputFilter.reset(),
            (this.currRollUpRow = this.displayedMemory.rows[14]),
            (this.writeScreen = this.displayedMemory),
            (this.mode = null),
            (this.cueStartTime = null);
        }
        getHandler() {
          return this.outputFilter;
        }
        setHandler(e) {
          this.outputFilter = e;
        }
        setPAC(e) {
          this.writeScreen.setPAC(e);
        }
        setBkgData(e) {
          this.writeScreen.setBkgData(e);
        }
        setMode(e) {
          e !== this.mode &&
            ((this.mode = e),
            this.logger.log(2, () => "MODE=" + e),
            "MODE_POP-ON" === this.mode
              ? (this.writeScreen = this.nonDisplayedMemory)
              : ((this.writeScreen = this.displayedMemory),
                this.writeScreen.reset()),
            "MODE_ROLL-UP" !== this.mode &&
              ((this.displayedMemory.nrRollUpRows = null),
              (this.nonDisplayedMemory.nrRollUpRows = null)),
            (this.mode = e));
        }
        insertChars(e) {
          for (let t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
          let t =
            this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
          this.logger.log(
            2,
            () => t + ": " + this.writeScreen.getDisplayText(!0),
          ),
            ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) &&
              (this.logger.log(
                1,
                () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0),
              ),
              this.outputDataUpdate());
        }
        ccRCL() {
          this.logger.log(2, "RCL - Resume Caption Loading"),
            this.setMode("MODE_POP-ON");
        }
        ccBS() {
          this.logger.log(2, "BS - BackSpace"),
            "MODE_TEXT" !== this.mode &&
              (this.writeScreen.backSpace(),
              this.writeScreen === this.displayedMemory &&
                this.outputDataUpdate());
        }
        ccAOF() {}
        ccAON() {}
        ccDER() {
          this.logger.log(2, "DER- Delete to End of Row"),
            this.writeScreen.clearToEndOfRow(),
            this.outputDataUpdate();
        }
        ccRU(e) {
          this.logger.log(2, "RU(" + e + ") - Roll Up"),
            (this.writeScreen = this.displayedMemory),
            this.setMode("MODE_ROLL-UP"),
            this.writeScreen.setRollUpRows(e);
        }
        ccFON() {
          this.logger.log(2, "FON - Flash On"),
            this.writeScreen.setPen({ flash: !0 });
        }
        ccRDC() {
          this.logger.log(2, "RDC - Resume Direct Captioning"),
            this.setMode("MODE_PAINT-ON");
        }
        ccTR() {
          this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
        }
        ccRTD() {
          this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
        }
        ccEDM() {
          this.logger.log(2, "EDM - Erase Displayed Memory"),
            this.displayedMemory.reset(),
            this.outputDataUpdate(!0);
        }
        ccCR() {
          this.logger.log(2, "CR - Carriage Return"),
            this.writeScreen.rollUp(),
            this.outputDataUpdate(!0);
        }
        ccENM() {
          this.logger.log(2, "ENM - Erase Non-displayed Memory"),
            this.nonDisplayedMemory.reset();
        }
        ccEOC() {
          if (
            (this.logger.log(2, "EOC - End Of Caption"),
            "MODE_POP-ON" === this.mode)
          ) {
            let e = this.displayedMemory;
            (this.displayedMemory = this.nonDisplayedMemory),
              (this.nonDisplayedMemory = e),
              (this.writeScreen = this.nonDisplayedMemory),
              this.logger.log(
                1,
                () => "DISP: " + this.displayedMemory.getDisplayText(),
              );
          }
          this.outputDataUpdate(!0);
        }
        ccTO(e) {
          this.logger.log(2, "TO(" + e + ") - Tab Offset"),
            this.writeScreen.moveCursor(e);
        }
        ccMIDROW(e) {
          let t = { flash: !1 };
          if (((t.underline = e % 2 == 1), (t.italics = e >= 46), t.italics))
            t.foreground = "white";
          else {
            let i = Math.floor(e / 2) - 16;
            t.foreground = [
              "white",
              "green",
              "blue",
              "cyan",
              "red",
              "yellow",
              "magenta",
            ][i];
          }
          this.logger.log(2, "MIDROW: " + JSON.stringify(t)),
            this.writeScreen.setPen(t);
        }
        outputDataUpdate(e = !1) {
          let t = this.logger.time;
          null !== t &&
            this.outputFilter &&
            (null !== this.cueStartTime || this.displayedMemory.isEmpty()
              ? this.displayedMemory.equals(this.lastOutputScreen) ||
                (this.outputFilter.newCue(
                  this.cueStartTime,
                  t,
                  this.lastOutputScreen,
                ),
                e &&
                  this.outputFilter.dispatchCue &&
                  this.outputFilter.dispatchCue(),
                (this.cueStartTime = this.displayedMemory.isEmpty() ? null : t))
              : (this.cueStartTime = t),
            this.lastOutputScreen.copy(this.displayedMemory));
        }
        cueSplitAtTime(e) {
          this.outputFilter &&
            !this.displayedMemory.isEmpty() &&
            (this.outputFilter.newCue &&
              this.outputFilter.newCue(
                this.cueStartTime,
                e,
                this.displayedMemory,
              ),
            (this.cueStartTime = e));
        }
      }
      class r$ {
        constructor(e, t, i) {
          (this.channels = void 0),
            (this.currentChannel = 0),
            (this.cmdHistory = { a: null, b: null }),
            (this.logger = void 0);
          let r = (this.logger = new rx());
          this.channels = [null, new rB(e, t, r), new rB(e + 1, i, r)];
        }
        getHandler(e) {
          return this.channels[e].getHandler();
        }
        setHandler(e, t) {
          this.channels[e].setHandler(t);
        }
        addData(e, t) {
          this.logger.time = e;
          for (let e = 0; e < t.length; e += 2) {
            var i;
            let r = 127 & t[e],
              s = 127 & t[e + 1],
              a = !1,
              n = null;
            if (0 === r && 0 === s) continue;
            this.logger.log(
              3,
              () => "[" + rO([t[e], t[e + 1]]) + "] -> (" + rO([r, s]) + ")",
            );
            let l = this.cmdHistory;
            if (r >= 16 && r <= 31) {
              if (l.a === r && l.b === s) {
                (l.a = null),
                  (l.b = null),
                  this.logger.log(
                    3,
                    () => "Repeated command (" + rO([r, s]) + ") is dropped",
                  );
                continue;
              }
              ((i = this.cmdHistory).a = r),
                (i.b = s),
                (a = this.parseCmd(r, s)) || (a = this.parseMidrow(r, s)),
                a || (a = this.parsePAC(r, s)),
                a || (a = this.parseBackgroundAttributes(r, s));
            } else (l.a = null), (l.b = null);
            if (!a && (n = this.parseChars(r, s))) {
              let e = this.currentChannel;
              e && e > 0
                ? this.channels[e].insertChars(n)
                : this.logger.log(2, "No channel found yet. TEXT-MODE?");
            }
            a ||
              n ||
              this.logger.log(
                2,
                () =>
                  "Couldn't parse cleaned data " +
                  rO([r, s]) +
                  " orig: " +
                  rO([t[e], t[e + 1]]),
              );
          }
        }
        parseCmd(e, t) {
          if (
            !(
              ((20 === e || 28 === e || 21 === e || 29 === e) &&
                t >= 32 &&
                t <= 47) ||
              ((23 === e || 31 === e) && t >= 33 && t <= 35)
            )
          )
            return !1;
          let i = 20 === e || 21 === e || 23 === e ? 1 : 2,
            r = this.channels[i];
          return (
            20 === e || 21 === e || 28 === e || 29 === e
              ? 32 === t
                ? r.ccRCL()
                : 33 === t
                  ? r.ccBS()
                  : 34 === t
                    ? r.ccAOF()
                    : 35 === t
                      ? r.ccAON()
                      : 36 === t
                        ? r.ccDER()
                        : 37 === t
                          ? r.ccRU(2)
                          : 38 === t
                            ? r.ccRU(3)
                            : 39 === t
                              ? r.ccRU(4)
                              : 40 === t
                                ? r.ccFON()
                                : 41 === t
                                  ? r.ccRDC()
                                  : 42 === t
                                    ? r.ccTR()
                                    : 43 === t
                                      ? r.ccRTD()
                                      : 44 === t
                                        ? r.ccEDM()
                                        : 45 === t
                                          ? r.ccCR()
                                          : 46 === t
                                            ? r.ccENM()
                                            : 47 === t && r.ccEOC()
              : r.ccTO(t - 32),
            (this.currentChannel = i),
            !0
          );
        }
        parseMidrow(e, t) {
          let i = 0;
          if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
            if ((i = 17 === e ? 1 : 2) !== this.currentChannel)
              return (
                this.logger.log(0, "Mismatch channel in midrow parsing"), !1
              );
            let r = this.channels[i];
            return (
              !!r &&
              (r.ccMIDROW(t),
              this.logger.log(3, () => "MIDROW (" + rO([e, t]) + ")"),
              !0)
            );
          }
          return !1;
        }
        parsePAC(e, t) {
          let i;
          let r =
              ((e >= 17 && e <= 23) || (e >= 25 && e <= 31)) &&
              t >= 64 &&
              t <= 127,
            s = (16 === e || 24 === e) && t >= 64 && t <= 95;
          if (!(r || s)) return !1;
          let a = e <= 23 ? 1 : 2;
          i =
            t >= 64 && t <= 95
              ? 1 === a
                ? rk[e]
                : rC[e]
              : 1 === a
                ? r_[e]
                : rw[e];
          let n = this.channels[a];
          return (
            !!n &&
            (n.setPAC(this.interpretPAC(i, t)), (this.currentChannel = a), !0)
          );
        }
        interpretPAC(e, t) {
          let i;
          let r = {
            color: null,
            italics: !1,
            indent: null,
            underline: !1,
            row: e,
          };
          return (
            (i = t > 95 ? t - 96 : t - 64),
            (r.underline = (1 & i) == 1),
            i <= 13
              ? (r.color = [
                  "white",
                  "green",
                  "blue",
                  "cyan",
                  "red",
                  "yellow",
                  "magenta",
                  "white",
                ][Math.floor(i / 2)])
              : i <= 15
                ? ((r.italics = !0), (r.color = "white"))
                : (r.indent = 4 * Math.floor((i - 16) / 2)),
            r
          );
        }
        parseChars(e, t) {
          let i;
          let r = null,
            s = null;
          if (
            (e >= 25 ? ((i = 2), (s = e - 8)) : ((i = 1), (s = e)),
            s >= 17 && s <= 19)
          ) {
            let e;
            (e = 17 === s ? t + 80 : 18 === s ? t + 112 : t + 144),
              this.logger.log(
                2,
                () => "Special char '" + rb(e) + "' in channel " + i,
              ),
              (r = [e]);
          } else e >= 32 && e <= 127 && (r = 0 === t ? [e] : [e, t]);
          return (
            r && this.logger.log(3, () => "Char codes =  " + rO(r).join(",")), r
          );
        }
        parseBackgroundAttributes(e, t) {
          let i;
          if (
            !(
              ((16 === e || 24 === e) && t >= 32 && t <= 47) ||
              ((23 === e || 31 === e) && t >= 45 && t <= 47)
            )
          )
            return !1;
          let r = {};
          return (
            16 === e || 24 === e
              ? ((i = Math.floor((t - 32) / 2)),
                (r.background = rP[i]),
                t % 2 == 1 && (r.background = r.background + "_semi"))
              : 45 === t
                ? (r.background = "transparent")
                : ((r.foreground = "black"), 47 === t && (r.underline = !0)),
            this.channels[e <= 23 ? 1 : 2].setBkgData(r),
            !0
          );
        }
        reset() {
          var e;
          for (let e = 0; e < Object.keys(this.channels).length; e++) {
            let t = this.channels[e];
            t && t.reset();
          }
          ((e = this.cmdHistory).a = null), (e.b = null);
        }
        cueSplitAtTime(e) {
          for (let t = 0; t < this.channels.length; t++) {
            let i = this.channels[t];
            i && i.cueSplitAtTime(e);
          }
        }
      }
      class rG {
        constructor(e, t) {
          (this.timelineController = void 0),
            (this.cueRanges = []),
            (this.trackName = void 0),
            (this.startTime = null),
            (this.endTime = null),
            (this.screen = null),
            (this.timelineController = e),
            (this.trackName = t);
        }
        dispatchCue() {
          null !== this.startTime &&
            (this.timelineController.addCues(
              this.trackName,
              this.startTime,
              this.endTime,
              this.screen,
              this.cueRanges,
            ),
            (this.startTime = null));
        }
        newCue(e, t, i) {
          (null === this.startTime || this.startTime > e) &&
            (this.startTime = e),
            (this.endTime = t),
            (this.screen = i),
            this.timelineController.createCaptionsTrack(this.trackName);
        }
        reset() {
          (this.cueRanges = []), (this.startTime = null);
        }
      }
      var rK = (function () {
        if (null != X && X.VTTCue) return self.VTTCue;
        let e = ["", "lr", "rl"],
          t = ["start", "middle", "end", "left", "right"];
        function i(e, t) {
          if ("string" != typeof t || !Array.isArray(e)) return !1;
          let i = t.toLowerCase();
          return !!~e.indexOf(i) && i;
        }
        function r(e, ...t) {
          let i = 1;
          for (; i < arguments.length; i++) {
            let t = arguments[i];
            for (let i in t) e[i] = t[i];
          }
          return e;
        }
        function s(s, a, n) {
          let l = { enumerable: !0 };
          this.hasBeenReset = !1;
          let o = "",
            h = !1,
            d = s,
            u = a,
            c = n,
            f = null,
            g = "",
            m = !0,
            p = "auto",
            E = "start",
            T = 50,
            y = "middle",
            v = 50,
            S = "middle";
          Object.defineProperty(
            this,
            "id",
            r({}, l, {
              get: function () {
                return o;
              },
              set: function (e) {
                o = "" + e;
              },
            }),
          ),
            Object.defineProperty(
              this,
              "pauseOnExit",
              r({}, l, {
                get: function () {
                  return h;
                },
                set: function (e) {
                  h = !!e;
                },
              }),
            ),
            Object.defineProperty(
              this,
              "startTime",
              r({}, l, {
                get: function () {
                  return d;
                },
                set: function (e) {
                  if ("number" != typeof e)
                    throw TypeError("Start time must be set to a number.");
                  (d = e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "endTime",
              r({}, l, {
                get: function () {
                  return u;
                },
                set: function (e) {
                  if ("number" != typeof e)
                    throw TypeError("End time must be set to a number.");
                  (u = e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "text",
              r({}, l, {
                get: function () {
                  return c;
                },
                set: function (e) {
                  (c = "" + e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "region",
              r({}, l, {
                get: function () {
                  return f;
                },
                set: function (e) {
                  (f = e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "vertical",
              r({}, l, {
                get: function () {
                  return g;
                },
                set: function (t) {
                  let r = i(e, t);
                  if (!1 === r)
                    throw SyntaxError(
                      "An invalid or illegal string was specified.",
                    );
                  (g = r), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "snapToLines",
              r({}, l, {
                get: function () {
                  return m;
                },
                set: function (e) {
                  (m = !!e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "line",
              r({}, l, {
                get: function () {
                  return p;
                },
                set: function (e) {
                  if ("number" != typeof e && "auto" !== e)
                    throw SyntaxError(
                      "An invalid number or illegal string was specified.",
                    );
                  (p = e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "lineAlign",
              r({}, l, {
                get: function () {
                  return E;
                },
                set: function (e) {
                  let r = i(t, e);
                  if (!r)
                    throw SyntaxError(
                      "An invalid or illegal string was specified.",
                    );
                  (E = r), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "position",
              r({}, l, {
                get: function () {
                  return T;
                },
                set: function (e) {
                  if (e < 0 || e > 100)
                    throw Error("Position must be between 0 and 100.");
                  (T = e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "positionAlign",
              r({}, l, {
                get: function () {
                  return y;
                },
                set: function (e) {
                  let r = i(t, e);
                  if (!r)
                    throw SyntaxError(
                      "An invalid or illegal string was specified.",
                    );
                  (y = r), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "size",
              r({}, l, {
                get: function () {
                  return v;
                },
                set: function (e) {
                  if (e < 0 || e > 100)
                    throw Error("Size must be between 0 and 100.");
                  (v = e), (this.hasBeenReset = !0);
                },
              }),
            ),
            Object.defineProperty(
              this,
              "align",
              r({}, l, {
                get: function () {
                  return S;
                },
                set: function (e) {
                  let r = i(t, e);
                  if (!r)
                    throw SyntaxError(
                      "An invalid or illegal string was specified.",
                    );
                  (S = r), (this.hasBeenReset = !0);
                },
              }),
            ),
            (this.displayState = void 0);
        }
        return (
          (s.prototype.getCueAsHTML = function () {
            return self.WebVTT.convertCueToDOMTree(self, this.text);
          }),
          s
        );
      })();
      class rV {
        decode(e, t) {
          if (!e) return "";
          if ("string" != typeof e)
            throw Error("Error - expected string data.");
          return decodeURIComponent(encodeURIComponent(e));
        }
      }
      function rH(e) {
        function t(e, t, i, r) {
          return (0 | e) * 3600 + (0 | t) * 60 + (0 | i) + parseFloat(r || 0);
        }
        let i = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
        return i
          ? parseFloat(i[2]) > 59
            ? t(i[2], i[3], 0, i[4])
            : t(i[1], i[2], i[3], i[4])
          : null;
      }
      class rY {
        constructor() {
          this.values = Object.create(null);
        }
        set(e, t) {
          this.get(e) || "" === t || (this.values[e] = t);
        }
        get(e, t, i) {
          return i
            ? this.has(e)
              ? this.values[e]
              : t[i]
            : this.has(e)
              ? this.values[e]
              : t;
        }
        has(e) {
          return e in this.values;
        }
        alt(e, t, i) {
          for (let r = 0; r < i.length; ++r)
            if (t === i[r]) {
              this.set(e, t);
              break;
            }
        }
        integer(e, t) {
          /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
        }
        percent(e, t) {
          if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
            let i = parseFloat(t);
            if (i >= 0 && i <= 100) return this.set(e, i), !0;
          }
          return !1;
        }
      }
      function rW(e, t, i, r) {
        let s = r ? e.split(r) : [e];
        for (let e in s) {
          if ("string" != typeof s[e]) continue;
          let r = s[e].split(i);
          2 === r.length && t(r[0], r[1]);
        }
      }
      let rj = new rK(0, 0, ""),
        rq = "middle" === rj.align ? "middle" : "center";
      function rX(e) {
        return e.replace(/<br(?: \/)?>/gi, "\n");
      }
      class rz {
        constructor() {
          (this.state = "INITIAL"),
            (this.buffer = ""),
            (this.decoder = new rV()),
            (this.regionList = []),
            (this.cue = null),
            (this.oncue = void 0),
            (this.onparsingerror = void 0),
            (this.onflush = void 0);
        }
        parse(e) {
          let t = this;
          function i() {
            let e = t.buffer,
              i = 0;
            for (e = rX(e); i < e.length && "\r" !== e[i] && "\n" !== e[i]; )
              ++i;
            let r = e.slice(0, i);
            return (
              "\r" === e[i] && ++i,
              "\n" === e[i] && ++i,
              (t.buffer = e.slice(i)),
              r
            );
          }
          e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
          try {
            let e = "";
            if ("INITIAL" === t.state) {
              if (!/\r\n|\n/.test(t.buffer)) return this;
              let r = (e = i()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
              if (!(null != r && r[0]))
                throw Error("Malformed WebVTT signature.");
              t.state = "HEADER";
            }
            let s = !1;
            for (; t.buffer && /\r\n|\n/.test(t.buffer); )
              switch ((s ? (s = !1) : (e = i()), t.state)) {
                case "HEADER":
                  if (/:/.test(e)) {
                    var r;
                    (r = e), rW(r, function (e, t) {}, /:/);
                  } else e || (t.state = "ID");
                  continue;
                case "NOTE":
                  e || (t.state = "ID");
                  continue;
                case "ID":
                  if (/^NOTE($|[ \t])/.test(e)) {
                    t.state = "NOTE";
                    break;
                  }
                  if (!e) continue;
                  if (
                    ((t.cue = new rK(0, 0, "")),
                    (t.state = "CUE"),
                    -1 === e.indexOf("-->"))
                  ) {
                    t.cue.id = e;
                    continue;
                  }
                case "CUE":
                  if (!t.cue) {
                    t.state = "BADCUE";
                    continue;
                  }
                  try {
                    !(function (e, t, i) {
                      let r = e;
                      function s() {
                        let t = rH(e);
                        if (null === t)
                          throw Error("Malformed timestamp: " + r);
                        return (e = e.replace(/^[^\sa-zA-Z-]+/, "")), t;
                      }
                      function a() {
                        e = e.replace(/^\s+/, "");
                      }
                      if (
                        (a(), (t.startTime = s()), a(), "-->" !== e.slice(0, 3))
                      )
                        throw Error(
                          "Malformed time stamp (time stamps must be separated by '-->'): " +
                            r,
                        );
                      (e = e.slice(3)),
                        a(),
                        (t.endTime = s()),
                        a(),
                        (function (e, t) {
                          let r = new rY();
                          rW(
                            e,
                            function (e, t) {
                              let s;
                              switch (e) {
                                case "region":
                                  for (let s = i.length - 1; s >= 0; s--)
                                    if (i[s].id === t) {
                                      r.set(e, i[s].region);
                                      break;
                                    }
                                  break;
                                case "vertical":
                                  r.alt(e, t, ["rl", "lr"]);
                                  break;
                                case "line":
                                  (s = t.split(",")),
                                    r.integer(e, s[0]),
                                    r.percent(e, s[0]) &&
                                      r.set("snapToLines", !1),
                                    r.alt(e, s[0], ["auto"]),
                                    2 === s.length &&
                                      r.alt("lineAlign", s[1], [
                                        "start",
                                        rq,
                                        "end",
                                      ]);
                                  break;
                                case "position":
                                  (s = t.split(",")),
                                    r.percent(e, s[0]),
                                    2 === s.length &&
                                      r.alt("positionAlign", s[1], [
                                        "start",
                                        rq,
                                        "end",
                                        "line-left",
                                        "line-right",
                                        "auto",
                                      ]);
                                  break;
                                case "size":
                                  r.percent(e, t);
                                  break;
                                case "align":
                                  r.alt(e, t, [
                                    "start",
                                    rq,
                                    "end",
                                    "left",
                                    "right",
                                  ]);
                              }
                            },
                            /:/,
                            /\s/,
                          ),
                            (t.region = r.get("region", null)),
                            (t.vertical = r.get("vertical", ""));
                          let s = r.get("line", "auto");
                          "auto" === s && -1 === rj.line && (s = -1),
                            (t.line = s),
                            (t.lineAlign = r.get("lineAlign", "start")),
                            (t.snapToLines = r.get("snapToLines", !0)),
                            (t.size = r.get("size", 100)),
                            (t.align = r.get("align", rq));
                          let a = r.get("position", "auto");
                          "auto" === a &&
                            50 === rj.position &&
                            (a =
                              "start" === t.align || "left" === t.align
                                ? 0
                                : "end" === t.align || "right" === t.align
                                  ? 100
                                  : 50),
                            (t.position = a);
                        })(e, t);
                    })(e, t.cue, t.regionList);
                  } catch (e) {
                    (t.cue = null), (t.state = "BADCUE");
                    continue;
                  }
                  t.state = "CUETEXT";
                  continue;
                case "CUETEXT":
                  {
                    let i = -1 !== e.indexOf("-->");
                    if (!e || (i && (s = !0))) {
                      t.oncue && t.cue && t.oncue(t.cue),
                        (t.cue = null),
                        (t.state = "ID");
                      continue;
                    }
                    if (null === t.cue) continue;
                    t.cue.text && (t.cue.text += "\n"), (t.cue.text += e);
                  }
                  continue;
                case "BADCUE":
                  e || (t.state = "ID");
              }
          } catch (e) {
            "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
              (t.cue = null),
              (t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE");
          }
          return this;
        }
        flush() {
          try {
            if (
              ((this.cue || "HEADER" === this.state) &&
                ((this.buffer += "\n\n"), this.parse()),
              "INITIAL" === this.state || "BADWEBVTT" === this.state)
            )
              throw Error("Malformed WebVTT signature.");
          } catch (e) {
            this.onparsingerror && this.onparsingerror(e);
          }
          return this.onflush && this.onflush(), this;
        }
      }
      let rQ = /\r\n|\n\r|\n|\r/g,
        rJ = function (e, t, i = 0) {
          return e.slice(i, i + t.length) === t;
        },
        rZ = function (e) {
          let t = parseInt(e.slice(-3)),
            i = parseInt(e.slice(-6, -4)),
            r = parseInt(e.slice(-9, -7)),
            s = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
          if (!b(t) || !b(i) || !b(r) || !b(s))
            throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
          return t + (1e3 * i + 6e4 * r + 36e5 * s);
        },
        r0 = function (e) {
          let t = 5381,
            i = e.length;
          for (; i; ) t = (33 * t) ^ e.charCodeAt(--i);
          return (t >>> 0).toString();
        };
      function r1(e, t, i) {
        return r0(e.toString()) + r0(t.toString()) + r0(i);
      }
      let r2 = function (e, t, i) {
          let r = e[t],
            s = e[r.prevCC];
          if (!s || (!s.new && r.new)) {
            (e.ccOffset = e.presentationOffset = r.start), (r.new = !1);
            return;
          }
          for (; null != (a = s) && a.new; ) {
            var a;
            (e.ccOffset += r.start - s.start),
              (r.new = !1),
              (s = e[(r = s).prevCC]);
          }
          e.presentationOffset = i;
        },
        r4 = "stpp.ttml.im1t",
        r3 = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
        r5 = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
        r8 = {
          left: "start",
          center: "center",
          right: "end",
          start: "start",
          end: "end",
        };
      function r6(e, t, i, r) {
        let s = eC(new Uint8Array(e), ["mdat"]);
        if (0 === s.length) {
          r(Error("Could not parse IMSC1 mdat"));
          return;
        }
        let a = s.map((e) => ev(e)),
          n = (function (e, t, i = 1, r = !1) {
            return i3(e, 1, 1 / i, r);
          })(t.baseTime, 0, t.timescale);
        try {
          a.forEach((e) =>
            i(
              (function (e, t) {
                let i = new DOMParser()
                  .parseFromString(e, "text/xml")
                  .getElementsByTagName("tt")[0];
                if (!i) throw Error("Invalid ttml");
                let r = {
                    frameRate: 30,
                    subFrameRate: 1,
                    frameRateMultiplier: 0,
                    tickRate: 0,
                  },
                  s = Object.keys(r).reduce(
                    (e, t) => ((e[t] = i.getAttribute(`ttp:${t}`) || r[t]), e),
                    {},
                  ),
                  a = "preserve" !== i.getAttribute("xml:space"),
                  n = r7(r9(i, "styling", "style")),
                  l = r7(r9(i, "layout", "region")),
                  o = r9(i, "body", "[begin]");
                return [].map
                  .call(o, (e) => {
                    let i = (function e(t, i) {
                      return [].slice.call(t.childNodes).reduce((t, r, s) => {
                        var a;
                        return "br" === r.nodeName && s
                          ? t + "\n"
                          : null != (a = r.childNodes) && a.length
                            ? e(r, i)
                            : i
                              ? t + r.textContent.trim().replace(/\s+/g, " ")
                              : t + r.textContent;
                      }, "");
                    })(e, a);
                    if (!i || !e.hasAttribute("begin")) return null;
                    let r = si(e.getAttribute("begin"), s),
                      o = si(e.getAttribute("dur"), s),
                      h = si(e.getAttribute("end"), s);
                    if (null === r) throw st(e);
                    if (null === h) {
                      if (null === o) throw st(e);
                      h = r + o;
                    }
                    let d = new rK(r - t, h - t, i);
                    d.id = r1(d.startTime, d.endTime, d.text);
                    let u = l[e.getAttribute("region")],
                      c = (function (e, t, i) {
                        let r = "http://www.w3.org/ns/ttml#styling",
                          s = null,
                          a =
                            null != e && e.hasAttribute("style")
                              ? e.getAttribute("style")
                              : null;
                        return (
                          a && i.hasOwnProperty(a) && (s = i[a]),
                          [
                            "displayAlign",
                            "textAlign",
                            "color",
                            "backgroundColor",
                            "fontSize",
                            "fontFamily",
                          ].reduce((i, a) => {
                            let n = se(t, r, a) || se(e, r, a) || se(s, r, a);
                            return n && (i[a] = n), i;
                          }, {})
                        );
                      })(u, n[e.getAttribute("style")], n),
                      { textAlign: f } = c;
                    if (f) {
                      let e = r8[f];
                      e && (d.lineAlign = e), (d.align = f);
                    }
                    return I(d, c), d;
                  })
                  .filter((e) => null !== e);
              })(e, n),
            ),
          );
        } catch (e) {
          r(e);
        }
      }
      function r9(e, t, i) {
        let r = e.getElementsByTagName(t)[0];
        return r ? [].slice.call(r.querySelectorAll(i)) : [];
      }
      function r7(e) {
        return e.reduce((e, t) => {
          let i = t.getAttribute("xml:id");
          return i && (e[i] = t), e;
        }, {});
      }
      function se(e, t, i) {
        return e && e.hasAttributeNS(t, i) ? e.getAttributeNS(t, i) : null;
      }
      function st(e) {
        return Error(`Could not parse ttml timestamp ${e}`);
      }
      function si(e, t) {
        if (!e) return null;
        let i = rH(e);
        return (
          null === i &&
            (r3.test(e)
              ? (i = (function (e, t) {
                  let i = r3.exec(e),
                    r = (0 | i[4]) + (0 | i[5]) / t.subFrameRate;
                  return (
                    (0 | i[1]) * 3600 +
                    (0 | i[2]) * 60 +
                    (0 | i[3]) +
                    r / t.frameRate
                  );
                })(e, t))
              : r5.test(e) &&
                (i = (function (e, t) {
                  let i = r5.exec(e),
                    r = Number(i[1]);
                  switch (i[2]) {
                    case "h":
                      return 3600 * r;
                    case "m":
                      return 60 * r;
                    case "ms":
                      return 1e3 * r;
                    case "f":
                      return r / t.frameRate;
                    case "t":
                      return r / t.tickRate;
                  }
                  return r;
                })(e, t))),
          i
        );
      }
      class sr {
        constructor(e) {
          (this.hls = void 0),
            (this.media = null),
            (this.config = void 0),
            (this.enabled = !0),
            (this.Cues = void 0),
            (this.textTracks = []),
            (this.tracks = []),
            (this.initPTS = []),
            (this.unparsedVttFrags = []),
            (this.captionsTracks = {}),
            (this.nonNativeCaptionsTracks = {}),
            (this.cea608Parser1 = void 0),
            (this.cea608Parser2 = void 0),
            (this.lastCc = -1),
            (this.lastSn = -1),
            (this.lastPartIndex = -1),
            (this.prevCC = -1),
            (this.vttCCs = sn()),
            (this.captionsProperties = void 0),
            (this.hls = e),
            (this.config = e.config),
            (this.Cues = e.config.cueHandler),
            (this.captionsProperties = {
              textTrack1: {
                label: this.config.captionsTextTrack1Label,
                languageCode: this.config.captionsTextTrack1LanguageCode,
              },
              textTrack2: {
                label: this.config.captionsTextTrack2Label,
                languageCode: this.config.captionsTextTrack2LanguageCode,
              },
              textTrack3: {
                label: this.config.captionsTextTrack3Label,
                languageCode: this.config.captionsTextTrack3LanguageCode,
              },
              textTrack4: {
                label: this.config.captionsTextTrack4Label,
                languageCode: this.config.captionsTextTrack4LanguageCode,
              },
            }),
            e.on(C.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(C.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
            e.on(C.FRAG_LOADING, this.onFragLoading, this),
            e.on(C.FRAG_LOADED, this.onFragLoaded, this),
            e.on(C.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
            e.on(C.FRAG_DECRYPTED, this.onFragDecrypted, this),
            e.on(C.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.on(C.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
            e.on(C.BUFFER_FLUSHING, this.onBufferFlushing, this);
        }
        destroy() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(
              C.SUBTITLE_TRACKS_UPDATED,
              this.onSubtitleTracksUpdated,
              this,
            ),
            e.off(C.FRAG_LOADING, this.onFragLoading, this),
            e.off(C.FRAG_LOADED, this.onFragLoaded, this),
            e.off(C.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
            e.off(C.FRAG_DECRYPTED, this.onFragDecrypted, this),
            e.off(C.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.off(
              C.SUBTITLE_TRACKS_CLEARED,
              this.onSubtitleTracksCleared,
              this,
            ),
            e.off(C.BUFFER_FLUSHING, this.onBufferFlushing, this),
            (this.hls = this.config = null),
            (this.cea608Parser1 = this.cea608Parser2 = void 0);
        }
        initCea608Parsers() {
          if (
            this.config.enableCEA708Captions &&
            (!this.cea608Parser1 || !this.cea608Parser2)
          ) {
            let e = new rG(this, "textTrack1"),
              t = new rG(this, "textTrack2"),
              i = new rG(this, "textTrack3"),
              r = new rG(this, "textTrack4");
            (this.cea608Parser1 = new r$(1, e, t)),
              (this.cea608Parser2 = new r$(3, i, r));
          }
        }
        addCues(e, t, i, r, s) {
          let a = !1;
          for (let e = s.length; e--; ) {
            var n;
            let r = s[e],
              l = ((n = r[0]), Math.min(r[1], i) - Math.max(n, t));
            if (
              l >= 0 &&
              ((r[0] = Math.min(r[0], t)),
              (r[1] = Math.max(r[1], i)),
              (a = !0),
              l / (i - t) > 0.5)
            )
              return;
          }
          if ((a || s.push([t, i]), this.config.renderTextTracksNatively)) {
            let s = this.captionsTracks[e];
            this.Cues.newCue(s, t, i, r);
          } else {
            let s = this.Cues.newCue(null, t, i, r);
            this.hls.trigger(C.CUES_PARSED, {
              type: "captions",
              cues: s,
              track: e,
            });
          }
        }
        onInitPtsFound(e, { frag: t, id: i, initPTS: r, timescale: s }) {
          let { unparsedVttFrags: a } = this;
          "main" === i && (this.initPTS[t.cc] = { baseTime: r, timescale: s }),
            a.length &&
              ((this.unparsedVttFrags = []),
              a.forEach((e) => {
                this.onFragLoaded(C.FRAG_LOADED, e);
              }));
        }
        getExistingTrack(e, t) {
          let { media: i } = this;
          if (i)
            for (let r = 0; r < i.textTracks.length; r++) {
              let s = i.textTracks[r];
              if (sa(s, { name: e, lang: t, attrs: {} })) return s;
            }
          return null;
        }
        createCaptionsTrack(e) {
          this.config.renderTextTracksNatively
            ? this.createNativeTrack(e)
            : this.createNonNativeTrack(e);
        }
        createNativeTrack(e) {
          if (this.captionsTracks[e]) return;
          let { captionsProperties: t, captionsTracks: i, media: r } = this,
            { label: s, languageCode: a } = t[e],
            n = this.getExistingTrack(s, a);
          if (n) (i[e] = n), tc(i[e]), td(i[e], r);
          else {
            let t = this.createTextTrack("captions", s, a);
            t && ((t[e] = !0), (i[e] = t));
          }
        }
        createNonNativeTrack(e) {
          if (this.nonNativeCaptionsTracks[e]) return;
          let t = this.captionsProperties[e];
          if (!t) return;
          let i = {
            _id: e,
            label: t.label,
            kind: "captions",
            default: !!t.media && !!t.media.default,
            closedCaptions: t.media,
          };
          (this.nonNativeCaptionsTracks[e] = i),
            this.hls.trigger(C.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [i] });
        }
        createTextTrack(e, t, i) {
          let r = this.media;
          if (r) return r.addTextTrack(e, t, i);
        }
        onMediaAttaching(e, t) {
          (this.media = t.media), this._cleanTracks();
        }
        onMediaDetaching() {
          let { captionsTracks: e } = this;
          Object.keys(e).forEach((t) => {
            tc(e[t]), delete e[t];
          }),
            (this.nonNativeCaptionsTracks = {});
        }
        onManifestLoading() {
          (this.lastCc = -1),
            (this.lastSn = -1),
            (this.lastPartIndex = -1),
            (this.prevCC = -1),
            (this.vttCCs = sn()),
            this._cleanTracks(),
            (this.tracks = []),
            (this.captionsTracks = {}),
            (this.nonNativeCaptionsTracks = {}),
            (this.textTracks = []),
            (this.unparsedVttFrags = []),
            (this.initPTS = []),
            this.cea608Parser1 &&
              this.cea608Parser2 &&
              (this.cea608Parser1.reset(), this.cea608Parser2.reset());
        }
        _cleanTracks() {
          let { media: e } = this;
          if (!e) return;
          let t = e.textTracks;
          if (t) for (let e = 0; e < t.length; e++) tc(t[e]);
        }
        onSubtitleTracksUpdated(e, t) {
          let i = t.subtitleTracks || [],
            r = i.some((e) => e.textCodec === r4);
          if (this.config.enableWebVTT || (r && this.config.enableIMSC1)) {
            if (rm(this.tracks, i)) {
              this.tracks = i;
              return;
            }
            if (
              ((this.textTracks = []),
              (this.tracks = i),
              this.config.renderTextTracksNatively)
            ) {
              let e = this.media,
                t = e ? tg(e.textTracks) : null;
              if (
                (this.tracks.forEach((e, i) => {
                  let r;
                  if (t) {
                    let i = null;
                    for (let r = 0; r < t.length; r++)
                      if (t[r] && sa(t[r], e)) {
                        (i = t[r]), (t[r] = null);
                        break;
                      }
                    i && (r = i);
                  }
                  if (r) tc(r);
                  else {
                    let t = ss(e);
                    (r = this.createTextTrack(t, e.name, e.lang)) &&
                      (r.mode = "disabled");
                  }
                  r && this.textTracks.push(r);
                }),
                null != t && t.length)
              ) {
                let e = t.filter((e) => null !== e).map((e) => e.label);
                e.length &&
                  M.warn(
                    `Media element contains unused subtitle tracks: ${e.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`,
                  );
              }
            } else if (this.tracks.length) {
              let e = this.tracks.map((e) => ({
                label: e.name,
                kind: e.type.toLowerCase(),
                default: e.default,
                subtitleTrack: e,
              }));
              this.hls.trigger(C.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: e });
            }
          }
        }
        onManifestLoaded(e, t) {
          this.config.enableCEA708Captions &&
            t.captions &&
            t.captions.forEach((e) => {
              let t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
              if (!t) return;
              let i = `textTrack${t[1]}`,
                r = this.captionsProperties[i];
              r &&
                ((r.label = e.name),
                e.lang && (r.languageCode = e.lang),
                (r.media = e));
            });
        }
        closedCaptionsForLevel(e) {
          let t = this.hls.levels[e.level];
          return null == t ? void 0 : t.attrs["CLOSED-CAPTIONS"];
        }
        onFragLoading(e, t) {
          if (this.enabled && t.frag.type === tn.MAIN) {
            var i, r;
            let { cea608Parser1: e, cea608Parser2: s, lastSn: a } = this,
              { cc: n, sn: l } = t.frag,
              o =
                null != (i = null == (r = t.part) ? void 0 : r.index) ? i : -1;
            e &&
              s &&
              (l !== a + 1 ||
                (l === a && o !== this.lastPartIndex + 1) ||
                n !== this.lastCc) &&
              (e.reset(), s.reset()),
              (this.lastCc = n),
              (this.lastSn = l),
              (this.lastPartIndex = o);
          }
        }
        onFragLoaded(e, t) {
          let { frag: i, payload: r } = t;
          if (i.type === tn.SUBTITLE) {
            if (r.byteLength) {
              let e = i.decryptdata,
                s = "stats" in t;
              if (null == e || !e.encrypted || s) {
                let e = this.tracks[i.level],
                  s = this.vttCCs;
                s[i.cc] ||
                  ((s[i.cc] = { start: i.start, prevCC: this.prevCC, new: !0 }),
                  (this.prevCC = i.cc)),
                  e && e.textCodec === r4
                    ? this._parseIMSC1(i, r)
                    : this._parseVTTs(t);
              }
            } else
              this.hls.trigger(C.SUBTITLE_FRAG_PROCESSED, {
                success: !1,
                frag: i,
                error: Error("Empty subtitle payload"),
              });
          }
        }
        _parseIMSC1(e, t) {
          let i = this.hls;
          r6(
            t,
            this.initPTS[e.cc],
            (t) => {
              this._appendCues(t, e.level),
                i.trigger(C.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
            },
            (t) => {
              M.log(`Failed to parse IMSC1: ${t}`),
                i.trigger(C.SUBTITLE_FRAG_PROCESSED, {
                  success: !1,
                  frag: e,
                  error: t,
                });
            },
          );
        }
        _parseVTTs(e) {
          var t;
          let { frag: i, payload: r } = e,
            { initPTS: s, unparsedVttFrags: a } = this,
            n = s.length - 1;
          if (!s[i.cc] && -1 === n) {
            a.push(e);
            return;
          }
          let l = this.hls;
          !(function (e, t, i, r, s, a, n) {
            let l;
            let o = new rz(),
              h = ev(new Uint8Array(e)).trim().replace(rQ, "\n").split("\n"),
              d = [],
              u = t
                ? (function (e, t = 1) {
                    return i3(e, 9e4, 1 / t);
                  })(t.baseTime, t.timescale)
                : 0,
              c = "00:00.000",
              f = 0,
              g = 0,
              m = !0;
            (o.oncue = function (e) {
              let a = i[r],
                n = i.ccOffset,
                o = (f - u) / 9e4;
              if (
                (null != a &&
                  a.new &&
                  (void 0 !== g ? (n = i.ccOffset = a.start) : r2(i, r, o)),
                o)
              ) {
                if (!t) {
                  l = Error("Missing initPTS for VTT MPEGTS");
                  return;
                }
                n = o - i.presentationOffset;
              }
              let h = e.endTime - e.startTime,
                c = i7((e.startTime + n - g) * 9e4, 9e4 * s) / 9e4;
              (e.startTime = Math.max(c, 0)), (e.endTime = Math.max(c + h, 0));
              let m = e.text.trim();
              (e.text = decodeURIComponent(encodeURIComponent(m))),
                e.id || (e.id = r1(e.startTime, e.endTime, m)),
                e.endTime > 0 && d.push(e);
            }),
              (o.onparsingerror = function (e) {
                l = e;
              }),
              (o.onflush = function () {
                if (l) {
                  n(l);
                  return;
                }
                a(d);
              }),
              h.forEach((e) => {
                if (m) {
                  if (rJ(e, "X-TIMESTAMP-MAP=")) {
                    (m = !1),
                      e
                        .slice(16)
                        .split(",")
                        .forEach((e) => {
                          rJ(e, "LOCAL:")
                            ? (c = e.slice(6))
                            : rJ(e, "MPEGTS:") && (f = parseInt(e.slice(7)));
                        });
                    try {
                      g = rZ(c) / 1e3;
                    } catch (e) {
                      l = e;
                    }
                    return;
                  }
                  "" === e && (m = !1);
                }
                o.parse(e + "\n");
              }),
              o.flush();
          })(
            null != (t = i.initSegment) && t.data
              ? eM(i.initSegment.data, new Uint8Array(r))
              : r,
            this.initPTS[i.cc],
            this.vttCCs,
            i.cc,
            i.start,
            (e) => {
              this._appendCues(e, i.level),
                l.trigger(C.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: i });
            },
            (t) => {
              let s = "Missing initPTS for VTT MPEGTS" === t.message;
              s ? a.push(e) : this._fallbackToIMSC1(i, r),
                M.log(`Failed to parse VTT cue: ${t}`),
                (s && n > i.cc) ||
                  l.trigger(C.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: i,
                    error: t,
                  });
            },
          );
        }
        _fallbackToIMSC1(e, t) {
          let i = this.tracks[e.level];
          i.textCodec ||
            r6(
              t,
              this.initPTS[e.cc],
              () => {
                (i.textCodec = r4), this._parseIMSC1(e, t);
              },
              () => {
                i.textCodec = "wvtt";
              },
            );
        }
        _appendCues(e, t) {
          let i = this.hls;
          if (this.config.renderTextTracksNatively) {
            let i = this.textTracks[t];
            if (!i || "disabled" === i.mode) return;
            e.forEach((e) => tu(i, e));
          } else {
            let r = this.tracks[t];
            if (!r) return;
            let s = r.default ? "default" : "subtitles" + t;
            i.trigger(C.CUES_PARSED, { type: "subtitles", cues: e, track: s });
          }
        }
        onFragDecrypted(e, t) {
          let { frag: i } = t;
          i.type === tn.SUBTITLE && this.onFragLoaded(C.FRAG_LOADED, t);
        }
        onSubtitleTracksCleared() {
          (this.tracks = []), (this.captionsTracks = {});
        }
        onFragParsingUserdata(e, t) {
          this.initCea608Parsers();
          let { cea608Parser1: i, cea608Parser2: r } = this;
          if (!this.enabled || !i || !r) return;
          let { frag: s, samples: a } = t;
          if (s.type !== tn.MAIN || "NONE" !== this.closedCaptionsForLevel(s))
            for (let e = 0; e < a.length; e++) {
              let t = a[e].bytes;
              if (t) {
                let s = this.extractCea608Data(t);
                i.addData(a[e].pts, s[0]), r.addData(a[e].pts, s[1]);
              }
            }
        }
        onBufferFlushing(
          e,
          { startOffset: t, endOffset: i, endOffsetSubtitles: r, type: s },
        ) {
          let { media: a } = this;
          if (a && !(a.currentTime < i)) {
            if (!s || "video" === s) {
              let { captionsTracks: e } = this;
              Object.keys(e).forEach((r) => tf(e[r], t, i));
            }
            if (
              this.config.renderTextTracksNatively &&
              0 === t &&
              void 0 !== r
            ) {
              let { textTracks: e } = this;
              Object.keys(e).forEach((i) => tf(e[i], t, r));
            }
          }
        }
        extractCea608Data(e) {
          let t = [[], []],
            i = 31 & e[0],
            r = 2;
          for (let s = 0; s < i; s++) {
            let i = e[r++],
              s = 127 & e[r++],
              a = 127 & e[r++];
            if ((0 !== s || 0 !== a) && (4 & i) != 0) {
              let e = 3 & i;
              (0 === e || 1 === e) && (t[e].push(s), t[e].push(a));
            }
          }
          return t;
        }
      }
      function ss(e) {
        return e.characteristics &&
          /transcribes-spoken-dialog/gi.test(e.characteristics) &&
          /describes-music-and-sound/gi.test(e.characteristics)
          ? "captions"
          : "subtitles";
      }
      function sa(e, t) {
        return !!e && e.kind === ss(t) && rE(t, e);
      }
      function sn() {
        return {
          ccOffset: 0,
          presentationOffset: 0,
          0: { start: 0, prevCC: -1, new: !0 },
        };
      }
      class sl {
        constructor(e) {
          (this.hls = void 0),
            (this.autoLevelCapping = void 0),
            (this.firstLevel = void 0),
            (this.media = void 0),
            (this.restrictedLevels = void 0),
            (this.timer = void 0),
            (this.clientRect = void 0),
            (this.streamController = void 0),
            (this.hls = e),
            (this.autoLevelCapping = Number.POSITIVE_INFINITY),
            (this.firstLevel = -1),
            (this.media = null),
            (this.restrictedLevels = []),
            (this.timer = void 0),
            (this.clientRect = null),
            this.registerListeners();
        }
        setStreamController(e) {
          this.streamController = e;
        }
        destroy() {
          this.hls && this.unregisterListener(),
            this.timer && this.stopCapping(),
            (this.media = null),
            (this.clientRect = null),
            (this.hls = this.streamController = null);
        }
        registerListeners() {
          let { hls: e } = this;
          e.on(C.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
            e.on(C.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(C.BUFFER_CODECS, this.onBufferCodecs, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this);
        }
        unregisterListener() {
          let { hls: e } = this;
          e.off(C.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
            e.off(C.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(C.BUFFER_CODECS, this.onBufferCodecs, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this);
        }
        onFpsDropLevelCapping(e, t) {
          let i = this.hls.levels[t.droppedLevel];
          this.isLevelAllowed(i) &&
            this.restrictedLevels.push({
              bitrate: i.bitrate,
              height: i.height,
              width: i.width,
            });
        }
        onMediaAttaching(e, t) {
          (this.media = t.media instanceof HTMLVideoElement ? t.media : null),
            (this.clientRect = null),
            this.timer && this.hls.levels.length && this.detectPlayerSize();
        }
        onManifestParsed(e, t) {
          let i = this.hls;
          (this.restrictedLevels = []),
            (this.firstLevel = t.firstLevel),
            i.config.capLevelToPlayerSize && t.video && this.startCapping();
        }
        onLevelsUpdated(e, t) {
          this.timer && b(this.autoLevelCapping) && this.detectPlayerSize();
        }
        onBufferCodecs(e, t) {
          this.hls.config.capLevelToPlayerSize &&
            t.video &&
            this.startCapping();
        }
        onMediaDetaching() {
          this.stopCapping();
        }
        detectPlayerSize() {
          if (this.media) {
            if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
              this.clientRect = null;
              return;
            }
            let e = this.hls.levels;
            if (e.length) {
              let t = this.hls,
                i = this.getMaxLevel(e.length - 1);
              i !== this.autoLevelCapping &&
                M.log(
                  `Setting autoLevelCapping to ${i}: ${e[i].height}p@${e[i].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`,
                ),
                (t.autoLevelCapping = i),
                t.autoLevelCapping > this.autoLevelCapping &&
                  this.streamController &&
                  this.streamController.nextLevelSwitch(),
                (this.autoLevelCapping = t.autoLevelCapping);
            }
          }
        }
        getMaxLevel(e) {
          let t = this.hls.levels;
          if (!t.length) return -1;
          let i = t.filter((t, i) => this.isLevelAllowed(t) && i <= e);
          return (
            (this.clientRect = null),
            sl.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
          );
        }
        startCapping() {
          this.timer ||
            ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
            self.clearInterval(this.timer),
            (this.timer = self.setInterval(
              this.detectPlayerSize.bind(this),
              1e3,
            )),
            this.detectPlayerSize());
        }
        stopCapping() {
          (this.restrictedLevels = []),
            (this.firstLevel = -1),
            (this.autoLevelCapping = Number.POSITIVE_INFINITY),
            this.timer &&
              (self.clearInterval(this.timer), (this.timer = void 0));
        }
        getDimensions() {
          if (this.clientRect) return this.clientRect;
          let e = this.media,
            t = { width: 0, height: 0 };
          if (e) {
            let i = e.getBoundingClientRect();
            (t.width = i.width),
              (t.height = i.height),
              t.width ||
                t.height ||
                ((t.width = i.right - i.left || e.width || 0),
                (t.height = i.bottom - i.top || e.height || 0));
          }
          return (this.clientRect = t), t;
        }
        get mediaWidth() {
          return this.getDimensions().width * this.contentScaleFactor;
        }
        get mediaHeight() {
          return this.getDimensions().height * this.contentScaleFactor;
        }
        get contentScaleFactor() {
          let e = 1;
          if (!this.hls.config.ignoreDevicePixelRatio)
            try {
              e = self.devicePixelRatio;
            } catch (e) {}
          return e;
        }
        isLevelAllowed(e) {
          return !this.restrictedLevels.some(
            (t) =>
              e.bitrate === t.bitrate &&
              e.width === t.width &&
              e.height === t.height,
          );
        }
        static getMaxLevelByMediaSize(e, t, i) {
          if (!(null != e && e.length)) return -1;
          let r = (e, t) => !t || e.width !== t.width || e.height !== t.height,
            s = e.length - 1,
            a = Math.max(t, i);
          for (let t = 0; t < e.length; t += 1) {
            let i = e[t];
            if ((i.width >= a || i.height >= a) && r(i, e[t + 1])) {
              s = t;
              break;
            }
          }
          return s;
        }
      }
      class so {
        constructor(e) {
          (this.hls = void 0),
            (this.isVideoPlaybackQualityAvailable = !1),
            (this.timer = void 0),
            (this.media = null),
            (this.lastTime = void 0),
            (this.lastDroppedFrames = 0),
            (this.lastDecodedFrames = 0),
            (this.streamController = void 0),
            (this.hls = e),
            this.registerListeners();
        }
        setStreamController(e) {
          this.streamController = e;
        }
        registerListeners() {
          this.hls.on(C.MEDIA_ATTACHING, this.onMediaAttaching, this);
        }
        unregisterListeners() {
          this.hls.off(C.MEDIA_ATTACHING, this.onMediaAttaching, this);
        }
        destroy() {
          this.timer && clearInterval(this.timer),
            this.unregisterListeners(),
            (this.isVideoPlaybackQualityAvailable = !1),
            (this.media = null);
        }
        onMediaAttaching(e, t) {
          let i = this.hls.config;
          if (i.capLevelOnFPSDrop) {
            let e = t.media instanceof self.HTMLVideoElement ? t.media : null;
            (this.media = e),
              e &&
                "function" == typeof e.getVideoPlaybackQuality &&
                (this.isVideoPlaybackQualityAvailable = !0),
              self.clearInterval(this.timer),
              (this.timer = self.setInterval(
                this.checkFPSInterval.bind(this),
                i.fpsDroppedMonitoringPeriod,
              ));
          }
        }
        checkFPS(e, t, i) {
          let r = performance.now();
          if (t) {
            if (this.lastTime) {
              let e = r - this.lastTime,
                s = i - this.lastDroppedFrames,
                a = t - this.lastDecodedFrames,
                n = (1e3 * s) / e,
                l = this.hls;
              if (
                (l.trigger(C.FPS_DROP, {
                  currentDropped: s,
                  currentDecoded: a,
                  totalDroppedFrames: i,
                }),
                n > 0 && s > l.config.fpsDroppedMonitoringThreshold * a)
              ) {
                let e = l.currentLevel;
                M.warn(
                  "drop FPS ratio greater than max allowed value for currentLevel: " +
                    e,
                ),
                  e > 0 &&
                    (-1 === l.autoLevelCapping || l.autoLevelCapping >= e) &&
                    ((e -= 1),
                    l.trigger(C.FPS_DROP_LEVEL_CAPPING, {
                      level: e,
                      droppedLevel: l.currentLevel,
                    }),
                    (l.autoLevelCapping = e),
                    this.streamController.nextLevelSwitch());
              }
            }
            (this.lastTime = r),
              (this.lastDroppedFrames = i),
              (this.lastDecodedFrames = t);
          }
        }
        checkFPSInterval() {
          let e = this.media;
          if (e) {
            if (this.isVideoPlaybackQualityAvailable) {
              let t = e.getVideoPlaybackQuality();
              this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
            } else
              this.checkFPS(
                e,
                e.webkitDecodedFrameCount,
                e.webkitDroppedFrameCount,
              );
          }
        }
      }
      let sh = "[eme]";
      class sd {
        constructor(e) {
          (this.hls = void 0),
            (this.config = void 0),
            (this.media = null),
            (this.keyFormatPromise = null),
            (this.keySystemAccessPromises = {}),
            (this._requestLicenseFailureCount = 0),
            (this.mediaKeySessions = []),
            (this.keyIdToKeySessionPromise = {}),
            (this.setMediaKeysQueue = sd.CDMCleanupPromise
              ? [sd.CDMCleanupPromise]
              : []),
            (this.debug = M.debug.bind(M, sh)),
            (this.log = M.log.bind(M, sh)),
            (this.warn = M.warn.bind(M, sh)),
            (this.error = M.error.bind(M, sh)),
            (this.onMediaEncrypted = (e) => {
              let { initDataType: t, initData: i } = e,
                r = `"${e.type}" event: init data type: "${t}"`;
              if ((this.debug(r), null !== i)) {
                if (!this.keyFormatPromise) {
                  let e = Object.keys(this.keySystemAccessPromises);
                  e.length || (e = ei(this.config));
                  let t = e.map(et).filter((e) => !!e);
                  this.keyFormatPromise = this.getKeyFormatPromise(t);
                }
                this.keyFormatPromise.then((s) => {
                  let a, n;
                  let l = J(s);
                  if ("sinf" === t) {
                    if (l !== z.FAIRPLAY) {
                      this.warn(
                        `Ignoring unexpected "${e.type}" event with init data type: "${t}" for selected key-system ${l}`,
                      );
                      return;
                    }
                    let s = eR(new Uint8Array(i));
                    try {
                      let e = j(JSON.parse(s).sinf),
                        t = eF(e);
                      if (!t)
                        throw Error(
                          "'schm' box missing or not cbcs/cenc with schi > tenc",
                        );
                      (a = t.subarray(8, 24)), (n = z.FAIRPLAY);
                    } catch (e) {
                      this.warn(`${r} Failed to parse sinf: ${e}`);
                      return;
                    }
                  } else {
                    if (l !== z.WIDEVINE && l !== z.PLAYREADY) {
                      this.warn(
                        `Ignoring unexpected "${e.type}" event with init data type: "${t}" for selected key-system ${l}`,
                      );
                      return;
                    }
                    let s = (function (e) {
                        let t = [];
                        if (e instanceof ArrayBuffer) {
                          let i = e.byteLength,
                            r = 0;
                          for (; r + 32 < i; ) {
                            let i = (function (e) {
                              let t = e.getUint32(0),
                                i = e.byteOffset,
                                r = e.byteLength;
                              if (r < t) return { offset: i, size: r };
                              if (1886614376 !== e.getUint32(4))
                                return { offset: i, size: t };
                              let s = e.getUint32(8) >>> 24;
                              if (0 !== s && 1 !== s)
                                return { offset: i, size: t };
                              let a = e.buffer,
                                n = eS.hexDump(new Uint8Array(a, i + 12, 16)),
                                l = e.getUint32(28),
                                o = null,
                                h = null;
                              if (0 === s) {
                                if (t - 32 < l || l < 22)
                                  return { offset: i, size: t };
                                h = new Uint8Array(a, i + 32, l);
                              } else if (1 === s) {
                                if (!l || r < i + 32 + 16 * l + 16)
                                  return { offset: i, size: t };
                                o = [];
                                for (let e = 0; e < l; e++)
                                  o.push(
                                    new Uint8Array(a, i + 32 + 16 * e, 16),
                                  );
                              }
                              return {
                                version: s,
                                systemId: n,
                                kids: o,
                                data: h,
                                offset: i,
                                size: t,
                              };
                            })(new DataView(e, r));
                            t.push(i), (r += i.size);
                          }
                        }
                        return t;
                      })(i),
                      o = s.filter((e) => !!e.systemId && ee(e.systemId) === l);
                    o.length > 1 &&
                      this.warn(
                        `${r} Using first of ${o.length} pssh found for selected key-system ${l}`,
                      );
                    let h = o[0];
                    if (!h) {
                      0 === s.length || s.some((e) => !e.systemId)
                        ? this.warn(
                            `${r} contains incomplete or invalid pssh data`,
                          )
                        : this.log(
                            `ignoring ${r} for ${s.map((e) => ee(e.systemId)).join(",")} pssh data in favor of playlist keys`,
                          );
                      return;
                    }
                    if (((n = ee(h.systemId)), 0 === h.version && h.data)) {
                      if (n === z.WIDEVINE) {
                        let e = h.data.length - 22;
                        a = h.data.subarray(e, e + 16);
                      } else n === z.PLAYREADY && (a = es(h.data));
                    }
                  }
                  if (!n || !a) {
                    this.log(`Unable to handle ${r} with key-system ${l}`);
                    return;
                  }
                  let o = eS.hexDump(a),
                    { keyIdToKeySessionPromise: h, mediaKeySessions: d } = this,
                    u = h[o];
                  for (let e = 0; e < d.length; e++) {
                    let r = d[e],
                      s = r.decryptdata;
                    if (!s.keyId) continue;
                    let n = eS.hexDump(s.keyId);
                    if (o === n || -1 !== s.uri.replace(/-/g, "").indexOf(o)) {
                      if (((u = h[n]), s.pssh)) break;
                      delete h[n],
                        (s.pssh = new Uint8Array(i)),
                        (s.keyId = a),
                        (u = h[o] =
                          u.then(() =>
                            this.generateRequestWithPreferredKeySession(
                              r,
                              t,
                              i,
                              "encrypted-event-key-match",
                            ),
                          )).catch((e) => this.handleError(e));
                      break;
                    }
                  }
                  if (!u) {
                    if (n !== l) {
                      this.log(
                        `Ignoring "${r}" with ${n} init data for selected key-system ${l}`,
                      );
                      return;
                    }
                    (u = h[o] =
                      this.getKeySystemSelectionPromise([n]).then(
                        ({ keySystem: e, mediaKeys: r }) => {
                          var s;
                          this.throwIfDestroyed();
                          let n = new eG(
                            "ISO-23001-7",
                            o,
                            null != (s = et(e)) ? s : "",
                          );
                          return (
                            (n.pssh = new Uint8Array(i)),
                            (n.keyId = a),
                            this.attemptSetMediaKeys(e, r).then(() => {
                              this.throwIfDestroyed();
                              let s = this.createMediaKeySessionContext({
                                decryptdata: n,
                                keySystem: e,
                                mediaKeys: r,
                              });
                              return this.generateRequestWithPreferredKeySession(
                                s,
                                t,
                                i,
                                "encrypted-event-no-match",
                              );
                            })
                          );
                        },
                      )).catch((e) => this.handleError(e));
                  }
                });
              }
            }),
            (this.onWaitingForKey = (e) => {
              this.log(`"${e.type}" event`);
            }),
            (this.hls = e),
            (this.config = e.config),
            this.registerListeners();
        }
        destroy() {
          this.unregisterListeners(), this.onMediaDetached();
          let e = this.config;
          (e.requestMediaKeySystemAccessFunc = null),
            (e.licenseXhrSetup = e.licenseResponseCallback = void 0),
            (e.drmSystems = e.drmSystemOptions = {}),
            (this.hls = this.config = this.keyIdToKeySessionPromise = null),
            (this.onMediaEncrypted = this.onWaitingForKey = null);
        }
        registerListeners() {
          this.hls.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.on(C.MEDIA_DETACHED, this.onMediaDetached, this),
            this.hls.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.on(C.MANIFEST_LOADED, this.onManifestLoaded, this);
        }
        unregisterListeners() {
          this.hls.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.off(C.MEDIA_DETACHED, this.onMediaDetached, this),
            this.hls.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.off(C.MANIFEST_LOADED, this.onManifestLoaded, this);
        }
        getLicenseServerUrl(e) {
          let { drmSystems: t, widevineLicenseUrl: i } = this.config,
            r = t[e];
          return r ? r.licenseUrl : e === z.WIDEVINE && i ? i : void 0;
        }
        getLicenseServerUrlOrThrow(e) {
          let t = this.getLicenseServerUrl(e);
          if (void 0 === t)
            throw Error(
              `no license server URL configured for key-system "${e}"`,
            );
          return t;
        }
        getServerCertificateUrl(e) {
          let { drmSystems: t } = this.config,
            i = t[e];
          if (i) return i.serverCertificateUrl;
          this.log(`No Server Certificate in config.drmSystems["${e}"]`);
        }
        attemptKeySystemAccess(e) {
          let t = this.hls.levels,
            i = (e, t, i) => !!e && i.indexOf(e) === t,
            r = t.map((e) => e.audioCodec).filter(i),
            s = t.map((e) => e.videoCodec).filter(i);
          return (
            r.length + s.length === 0 && s.push("avc1.42e01e"),
            new Promise((t, i) => {
              let a = (e) => {
                let n = e.shift();
                this.getMediaKeysPromise(n, r, s)
                  .then((e) => t({ keySystem: n, mediaKeys: e }))
                  .catch((t) => {
                    e.length
                      ? a(e)
                      : t instanceof su
                        ? i(t)
                        : i(
                            new su(
                              {
                                type: w.KEY_SYSTEM_ERROR,
                                details: P.KEY_SYSTEM_NO_ACCESS,
                                error: t,
                                fatal: !0,
                              },
                              t.message,
                            ),
                          );
                  });
              };
              a(e);
            })
          );
        }
        requestMediaKeySystemAccess(e, t) {
          let { requestMediaKeySystemAccessFunc: i } = this.config;
          if ("function" != typeof i) {
            let e = `Configured requestMediaKeySystemAccess is not a function ${i}`;
            return (
              null === er &&
                "http:" === self.location.protocol &&
                (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),
              Promise.reject(Error(e))
            );
          }
          return i(e, t);
        }
        getMediaKeysPromise(e, t, i) {
          let r = (function (e, t, i, r) {
              let s;
              switch (e) {
                case z.FAIRPLAY:
                  s = ["cenc", "sinf"];
                  break;
                case z.WIDEVINE:
                case z.PLAYREADY:
                  s = ["cenc"];
                  break;
                case z.CLEARKEY:
                  s = ["cenc", "keyids"];
                  break;
                default:
                  throw Error(`Unknown key-system: ${e}`);
              }
              return [
                {
                  initDataTypes: s,
                  persistentState: r.persistentState || "optional",
                  distinctiveIdentifier: r.distinctiveIdentifier || "optional",
                  sessionTypes: r.sessionTypes || [
                    r.sessionType || "temporary",
                  ],
                  audioCapabilities: t.map((e) => ({
                    contentType: `audio/mp4; codecs="${e}"`,
                    robustness: r.audioRobustness || "",
                    encryptionScheme: r.audioEncryptionScheme || null,
                  })),
                  videoCapabilities: i.map((e) => ({
                    contentType: `video/mp4; codecs="${e}"`,
                    robustness: r.videoRobustness || "",
                    encryptionScheme: r.videoEncryptionScheme || null,
                  })),
                },
              ];
            })(e, t, i, this.config.drmSystemOptions),
            s = this.keySystemAccessPromises[e],
            a = null == s ? void 0 : s.keySystemAccess;
          if (!a) {
            this.log(
              `Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(r)}`,
            ),
              (a = this.requestMediaKeySystemAccess(e, r));
            let t = (this.keySystemAccessPromises[e] = { keySystemAccess: a });
            return (
              a.catch((t) => {
                this.log(`Failed to obtain access to key-system "${e}": ${t}`);
              }),
              a.then((i) => {
                this.log(`Access for key-system "${i.keySystem}" obtained`);
                let r = this.fetchServerCertificate(e);
                return (
                  this.log(`Create media-keys for "${e}"`),
                  (t.mediaKeys = i
                    .createMediaKeys()
                    .then(
                      (t) => (
                        this.log(`Media-keys created for "${e}"`),
                        r.then((i) =>
                          i ? this.setMediaKeysServerCertificate(t, e, i) : t,
                        )
                      ),
                    )),
                  t.mediaKeys.catch((t) => {
                    this.error(`Failed to create media-keys for "${e}"}: ${t}`);
                  }),
                  t.mediaKeys
                );
              })
            );
          }
          return a.then(() => s.mediaKeys);
        }
        createMediaKeySessionContext({
          decryptdata: e,
          keySystem: t,
          mediaKeys: i,
        }) {
          this.log(
            `Creating key-system session "${t}" keyId: ${eS.hexDump(e.keyId || [])}`,
          );
          let r = i.createSession(),
            s = {
              decryptdata: e,
              keySystem: t,
              mediaKeys: i,
              mediaKeysSession: r,
              keyStatus: "status-pending",
            };
          return this.mediaKeySessions.push(s), s;
        }
        renewKeySession(e) {
          let t = e.decryptdata;
          if (t.pssh) {
            let i = this.createMediaKeySessionContext(e),
              r = this.getKeyIdString(t);
            this.keyIdToKeySessionPromise[r] =
              this.generateRequestWithPreferredKeySession(
                i,
                "cenc",
                t.pssh,
                "expired",
              );
          } else
            this.warn(
              "Could not renew expired session. Missing pssh initData.",
            );
          this.removeSession(e);
        }
        getKeyIdString(e) {
          if (!e) throw Error("Could not read keyId of undefined decryptdata");
          if (null === e.keyId) throw Error("keyId is null");
          return eS.hexDump(e.keyId);
        }
        updateKeySession(e, t) {
          var i;
          let r = e.mediaKeysSession;
          return (
            this
              .log(`Updating key-session "${r.sessionId}" for keyID ${eS.hexDump((null == (i = e.decryptdata) ? void 0 : i.keyId) || [])}
      } (data length: ${t ? t.byteLength : t})`),
            r.update(t)
          );
        }
        selectKeySystemFormat(e) {
          let t = Object.keys(e.levelkeys || {});
          return (
            this.keyFormatPromise ||
              (this.log(
                `Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`,
              ),
              (this.keyFormatPromise = this.getKeyFormatPromise(t))),
            this.keyFormatPromise
          );
        }
        getKeyFormatPromise(e) {
          return new Promise((t, i) => {
            let r = ei(this.config),
              s = e.map(J).filter((e) => !!e && -1 !== r.indexOf(e));
            return this.getKeySystemSelectionPromise(s)
              .then(({ keySystem: e }) => {
                let r = et(e);
                r
                  ? t(r)
                  : i(Error(`Unable to find format for key-system "${e}"`));
              })
              .catch(i);
          });
        }
        loadKey(e) {
          let t = e.keyInfo.decryptdata,
            i = this.getKeyIdString(t),
            r = `(keyId: ${i} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
          this.log(`Starting session for key ${r}`);
          let s = this.keyIdToKeySessionPromise[i];
          return (
            s ||
              (s = this.keyIdToKeySessionPromise[i] =
                this.getKeySystemForKeyPromise(t).then(
                  ({ keySystem: i, mediaKeys: s }) => (
                    this.throwIfDestroyed(),
                    this.log(
                      `Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`,
                    ),
                    this.attemptSetMediaKeys(i, s).then(() => {
                      this.throwIfDestroyed();
                      let e = this.createMediaKeySessionContext({
                        keySystem: i,
                        mediaKeys: s,
                        decryptdata: t,
                      });
                      return this.generateRequestWithPreferredKeySession(
                        e,
                        "cenc",
                        t.pssh,
                        "playlist-key",
                      );
                    })
                  ),
                )).catch((e) => this.handleError(e)),
            s
          );
        }
        throwIfDestroyed(e = "Invalid state") {
          if (!this.hls) throw Error("invalid state");
        }
        handleError(e) {
          this.hls &&
            (this.error(e.message),
            e instanceof su
              ? this.hls.trigger(C.ERROR, e.data)
              : this.hls.trigger(C.ERROR, {
                  type: w.KEY_SYSTEM_ERROR,
                  details: P.KEY_SYSTEM_NO_KEYS,
                  error: e,
                  fatal: !0,
                }));
        }
        getKeySystemForKeyPromise(e) {
          let t = this.getKeyIdString(e),
            i = this.keyIdToKeySessionPromise[t];
          if (!i) {
            let t = J(e.keyFormat),
              i = t ? [t] : ei(this.config);
            return this.attemptKeySystemAccess(i);
          }
          return i;
        }
        getKeySystemSelectionPromise(e) {
          if ((e.length || (e = ei(this.config)), 0 === e.length))
            throw new su(
              {
                type: w.KEY_SYSTEM_ERROR,
                details: P.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
                fatal: !0,
              },
              `Missing key-system license configuration options ${JSON.stringify({ drmSystems: this.config.drmSystems })}`,
            );
          return this.attemptKeySystemAccess(e);
        }
        attemptSetMediaKeys(e, t) {
          let i = this.setMediaKeysQueue.slice();
          this.log(`Setting media-keys for "${e}"`);
          let r = Promise.all(i).then(() => {
            if (!this.media)
              throw Error(
                "Attempted to set mediaKeys without media element attached",
              );
            return this.media.setMediaKeys(t);
          });
          return (
            this.setMediaKeysQueue.push(r),
            r.then(() => {
              this.log(`Media-keys set for "${e}"`),
                i.push(r),
                (this.setMediaKeysQueue = this.setMediaKeysQueue.filter(
                  (e) => -1 === i.indexOf(e),
                ));
            })
          );
        }
        generateRequestWithPreferredKeySession(e, t, i, r) {
          var s, a, n;
          let l =
            null == (s = this.config.drmSystems)
              ? void 0
              : null == (a = s[e.keySystem])
                ? void 0
                : a.generateRequest;
          if (l)
            try {
              let r = l.call(this.hls, t, i, e);
              if (!r)
                throw Error(
                  "Invalid response from configured generateRequest filter",
                );
              (t = r.initDataType),
                (i = e.decryptdata.pssh =
                  r.initData ? new Uint8Array(r.initData) : null);
            } catch (e) {
              if (
                (this.warn(e.message), null != (n = this.hls) && n.config.debug)
              )
                throw e;
            }
          if (null === i)
            return (
              this.log(`Skipping key-session request for "${r}" (no initData)`),
              Promise.resolve(e)
            );
          let o = this.getKeyIdString(e.decryptdata);
          this.log(
            `Generating key-session request for "${r}": ${o} (init data type: ${t} length: ${i ? i.byteLength : null})`,
          );
          let h = new rc(),
            d = (e._onmessage = (t) => {
              let i = e.mediaKeysSession;
              if (!i) {
                h.emit("error", Error("invalid state"));
                return;
              }
              let { messageType: r, message: s } = t;
              this.log(
                `"${r}" message event for session "${i.sessionId}" message size: ${s.byteLength}`,
              ),
                "license-request" === r || "license-renewal" === r
                  ? this.renewLicense(e, s).catch((e) => {
                      this.handleError(e), h.emit("error", e);
                    })
                  : "license-release" === r
                    ? e.keySystem === z.FAIRPLAY &&
                      (this.updateKeySession(e, q("acknowledged")),
                      this.removeSession(e))
                    : this.warn(`unhandled media key message type "${r}"`);
            }),
            u = (e._onkeystatuseschange = (t) => {
              if (!e.mediaKeysSession) {
                h.emit("error", Error("invalid state"));
                return;
              }
              this.onKeyStatusChange(e);
              let i = e.keyStatus;
              h.emit("keyStatus", i),
                "expired" === i &&
                  (this.warn(`${e.keySystem} expired for key ${o}`),
                  this.renewKeySession(e));
            });
          e.mediaKeysSession.addEventListener("message", d),
            e.mediaKeysSession.addEventListener("keystatuseschange", u);
          let c = new Promise((e, t) => {
            h.on("error", t),
              h.on("keyStatus", (i) => {
                i.startsWith("usable")
                  ? e()
                  : "output-restricted" === i
                    ? t(
                        new su(
                          {
                            type: w.KEY_SYSTEM_ERROR,
                            details: P.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                            fatal: !1,
                          },
                          "HDCP level output restricted",
                        ),
                      )
                    : "internal-error" === i
                      ? t(
                          new su(
                            {
                              type: w.KEY_SYSTEM_ERROR,
                              details: P.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                              fatal: !0,
                            },
                            `key status changed to "${i}"`,
                          ),
                        )
                      : "expired" === i
                        ? t(Error("key expired while generating request"))
                        : this.warn(`unhandled key status change "${i}"`);
              });
          });
          return e.mediaKeysSession
            .generateRequest(t, i)
            .then(() => {
              var t;
              this.log(
                `Request generated for key-session "${null == (t = e.mediaKeysSession) ? void 0 : t.sessionId}" keyId: ${o}`,
              );
            })
            .catch((e) => {
              throw new su(
                {
                  type: w.KEY_SYSTEM_ERROR,
                  details: P.KEY_SYSTEM_NO_SESSION,
                  error: e,
                  fatal: !1,
                },
                `Error generating key-session request: ${e}`,
              );
            })
            .then(() => c)
            .catch((t) => {
              throw (h.removeAllListeners(), this.removeSession(e), t);
            })
            .then(() => (h.removeAllListeners(), e));
        }
        onKeyStatusChange(e) {
          e.mediaKeysSession.keyStatuses.forEach((t, i) => {
            this.log(
              `key status change "${t}" for keyStatuses keyId: ${eS.hexDump("buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i))} session keyId: ${eS.hexDump(new Uint8Array(e.decryptdata.keyId || []))} uri: ${e.decryptdata.uri}`,
            ),
              (e.keyStatus = t);
          });
        }
        fetchServerCertificate(e) {
          let t = this.config,
            i = new t.loader(t),
            r = this.getServerCertificateUrl(e);
          return r
            ? (this.log(`Fetching server certificate for "${e}"`),
              new Promise((s, a) => {
                let n = { responseType: "arraybuffer", url: r },
                  l = t.certLoadPolicy.default,
                  o = {
                    loadPolicy: l,
                    timeout: l.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                  };
                i.load(n, o, {
                  onSuccess: (e, t, i, r) => {
                    s(e.data);
                  },
                  onError: (t, i, s, l) => {
                    a(
                      new su(
                        {
                          type: w.KEY_SYSTEM_ERROR,
                          details:
                            P.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                          fatal: !0,
                          networkDetails: s,
                          response: D({ url: n.url, data: void 0 }, t),
                        },
                        `"${e}" certificate request failed (${r}). Status: ${t.code} (${t.text})`,
                      ),
                    );
                  },
                  onTimeout: (t, i, s) => {
                    a(
                      new su(
                        {
                          type: w.KEY_SYSTEM_ERROR,
                          details:
                            P.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                          fatal: !0,
                          networkDetails: s,
                          response: { url: n.url, data: void 0 },
                        },
                        `"${e}" certificate request timed out (${r})`,
                      ),
                    );
                  },
                  onAbort: (e, t, i) => {
                    a(Error("aborted"));
                  },
                });
              }))
            : Promise.resolve();
        }
        setMediaKeysServerCertificate(e, t, i) {
          return new Promise((r, s) => {
            e.setServerCertificate(i)
              .then((s) => {
                this.log(
                  `setServerCertificate ${s ? "success" : "not supported by CDM"} (${null == i ? void 0 : i.byteLength}) on "${t}"`,
                ),
                  r(e);
              })
              .catch((e) => {
                s(
                  new su(
                    {
                      type: w.KEY_SYSTEM_ERROR,
                      details: P.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                      error: e,
                      fatal: !0,
                    },
                    e.message,
                  ),
                );
              });
          });
        }
        renewLicense(e, t) {
          return this.requestLicense(e, new Uint8Array(t)).then((t) =>
            this.updateKeySession(e, new Uint8Array(t)).catch((e) => {
              throw new su(
                {
                  type: w.KEY_SYSTEM_ERROR,
                  details: P.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                  error: e,
                  fatal: !0,
                },
                e.message,
              );
            }),
          );
        }
        unpackPlayReadyKeyMessage(e, t) {
          let i = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
          if (!i.includes("PlayReadyKeyMessage"))
            return (
              e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t
            );
          let r = new DOMParser().parseFromString(i, "application/xml"),
            s = r.querySelectorAll("HttpHeader");
          if (s.length > 0) {
            let t;
            for (let i = 0, r = s.length; i < r; i++) {
              var a, n;
              let r =
                  null == (a = (t = s[i]).querySelector("name"))
                    ? void 0
                    : a.textContent,
                l =
                  null == (n = t.querySelector("value"))
                    ? void 0
                    : n.textContent;
              r && l && e.setRequestHeader(r, l);
            }
          }
          let l = r.querySelector("Challenge"),
            o = null == l ? void 0 : l.textContent;
          if (!o) throw Error("Cannot find <Challenge> in key message");
          return q(atob(o));
        }
        setupLicenseXHR(e, t, i, r) {
          let s = this.config.licenseXhrSetup;
          return s
            ? Promise.resolve()
                .then(() => {
                  if (!i.decryptdata) throw Error("Key removed");
                  return s.call(this.hls, e, t, i, r);
                })
                .catch((a) => {
                  if (!i.decryptdata) throw a;
                  return e.open("POST", t, !0), s.call(this.hls, e, t, i, r);
                })
                .then(
                  (i) => (
                    e.readyState || e.open("POST", t, !0),
                    { xhr: e, licenseChallenge: i || r }
                  ),
                )
            : (e.open("POST", t, !0),
              Promise.resolve({ xhr: e, licenseChallenge: r }));
        }
        requestLicense(e, t) {
          let i = this.config.keyLoadPolicy.default;
          return new Promise((r, s) => {
            let a = this.getLicenseServerUrlOrThrow(e.keySystem);
            this.log(`Sending license request to URL: ${a}`);
            let n = new XMLHttpRequest();
            (n.responseType = "arraybuffer"),
              (n.onreadystatechange = () => {
                if (!this.hls || !e.mediaKeysSession)
                  return s(Error("invalid state"));
                if (4 === n.readyState) {
                  if (200 === n.status) {
                    this._requestLicenseFailureCount = 0;
                    let t = n.response;
                    this.log(
                      `License received ${t instanceof ArrayBuffer ? t.byteLength : t}`,
                    );
                    let i = this.config.licenseResponseCallback;
                    if (i)
                      try {
                        t = i.call(this.hls, n, a, e);
                      } catch (e) {
                        this.error(e);
                      }
                    r(t);
                  } else {
                    let l = i.errorRetry,
                      o = l ? l.maxNumRetry : 0;
                    if (
                      (this._requestLicenseFailureCount++,
                      this._requestLicenseFailureCount > o ||
                        (n.status >= 400 && n.status < 500))
                    )
                      s(
                        new su(
                          {
                            type: w.KEY_SYSTEM_ERROR,
                            details: P.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0,
                            networkDetails: n,
                            response: {
                              url: a,
                              data: void 0,
                              code: n.status,
                              text: n.statusText,
                            },
                          },
                          `License Request XHR failed (${a}). Status: ${n.status} (${n.statusText})`,
                        ),
                      );
                    else {
                      let i = o - this._requestLicenseFailureCount + 1;
                      this.warn(`Retrying license request, ${i} attempts left`),
                        this.requestLicense(e, t).then(r, s);
                    }
                  }
                }
              }),
              e.licenseXhr &&
                e.licenseXhr.readyState !== XMLHttpRequest.DONE &&
                e.licenseXhr.abort(),
              (e.licenseXhr = n),
              this.setupLicenseXHR(n, a, e, t).then(
                ({ xhr: t, licenseChallenge: i }) => {
                  e.keySystem == z.PLAYREADY &&
                    (i = this.unpackPlayReadyKeyMessage(t, i)),
                    t.send(i);
                },
              );
          });
        }
        onMediaAttached(e, t) {
          if (!this.config.emeEnabled) return;
          let i = t.media;
          (this.media = i),
            i.removeEventListener("encrypted", this.onMediaEncrypted),
            i.removeEventListener("waitingforkey", this.onWaitingForKey),
            i.addEventListener("encrypted", this.onMediaEncrypted),
            i.addEventListener("waitingforkey", this.onWaitingForKey);
        }
        onMediaDetached() {
          let e = this.media,
            t = this.mediaKeySessions;
          e &&
            (e.removeEventListener("encrypted", this.onMediaEncrypted),
            e.removeEventListener("waitingforkey", this.onWaitingForKey),
            (this.media = null)),
            (this._requestLicenseFailureCount = 0),
            (this.setMediaKeysQueue = []),
            (this.mediaKeySessions = []),
            (this.keyIdToKeySessionPromise = {}),
            eG.clearKeyUriToKeyIdMap();
          let i = t.length;
          sd.CDMCleanupPromise = Promise.all(
            t
              .map((e) => this.removeSession(e))
              .concat(
                null == e
                  ? void 0
                  : e.setMediaKeys(null).catch((e) => {
                      this.log(`Could not clear media keys: ${e}`);
                    }),
              ),
          )
            .then(() => {
              i &&
                (this.log(
                  "finished closing key sessions and clearing media keys",
                ),
                (t.length = 0));
            })
            .catch((e) => {
              this.log(`Could not close sessions and clear media keys: ${e}`);
            });
        }
        onManifestLoading() {
          this.keyFormatPromise = null;
        }
        onManifestLoaded(e, { sessionKeys: t }) {
          if (t && this.config.emeEnabled && !this.keyFormatPromise) {
            let e = t.reduce(
              (e, t) => (
                -1 === e.indexOf(t.keyFormat) && e.push(t.keyFormat), e
              ),
              [],
            );
            this.log(`Selecting key-system from session-keys ${e.join(", ")}`),
              (this.keyFormatPromise = this.getKeyFormatPromise(e));
          }
        }
        removeSession(e) {
          let { mediaKeysSession: t, licenseXhr: i } = e;
          if (t) {
            this.log(
              `Remove licenses and keys and close session ${t.sessionId}`,
            ),
              e._onmessage &&
                (t.removeEventListener("message", e._onmessage),
                (e._onmessage = void 0)),
              e._onkeystatuseschange &&
                (t.removeEventListener(
                  "keystatuseschange",
                  e._onkeystatuseschange,
                ),
                (e._onkeystatuseschange = void 0)),
              i && i.readyState !== XMLHttpRequest.DONE && i.abort(),
              (e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0);
            let r = this.mediaKeySessions.indexOf(e);
            return (
              r > -1 && this.mediaKeySessions.splice(r, 1),
              t
                .remove()
                .catch((e) => {
                  this.log(`Could not remove session: ${e}`);
                })
                .then(() => t.close())
                .catch((e) => {
                  this.log(`Could not close session: ${e}`);
                })
            );
          }
        }
      }
      sd.CDMCleanupPromise = void 0;
      class su extends Error {
        constructor(e, t) {
          super(t),
            (this.data = void 0),
            e.error || (e.error = Error(t)),
            (this.data = e),
            (e.err = e.error);
        }
      }
      ((p = y || (y = {})).MANIFEST = "m"),
        (p.AUDIO = "a"),
        (p.VIDEO = "v"),
        (p.MUXED = "av"),
        (p.INIT = "i"),
        (p.CAPTION = "c"),
        (p.TIMED_TEXT = "tt"),
        (p.KEY = "k"),
        (p.OTHER = "o"),
        ((E = v || (v = {})).DASH = "d"),
        (E.HLS = "h"),
        (E.SMOOTH = "s"),
        (E.OTHER = "o"),
        ((T = S || (S = {})).OBJECT = "CMCD-Object"),
        (T.REQUEST = "CMCD-Request"),
        (T.SESSION = "CMCD-Session"),
        (T.STATUS = "CMCD-Status");
      let sc = {
        [S.OBJECT]: ["br", "d", "ot", "tb"],
        [S.REQUEST]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
        [S.SESSION]: ["cid", "pr", "sf", "sid", "st", "v"],
        [S.STATUS]: ["bs", "rtp"],
      };
      class sf {
        constructor(e, t) {
          (this.value = void 0),
            (this.params = void 0),
            Array.isArray(e) &&
              (e = e.map((e) => (e instanceof sf ? e : new sf(e)))),
            (this.value = e),
            (this.params = t);
        }
      }
      class sg {
        constructor(e) {
          (this.description = void 0), (this.description = e);
        }
      }
      let sm = "Bare Item",
        sp = /[\x00-\x1f\x7f]+/;
      function sE(e, t, i) {
        return Error(
          `failed to serialize "${Array.isArray(e) ? JSON.stringify(e) : e instanceof Map ? "Map{}" : e instanceof Set ? "Set{}" : "object" == typeof e ? JSON.stringify(e) : String(e)}" as ${t}`,
          { cause: i },
        );
      }
      function sT(e) {
        if (e < -999999999999999 || 999999999999999 < e) throw sE(e, "Integer");
        return e.toString();
      }
      function sy(e) {
        let t = e.description || e.toString().slice(7, -1);
        if (!1 === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t))
          throw sE(t, "Token");
        return t;
      }
      function sv(e) {
        switch (typeof e) {
          case "number":
            if (!b(e)) throw sE(e, sm);
            if (Number.isInteger(e)) return sT(e);
            return (function (e) {
              let t = (function e(t, i) {
                if (t < 0) return -e(-t, i);
                let r = Math.pow(10, i);
                if (!(Math.abs(((t * r) % 1) - 0.5) < Number.EPSILON))
                  return Math.round(t * r) / r;
                {
                  let e = Math.floor(t * r);
                  return (e % 2 == 0 ? e : e + 1) / r;
                }
              })(e, 3);
              if (Math.floor(Math.abs(t)).toString().length > 12)
                throw sE(e, "Decimal");
              let i = t.toString();
              return i.includes(".") ? i : `${i}.0`;
            })(e);
          case "string":
            return (function (e) {
              if (sp.test(e)) throw sE(e, "String");
              return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
            })(e);
          case "symbol":
            return sy(e);
          case "boolean":
            return (function (e) {
              if ("boolean" != typeof e) throw sE(e, "Boolean");
              return e ? "?1" : "?0";
            })(e);
          case "object":
            if (e instanceof Date) return `@${sT(e.getTime() / 1e3)}`;
            if (e instanceof Uint8Array)
              return (function (e) {
                if (!1 === ArrayBuffer.isView(e)) throw sE(e, "Byte Sequence");
                return `:${btoa(String.fromCharCode(...e))}:`;
              })(e);
            if (e instanceof sg) return sy(e);
          default:
            throw sE(e, sm);
        }
      }
      function sS(e) {
        if (!1 === /^[a-z*][a-z0-9\-_.*]*$/.test(e)) throw sE(e, "Key");
        return e;
      }
      function sA(e) {
        return null == e
          ? ""
          : Object.entries(e)
              .map(([e, t]) => (!0 === t ? `;${sS(e)}` : `;${sS(e)}=${sv(t)}`))
              .join("");
      }
      function sL(e) {
        return e instanceof sf ? `${sv(e.value)}${sA(e.params)}` : sv(e);
      }
      let sR = (e) => "ot" === e || "sf" === e || "st" === e,
        sD = (e) =>
          "number" == typeof e ? b(e) : null != e && "" !== e && !1 !== e,
        sI = (e) => Math.round(e),
        sb = (e) => 100 * sI(e / 100),
        sk = {
          br: sI,
          d: sI,
          bl: sb,
          dl: sb,
          mtp: sb,
          nor: (e, t) => (
            null != t &&
              t.baseUrl &&
              (e = (function (e, t) {
                let i = new URL(e),
                  r = new URL(t);
                if (i.origin !== r.origin) return e;
                let s = i.pathname.split("/").slice(1),
                  a = r.pathname.split("/").slice(1, -1);
                for (; s[0] === a[0]; ) s.shift(), a.shift();
                for (; a.length; ) a.shift(), s.unshift("..");
                return s.join("/");
              })(e, t.baseUrl)),
            encodeURIComponent(e)
          ),
          rtp: sb,
          tb: sI,
        };
      function s_(e, t = {}) {
        return e
          ? (function (e, t = { whitespace: !0 }) {
              if ("object" != typeof e) throw sE(e, "Dict");
              let i = e instanceof Map ? e.entries() : Object.entries(e),
                r = null != t && t.whitespace ? " " : "";
              return Array.from(i)
                .map(([e, t]) => {
                  t instanceof sf == !1 && (t = new sf(t));
                  let i = sS(e);
                  if (!0 === t.value) i += sA(t.params);
                  else if (((i += "="), Array.isArray(t.value))) {
                    var r;
                    i +=
                      ((r = t),
                      `(${r.value.map(sL).join(" ")})${sA(r.params)}`);
                  } else i += sL(t);
                  return i;
                })
                .join(`,${r}`);
            })(
              (function (e, t) {
                let i = {};
                if (null == e || "object" != typeof e) return i;
                let r = Object.keys(e).sort(),
                  s = I({}, sk, null == t ? void 0 : t.formatters),
                  a = null == t ? void 0 : t.filter;
                return (
                  r.forEach((r) => {
                    if (null != a && a(r)) return;
                    let n = e[r],
                      l = s[r];
                    l && (n = l(n, t)),
                      ("v" !== r || 1 !== n) &&
                        ("pr" != r || 1 !== n) &&
                        sD(n) &&
                        (sR(r) && "string" == typeof n && (n = new sg(n)),
                        (i[r] = n));
                  }),
                  i
                );
              })(e, t),
              I({ whitespace: !1 }, t),
            )
          : "";
      }
      let sC = /CMCD=[^&#]+/;
      class sw {
        constructor(e) {
          (this.hls = void 0),
            (this.config = void 0),
            (this.media = void 0),
            (this.sid = void 0),
            (this.cid = void 0),
            (this.useHeaders = !1),
            (this.includeKeys = void 0),
            (this.initialized = !1),
            (this.starved = !1),
            (this.buffering = !0),
            (this.audioBuffer = void 0),
            (this.videoBuffer = void 0),
            (this.onWaiting = () => {
              this.initialized && (this.starved = !0), (this.buffering = !0);
            }),
            (this.onPlaying = () => {
              this.initialized || (this.initialized = !0),
                (this.buffering = !1);
            }),
            (this.applyPlaylistData = (e) => {
              try {
                this.apply(e, { ot: y.MANIFEST, su: !this.initialized });
              } catch (e) {
                M.warn("Could not generate manifest CMCD data.", e);
              }
            }),
            (this.applyFragmentData = (e) => {
              try {
                let t = e.frag,
                  i = this.hls.levels[t.level],
                  r = this.getObjectType(t),
                  s = { d: 1e3 * t.duration, ot: r };
                (r === y.VIDEO || r === y.AUDIO || r == y.MUXED) &&
                  ((s.br = i.bitrate / 1e3),
                  (s.tb = this.getTopBandwidth(r) / 1e3),
                  (s.bl = this.getBufferLength(r))),
                  this.apply(e, s);
              } catch (e) {
                M.warn("Could not generate segment CMCD data.", e);
              }
            }),
            (this.hls = e);
          let t = (this.config = e.config),
            { cmcd: i } = t;
          null != i &&
            ((t.pLoader = this.createPlaylistLoader()),
            (t.fLoader = this.createFragmentLoader()),
            (this.sid =
              i.sessionId ||
              (function () {
                try {
                  return crypto.randomUUID();
                } catch (e) {
                  try {
                    let e = URL.createObjectURL(new Blob()),
                      t = e.toString();
                    return (
                      URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1)
                    );
                  } catch (t) {
                    let e = new Date().getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                      /[xy]/g,
                      (t) => {
                        let i = (e + 16 * Math.random()) % 16 | 0;
                        return (
                          (e = Math.floor(e / 16)),
                          ("x" == t ? i : (3 & i) | 8).toString(16)
                        );
                      },
                    );
                  }
                }
              })()),
            (this.cid = i.contentId),
            (this.useHeaders = !0 === i.useHeaders),
            (this.includeKeys = i.includeKeys),
            this.registerListeners());
        }
        registerListeners() {
          let e = this.hls;
          e.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(C.MEDIA_DETACHED, this.onMediaDetached, this),
            e.on(C.BUFFER_CREATED, this.onBufferCreated, this);
        }
        unregisterListeners() {
          let e = this.hls;
          e.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(C.MEDIA_DETACHED, this.onMediaDetached, this),
            e.off(C.BUFFER_CREATED, this.onBufferCreated, this);
        }
        destroy() {
          this.unregisterListeners(),
            this.onMediaDetached(),
            (this.hls =
              this.config =
              this.audioBuffer =
              this.videoBuffer =
                null),
            (this.onWaiting = this.onPlaying = null);
        }
        onMediaAttached(e, t) {
          (this.media = t.media),
            this.media.addEventListener("waiting", this.onWaiting),
            this.media.addEventListener("playing", this.onPlaying);
        }
        onMediaDetached() {
          this.media &&
            (this.media.removeEventListener("waiting", this.onWaiting),
            this.media.removeEventListener("playing", this.onPlaying),
            (this.media = null));
        }
        onBufferCreated(e, t) {
          var i, r;
          (this.audioBuffer = null == (i = t.tracks.audio) ? void 0 : i.buffer),
            (this.videoBuffer =
              null == (r = t.tracks.video) ? void 0 : r.buffer);
        }
        createData() {
          var e;
          return {
            v: 1,
            sf: v.HLS,
            sid: this.sid,
            cid: this.cid,
            pr: null == (e = this.media) ? void 0 : e.playbackRate,
            mtp: this.hls.bandwidthEstimate / 1e3,
          };
        }
        apply(e, t = {}) {
          I(t, this.createData());
          let i = t.ot === y.INIT || t.ot === y.VIDEO || t.ot === y.MUXED;
          this.starved && i && ((t.bs = !0), (t.su = !0), (this.starved = !1)),
            null == t.su && (t.su = this.buffering);
          let { includeKeys: r } = this;
          if (
            (r &&
              (t = Object.keys(t).reduce(
                (e, i) => (r.includes(i) && (e[i] = t[i]), e),
                {},
              )),
            this.useHeaders)
          ) {
            var s;
            e.headers || (e.headers = {}),
              (s = e.headers),
              I(
                s,
                (function (e, t = {}) {
                  if (!e) return {};
                  let i = Object.entries(e),
                    r = Object.entries(sc).concat(
                      Object.entries(
                        (null == t ? void 0 : t.customHeaderMap) || {},
                      ),
                    );
                  return Object.entries(
                    i.reduce((e, t) => {
                      var i;
                      let [s, a] = t,
                        n =
                          (null == (i = r.find((e) => e[1].includes(s)))
                            ? void 0
                            : i[0]) || S.REQUEST;
                      return null != e[n] || (e[n] = {}), (e[n][s] = a), e;
                    }, {}),
                  ).reduce((e, [i, r]) => ((e[i] = s_(r, t)), e), {});
                })(t, void 0),
              );
          } else
            e.url = (function (e, t, i) {
              let r = (function (e, t = {}) {
                if (!e) return "";
                let i = s_(e, t);
                return `CMCD=${encodeURIComponent(i)}`;
              })(t, void 0);
              if (!r) return e;
              if (sC.test(e)) return e.replace(sC, r);
              let s = e.includes("?") ? "&" : "?";
              return `${e}${s}${r}`;
            })(e.url, t);
        }
        getObjectType(e) {
          let { type: t } = e;
          return "subtitle" === t
            ? y.TIMED_TEXT
            : "initSegment" === e.sn
              ? y.INIT
              : "audio" === t
                ? y.AUDIO
                : "main" === t
                  ? this.hls.audioTracks.length
                    ? y.VIDEO
                    : y.MUXED
                  : void 0;
        }
        getTopBandwidth(e) {
          let t,
            i = 0,
            r = this.hls;
          if (e === y.AUDIO) t = r.audioTracks;
          else {
            let e = r.maxAutoLevel,
              i = e > -1 ? e + 1 : r.levels.length;
            t = r.levels.slice(0, i);
          }
          for (let e of t) e.bitrate > i && (i = e.bitrate);
          return i > 0 ? i : NaN;
        }
        getBufferLength(e) {
          let t = this.hls.media,
            i = e === y.AUDIO ? this.audioBuffer : this.videoBuffer;
          return i && t
            ? 1e3 *
                ie.bufferInfo(i, t.currentTime, this.config.maxBufferHole).len
            : NaN;
        }
        createPlaylistLoader() {
          let { pLoader: e } = this.config,
            t = this.applyPlaylistData,
            i = e || this.config.loader;
          return class {
            constructor(e) {
              (this.loader = void 0), (this.loader = new i(e));
            }
            get stats() {
              return this.loader.stats;
            }
            get context() {
              return this.loader.context;
            }
            destroy() {
              this.loader.destroy();
            }
            abort() {
              this.loader.abort();
            }
            load(e, i, r) {
              t(e), this.loader.load(e, i, r);
            }
          };
        }
        createFragmentLoader() {
          let { fLoader: e } = this.config,
            t = this.applyFragmentData,
            i = e || this.config.loader;
          return class {
            constructor(e) {
              (this.loader = void 0), (this.loader = new i(e));
            }
            get stats() {
              return this.loader.stats;
            }
            get context() {
              return this.loader.context;
            }
            destroy() {
              this.loader.destroy();
            }
            abort() {
              this.loader.abort();
            }
            load(e, i, r) {
              t(e), this.loader.load(e, i, r);
            }
          };
        }
      }
      class sP {
        constructor(e) {
          (this.hls = void 0),
            (this.log = void 0),
            (this.loader = null),
            (this.uri = null),
            (this.pathwayId = "."),
            (this.pathwayPriority = null),
            (this.timeToLoad = 300),
            (this.reloadTimer = -1),
            (this.updated = 0),
            (this.started = !1),
            (this.enabled = !0),
            (this.levels = null),
            (this.audioTracks = null),
            (this.subtitleTracks = null),
            (this.penalizedPathways = {}),
            (this.hls = e),
            (this.log = M.log.bind(M, "[content-steering]:")),
            this.registerListeners();
        }
        registerListeners() {
          let e = this.hls;
          e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(C.ERROR, this.onError, this);
        }
        unregisterListeners() {
          let e = this.hls;
          e &&
            (e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(C.ERROR, this.onError, this));
        }
        startLoad() {
          if (
            ((this.started = !0), this.clearTimeout(), this.enabled && this.uri)
          ) {
            if (this.updated) {
              let e =
                1e3 * this.timeToLoad - (performance.now() - this.updated);
              if (e > 0) {
                this.scheduleRefresh(this.uri, e);
                return;
              }
            }
            this.loadSteeringManifest(this.uri);
          }
        }
        stopLoad() {
          (this.started = !1),
            this.loader && (this.loader.destroy(), (this.loader = null)),
            this.clearTimeout();
        }
        clearTimeout() {
          -1 !== this.reloadTimer &&
            (self.clearTimeout(this.reloadTimer), (this.reloadTimer = -1));
        }
        destroy() {
          this.unregisterListeners(),
            this.stopLoad(),
            (this.hls = null),
            (this.levels = this.audioTracks = this.subtitleTracks = null);
        }
        removeLevel(e) {
          let t = this.levels;
          t && (this.levels = t.filter((t) => t !== e));
        }
        onManifestLoading() {
          this.stopLoad(),
            (this.enabled = !0),
            (this.timeToLoad = 300),
            (this.updated = 0),
            (this.uri = null),
            (this.pathwayId = "."),
            (this.levels = this.audioTracks = this.subtitleTracks = null);
        }
        onManifestLoaded(e, t) {
          let { contentSteering: i } = t;
          null !== i &&
            ((this.pathwayId = i.pathwayId),
            (this.uri = i.uri),
            this.started && this.startLoad());
        }
        onManifestParsed(e, t) {
          (this.audioTracks = t.audioTracks),
            (this.subtitleTracks = t.subtitleTracks);
        }
        onError(e, t) {
          let { errorAction: i } = t;
          if (
            (null == i ? void 0 : i.action) === tH.SendAlternateToPenaltyBox &&
            i.flags === tY.MoveAllAlternatesMatchingHost
          ) {
            let e = this.levels,
              r = this.pathwayPriority,
              s = this.pathwayId;
            if (t.context) {
              let { groupId: i, pathwayId: r, type: a } = t.context;
              i && e ? (s = this.getPathwayForGroupId(i, a, s)) : r && (s = r);
            }
            s in this.penalizedPathways ||
              (this.penalizedPathways[s] = performance.now()),
              !r &&
                e &&
                (r = e.reduce(
                  (e, t) => (
                    -1 === e.indexOf(t.pathwayId) && e.push(t.pathwayId), e
                  ),
                  [],
                )),
              r &&
                r.length > 1 &&
                (this.updatePathwayPriority(r),
                (i.resolved = this.pathwayId !== s)),
              i.resolved ||
                M.warn(
                  `Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${e ? e.length : e} priorities: ${JSON.stringify(r)} penalized: ${JSON.stringify(this.penalizedPathways)}`,
                );
          }
        }
        filterParsedLevels(e) {
          this.levels = e;
          let t = this.getLevelsForPathway(this.pathwayId);
          if (0 === t.length) {
            let i = e[0].pathwayId;
            this.log(
              `No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i}"`,
            ),
              (t = this.getLevelsForPathway(i)),
              (this.pathwayId = i);
          }
          return (
            t.length !== e.length &&
              this.log(
                `Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`,
              ),
            t
          );
        }
        getLevelsForPathway(e) {
          return null === this.levels
            ? []
            : this.levels.filter((t) => e === t.pathwayId);
        }
        updatePathwayPriority(e) {
          let t;
          this.pathwayPriority = e;
          let i = this.penalizedPathways,
            r = performance.now();
          Object.keys(i).forEach((e) => {
            r - i[e] > 3e5 && delete i[e];
          });
          for (let r = 0; r < e.length; r++) {
            let s = e[r];
            if (s in i) continue;
            if (s === this.pathwayId) return;
            let a = this.hls.nextLoadLevel,
              n = this.hls.levels[a];
            if ((t = this.getLevelsForPathway(s)).length > 0) {
              this.log(`Setting Pathway to "${s}"`),
                (this.pathwayId = s),
                tF(t),
                this.hls.trigger(C.LEVELS_UPDATED, { levels: t });
              let e = this.hls.levels[a];
              n &&
                e &&
                this.levels &&
                (e.attrs["STABLE-VARIANT-ID"] !==
                  n.attrs["STABLE-VARIANT-ID"] &&
                  e.bitrate !== n.bitrate &&
                  this.log(
                    `Unstable Pathways change from bitrate ${n.bitrate} to ${e.bitrate}`,
                  ),
                (this.hls.nextLoadLevel = a));
              break;
            }
          }
        }
        getPathwayForGroupId(e, t, i) {
          let r = this.getLevelsForPathway(i).concat(this.levels || []);
          for (let i = 0; i < r.length; i++)
            if (
              (t === ta.AUDIO_TRACK && r[i].hasAudioGroup(e)) ||
              (t === ta.SUBTITLE_TRACK && r[i].hasSubtitleGroup(e))
            )
              return r[i].pathwayId;
          return i;
        }
        clonePathways(e) {
          let t = this.levels;
          if (!t) return;
          let i = {},
            r = {};
          e.forEach((e) => {
            let { ID: s, "BASE-ID": a, "URI-REPLACEMENT": n } = e;
            if (t.some((e) => e.pathwayId === s)) return;
            let l = this.getLevelsForPathway(a).map((e) => {
              let t = new B(e.attrs);
              t["PATHWAY-ID"] = s;
              let a = t.AUDIO && `${t.AUDIO}_clone_${s}`,
                l = t.SUBTITLES && `${t.SUBTITLES}_clone_${s}`;
              a && ((i[t.AUDIO] = a), (t.AUDIO = a)),
                l && ((r[t.SUBTITLES] = l), (t.SUBTITLES = l));
              let o = sO(e.uri, t["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", n),
                h = new tb({
                  attrs: t,
                  audioCodec: e.audioCodec,
                  bitrate: e.bitrate,
                  height: e.height,
                  name: e.name,
                  url: o,
                  videoCodec: e.videoCodec,
                  width: e.width,
                });
              if (e.audioGroups)
                for (let t = 1; t < e.audioGroups.length; t++)
                  h.addGroupId("audio", `${e.audioGroups[t]}_clone_${s}`);
              if (e.subtitleGroups)
                for (let t = 1; t < e.subtitleGroups.length; t++)
                  h.addGroupId("text", `${e.subtitleGroups[t]}_clone_${s}`);
              return h;
            });
            t.push(...l),
              sx(this.audioTracks, i, n, s),
              sx(this.subtitleTracks, r, n, s);
          });
        }
        loadSteeringManifest(e) {
          let t;
          let i = this.hls.config,
            r = i.loader;
          this.loader && this.loader.destroy(), (this.loader = new r(i));
          try {
            t = new self.URL(e);
          } catch (t) {
            (this.enabled = !1),
              this.log(`Failed to parse Steering Manifest URI: ${e}`);
            return;
          }
          if ("data:" !== t.protocol) {
            let e =
              0 | (this.hls.bandwidthEstimate || i.abrEwmaDefaultEstimate);
            t.searchParams.set("_HLS_pathway", this.pathwayId),
              t.searchParams.set("_HLS_throughput", "" + e);
          }
          let s = { responseType: "json", url: t.href },
            a = i.steeringManifestLoadPolicy.default,
            n = a.errorRetry || a.timeoutRetry || {},
            l = {
              loadPolicy: a,
              timeout: a.maxLoadTimeMs,
              maxRetry: n.maxNumRetry || 0,
              retryDelay: n.retryDelayMs || 0,
              maxRetryDelay: n.maxRetryDelayMs || 0,
            };
          this.log(`Requesting steering manifest: ${t}`),
            this.loader.load(s, l, {
              onSuccess: (e, i, r, s) => {
                this.log(`Loaded steering manifest: "${t}"`);
                let a = e.data;
                if (1 !== a.VERSION) {
                  this.log(`Steering VERSION ${a.VERSION} not supported!`);
                  return;
                }
                (this.updated = performance.now()), (this.timeToLoad = a.TTL);
                let {
                  "RELOAD-URI": n,
                  "PATHWAY-CLONES": l,
                  "PATHWAY-PRIORITY": o,
                } = a;
                if (n)
                  try {
                    this.uri = new self.URL(n, t).href;
                  } catch (e) {
                    (this.enabled = !1),
                      this.log(
                        `Failed to parse Steering Manifest RELOAD-URI: ${n}`,
                      );
                    return;
                  }
                this.scheduleRefresh(this.uri || r.url),
                  l && this.clonePathways(l);
                let h = { steeringManifest: a, url: t.toString() };
                this.hls.trigger(C.STEERING_MANIFEST_LOADED, h),
                  o && this.updatePathwayPriority(o);
              },
              onError: (e, t, i, r) => {
                if (
                  (this.log(
                    `Error loading steering manifest: ${e.code} ${e.text} (${t.url})`,
                  ),
                  this.stopLoad(),
                  410 === e.code)
                ) {
                  (this.enabled = !1),
                    this.log(`Steering manifest ${t.url} no longer available`);
                  return;
                }
                let s = 1e3 * this.timeToLoad;
                if (429 === e.code) {
                  let e = this.loader;
                  if (
                    "function" ==
                    typeof (null == e ? void 0 : e.getResponseHeader)
                  ) {
                    let t = e.getResponseHeader("Retry-After");
                    t && (s = 1e3 * parseFloat(t));
                  }
                  this.log(`Steering manifest ${t.url} rate limited`);
                  return;
                }
                this.scheduleRefresh(this.uri || t.url, s);
              },
              onTimeout: (e, t, i) => {
                this.log(`Timeout loading steering manifest (${t.url})`),
                  this.scheduleRefresh(this.uri || t.url);
              },
            });
        }
        scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
          this.clearTimeout(),
            (this.reloadTimer = self.setTimeout(() => {
              var t;
              let i = null == (t = this.hls) ? void 0 : t.media;
              if (i && !i.ended) {
                this.loadSteeringManifest(e);
                return;
              }
              this.scheduleRefresh(e, 1e3 * this.timeToLoad);
            }, t));
        }
      }
      function sx(e, t, i, r) {
        e &&
          Object.keys(t).forEach((s) => {
            let a = e
              .filter((e) => e.groupId === s)
              .map((e) => {
                let a = I({}, e);
                return (
                  (a.details = void 0),
                  (a.attrs = new B(a.attrs)),
                  (a.url = a.attrs.URI =
                    sO(
                      e.url,
                      e.attrs["STABLE-RENDITION-ID"],
                      "PER-RENDITION-URIS",
                      i,
                    )),
                  (a.groupId = a.attrs["GROUP-ID"] = t[s]),
                  (a.attrs["PATHWAY-ID"] = r),
                  a
                );
              });
            e.push(...a);
          });
      }
      function sO(e, t, i, r) {
        let s;
        let { HOST: a, PARAMS: n, [i]: l } = r;
        t && (s = null == l ? void 0 : l[t]) && (e = s);
        let o = new self.URL(e);
        return (
          a && !s && (o.host = a),
          n &&
            Object.keys(n)
              .sort()
              .forEach((e) => {
                e && o.searchParams.set(e, n[e]);
              }),
          o.href
        );
      }
      let sF = /^age:\s*[\d.]+\s*$/im;
      class sM {
        constructor(e) {
          (this.xhrSetup = void 0),
            (this.requestTimeout = void 0),
            (this.retryTimeout = void 0),
            (this.retryDelay = void 0),
            (this.config = null),
            (this.callbacks = null),
            (this.context = null),
            (this.loader = null),
            (this.stats = void 0),
            (this.xhrSetup = (e && e.xhrSetup) || null),
            (this.stats = new G()),
            (this.retryDelay = 0);
        }
        destroy() {
          (this.callbacks = null),
            this.abortInternal(),
            (this.loader = null),
            (this.config = null),
            (this.context = null),
            (this.xhrSetup = null);
        }
        abortInternal() {
          let e = this.loader;
          self.clearTimeout(this.requestTimeout),
            self.clearTimeout(this.retryTimeout),
            e &&
              ((e.onreadystatechange = null),
              (e.onprogress = null),
              4 !== e.readyState && ((this.stats.aborted = !0), e.abort()));
        }
        abort() {
          var e;
          this.abortInternal(),
            null != (e = this.callbacks) &&
              e.onAbort &&
              this.callbacks.onAbort(this.stats, this.context, this.loader);
        }
        load(e, t, i) {
          if (this.stats.loading.start)
            throw Error("Loader can only be used once.");
          (this.stats.loading.start = self.performance.now()),
            (this.context = e),
            (this.config = t),
            (this.callbacks = i),
            this.loadInternal();
        }
        loadInternal() {
          let { config: e, context: t } = this;
          if (!e || !t) return;
          let i = (this.loader = new self.XMLHttpRequest()),
            r = this.stats;
          (r.loading.first = 0), (r.loaded = 0), (r.aborted = !1);
          let s = this.xhrSetup;
          s
            ? Promise.resolve()
                .then(() => {
                  if (this.loader === i && !this.stats.aborted)
                    return s(i, t.url);
                })
                .catch((e) => {
                  if (this.loader === i && !this.stats.aborted)
                    return i.open("GET", t.url, !0), s(i, t.url);
                })
                .then(() => {
                  this.loader !== i ||
                    this.stats.aborted ||
                    this.openAndSendXhr(i, t, e);
                })
                .catch((e) => {
                  this.callbacks.onError(
                    { code: i.status, text: e.message },
                    t,
                    i,
                    r,
                  );
                })
            : this.openAndSendXhr(i, t, e);
        }
        openAndSendXhr(e, t, i) {
          e.readyState || e.open("GET", t.url, !0);
          let r = t.headers,
            { maxTimeToFirstByteMs: s, maxLoadTimeMs: a } = i.loadPolicy;
          if (r) for (let t in r) e.setRequestHeader(t, r[t]);
          t.rangeEnd &&
            e.setRequestHeader(
              "Range",
              "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1),
            ),
            (e.onreadystatechange = this.readystatechange.bind(this)),
            (e.onprogress = this.loadprogress.bind(this)),
            (e.responseType = t.responseType),
            self.clearTimeout(this.requestTimeout),
            (i.timeout = s && b(s) ? s : a),
            (this.requestTimeout = self.setTimeout(
              this.loadtimeout.bind(this),
              i.timeout,
            )),
            e.send();
        }
        readystatechange() {
          let { context: e, loader: t, stats: i } = this;
          if (!e || !t) return;
          let r = t.readyState,
            s = this.config;
          if (
            !i.aborted &&
            r >= 2 &&
            (0 === i.loading.first &&
              ((i.loading.first = Math.max(
                self.performance.now(),
                i.loading.start,
              )),
              s.timeout !== s.loadPolicy.maxLoadTimeMs &&
                (self.clearTimeout(this.requestTimeout),
                (s.timeout = s.loadPolicy.maxLoadTimeMs),
                (this.requestTimeout = self.setTimeout(
                  this.loadtimeout.bind(this),
                  s.loadPolicy.maxLoadTimeMs -
                    (i.loading.first - i.loading.start),
                )))),
            4 === r)
          ) {
            self.clearTimeout(this.requestTimeout),
              (t.onreadystatechange = null),
              (t.onprogress = null);
            let r = t.status,
              a = "text" === t.responseType ? t.responseText : null;
            if (r >= 200 && r < 300) {
              let s = null != a ? a : t.response;
              if (null != s) {
                i.loading.end = Math.max(
                  self.performance.now(),
                  i.loading.first,
                );
                let a =
                  "arraybuffer" === t.responseType ? s.byteLength : s.length;
                if (
                  ((i.loaded = i.total = a),
                  (i.bwEstimate =
                    (8e3 * i.total) / (i.loading.end - i.loading.first)),
                  !this.callbacks)
                )
                  return;
                let n = this.callbacks.onProgress;
                if ((n && n(i, e, s, t), !this.callbacks)) return;
                let l = { url: t.responseURL, data: s, code: r };
                this.callbacks.onSuccess(l, i, e, t);
                return;
              }
            }
            let n = s.loadPolicy.errorRetry;
            t$(n, i.retry, !1, { url: e.url, data: void 0, code: r })
              ? this.retry(n)
              : (M.error(`${r} while loading ${e.url}`),
                this.callbacks.onError(
                  { code: r, text: t.statusText },
                  e,
                  t,
                  i,
                ));
          }
        }
        loadtimeout() {
          if (!this.config) return;
          let e = this.config.loadPolicy.timeoutRetry;
          if (t$(e, this.stats.retry, !0)) this.retry(e);
          else {
            var t;
            M.warn(
              `timeout while loading ${null == (t = this.context) ? void 0 : t.url}`,
            );
            let e = this.callbacks;
            e &&
              (this.abortInternal(),
              e.onTimeout(this.stats, this.context, this.loader));
          }
        }
        retry(e) {
          let { context: t, stats: i } = this;
          (this.retryDelay = tU(e, i.retry)),
            i.retry++,
            M.warn(
              `${status ? "HTTP Status " + status : "Timeout"} while loading ${null == t ? void 0 : t.url}, retrying ${i.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`,
            ),
            this.abortInternal(),
            (this.loader = null),
            self.clearTimeout(this.retryTimeout),
            (this.retryTimeout = self.setTimeout(
              this.loadInternal.bind(this),
              this.retryDelay,
            ));
        }
        loadprogress(e) {
          let t = this.stats;
          (t.loaded = e.loaded), e.lengthComputable && (t.total = e.total);
        }
        getCacheAge() {
          let e = null;
          if (this.loader && sF.test(this.loader.getAllResponseHeaders())) {
            let t = this.loader.getResponseHeader("age");
            e = t ? parseFloat(t) : null;
          }
          return e;
        }
        getResponseHeader(e) {
          return this.loader &&
            RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(
              this.loader.getAllResponseHeaders(),
            )
            ? this.loader.getResponseHeader(e)
            : null;
        }
      }
      let sN = /(\d+)-(\d+)\/(\d+)/;
      class sU {
        constructor(e) {
          (this.fetchSetup = void 0),
            (this.requestTimeout = void 0),
            (this.request = null),
            (this.response = null),
            (this.controller = void 0),
            (this.context = null),
            (this.config = null),
            (this.callbacks = null),
            (this.stats = void 0),
            (this.loader = null),
            (this.fetchSetup = e.fetchSetup || sB),
            (this.controller = new self.AbortController()),
            (this.stats = new G());
        }
        destroy() {
          (this.loader =
            this.callbacks =
            this.context =
            this.config =
            this.request =
              null),
            this.abortInternal(),
            (this.response = null),
            (this.fetchSetup = this.controller = this.stats = null);
        }
        abortInternal() {
          this.controller &&
            !this.stats.loading.end &&
            ((this.stats.aborted = !0), this.controller.abort());
        }
        abort() {
          var e;
          this.abortInternal(),
            null != (e = this.callbacks) &&
              e.onAbort &&
              this.callbacks.onAbort(this.stats, this.context, this.response);
        }
        load(e, t, i) {
          let r = this.stats;
          if (r.loading.start) throw Error("Loader can only be used once.");
          r.loading.start = self.performance.now();
          let s = (function (e, t) {
              let i = {
                method: "GET",
                mode: "cors",
                credentials: "same-origin",
                signal: t,
                headers: new self.Headers(I({}, e.headers)),
              };
              return (
                e.rangeEnd &&
                  i.headers.set(
                    "Range",
                    "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1),
                  ),
                i
              );
            })(e, this.controller.signal),
            a = i.onProgress,
            n = "arraybuffer" === e.responseType,
            l = n ? "byteLength" : "length",
            { maxTimeToFirstByteMs: o, maxLoadTimeMs: h } = t.loadPolicy;
          (this.context = e),
            (this.config = t),
            (this.callbacks = i),
            (this.request = this.fetchSetup(e, s)),
            self.clearTimeout(this.requestTimeout),
            (t.timeout = o && b(o) ? o : h),
            (this.requestTimeout = self.setTimeout(() => {
              this.abortInternal(), i.onTimeout(r, e, this.response);
            }, t.timeout)),
            self
              .fetch(this.request)
              .then((s) => {
                this.response = this.loader = s;
                let l = Math.max(self.performance.now(), r.loading.start);
                if (
                  (self.clearTimeout(this.requestTimeout),
                  (t.timeout = h),
                  (this.requestTimeout = self.setTimeout(
                    () => {
                      this.abortInternal(), i.onTimeout(r, e, this.response);
                    },
                    h - (l - r.loading.start),
                  )),
                  !s.ok)
                ) {
                  let { status: e, statusText: t } = s;
                  throw new s$(t || "fetch, bad network response", e, s);
                }
                return ((r.loading.first = l),
                (r.total =
                  (function (e) {
                    let t = e.get("Content-Range");
                    if (t) {
                      let e = (function (e) {
                        let t = sN.exec(e);
                        if (t) return parseInt(t[2]) - parseInt(t[1]) + 1;
                      })(t);
                      if (b(e)) return e;
                    }
                    let i = e.get("Content-Length");
                    if (i) return parseInt(i);
                  })(s.headers) || r.total),
                a && b(t.highWaterMark))
                  ? this.loadProgressively(s, r, e, t.highWaterMark, a)
                  : n
                    ? s.arrayBuffer()
                    : "json" === e.responseType
                      ? s.json()
                      : s.text();
              })
              .then((s) => {
                let n = this.response;
                if (!n) throw Error("loader destroyed");
                self.clearTimeout(this.requestTimeout),
                  (r.loading.end = Math.max(
                    self.performance.now(),
                    r.loading.first,
                  ));
                let o = s[l];
                o && (r.loaded = r.total = o);
                let h = { url: n.url, data: s, code: n.status };
                a && !b(t.highWaterMark) && a(r, e, s, n),
                  i.onSuccess(h, r, e, n);
              })
              .catch((t) => {
                if ((self.clearTimeout(this.requestTimeout), r.aborted)) return;
                let s = (t && t.code) || 0,
                  a = t ? t.message : null;
                i.onError({ code: s, text: a }, e, t ? t.details : null, r);
              });
        }
        getCacheAge() {
          let e = null;
          if (this.response) {
            let t = this.response.headers.get("age");
            e = t ? parseFloat(t) : null;
          }
          return e;
        }
        getResponseHeader(e) {
          return this.response ? this.response.headers.get(e) : null;
        }
        loadProgressively(e, t, i, r = 0, s) {
          let a = new iv(),
            n = e.body.getReader(),
            l = () =>
              n
                .read()
                .then((n) => {
                  if (n.done)
                    return (
                      a.dataLength && s(t, i, a.flush(), e),
                      Promise.resolve(new ArrayBuffer(0))
                    );
                  let o = n.value,
                    h = o.length;
                  return (
                    (t.loaded += h),
                    h < r || a.dataLength
                      ? (a.push(o), a.dataLength >= r && s(t, i, a.flush(), e))
                      : s(t, i, o, e),
                    l()
                  );
                })
                .catch(() => Promise.reject());
          return l();
        }
      }
      function sB(e, t) {
        return new self.Request(e.url, t);
      }
      class s$ extends Error {
        constructor(e, t, i) {
          super(e),
            (this.code = void 0),
            (this.details = void 0),
            (this.code = t),
            (this.details = i);
        }
      }
      let sG = /\s/,
        sK = D(
          D(
            {
              autoStartLoad: !0,
              startPosition: -1,
              defaultAudioCodec: void 0,
              debug: !1,
              capLevelOnFPSDrop: !1,
              capLevelToPlayerSize: !1,
              ignoreDevicePixelRatio: !1,
              preferManagedMediaSource: !0,
              initialLiveManifestSize: 1,
              maxBufferLength: 30,
              backBufferLength: 1 / 0,
              frontBufferFlushThreshold: 1 / 0,
              maxBufferSize: 6e7,
              maxBufferHole: 0.1,
              highBufferWatchdogPeriod: 2,
              nudgeOffset: 0.1,
              nudgeMaxRetry: 3,
              maxFragLookUpTolerance: 0.25,
              liveSyncDurationCount: 3,
              liveMaxLatencyDurationCount: 1 / 0,
              liveSyncDuration: void 0,
              liveMaxLatencyDuration: void 0,
              maxLiveSyncPlaybackRate: 1,
              liveDurationInfinity: !1,
              liveBackBufferLength: null,
              maxMaxBufferLength: 600,
              enableWorker: !0,
              workerPath: null,
              enableSoftwareAES: !0,
              startLevel: void 0,
              startFragPrefetch: !1,
              fpsDroppedMonitoringPeriod: 5e3,
              fpsDroppedMonitoringThreshold: 0.2,
              appendErrorMaxRetry: 3,
              loader: sM,
              fLoader: void 0,
              pLoader: void 0,
              xhrSetup: void 0,
              licenseXhrSetup: void 0,
              licenseResponseCallback: void 0,
              abrController: t4,
              bufferController: rR,
              capLevelController: sl,
              errorController: tW,
              fpsController: so,
              stretchShortVideoTrack: !1,
              maxAudioFramesDrift: 1,
              forceKeyFrameOnDiscontinuity: !0,
              abrEwmaFastLive: 3,
              abrEwmaSlowLive: 9,
              abrEwmaFastVoD: 3,
              abrEwmaSlowVoD: 9,
              abrEwmaDefaultEstimate: 5e5,
              abrEwmaDefaultEstimateMax: 5e6,
              abrBandWidthFactor: 0.95,
              abrBandWidthUpFactor: 0.7,
              abrMaxWithRealBitrate: !1,
              maxStarvationDelay: 4,
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              emeEnabled: !1,
              widevineLicenseUrl: void 0,
              drmSystems: {},
              drmSystemOptions: {},
              requestMediaKeySystemAccessFunc: er,
              testBandwidth: !0,
              progressive: !1,
              lowLatencyMode: !0,
              cmcd: void 0,
              enableDateRangeMetadataCues: !0,
              enableEmsgMetadataCues: !0,
              enableID3MetadataCues: !0,
              useMediaCapabilities: !0,
              certLoadPolicy: {
                default: {
                  maxTimeToFirstByteMs: 8e3,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: null,
                  errorRetry: null,
                },
              },
              keyLoadPolicy: {
                default: {
                  maxTimeToFirstByteMs: 8e3,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                    maxNumRetry: 1,
                    retryDelayMs: 1e3,
                    maxRetryDelayMs: 2e4,
                    backoff: "linear",
                  },
                  errorRetry: {
                    maxNumRetry: 8,
                    retryDelayMs: 1e3,
                    maxRetryDelayMs: 2e4,
                    backoff: "linear",
                  },
                },
              },
              manifestLoadPolicy: {
                default: {
                  maxTimeToFirstByteMs: 1 / 0,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                    maxNumRetry: 2,
                    retryDelayMs: 0,
                    maxRetryDelayMs: 0,
                  },
                  errorRetry: {
                    maxNumRetry: 1,
                    retryDelayMs: 1e3,
                    maxRetryDelayMs: 8e3,
                  },
                },
              },
              playlistLoadPolicy: {
                default: {
                  maxTimeToFirstByteMs: 1e4,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                    maxNumRetry: 2,
                    retryDelayMs: 0,
                    maxRetryDelayMs: 0,
                  },
                  errorRetry: {
                    maxNumRetry: 2,
                    retryDelayMs: 1e3,
                    maxRetryDelayMs: 8e3,
                  },
                },
              },
              fragLoadPolicy: {
                default: {
                  maxTimeToFirstByteMs: 1e4,
                  maxLoadTimeMs: 12e4,
                  timeoutRetry: {
                    maxNumRetry: 4,
                    retryDelayMs: 0,
                    maxRetryDelayMs: 0,
                  },
                  errorRetry: {
                    maxNumRetry: 6,
                    retryDelayMs: 1e3,
                    maxRetryDelayMs: 8e3,
                  },
                },
              },
              steeringManifestLoadPolicy: {
                default: {
                  maxTimeToFirstByteMs: 1e4,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                    maxNumRetry: 2,
                    retryDelayMs: 0,
                    maxRetryDelayMs: 0,
                  },
                  errorRetry: {
                    maxNumRetry: 1,
                    retryDelayMs: 1e3,
                    maxRetryDelayMs: 8e3,
                  },
                },
              },
              manifestLoadingTimeOut: 1e4,
              manifestLoadingMaxRetry: 1,
              manifestLoadingRetryDelay: 1e3,
              manifestLoadingMaxRetryTimeout: 64e3,
              levelLoadingTimeOut: 1e4,
              levelLoadingMaxRetry: 4,
              levelLoadingRetryDelay: 1e3,
              levelLoadingMaxRetryTimeout: 64e3,
              fragLoadingTimeOut: 2e4,
              fragLoadingMaxRetry: 6,
              fragLoadingRetryDelay: 1e3,
              fragLoadingMaxRetryTimeout: 64e3,
            },
            {
              cueHandler: {
                newCue(e, t, i, r) {
                  let s, a, n, l, o;
                  let h = [],
                    d = self.VTTCue || self.TextTrackCue;
                  for (let c = 0; c < r.rows.length; c++)
                    if (
                      ((s = r.rows[c]),
                      (n = !0),
                      (l = 0),
                      (o = ""),
                      !s.isEmpty())
                    ) {
                      var u;
                      for (let e = 0; e < s.chars.length; e++)
                        sG.test(s.chars[e].uchar) && n
                          ? l++
                          : ((o += s.chars[e].uchar), (n = !1));
                      (s.cueStartTime = t),
                        t === i && (i += 1e-4),
                        l >= 16 ? l-- : l++;
                      let r = rX(o.trim()),
                        f = r1(t, i, r);
                      (null != e && null != (u = e.cues) && u.getCueById(f)) ||
                        (((a = new d(t, i, r)).id = f),
                        (a.line = c + 1),
                        (a.align = "left"),
                        (a.position =
                          10 + Math.min(80, 10 * Math.floor((8 * l) / 32))),
                        h.push(a));
                    }
                  return (
                    e &&
                      h.length &&
                      (h.sort((e, t) =>
                        "auto" === e.line || "auto" === t.line
                          ? 0
                          : e.line > 8 && t.line > 8
                            ? t.line - e.line
                            : e.line - t.line,
                      ),
                      h.forEach((t) => tu(e, t))),
                    h
                  );
                },
              },
              enableWebVTT: !0,
              enableIMSC1: !0,
              enableCEA708Captions: !0,
              captionsTextTrack1Label: "English",
              captionsTextTrack1LanguageCode: "en",
              captionsTextTrack2Label: "Spanish",
              captionsTextTrack2LanguageCode: "es",
              captionsTextTrack3Label: "Unknown CC",
              captionsTextTrack3LanguageCode: "",
              captionsTextTrack4Label: "Unknown CC",
              captionsTextTrack4LanguageCode: "",
              renderTextTracksNatively: !0,
            },
          ),
          {},
          {
            subtitleStreamController: ry,
            subtitleTrackController: rS,
            timelineController: sr,
            audioStreamController: rg,
            audioTrackController: rT,
            emeController: sd,
            cmcdController: sw,
            contentSteeringController: sP,
          },
        );
      class sV extends tj {
        constructor(e, t) {
          super(e, "[level-controller]"),
            (this._levels = []),
            (this._firstLevel = -1),
            (this._maxAutoLevel = -1),
            (this._startLevel = void 0),
            (this.currentLevel = null),
            (this.currentLevelIndex = -1),
            (this.manualLevelIndex = -1),
            (this.steering = void 0),
            (this.onParsedComplete = void 0),
            (this.steering = t),
            this._registerListeners();
        }
        _registerListeners() {
          let { hls: e } = this;
          e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(C.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(C.ERROR, this.onError, this);
        }
        _unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(C.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(C.ERROR, this.onError, this);
        }
        destroy() {
          this._unregisterListeners(),
            (this.steering = null),
            this.resetLevels(),
            super.destroy();
        }
        stopLoad() {
          this._levels.forEach((e) => {
            (e.loadError = 0), (e.fragmentError = 0);
          }),
            super.stopLoad();
        }
        resetLevels() {
          (this._startLevel = void 0),
            (this.manualLevelIndex = -1),
            (this.currentLevelIndex = -1),
            (this.currentLevel = null),
            (this._levels = []),
            (this._maxAutoLevel = -1);
        }
        onManifestLoading(e, t) {
          this.resetLevels();
        }
        onManifestLoaded(e, t) {
          let i = this.hls.config.preferManagedMediaSource,
            r = [],
            s = {},
            n = {},
            l = !1,
            o = !1,
            h = !1;
          t.levels.forEach((e) => {
            var t, d;
            let u = e.attrs,
              { audioCodec: c, videoCodec: f } = e;
            (null == (t = c) ? void 0 : t.indexOf("mp4a.40.34")) !== -1 &&
              (a || (a = /chrome|firefox/i.test(navigator.userAgent)),
              a && (e.audioCodec = c = void 0)),
              c && (e.audioCodec = c = e1(c, i)),
              (null == (d = f) ? void 0 : d.indexOf("avc1")) === 0 &&
                (f = e.videoCodec =
                  (function (e) {
                    let t = e.split(",");
                    for (let e = 0; e < t.length; e++) {
                      let i = t[e].split(".");
                      if (i.length > 2) {
                        let r = i.shift() + ".";
                        (r +=
                          parseInt(i.shift()).toString(16) +
                          ("000" + parseInt(i.shift()).toString(16)).slice(-4)),
                          (t[e] = r);
                      }
                    }
                    return t.join(",");
                  })(f));
            let { width: g, height: m, unknownCodecs: p } = e;
            if (
              (l || (l = !!(g && m)),
              o || (o = !!f),
              h || (h = !!c),
              (null != p && p.length) ||
                (c && !eq(c, "audio", i)) ||
                (f && !eq(f, "video", i)))
            )
              return;
            let {
                CODECS: E,
                "FRAME-RATE": T,
                "HDCP-LEVEL": y,
                "PATHWAY-ID": v,
                RESOLUTION: S,
                "VIDEO-RANGE": A,
              } = u,
              L = `${v || "."}-`,
              R = `${L}${e.bitrate}-${S}-${T}-${E}-${A}-${y}`;
            if (s[R]) {
              if (s[R].uri === e.url || e.attrs["PATHWAY-ID"])
                s[R].addGroupId("audio", u.AUDIO),
                  s[R].addGroupId("text", u.SUBTITLES);
              else {
                let t = (n[R] += 1);
                e.attrs["PATHWAY-ID"] = Array(t + 1).join(".");
                let i = new tb(e);
                (s[R] = i), r.push(i);
              }
            } else {
              let t = new tb(e);
              (s[R] = t), (n[R] = 1), r.push(t);
            }
          }),
            this.filterAndSortMediaOptions(r, t, l, o, h);
        }
        filterAndSortMediaOptions(e, t, i, r, s) {
          let a = [],
            n = [],
            l = e;
          if (
            ((i || r) &&
              s &&
              (l = l.filter(
                ({ videoCodec: e, videoRange: t, width: i, height: r }) => {
                  var s;
                  return (!!e || !!(i && r)) && !!(s = t) && tL.indexOf(s) > -1;
                },
              )),
            0 === l.length)
          ) {
            Promise.resolve().then(() => {
              if (this.hls) {
                t.levels.length &&
                  this.warn(
                    `One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`,
                  );
                let e = Error(
                  "no level with compatible codecs found in manifest",
                );
                this.hls.trigger(C.ERROR, {
                  type: w.MEDIA_ERROR,
                  details: P.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                  fatal: !0,
                  url: t.url,
                  error: e,
                  reason: e.message,
                });
              }
            });
            return;
          }
          if (t.audioTracks) {
            let { preferManagedMediaSource: e } = this.hls.config;
            sH(
              (a = t.audioTracks.filter(
                (t) => !t.audioCodec || eq(t.audioCodec, "audio", e),
              )),
            );
          }
          t.subtitles && sH((n = t.subtitles));
          let o = l.slice(0);
          l.sort((e, t) => {
            if (e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"])
              return (e.attrs["HDCP-LEVEL"] || "") >
                (t.attrs["HDCP-LEVEL"] || "")
                ? 1
                : -1;
            if (i && e.height !== t.height) return e.height - t.height;
            if (e.frameRate !== t.frameRate) return e.frameRate - t.frameRate;
            if (e.videoRange !== t.videoRange)
              return tL.indexOf(e.videoRange) - tL.indexOf(t.videoRange);
            if (e.videoCodec !== t.videoCodec) {
              let i = eQ(e.videoCodec),
                r = eQ(t.videoCodec);
              if (i !== r) return r - i;
            }
            if (e.uri === t.uri && e.codecSet !== t.codecSet) {
              let i = eJ(e.codecSet),
                r = eJ(t.codecSet);
              if (i !== r) return r - i;
            }
            return e.averageBitrate !== t.averageBitrate
              ? e.averageBitrate - t.averageBitrate
              : 0;
          });
          let h = o[0];
          if (
            this.steering &&
            (l = this.steering.filterParsedLevels(l)).length !== o.length
          ) {
            for (let e = 0; e < o.length; e++)
              if (o[e].pathwayId === l[0].pathwayId) {
                h = o[e];
                break;
              }
          }
          this._levels = l;
          for (let e = 0; e < l.length; e++)
            if (l[e] === h) {
              var d;
              this._firstLevel = e;
              let t = h.bitrate,
                i = this.hls.bandwidthEstimate;
              if (
                (this.log(
                  `manifest loaded, ${l.length} level(s) found, first bitrate: ${t}`,
                ),
                (null == (d = this.hls.userConfig)
                  ? void 0
                  : d.abrEwmaDefaultEstimate) === void 0)
              ) {
                let e = Math.min(t, this.hls.config.abrEwmaDefaultEstimateMax);
                e > i &&
                  i === sK.abrEwmaDefaultEstimate &&
                  (this.hls.bandwidthEstimate = e);
              }
              break;
            }
          let u = s && !r,
            c = {
              levels: l,
              audioTracks: a,
              subtitleTracks: n,
              sessionData: t.sessionData,
              sessionKeys: t.sessionKeys,
              firstLevel: this._firstLevel,
              stats: t.stats,
              audio: s,
              video: r,
              altAudio: !u && a.some((e) => !!e.url),
            };
          this.hls.trigger(C.MANIFEST_PARSED, c),
            (this.hls.config.autoStartLoad || this.hls.forceStartLoad) &&
              this.hls.startLoad(this.hls.config.startPosition);
        }
        get levels() {
          return 0 === this._levels.length ? null : this._levels;
        }
        get level() {
          return this.currentLevelIndex;
        }
        set level(e) {
          let t = this._levels;
          if (0 === t.length) return;
          if (e < 0 || e >= t.length) {
            let i = Error("invalid level idx"),
              r = e < 0;
            if (
              (this.hls.trigger(C.ERROR, {
                type: w.OTHER_ERROR,
                details: P.LEVEL_SWITCH_ERROR,
                level: e,
                fatal: r,
                error: i,
                reason: i.message,
              }),
              r)
            )
              return;
            e = Math.min(e, t.length - 1);
          }
          let i = this.currentLevelIndex,
            r = this.currentLevel,
            s = r ? r.attrs["PATHWAY-ID"] : void 0,
            a = t[e],
            n = a.attrs["PATHWAY-ID"];
          if (
            ((this.currentLevelIndex = e),
            (this.currentLevel = a),
            i === e && a.details && r && s === n)
          )
            return;
          this.log(
            `Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${n ? " with Pathway " + n : ""} from level ${i}${s ? " with Pathway " + s : ""}`,
          );
          let l = {
            level: e,
            attrs: a.attrs,
            details: a.details,
            bitrate: a.bitrate,
            averageBitrate: a.averageBitrate,
            maxBitrate: a.maxBitrate,
            realBitrate: a.realBitrate,
            width: a.width,
            height: a.height,
            codecSet: a.codecSet,
            audioCodec: a.audioCodec,
            videoCodec: a.videoCodec,
            audioGroups: a.audioGroups,
            subtitleGroups: a.subtitleGroups,
            loaded: a.loaded,
            loadError: a.loadError,
            fragmentError: a.fragmentError,
            name: a.name,
            id: a.id,
            uri: a.uri,
            url: a.url,
            urlId: 0,
            audioGroupIds: a.audioGroupIds,
            textGroupIds: a.textGroupIds,
          };
          this.hls.trigger(C.LEVEL_SWITCHING, l);
          let o = a.details;
          if (!o || o.live) {
            let e = this.switchParams(a.uri, null == r ? void 0 : r.details, o);
            this.loadPlaylist(e);
          }
        }
        get manualLevel() {
          return this.manualLevelIndex;
        }
        set manualLevel(e) {
          (this.manualLevelIndex = e),
            void 0 === this._startLevel && (this._startLevel = e),
            -1 !== e && (this.level = e);
        }
        get firstLevel() {
          return this._firstLevel;
        }
        set firstLevel(e) {
          this._firstLevel = e;
        }
        get startLevel() {
          if (void 0 === this._startLevel) {
            let e = this.hls.config.startLevel;
            return void 0 !== e ? e : this.hls.firstAutoLevel;
          }
          return this._startLevel;
        }
        set startLevel(e) {
          this._startLevel = e;
        }
        onError(e, t) {
          !t.fatal &&
            t.context &&
            t.context.type === ta.LEVEL &&
            t.context.level === this.level &&
            this.checkRetry(t);
        }
        onFragBuffered(e, { frag: t }) {
          if (void 0 !== t && t.type === tn.MAIN) {
            let e = t.elementaryStreams;
            if (!Object.keys(e).some((t) => !!e[t])) return;
            let i = this._levels[t.level];
            null != i &&
              i.loadError &&
              (this.log(
                `Resetting level error count of ${i.loadError} on frag buffered`,
              ),
              (i.loadError = 0));
          }
        }
        onLevelLoaded(e, t) {
          var i, r;
          let { level: s, details: a } = t,
            n = this._levels[s];
          if (!n) {
            this.warn(`Invalid level index ${s}`),
              null != (r = t.deliveryDirectives) &&
                r.skip &&
                (a.deltaUpdateFailed = !0);
            return;
          }
          s === this.currentLevelIndex
            ? (0 === n.fragmentError && (n.loadError = 0),
              this.playlistLoaded(s, t, n.details))
            : null != (i = t.deliveryDirectives) &&
              i.skip &&
              (a.deltaUpdateFailed = !0);
        }
        loadPlaylist(e) {
          super.loadPlaylist();
          let t = this.currentLevelIndex,
            i = this.currentLevel;
          if (i && this.shouldLoadPlaylist(i)) {
            let r = i.uri;
            if (e)
              try {
                r = e.addDirectives(r);
              } catch (e) {
                this.warn(
                  `Could not construct new URL with HLS Delivery Directives: ${e}`,
                );
              }
            let s = i.attrs["PATHWAY-ID"];
            this.log(
              `Loading level index ${t}${(null == e ? void 0 : e.msn) !== void 0 ? " at sn " + e.msn + " part " + e.part : ""} with${s ? " Pathway " + s : ""} ${r}`,
            ),
              this.clearTimer(),
              this.hls.trigger(C.LEVEL_LOADING, {
                url: r,
                level: t,
                pathwayId: i.attrs["PATHWAY-ID"],
                id: 0,
                deliveryDirectives: e || null,
              });
          }
        }
        get nextLoadLevel() {
          return -1 !== this.manualLevelIndex
            ? this.manualLevelIndex
            : this.hls.nextAutoLevel;
        }
        set nextLoadLevel(e) {
          (this.level = e),
            -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e);
        }
        removeLevel(e) {
          var t;
          let i = this._levels.filter(
            (t, i) =>
              i !== e ||
              (this.steering && this.steering.removeLevel(t),
              t === this.currentLevel &&
                ((this.currentLevel = null),
                (this.currentLevelIndex = -1),
                t.details &&
                  t.details.fragments.forEach((e) => (e.level = -1))),
              !1),
          );
          tF(i),
            (this._levels = i),
            this.currentLevelIndex > -1 &&
              null != (t = this.currentLevel) &&
              t.details &&
              (this.currentLevelIndex =
                this.currentLevel.details.fragments[0].level),
            this.hls.trigger(C.LEVELS_UPDATED, { levels: i });
        }
        onLevelsUpdated(e, { levels: t }) {
          this._levels = t;
        }
        checkMaxAutoUpdated() {
          let {
            autoLevelCapping: e,
            maxAutoLevel: t,
            maxHdcpLevel: i,
          } = this.hls;
          this._maxAutoLevel !== t &&
            ((this._maxAutoLevel = t),
            this.hls.trigger(C.MAX_AUTO_LEVEL_UPDATED, {
              autoLevelCapping: e,
              levels: this.levels,
              maxAutoLevel: t,
              minAutoLevel: this.hls.minAutoLevel,
              maxHdcpLevel: i,
            }));
        }
      }
      function sH(e) {
        let t = {};
        e.forEach((e) => {
          let i = e.groupId || "";
          (e.id = t[i] = t[i] || 0), t[i]++;
        });
      }
      class sY {
        constructor(e) {
          (this.config = void 0),
            (this.keyUriToKeyInfo = {}),
            (this.emeController = null),
            (this.config = e);
        }
        abort(e) {
          for (let i in this.keyUriToKeyInfo) {
            let r = this.keyUriToKeyInfo[i].loader;
            if (r) {
              var t;
              if (e && e !== (null == (t = r.context) ? void 0 : t.frag.type))
                return;
              r.abort();
            }
          }
        }
        detach() {
          for (let e in this.keyUriToKeyInfo) {
            let t = this.keyUriToKeyInfo[e];
            (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) &&
              delete this.keyUriToKeyInfo[e];
          }
        }
        destroy() {
          for (let e in (this.detach(), this.keyUriToKeyInfo)) {
            let t = this.keyUriToKeyInfo[e].loader;
            t && t.destroy();
          }
          this.keyUriToKeyInfo = {};
        }
        createKeyLoadError(e, t = P.KEY_LOAD_ERROR, i, r, s) {
          return new iu({
            type: w.NETWORK_ERROR,
            details: t,
            fatal: !1,
            frag: e,
            response: s,
            error: i,
            networkDetails: r,
          });
        }
        loadClear(e, t) {
          if (this.emeController && this.config.emeEnabled) {
            let { sn: i, cc: r } = e;
            for (let e = 0; e < t.length; e++) {
              let s = t[e];
              if (
                r <= s.cc &&
                ("initSegment" === i || "initSegment" === s.sn || i < s.sn)
              ) {
                this.emeController.selectKeySystemFormat(s).then((e) => {
                  s.setKeyFormat(e);
                });
                break;
              }
            }
          }
        }
        load(e) {
          return !e.decryptdata &&
            e.encrypted &&
            this.emeController &&
            this.config.emeEnabled
            ? this.emeController
                .selectKeySystemFormat(e)
                .then((t) => this.loadInternal(e, t))
            : this.loadInternal(e);
        }
        loadInternal(e, t) {
          var i, r, s;
          t && e.setKeyFormat(t);
          let a = e.decryptdata;
          if (!a) {
            let i = Error(
              t
                ? `Expected frag.decryptdata to be defined after setting format ${t}`
                : "Missing decryption data on fragment in onKeyLoading",
            );
            return Promise.reject(
              this.createKeyLoadError(e, P.KEY_LOAD_ERROR, i),
            );
          }
          let n = a.uri;
          if (!n)
            return Promise.reject(
              this.createKeyLoadError(
                e,
                P.KEY_LOAD_ERROR,
                Error(`Invalid key URI: "${n}"`),
              ),
            );
          let l = this.keyUriToKeyInfo[n];
          if (null != (i = l) && i.decryptdata.key)
            return (
              (a.key = l.decryptdata.key),
              Promise.resolve({ frag: e, keyInfo: l })
            );
          if (null != (r = l) && r.keyLoadPromise)
            switch (
              null == (s = l.mediaKeySessionContext) ? void 0 : s.keyStatus
            ) {
              case void 0:
              case "status-pending":
              case "usable":
              case "usable-in-future":
                return l.keyLoadPromise.then(
                  (t) => (
                    (a.key = t.keyInfo.decryptdata.key), { frag: e, keyInfo: l }
                  ),
                );
            }
          switch (
            ((l = this.keyUriToKeyInfo[n] =
              {
                decryptdata: a,
                keyLoadPromise: null,
                loader: null,
                mediaKeySessionContext: null,
              }),
            a.method)
          ) {
            case "ISO-23001-7":
            case "SAMPLE-AES":
            case "SAMPLE-AES-CENC":
            case "SAMPLE-AES-CTR":
              if ("identity" === a.keyFormat) return this.loadKeyHTTP(l, e);
              return this.loadKeyEME(l, e);
            case "AES-128":
              return this.loadKeyHTTP(l, e);
            default:
              return Promise.reject(
                this.createKeyLoadError(
                  e,
                  P.KEY_LOAD_ERROR,
                  Error(`Key supplied with unsupported METHOD: "${a.method}"`),
                ),
              );
          }
        }
        loadKeyEME(e, t) {
          let i = { frag: t, keyInfo: e };
          if (this.emeController && this.config.emeEnabled) {
            let t = this.emeController.loadKey(i);
            if (t)
              return (e.keyLoadPromise = t.then(
                (t) => ((e.mediaKeySessionContext = t), i),
              )).catch((t) => {
                throw ((e.keyLoadPromise = null), t);
              });
          }
          return Promise.resolve(i);
        }
        loadKeyHTTP(e, t) {
          let i = this.config,
            r = new i.loader(i);
          return (
            (t.keyLoader = e.loader = r),
            (e.keyLoadPromise = new Promise((s, a) => {
              let n = {
                  keyInfo: e,
                  frag: t,
                  responseType: "arraybuffer",
                  url: e.decryptdata.uri,
                },
                l = i.keyLoadPolicy.default,
                o = {
                  loadPolicy: l,
                  timeout: l.maxLoadTimeMs,
                  maxRetry: 0,
                  retryDelay: 0,
                  maxRetryDelay: 0,
                };
              r.load(n, o, {
                onSuccess: (e, t, i, r) => {
                  let { frag: n, keyInfo: l, url: o } = i;
                  if (!n.decryptdata || l !== this.keyUriToKeyInfo[o])
                    return a(
                      this.createKeyLoadError(
                        n,
                        P.KEY_LOAD_ERROR,
                        Error("after key load, decryptdata unset or changed"),
                        r,
                      ),
                    );
                  (l.decryptdata.key = n.decryptdata.key =
                    new Uint8Array(e.data)),
                    (n.keyLoader = null),
                    (l.loader = null),
                    s({ frag: n, keyInfo: l });
                },
                onError: (e, i, r, s) => {
                  this.resetLoader(i),
                    a(
                      this.createKeyLoadError(
                        t,
                        P.KEY_LOAD_ERROR,
                        Error(`HTTP Error ${e.code} loading key ${e.text}`),
                        r,
                        D({ url: n.url, data: void 0 }, e),
                      ),
                    );
                },
                onTimeout: (e, i, r) => {
                  this.resetLoader(i),
                    a(
                      this.createKeyLoadError(
                        t,
                        P.KEY_LOAD_TIMEOUT,
                        Error("key loading timed out"),
                        r,
                      ),
                    );
                },
                onAbort: (e, i, r) => {
                  this.resetLoader(i),
                    a(
                      this.createKeyLoadError(
                        t,
                        P.INTERNAL_ABORTED,
                        Error("key loading aborted"),
                        r,
                      ),
                    );
                },
              });
            }))
          );
        }
        resetLoader(e) {
          let { frag: t, keyInfo: i, url: r } = e,
            s = i.loader;
          t.keyLoader === s && ((t.keyLoader = null), (i.loader = null)),
            delete this.keyUriToKeyInfo[r],
            s && s.destroy();
        }
      }
      function sW() {
        return self.SourceBuffer || self.WebKitSourceBuffer;
      }
      function sj() {
        if (!eW()) return !1;
        let e = sW();
        return (
          !e ||
          (e.prototype &&
            "function" == typeof e.prototype.appendBuffer &&
            "function" == typeof e.prototype.remove)
        );
      }
      class sq {
        constructor(e, t, i, r) {
          (this.config = void 0),
            (this.media = null),
            (this.fragmentTracker = void 0),
            (this.hls = void 0),
            (this.nudgeRetry = 0),
            (this.stallReported = !1),
            (this.stalled = null),
            (this.moved = !1),
            (this.seeking = !1),
            (this.config = e),
            (this.media = t),
            (this.fragmentTracker = i),
            (this.hls = r);
        }
        destroy() {
          (this.media = null), (this.hls = this.fragmentTracker = null);
        }
        poll(e, t) {
          let { config: i, media: r, stalled: s } = this;
          if (null === r) return;
          let { currentTime: a, seeking: n } = r,
            l = this.seeking && !n,
            o = !this.seeking && n;
          if (((this.seeking = n), a !== e)) {
            if (((this.moved = !0), n || (this.nudgeRetry = 0), null !== s)) {
              if (this.stallReported) {
                let e = self.performance.now() - s;
                M.warn(
                  `playback not stuck anymore @${a}, after ${Math.round(e)}ms`,
                ),
                  (this.stallReported = !1);
              }
              this.stalled = null;
            }
            return;
          }
          if (o || l) {
            this.stalled = null;
            return;
          }
          if (
            (r.paused && !n) ||
            r.ended ||
            0 === r.playbackRate ||
            !ie.getBuffered(r).length
          ) {
            this.nudgeRetry = 0;
            return;
          }
          let h = ie.bufferInfo(r, a, 0),
            d = h.nextStart || 0;
          if (n) {
            let e = h.len > 2,
              i =
                !d ||
                (t && t.start <= a) ||
                (d - a > 2 && !this.fragmentTracker.getPartialFragment(a));
            if (e || i) return;
            this.moved = !1;
          }
          if (!this.moved && null !== this.stalled) {
            var u;
            if (!(h.len > 0) && !d) return;
            let e = Math.max(d, h.start || 0) - a,
              t = this.hls.levels
                ? this.hls.levels[this.hls.currentLevel]
                : null,
              i = (
                null == t ? void 0 : null == (u = t.details) ? void 0 : u.live
              )
                ? 2 * t.details.targetduration
                : 2,
              s = this.fragmentTracker.getPartialFragment(a);
            if (e > 0 && (e <= i || s)) {
              r.paused || this._trySkipBufferHole(s);
              return;
            }
          }
          let c = self.performance.now();
          if (null === s) {
            this.stalled = c;
            return;
          }
          let f = c - s;
          if (!n && f >= 250 && (this._reportStall(h), !this.media)) return;
          let g = ie.bufferInfo(r, a, i.maxBufferHole);
          this._tryFixBufferStall(g, f);
        }
        _tryFixBufferStall(e, t) {
          let { config: i, fragmentTracker: r, media: s } = this;
          if (null === s) return;
          let a = s.currentTime,
            n = r.getPartialFragment(a);
          !(n && (this._trySkipBufferHole(n) || !this.media)) &&
            (e.len > i.maxBufferHole ||
              (e.nextStart && e.nextStart - a < i.maxBufferHole)) &&
            t > 1e3 * i.highBufferWatchdogPeriod &&
            (M.warn("Trying to nudge playhead over buffer-hole"),
            (this.stalled = null),
            this._tryNudgeBuffer());
        }
        _reportStall(e) {
          let { hls: t, media: i, stallReported: r } = this;
          if (!r && i) {
            this.stallReported = !0;
            let r = Error(
              `Playback stalling at @${i.currentTime} due to low buffer (${JSON.stringify(e)})`,
            );
            M.warn(r.message),
              t.trigger(C.ERROR, {
                type: w.MEDIA_ERROR,
                details: P.BUFFER_STALLED_ERROR,
                fatal: !1,
                error: r,
                buffer: e.len,
              });
          }
        }
        _trySkipBufferHole(e) {
          let { config: t, hls: i, media: r } = this;
          if (null === r) return 0;
          let s = r.currentTime,
            a = ie.bufferInfo(r, s, 0),
            n = s < a.start ? a.start : a.nextStart;
          if (n) {
            let l = a.len <= t.maxBufferHole,
              o = a.len > 0 && a.len < 1 && r.readyState < 3,
              h = n - s;
            if (h > 0 && (l || o)) {
              if (h > t.maxBufferHole) {
                let { fragmentTracker: t } = this,
                  i = !1;
                if (0 === s) {
                  let e = t.getAppendedFrag(0, tn.MAIN);
                  e && n < e.end && (i = !0);
                }
                if (!i) {
                  let i = e || t.getAppendedFrag(s, tn.MAIN);
                  if (i) {
                    let e = !1,
                      r = i.end;
                    for (; r < n; ) {
                      let i = t.getPartialFragment(r);
                      if (i) r += i.duration;
                      else {
                        e = !0;
                        break;
                      }
                    }
                    if (e) return 0;
                  }
                }
              }
              let a = Math.max(n + 0.05, s + 0.1);
              if (
                (M.warn(
                  `skipping hole, adjusting currentTime from ${s} to ${a}`,
                ),
                (this.moved = !0),
                (this.stalled = null),
                (r.currentTime = a),
                e && !e.gap)
              ) {
                let t = Error(
                  `fragment loaded with buffer holes, seeking from ${s} to ${a}`,
                );
                i.trigger(C.ERROR, {
                  type: w.MEDIA_ERROR,
                  details: P.BUFFER_SEEK_OVER_HOLE,
                  fatal: !1,
                  error: t,
                  reason: t.message,
                  frag: e,
                });
              }
              return a;
            }
          }
          return 0;
        }
        _tryNudgeBuffer() {
          let { config: e, hls: t, media: i, nudgeRetry: r } = this;
          if (null === i) return;
          let s = i.currentTime;
          if ((this.nudgeRetry++, r < e.nudgeMaxRetry)) {
            let a = s + (r + 1) * e.nudgeOffset,
              n = Error(`Nudging 'currentTime' from ${s} to ${a}`);
            M.warn(n.message),
              (i.currentTime = a),
              t.trigger(C.ERROR, {
                type: w.MEDIA_ERROR,
                details: P.BUFFER_NUDGE_ON_STALL,
                error: n,
                fatal: !1,
              });
          } else {
            let i = Error(
              `Playhead still not moving while enough data buffered @${s} after ${e.nudgeMaxRetry} nudges`,
            );
            M.error(i.message),
              t.trigger(C.ERROR, {
                type: w.MEDIA_ERROR,
                details: P.BUFFER_STALLED_ERROR,
                error: i,
                fatal: !0,
              });
          }
        }
      }
      class sX extends iy {
        constructor(e, t, i) {
          super(e, t, i, "[stream-controller]", tn.MAIN),
            (this.audioCodecSwap = !1),
            (this.gapController = null),
            (this.level = -1),
            (this._forceStartLoad = !1),
            (this.altAudio = !1),
            (this.audioOnly = !1),
            (this.fragPlaying = null),
            (this.onvplaying = null),
            (this.onvseeked = null),
            (this.fragLastKbps = 0),
            (this.couldBacktrack = !1),
            (this.backtrackFragment = null),
            (this.audioCodecSwitch = !1),
            (this.videoBuffer = null),
            this._registerListeners();
        }
        _registerListeners() {
          let { hls: e } = this;
          e.on(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(C.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(
              C.FRAG_LOAD_EMERGENCY_ABORTED,
              this.onFragLoadEmergencyAborted,
              this,
            ),
            e.on(C.ERROR, this.onError, this),
            e.on(C.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.on(C.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
            e.on(C.BUFFER_CREATED, this.onBufferCreated, this),
            e.on(C.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.on(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(C.FRAG_BUFFERED, this.onFragBuffered, this);
        }
        _unregisterListeners() {
          let { hls: e } = this;
          e.off(C.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(C.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(C.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(C.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(C.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(
              C.FRAG_LOAD_EMERGENCY_ABORTED,
              this.onFragLoadEmergencyAborted,
              this,
            ),
            e.off(C.ERROR, this.onError, this),
            e.off(C.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.off(C.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
            e.off(C.BUFFER_CREATED, this.onBufferCreated, this),
            e.off(C.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.off(C.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(C.FRAG_BUFFERED, this.onFragBuffered, this);
        }
        onHandlerDestroying() {
          this._unregisterListeners(), super.onHandlerDestroying();
        }
        startLoad(e) {
          if (this.levels) {
            let { lastCurrentTime: t, hls: i } = this;
            if (
              (this.stopLoad(),
              this.setInterval(100),
              (this.level = -1),
              !this.startFragRequested)
            ) {
              let e = i.startLevel;
              -1 === e &&
                (i.config.testBandwidth && this.levels.length > 1
                  ? ((e = 0), (this.bitrateTest = !0))
                  : (e = i.firstAutoLevel)),
                (i.nextLoadLevel = e),
                (this.level = i.loadLevel),
                (this.loadedmetadata = !1);
            }
            t > 0 &&
              -1 === e &&
              (this.log(
                `Override startPosition with lastCurrentTime @${t.toFixed(3)}`,
              ),
              (e = t)),
              (this.state = iT.IDLE),
              (this.nextLoadPosition =
                this.startPosition =
                this.lastCurrentTime =
                  e),
              this.tick();
          } else (this._forceStartLoad = !0), (this.state = iT.STOPPED);
        }
        stopLoad() {
          (this._forceStartLoad = !1), super.stopLoad();
        }
        doTick() {
          switch (this.state) {
            case iT.WAITING_LEVEL: {
              let { levels: e, level: t } = this,
                i = null == e ? void 0 : e[t],
                r = null == i ? void 0 : i.details;
              if (r && (!r.live || this.levelLastLoaded === i)) {
                if (this.waitForCdnTuneIn(r)) break;
                this.state = iT.IDLE;
              } else
                this.hls.nextLoadLevel !== this.level && (this.state = iT.IDLE);
              break;
            }
            case iT.FRAG_LOADING_WAITING_RETRY: {
              var e;
              let t = self.performance.now(),
                i = this.retryDate;
              if (!i || t >= i || (null != (e = this.media) && e.seeking)) {
                let { levels: e, level: t } = this,
                  i = null == e ? void 0 : e[t];
                this.resetStartWhenNotLoaded(i || null), (this.state = iT.IDLE);
              }
            }
          }
          this.state === iT.IDLE && this.doTickIdle(), this.onTickEnd();
        }
        onTickEnd() {
          super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
        }
        doTickIdle() {
          let { hls: e, levelLastLoaded: t, levels: i, media: r } = this;
          if (
            null === t ||
            (!r && (this.startFragRequested || !e.config.startFragPrefetch)) ||
            (this.altAudio && this.audioOnly)
          )
            return;
          let s = this.buffering ? e.nextLoadLevel : e.loadLevel;
          if (!(null != i && i[s])) return;
          let a = i[s],
            n = this.getMainFwdBufferInfo();
          if (null === n) return;
          let l = this.getLevelDetails();
          if (l && this._streamEnded(n, l)) {
            let e = {};
            this.altAudio && (e.type = "video"),
              this.hls.trigger(C.BUFFER_EOS, e),
              (this.state = iT.ENDED);
            return;
          }
          if (!this.buffering) return;
          e.loadLevel !== s &&
            -1 === e.manualLevel &&
            this.log(`Adapting to level ${s} from level ${this.level}`),
            (this.level = e.nextLoadLevel = s);
          let o = a.details;
          if (
            !o ||
            this.state === iT.WAITING_LEVEL ||
            (o.live && this.levelLastLoaded !== a)
          ) {
            (this.level = s), (this.state = iT.WAITING_LEVEL);
            return;
          }
          let h = n.len,
            d = this.getMaxBufferLength(a.maxBitrate);
          if (h >= d) return;
          this.backtrackFragment &&
            this.backtrackFragment.start > n.end &&
            (this.backtrackFragment = null);
          let u = this.backtrackFragment ? this.backtrackFragment.start : n.end,
            c = this.getNextFragment(u, o);
          if (
            this.couldBacktrack &&
            !this.fragPrevious &&
            c &&
            "initSegment" !== c.sn &&
            this.fragmentTracker.getState(c) !== t5.OK
          ) {
            var f;
            let e =
                (null != (f = this.backtrackFragment) ? f : c).sn - o.startSN,
              t = o.fragments[e - 1];
            t &&
              c.cc === t.cc &&
              ((c = t), this.fragmentTracker.removeFragment(t));
          } else
            this.backtrackFragment && n.len && (this.backtrackFragment = null);
          if (c && this.isLoopLoading(c, u)) {
            if (!c.gap) {
              let e = this.audioOnly && !this.altAudio ? K.AUDIO : K.VIDEO,
                t =
                  (e === K.VIDEO ? this.videoBuffer : this.mediaBuffer) ||
                  this.media;
              t && this.afterBufferFlushed(t, e, tn.MAIN);
            }
            c = this.getNextFragmentLoopLoading(c, o, n, tn.MAIN, d);
          }
          c &&
            (!c.initSegment ||
              c.initSegment.data ||
              this.bitrateTest ||
              (c = c.initSegment),
            this.loadFragment(c, a, u));
        }
        loadFragment(e, t, i) {
          let r = this.fragmentTracker.getState(e);
          (this.fragCurrent = e),
            r === t5.NOT_LOADED || r === t5.PARTIAL
              ? "initSegment" === e.sn
                ? this._loadInitSegment(e, t)
                : this.bitrateTest
                  ? (this.log(
                      `Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`,
                    ),
                    this._loadBitrateTestFrag(e, t))
                  : ((this.startFragRequested = !0),
                    super.loadFragment(e, t, i))
              : this.clearTrackerIfNeeded(e);
        }
        getBufferedFrag(e) {
          return this.fragmentTracker.getBufferedFrag(e, tn.MAIN);
        }
        followingBufferedFrag(e) {
          return e ? this.getBufferedFrag(e.end + 0.5) : null;
        }
        immediateLevelSwitch() {
          this.abortCurrentFrag(),
            this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        }
        nextLevelSwitch() {
          let { levels: e, media: t } = this;
          if (null != t && t.readyState) {
            let i;
            let r = this.getAppendedFrag(t.currentTime);
            r && r.start > 1 && this.flushMainBuffer(0, r.start - 1);
            let s = this.getLevelDetails();
            if (null != s && s.live) {
              let e = this.getMainFwdBufferInfo();
              if (!e || e.len < 2 * s.targetduration) return;
            }
            if (!t.paused && e) {
              let t = e[this.hls.nextLoadLevel],
                r = this.fragLastKbps;
              i =
                r && this.fragCurrent
                  ? (this.fragCurrent.duration * t.maxBitrate) / (1e3 * r) + 1
                  : 0;
            } else i = 0;
            let a = this.getBufferedFrag(t.currentTime + i);
            if (a) {
              let e = this.followingBufferedFrag(a);
              if (e) {
                this.abortCurrentFrag();
                let t = e.maxStartPTS ? e.maxStartPTS : e.start,
                  i = e.duration,
                  r = Math.max(
                    a.end,
                    t +
                      Math.min(
                        Math.max(
                          i - this.config.maxFragLookUpTolerance,
                          i * (this.couldBacktrack ? 0.5 : 0.125),
                        ),
                        i * (this.couldBacktrack ? 0.75 : 0.25),
                      ),
                  );
                this.flushMainBuffer(r, Number.POSITIVE_INFINITY);
              }
            }
          }
        }
        abortCurrentFrag() {
          let e = this.fragCurrent;
          switch (
            ((this.fragCurrent = null),
            (this.backtrackFragment = null),
            e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
            this.state)
          ) {
            case iT.KEY_LOADING:
            case iT.FRAG_LOADING:
            case iT.FRAG_LOADING_WAITING_RETRY:
            case iT.PARSING:
            case iT.PARSED:
              this.state = iT.IDLE;
          }
          this.nextLoadPosition = this.getLoadPosition();
        }
        flushMainBuffer(e, t) {
          super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
        }
        onMediaAttached(e, t) {
          super.onMediaAttached(e, t);
          let i = t.media;
          (this.onvplaying = this.onMediaPlaying.bind(this)),
            (this.onvseeked = this.onMediaSeeked.bind(this)),
            i.addEventListener("playing", this.onvplaying),
            i.addEventListener("seeked", this.onvseeked),
            (this.gapController = new sq(
              this.config,
              i,
              this.fragmentTracker,
              this.hls,
            ));
        }
        onMediaDetaching() {
          let { media: e } = this;
          e &&
            this.onvplaying &&
            this.onvseeked &&
            (e.removeEventListener("playing", this.onvplaying),
            e.removeEventListener("seeked", this.onvseeked),
            (this.onvplaying = this.onvseeked = null),
            (this.videoBuffer = null)),
            (this.fragPlaying = null),
            this.gapController &&
              (this.gapController.destroy(), (this.gapController = null)),
            super.onMediaDetaching();
        }
        onMediaPlaying() {
          this.tick();
        }
        onMediaSeeked() {
          let e = this.media,
            t = e ? e.currentTime : null;
          b(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
          let i = this.getMainFwdBufferInfo();
          if (null === i || 0 === i.len) {
            this.warn(
              `Main forward buffer length on "seeked" event ${i ? i.len : "empty"})`,
            );
            return;
          }
          this.tick();
        }
        onManifestLoading() {
          this.log("Trigger BUFFER_RESET"),
            this.hls.trigger(C.BUFFER_RESET, void 0),
            this.fragmentTracker.removeAllFragments(),
            (this.couldBacktrack = !1),
            (this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0),
            (this.levels =
              this.fragPlaying =
              this.backtrackFragment =
              this.levelLastLoaded =
                null),
            (this.altAudio = this.audioOnly = this.startFragRequested = !1);
        }
        onManifestParsed(e, t) {
          let i = !1,
            r = !1;
          t.levels.forEach((e) => {
            let t = e.audioCodec;
            t &&
              ((i = i || -1 !== t.indexOf("mp4a.40.2")),
              (r = r || -1 !== t.indexOf("mp4a.40.5")));
          }),
            (this.audioCodecSwitch =
              i &&
              r &&
              !(function () {
                var e;
                let t = sW();
                return (
                  "function" ==
                  typeof (null == t
                    ? void 0
                    : null == (e = t.prototype)
                      ? void 0
                      : e.changeType)
                );
              })()),
            this.audioCodecSwitch &&
              this.log(
                "Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC",
              ),
            (this.levels = t.levels),
            (this.startFragRequested = !1);
        }
        onLevelLoading(e, t) {
          let { levels: i } = this;
          if (!i || this.state !== iT.IDLE) return;
          let r = i[t.level];
          (!r.details ||
            (r.details.live && this.levelLastLoaded !== r) ||
            this.waitForCdnTuneIn(r.details)) &&
            (this.state = iT.WAITING_LEVEL);
        }
        onLevelLoaded(e, t) {
          var i, r;
          let { levels: s } = this,
            a = t.level,
            n = t.details,
            l = n.totalduration;
          if (!s) {
            this.warn(`Levels were reset while loading level ${a}`);
            return;
          }
          this.log(
            `Level ${a} loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""}, cc [${n.startCC}, ${n.endCC}] duration:${l}`,
          );
          let o = s[a],
            h = this.fragCurrent;
          h &&
            (this.state === iT.FRAG_LOADING ||
              this.state === iT.FRAG_LOADING_WAITING_RETRY) &&
            h.level !== t.level &&
            h.loader &&
            this.abortCurrentFrag();
          let d = 0;
          if (n.live || (null != (i = o.details) && i.live)) {
            if ((this.checkLiveUpdate(n), n.deltaUpdateFailed)) return;
            d = this.alignPlaylists(
              n,
              o.details,
              null == (r = this.levelLastLoaded) ? void 0 : r.details,
            );
          }
          if (
            ((o.details = n),
            (this.levelLastLoaded = o),
            this.hls.trigger(C.LEVEL_UPDATED, { details: n, level: a }),
            this.state === iT.WAITING_LEVEL)
          ) {
            if (this.waitForCdnTuneIn(n)) return;
            this.state = iT.IDLE;
          }
          this.startFragRequested
            ? n.live && this.synchronizeToLiveEdge(n)
            : this.setStartPosition(n, d),
            this.tick();
        }
        _handleFragmentLoadProgress(e) {
          var t;
          let { frag: i, part: r, payload: s } = e,
            { levels: a } = this;
          if (!a) {
            this.warn(
              `Levels were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`,
            );
            return;
          }
          let n = a[i.level],
            l = n.details;
          if (!l) {
            this.warn(
              `Dropping fragment ${i.sn} of level ${i.level} after level details were reset`,
            ),
              this.fragmentTracker.removeFragment(i);
            return;
          }
          let o = n.videoCodec,
            h = l.PTSKnown || !l.live,
            d = null == (t = i.initSegment) ? void 0 : t.data,
            u = this._getAudioCodec(n),
            c = (this.transmuxer =
              this.transmuxer ||
              new rf(
                this.hls,
                tn.MAIN,
                this._handleTransmuxComplete.bind(this),
                this._handleTransmuxerFlush.bind(this),
              )),
            f = r ? r.index : -1,
            g = new it(
              i.level,
              i.sn,
              i.stats.chunkCount,
              s.byteLength,
              f,
              -1 !== f,
            ),
            m = this.initPTS[i.cc];
          c.push(s, d, u, o, i, r, l.totalduration, h, g, m);
        }
        onAudioTrackSwitching(e, t) {
          let i = this.altAudio;
          if (!t.url) {
            if (this.mediaBuffer !== this.media) {
              this.log(
                "Switching on main audio, use media.buffered to schedule main fragment loading",
              ),
                (this.mediaBuffer = this.media);
              let e = this.fragCurrent;
              e &&
                (this.log(
                  "Switching to main audio track, cancel main fragment load",
                ),
                e.abortRequests(),
                this.fragmentTracker.removeFragment(e)),
                this.resetTransmuxer(),
                this.resetLoadingState();
            } else this.audioOnly && this.resetTransmuxer();
            let e = this.hls;
            i &&
              (e.trigger(C.BUFFER_FLUSHING, {
                startOffset: 0,
                endOffset: Number.POSITIVE_INFINITY,
                type: null,
              }),
              this.fragmentTracker.removeAllFragments()),
              e.trigger(C.AUDIO_TRACK_SWITCHED, t);
          }
        }
        onAudioTrackSwitched(e, t) {
          let i = t.id,
            r = !!this.hls.audioTracks[i].url;
          if (r) {
            let e = this.videoBuffer;
            e &&
              this.mediaBuffer !== e &&
              (this.log(
                "Switching on alternate audio, use video.buffered to schedule main fragment loading",
              ),
              (this.mediaBuffer = e));
          }
          (this.altAudio = r), this.tick();
        }
        onBufferCreated(e, t) {
          let i, r;
          let s = t.tracks,
            a = !1;
          for (let e in s) {
            let t = s[e];
            if ("main" === t.id) {
              if (((r = e), (i = t), "video" === e)) {
                let t = s[e];
                t && (this.videoBuffer = t.buffer);
              }
            } else a = !0;
          }
          a && i
            ? (this.log(
                `Alternate track found, use ${r}.buffered to schedule main fragment loading`,
              ),
              (this.mediaBuffer = i.buffer))
            : (this.mediaBuffer = this.media);
        }
        onFragBuffered(e, t) {
          let { frag: i, part: r } = t;
          if (i && i.type !== tn.MAIN) return;
          if (this.fragContextChanged(i)) {
            this.warn(
              `Fragment ${i.sn}${r ? " p: " + r.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}`,
            ),
              this.state === iT.PARSED && (this.state = iT.IDLE);
            return;
          }
          let s = r ? r.stats : i.stats;
          (this.fragLastKbps = Math.round(
            (8 * s.total) / (s.buffering.end - s.loading.first),
          )),
            "initSegment" !== i.sn && (this.fragPrevious = i),
            this.fragBufferedComplete(i, r);
        }
        onError(e, t) {
          var i;
          if (t.fatal) {
            this.state = iT.ERROR;
            return;
          }
          switch (t.details) {
            case P.FRAG_GAP:
            case P.FRAG_PARSING_ERROR:
            case P.FRAG_DECRYPT_ERROR:
            case P.FRAG_LOAD_ERROR:
            case P.FRAG_LOAD_TIMEOUT:
            case P.KEY_LOAD_ERROR:
            case P.KEY_LOAD_TIMEOUT:
              this.onFragmentOrKeyLoadError(tn.MAIN, t);
              break;
            case P.LEVEL_LOAD_ERROR:
            case P.LEVEL_LOAD_TIMEOUT:
            case P.LEVEL_PARSING_ERROR:
              t.levelRetry ||
                this.state !== iT.WAITING_LEVEL ||
                (null == (i = t.context) ? void 0 : i.type) !== ta.LEVEL ||
                (this.state = iT.IDLE);
              break;
            case P.BUFFER_APPEND_ERROR:
            case P.BUFFER_FULL_ERROR:
              if (!t.parent || "main" !== t.parent) return;
              if (t.details === P.BUFFER_APPEND_ERROR) {
                this.resetLoadingState();
                return;
              }
              this.reduceLengthAndFlushBuffer(t) &&
                this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
              break;
            case P.INTERNAL_EXCEPTION:
              this.recoverWorkerError(t);
          }
        }
        checkBuffer() {
          let { media: e, gapController: t } = this;
          if (e && t && e.readyState) {
            if (this.loadedmetadata || !ie.getBuffered(e).length) {
              let e = this.state !== iT.IDLE ? this.fragCurrent : null;
              t.poll(this.lastCurrentTime, e);
            }
            this.lastCurrentTime = e.currentTime;
          }
        }
        onFragLoadEmergencyAborted() {
          (this.state = iT.IDLE),
            this.loadedmetadata ||
              ((this.startFragRequested = !1),
              (this.nextLoadPosition = this.startPosition)),
            this.tickImmediate();
        }
        onBufferFlushed(e, { type: t }) {
          if (t !== K.AUDIO || (this.audioOnly && !this.altAudio)) {
            let e =
              (t === K.VIDEO ? this.videoBuffer : this.mediaBuffer) ||
              this.media;
            this.afterBufferFlushed(e, t, tn.MAIN), this.tick();
          }
        }
        onLevelsUpdated(e, t) {
          this.level > -1 &&
            this.fragCurrent &&
            (this.level = this.fragCurrent.level),
            (this.levels = t.levels);
        }
        swapAudioCodec() {
          this.audioCodecSwap = !this.audioCodecSwap;
        }
        seekToStartPos() {
          let { media: e } = this;
          if (!e) return;
          let t = e.currentTime,
            i = this.startPosition;
          if (i >= 0 && t < i) {
            if (e.seeking) {
              this.log(`could not seek to ${i}, already seeking at ${t}`);
              return;
            }
            let r = ie.getBuffered(e),
              s = (r.length ? r.start(0) : 0) - i;
            s > 0 &&
              (s < this.config.maxBufferHole ||
                s < this.config.maxFragLookUpTolerance) &&
              (this.log(
                `adjusting start position by ${s} to match buffer start`,
              ),
              (i += s),
              (this.startPosition = i)),
              this.log(
                `seek to target start position ${i} from current time ${t}`,
              ),
              (e.currentTime = i);
          }
        }
        _getAudioCodec(e) {
          let t = this.config.defaultAudioCodec || e.audioCodec;
          return (
            this.audioCodecSwap &&
              t &&
              (this.log("Swapping audio codec"),
              (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
            t
          );
        }
        _loadBitrateTestFrag(e, t) {
          (e.bitrateTest = !0),
            this._doFragLoad(e, t).then((i) => {
              let { hls: r } = this;
              if (!i || this.fragContextChanged(e)) return;
              (t.fragmentError = 0),
                (this.state = iT.IDLE),
                (this.startFragRequested = !1),
                (this.bitrateTest = !1);
              let s = e.stats;
              (s.parsing.start =
                s.parsing.end =
                s.buffering.start =
                s.buffering.end =
                  self.performance.now()),
                r.trigger(C.FRAG_LOADED, i),
                (e.bitrateTest = !1);
            });
        }
        _handleTransmuxComplete(e) {
          var t;
          let i = "main",
            { hls: r } = this,
            { remuxResult: s, chunkMeta: a } = e,
            n = this.getCurrentContext(a);
          if (!n) {
            this.resetWhenMissingContext(a);
            return;
          }
          let { frag: l, part: o, level: h } = n,
            { video: d, text: u, id3: c, initSegment: f } = s,
            { details: g } = h,
            m = this.altAudio ? void 0 : s.audio;
          if (this.fragContextChanged(l)) {
            this.fragmentTracker.removeFragment(l);
            return;
          }
          if (((this.state = iT.PARSING), f)) {
            if (null != f && f.tracks) {
              let e = l.initSegment || l;
              this._bufferInitSegment(h, f.tracks, e, a),
                r.trigger(C.FRAG_PARSING_INIT_SEGMENT, {
                  frag: e,
                  id: i,
                  tracks: f.tracks,
                });
            }
            let e = f.initPTS,
              t = f.timescale;
            b(e) &&
              ((this.initPTS[l.cc] = { baseTime: e, timescale: t }),
              r.trigger(C.INIT_PTS_FOUND, {
                frag: l,
                id: i,
                initPTS: e,
                timescale: t,
              }));
          }
          if (d && g && "initSegment" !== l.sn) {
            let e = g.fragments[l.sn - 1 - g.startSN],
              t = l.sn === g.startSN,
              i = !e || l.cc > e.cc;
            if (!1 !== s.independent) {
              let { startPTS: e, endPTS: r, startDTS: s, endDTS: n } = d;
              if (o)
                o.elementaryStreams[d.type] = {
                  startPTS: e,
                  endPTS: r,
                  startDTS: s,
                  endDTS: n,
                };
              else if (
                (d.firstKeyFrame &&
                  d.independent &&
                  1 === a.id &&
                  !i &&
                  (this.couldBacktrack = !0),
                d.dropped && d.independent)
              ) {
                let s = this.getMainFwdBufferInfo(),
                  a =
                    (s ? s.end : this.getLoadPosition()) +
                    this.config.maxBufferHole,
                  o = d.firstKeyFramePTS ? d.firstKeyFramePTS : e;
                if (t || !(a < o - this.config.maxBufferHole) || i)
                  i && (l.gap = !0);
                else {
                  this.backtrack(l);
                  return;
                }
                l.setElementaryStreamInfo(d.type, l.start, r, l.start, n, !0);
              } else t && e > 2 && (l.gap = !0);
              l.setElementaryStreamInfo(d.type, e, r, s, n),
                this.backtrackFragment && (this.backtrackFragment = l),
                this.bufferFragmentData(d, l, o, a, t || i);
            } else if (t || i) l.gap = !0;
            else {
              this.backtrack(l);
              return;
            }
          }
          if (m) {
            let { startPTS: e, endPTS: t, startDTS: i, endDTS: r } = m;
            o &&
              (o.elementaryStreams[K.AUDIO] = {
                startPTS: e,
                endPTS: t,
                startDTS: i,
                endDTS: r,
              }),
              l.setElementaryStreamInfo(K.AUDIO, e, t, i, r),
              this.bufferFragmentData(m, l, o, a);
          }
          if (g && null != c && null != (t = c.samples) && t.length) {
            let e = { id: i, frag: l, details: g, samples: c.samples };
            r.trigger(C.FRAG_PARSING_METADATA, e);
          }
          if (g && u) {
            let e = { id: i, frag: l, details: g, samples: u.samples };
            r.trigger(C.FRAG_PARSING_USERDATA, e);
          }
        }
        _bufferInitSegment(e, t, i, r) {
          if (this.state !== iT.PARSING) return;
          (this.audioOnly = !!t.audio && !t.video),
            this.altAudio && !this.audioOnly && delete t.audio;
          let { audio: s, video: a, audiovideo: n } = t;
          if (s) {
            let t = e.audioCodec,
              i = navigator.userAgent.toLowerCase();
            if (this.audioCodecSwitch) {
              t &&
                (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
              let e = s.metadata;
              e &&
                "channelCount" in e &&
                1 !== (e.channelCount || 1) &&
                -1 === i.indexOf("firefox") &&
                (t = "mp4a.40.5");
            }
            t &&
              -1 !== t.indexOf("mp4a.40.5") &&
              -1 !== i.indexOf("android") &&
              "audio/mpeg" !== s.container &&
              ((t = "mp4a.40.2"),
              this.log(`Android: force audio codec to ${t}`)),
              e.audioCodec &&
                e.audioCodec !== t &&
                this.log(
                  `Swapping manifest audio codec "${e.audioCodec}" for "${t}"`,
                ),
              (s.levelCodec = t),
              (s.id = "main"),
              this.log(
                `Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${t || ""}/${e.audioCodec || ""}/${s.codec}]`,
              );
          }
          a &&
            ((a.levelCodec = e.videoCodec),
            (a.id = "main"),
            this.log(
              `Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${a.codec}]`,
            )),
            n &&
              this.log(
                `Init audiovideo buffer, container:${n.container}, codecs[level/parsed]=[${e.codecs}/${n.codec}]`,
              ),
            this.hls.trigger(C.BUFFER_CODECS, t),
            Object.keys(t).forEach((e) => {
              let s = t[e].initSegment;
              null != s &&
                s.byteLength &&
                this.hls.trigger(C.BUFFER_APPENDING, {
                  type: e,
                  data: s,
                  frag: i,
                  part: null,
                  chunkMeta: r,
                  parent: i.type,
                });
            }),
            this.tickImmediate();
        }
        getMainFwdBufferInfo() {
          return this.getFwdBufferInfo(
            this.mediaBuffer ? this.mediaBuffer : this.media,
            tn.MAIN,
          );
        }
        backtrack(e) {
          (this.couldBacktrack = !0),
            (this.backtrackFragment = e),
            this.resetTransmuxer(),
            this.flushBufferGap(e),
            this.fragmentTracker.removeFragment(e),
            (this.fragPrevious = null),
            (this.nextLoadPosition = e.start),
            (this.state = iT.IDLE);
        }
        checkFragmentChanged() {
          let e = this.media,
            t = null;
          if (e && e.readyState > 1 && !1 === e.seeking) {
            let i = e.currentTime;
            if (
              (ie.isBuffered(e, i)
                ? (t = this.getAppendedFrag(i))
                : ie.isBuffered(e, i + 0.1) &&
                  (t = this.getAppendedFrag(i + 0.1)),
              t)
            ) {
              this.backtrackFragment = null;
              let e = this.fragPlaying,
                i = t.level;
              (e && t.sn === e.sn && e.level === i) ||
                ((this.fragPlaying = t),
                this.hls.trigger(C.FRAG_CHANGED, { frag: t }),
                (e && e.level === i) ||
                  this.hls.trigger(C.LEVEL_SWITCHED, { level: i }));
            }
          }
        }
        get nextLevel() {
          let e = this.nextBufferedFrag;
          return e ? e.level : -1;
        }
        get currentFrag() {
          let e = this.media;
          return e
            ? this.fragPlaying || this.getAppendedFrag(e.currentTime)
            : null;
        }
        get currentProgramDateTime() {
          let e = this.media;
          if (e) {
            let t = e.currentTime,
              i = this.currentFrag;
            if (i && b(t) && b(i.programDateTime))
              return new Date(i.programDateTime + (t - i.start) * 1e3);
          }
          return null;
        }
        get currentLevel() {
          let e = this.currentFrag;
          return e ? e.level : -1;
        }
        get nextBufferedFrag() {
          let e = this.currentFrag;
          return e ? this.followingBufferedFrag(e) : null;
        }
        get forceStartLoad() {
          return this._forceStartLoad;
        }
      }
      class sz {
        static get version() {
          return "1.5.20";
        }
        static isMSESupported() {
          return sj();
        }
        static isSupported() {
          return (function () {
            if (!sj()) return !1;
            let e = eW();
            return (
              "function" == typeof (null == e ? void 0 : e.isTypeSupported) &&
              (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some(
                (t) => e.isTypeSupported(ez(t, "video")),
              ) ||
                ["mp4a.40.2", "fLaC"].some((t) =>
                  e.isTypeSupported(ez(t, "audio")),
                ))
            );
          })();
        }
        static getMediaSource() {
          return eW();
        }
        static get Events() {
          return C;
        }
        static get ErrorTypes() {
          return w;
        }
        static get ErrorDetails() {
          return P;
        }
        static get DefaultConfig() {
          return sz.defaultConfig ? sz.defaultConfig : sK;
        }
        static set DefaultConfig(e) {
          sz.defaultConfig = e;
        }
        constructor(e = {}) {
          (this.config = void 0),
            (this.userConfig = void 0),
            (this.coreComponents = void 0),
            (this.networkControllers = void 0),
            (this.started = !1),
            (this._emitter = new rc()),
            (this._autoLevelCapping = -1),
            (this._maxHdcpLevel = null),
            (this.abrController = void 0),
            (this.bufferController = void 0),
            (this.capLevelController = void 0),
            (this.latencyController = void 0),
            (this.levelController = void 0),
            (this.streamController = void 0),
            (this.audioTrackController = void 0),
            (this.subtitleTrackController = void 0),
            (this.emeController = void 0),
            (this.cmcdController = void 0),
            (this._media = null),
            (this.url = null),
            (this.triggeringException = void 0),
            (function (e, t) {
              if (
                ("object" == typeof console && !0 === e) ||
                "object" == typeof e
              ) {
                !(function (e, ...t) {
                  t.forEach(function (t) {
                    F[t] = e[t]
                      ? e[t].bind(e)
                      : (function (e) {
                          let t = self.console[e];
                          return t ? t.bind(self.console, `[${e}] >`) : x;
                        })(t);
                  });
                })(e, "debug", "log", "info", "warn", "error");
                try {
                  F.log(
                    `Debug logs enabled for "${t}" in hls.js version 1.5.20`,
                  );
                } catch (e) {
                  F = O;
                }
              } else F = O;
            })(e.debug || !1, "Hls instance");
          let t = (this.config = (function (e, t) {
            if (
              (t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) &&
              (t.liveSyncDuration || t.liveMaxLatencyDuration)
            )
              throw Error(
                "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration",
              );
            if (
              void 0 !== t.liveMaxLatencyDurationCount &&
              (void 0 === t.liveSyncDurationCount ||
                t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)
            )
              throw Error(
                'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"',
              );
            if (
              void 0 !== t.liveMaxLatencyDuration &&
              (void 0 === t.liveSyncDuration ||
                t.liveMaxLatencyDuration <= t.liveSyncDuration)
            )
              throw Error(
                'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"',
              );
            let i = (function e(t) {
                return t && "object" == typeof t
                  ? Array.isArray(t)
                    ? t.map(e)
                    : Object.keys(t).reduce((i, r) => ((i[r] = e(t[r])), i), {})
                  : t;
              })(e),
              r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
            return (
              ["manifest", "level", "frag"].forEach((e) => {
                let s = `${"level" === e ? "playlist" : e}LoadPolicy`,
                  a = void 0 === t[s],
                  n = [];
                r.forEach((r) => {
                  let l = `${e}Loading${r}`,
                    o = t[l];
                  if (void 0 !== o && a) {
                    n.push(l);
                    let e = i[s].default;
                    switch (((t[s] = { default: e }), r)) {
                      case "TimeOut":
                        (e.maxLoadTimeMs = o), (e.maxTimeToFirstByteMs = o);
                        break;
                      case "MaxRetry":
                        (e.errorRetry.maxNumRetry = o),
                          (e.timeoutRetry.maxNumRetry = o);
                        break;
                      case "RetryDelay":
                        (e.errorRetry.retryDelayMs = o),
                          (e.timeoutRetry.retryDelayMs = o);
                        break;
                      case "MaxRetryTimeout":
                        (e.errorRetry.maxRetryDelayMs = o),
                          (e.timeoutRetry.maxRetryDelayMs = o);
                    }
                  }
                }),
                  n.length &&
                    M.warn(
                      `hls.js config: "${n.join('", "')}" setting(s) are deprecated, use "${s}": ${JSON.stringify(t[s])}`,
                    );
              }),
              D(D({}, i), t)
            );
          })(sz.DefaultConfig, e));
          (this.userConfig = e),
            t.progressive &&
              (function (e) {
                let t = e.loader;
                t !== sU && t !== sM
                  ? (M.log(
                      "[config]: Custom loader detected, cannot enable progressive streaming",
                    ),
                    (e.progressive = !1))
                  : (function () {
                      if (
                        self.fetch &&
                        self.AbortController &&
                        self.ReadableStream &&
                        self.Request
                      )
                        try {
                          return new self.ReadableStream({}), !0;
                        } catch (e) {}
                      return !1;
                    })() &&
                    ((e.loader = sU),
                    (e.progressive = !0),
                    (e.enableSoftwareAES = !0),
                    M.log(
                      "[config]: Progressive streaming enabled, using FetchLoader",
                    ));
              })(t);
          let {
              abrController: i,
              bufferController: r,
              capLevelController: s,
              errorController: a,
              fpsController: n,
            } = t,
            l = new a(this),
            o = (this.abrController = new i(this)),
            h = (this.bufferController = new r(this)),
            d = (this.capLevelController = new s(this)),
            u = new n(this),
            c = new th(this),
            f = new tv(this),
            g = t.contentSteeringController,
            m = g ? new g(this) : null,
            p = (this.levelController = new sV(this, m)),
            E = new t8(this),
            T = new sY(this.config),
            y = (this.streamController = new sX(this, E, T));
          d.setStreamController(y), u.setStreamController(y);
          let v = [c, p, y];
          m && v.splice(1, 0, m), (this.networkControllers = v);
          let S = [o, h, d, u, f, E];
          this.audioTrackController = this.createController(
            t.audioTrackController,
            v,
          );
          let A = t.audioStreamController;
          A && v.push(new A(this, E, T)),
            (this.subtitleTrackController = this.createController(
              t.subtitleTrackController,
              v,
            ));
          let L = t.subtitleStreamController;
          L && v.push(new L(this, E, T)),
            this.createController(t.timelineController, S),
            (T.emeController = this.emeController =
              this.createController(t.emeController, S)),
            (this.cmcdController = this.createController(t.cmcdController, S)),
            (this.latencyController = this.createController(tS, S)),
            (this.coreComponents = S),
            v.push(l);
          let R = l.onErrorOut;
          "function" == typeof R && this.on(C.ERROR, R, l);
        }
        createController(e, t) {
          if (e) {
            let i = new e(this);
            return t && t.push(i), i;
          }
          return null;
        }
        on(e, t, i = this) {
          this._emitter.on(e, t, i);
        }
        once(e, t, i = this) {
          this._emitter.once(e, t, i);
        }
        removeAllListeners(e) {
          this._emitter.removeAllListeners(e);
        }
        off(e, t, i = this, r) {
          this._emitter.off(e, t, i, r);
        }
        listeners(e) {
          return this._emitter.listeners(e);
        }
        emit(e, t, i) {
          return this._emitter.emit(e, t, i);
        }
        trigger(e, t) {
          if (this.config.debug) return this.emit(e, e, t);
          try {
            return this.emit(e, e, t);
          } catch (t) {
            if (
              (M.error(
                "An internal error happened while handling event " +
                  e +
                  '. Error message: "' +
                  t.message +
                  '". Here is a stacktrace:',
                t,
              ),
              !this.triggeringException)
            ) {
              this.triggeringException = !0;
              let i = e === C.ERROR;
              this.trigger(C.ERROR, {
                type: w.OTHER_ERROR,
                details: P.INTERNAL_EXCEPTION,
                fatal: i,
                event: e,
                error: t,
              }),
                (this.triggeringException = !1);
            }
          }
          return !1;
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
        destroy() {
          M.log("destroy"),
            this.trigger(C.DESTROYING, void 0),
            this.detachMedia(),
            this.removeAllListeners(),
            (this._autoLevelCapping = -1),
            (this.url = null),
            this.networkControllers.forEach((e) => e.destroy()),
            (this.networkControllers.length = 0),
            this.coreComponents.forEach((e) => e.destroy()),
            (this.coreComponents.length = 0);
          let e = this.config;
          (e.xhrSetup = e.fetchSetup = void 0), (this.userConfig = null);
        }
        attachMedia(e) {
          M.log("attachMedia"),
            (this._media = e),
            this.trigger(C.MEDIA_ATTACHING, { media: e });
        }
        detachMedia() {
          M.log("detachMedia"),
            this.trigger(C.MEDIA_DETACHING, void 0),
            (this._media = null);
        }
        loadSource(e) {
          this.stopLoad();
          let t = this.media,
            i = this.url,
            r = (this.url = L.buildAbsoluteURL(self.location.href, e, {
              alwaysNormalize: !0,
            }));
          (this._autoLevelCapping = -1),
            (this._maxHdcpLevel = null),
            M.log(`loadSource:${r}`),
            t &&
              i &&
              (i !== r || this.bufferController.hasSourceTypes()) &&
              (this.detachMedia(), this.attachMedia(t)),
            this.trigger(C.MANIFEST_LOADING, { url: e });
        }
        startLoad(e = -1) {
          M.log(`startLoad(${e})`), (this.started = !0), this.resumeBuffering();
          for (
            let t = 0;
            t < this.networkControllers.length &&
            (this.networkControllers[t].startLoad(e),
            this.started && this.networkControllers);
            t++
          );
        }
        stopLoad() {
          M.log("stopLoad"), (this.started = !1);
          for (
            let e = 0;
            e < this.networkControllers.length &&
            (this.networkControllers[e].stopLoad(),
            !this.started && this.networkControllers);
            e++
          );
        }
        resumeBuffering() {
          M.log("resume buffering"),
            this.networkControllers.forEach((e) => {
              e.resumeBuffering && e.resumeBuffering();
            });
        }
        pauseBuffering() {
          M.log("pause buffering"),
            this.networkControllers.forEach((e) => {
              e.pauseBuffering && e.pauseBuffering();
            });
        }
        swapAudioCodec() {
          M.log("swapAudioCodec"), this.streamController.swapAudioCodec();
        }
        recoverMediaError() {
          M.log("recoverMediaError");
          let e = this._media;
          this.detachMedia(), e && this.attachMedia(e);
        }
        removeLevel(e) {
          this.levelController.removeLevel(e);
        }
        get levels() {
          return this.levelController.levels || [];
        }
        get currentLevel() {
          return this.streamController.currentLevel;
        }
        set currentLevel(e) {
          M.log(`set currentLevel:${e}`),
            (this.levelController.manualLevel = e),
            this.streamController.immediateLevelSwitch();
        }
        get nextLevel() {
          return this.streamController.nextLevel;
        }
        set nextLevel(e) {
          M.log(`set nextLevel:${e}`),
            (this.levelController.manualLevel = e),
            this.streamController.nextLevelSwitch();
        }
        get loadLevel() {
          return this.levelController.level;
        }
        set loadLevel(e) {
          M.log(`set loadLevel:${e}`), (this.levelController.manualLevel = e);
        }
        get nextLoadLevel() {
          return this.levelController.nextLoadLevel;
        }
        set nextLoadLevel(e) {
          this.levelController.nextLoadLevel = e;
        }
        get firstLevel() {
          return Math.max(this.levelController.firstLevel, this.minAutoLevel);
        }
        set firstLevel(e) {
          M.log(`set firstLevel:${e}`), (this.levelController.firstLevel = e);
        }
        get startLevel() {
          let e = this.levelController.startLevel;
          return -1 === e && this.abrController.forcedAutoLevel > -1
            ? this.abrController.forcedAutoLevel
            : e;
        }
        set startLevel(e) {
          M.log(`set startLevel:${e}`),
            -1 !== e && (e = Math.max(e, this.minAutoLevel)),
            (this.levelController.startLevel = e);
        }
        get capLevelToPlayerSize() {
          return this.config.capLevelToPlayerSize;
        }
        set capLevelToPlayerSize(e) {
          let t = !!e;
          t !== this.config.capLevelToPlayerSize &&
            (t
              ? this.capLevelController.startCapping()
              : (this.capLevelController.stopCapping(),
                (this.autoLevelCapping = -1),
                this.streamController.nextLevelSwitch()),
            (this.config.capLevelToPlayerSize = t));
        }
        get autoLevelCapping() {
          return this._autoLevelCapping;
        }
        get bandwidthEstimate() {
          let { bwEstimator: e } = this.abrController;
          return e ? e.getEstimate() : NaN;
        }
        set bandwidthEstimate(e) {
          this.abrController.resetEstimator(e);
        }
        get ttfbEstimate() {
          let { bwEstimator: e } = this.abrController;
          return e ? e.getEstimateTTFB() : NaN;
        }
        set autoLevelCapping(e) {
          this._autoLevelCapping !== e &&
            (M.log(`set autoLevelCapping:${e}`),
            (this._autoLevelCapping = e),
            this.levelController.checkMaxAutoUpdated());
        }
        get maxHdcpLevel() {
          return this._maxHdcpLevel;
        }
        set maxHdcpLevel(e) {
          tA.indexOf(e) > -1 &&
            this._maxHdcpLevel !== e &&
            ((this._maxHdcpLevel = e),
            this.levelController.checkMaxAutoUpdated());
        }
        get autoLevelEnabled() {
          return -1 === this.levelController.manualLevel;
        }
        get manualLevel() {
          return this.levelController.manualLevel;
        }
        get minAutoLevel() {
          let {
            levels: e,
            config: { minAutoBitrate: t },
          } = this;
          if (!e) return 0;
          let i = e.length;
          for (let r = 0; r < i; r++) if (e[r].maxBitrate >= t) return r;
          return 0;
        }
        get maxAutoLevel() {
          let e;
          let { levels: t, autoLevelCapping: i, maxHdcpLevel: r } = this;
          if (((e = -1 === i && null != t && t.length ? t.length - 1 : i), r))
            for (let i = e; i--; ) {
              let e = t[i].attrs["HDCP-LEVEL"];
              if (e && e <= r) return i;
            }
          return e;
        }
        get firstAutoLevel() {
          return this.abrController.firstAutoLevel;
        }
        get nextAutoLevel() {
          return this.abrController.nextAutoLevel;
        }
        set nextAutoLevel(e) {
          this.abrController.nextAutoLevel = e;
        }
        get playingDate() {
          return this.streamController.currentProgramDateTime;
        }
        get mainForwardBufferInfo() {
          return this.streamController.getMainFwdBufferInfo();
        }
        setAudioOption(e) {
          var t;
          return null == (t = this.audioTrackController)
            ? void 0
            : t.setAudioOption(e);
        }
        setSubtitleOption(e) {
          var t;
          return (
            null == (t = this.subtitleTrackController) ||
              t.setSubtitleOption(e),
            null
          );
        }
        get allAudioTracks() {
          let e = this.audioTrackController;
          return e ? e.allAudioTracks : [];
        }
        get audioTracks() {
          let e = this.audioTrackController;
          return e ? e.audioTracks : [];
        }
        get audioTrack() {
          let e = this.audioTrackController;
          return e ? e.audioTrack : -1;
        }
        set audioTrack(e) {
          let t = this.audioTrackController;
          t && (t.audioTrack = e);
        }
        get allSubtitleTracks() {
          let e = this.subtitleTrackController;
          return e ? e.allSubtitleTracks : [];
        }
        get subtitleTracks() {
          let e = this.subtitleTrackController;
          return e ? e.subtitleTracks : [];
        }
        get subtitleTrack() {
          let e = this.subtitleTrackController;
          return e ? e.subtitleTrack : -1;
        }
        get media() {
          return this._media;
        }
        set subtitleTrack(e) {
          let t = this.subtitleTrackController;
          t && (t.subtitleTrack = e);
        }
        get subtitleDisplay() {
          let e = this.subtitleTrackController;
          return !!e && e.subtitleDisplay;
        }
        set subtitleDisplay(e) {
          let t = this.subtitleTrackController;
          t && (t.subtitleDisplay = e);
        }
        get lowLatencyMode() {
          return this.config.lowLatencyMode;
        }
        set lowLatencyMode(e) {
          this.config.lowLatencyMode = e;
        }
        get liveSyncPosition() {
          return this.latencyController.liveSyncPosition;
        }
        get latency() {
          return this.latencyController.latency;
        }
        get maxLatency() {
          return this.latencyController.maxLatency;
        }
        get targetLatency() {
          return this.latencyController.targetLatency;
        }
        get drift() {
          return this.latencyController.drift;
        }
        get forceStartLoad() {
          return this.streamController.forceStartLoad;
        }
      }
      sz.defaultConfig = void 0;
    },
  },
]);
