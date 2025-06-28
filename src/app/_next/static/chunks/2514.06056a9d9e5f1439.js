"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2514],
  {
    52514: function (e, t, s) {
      s.r(t),
        s.d(t, {
          HlsCoreAdapter: function () {
            return y;
          },
          HtmlAudioCoreAdapter: function () {
            return f;
          },
          YaspCoreAdapter: function () {
            return c;
          },
          YaspLoader: function () {
            return d;
          },
          checkBuffering: function () {
            return L;
          },
          getRemainingBufferedTime: function () {
            return E;
          },
        });
      var r = s(27198),
        i = s(61850);
      function n(e) {
        try {
          return e();
        } catch {
          return;
        }
      }
      let o = (0, s(32416).I)();
      async function a(e) {
        if (n(() => o.Ya)?.YaspVideoElement) return Promise.resolve();
        await (0, i.e)({
          file: "yasp.js",
          version: e?.version,
          testid: e?.testid,
          bundleUrl: e?.bundleUrl,
          checkLoad: () => !!n(() => o.Ya)?.preloadYaspScripts,
        }),
          await o.Ya.preloadYaspScripts();
      }
      var l = s(25534);
      class d {
        get isYaspLoaded() {
          return void 0 !== window.Ya && void 0 !== window.Ya.YaspAudioElement;
        }
        loadYasp(e) {
          return this.isYaspLoaded
            ? Promise.resolve()
            : a({ version: e })
                .then(() => {
                  window.Ya.YaspAudioElement.messenger.on(
                    "yasp-event",
                    this.yaspEventHandler,
                  );
                })
                .catch((e) => {
                  let t = new l.y("[Sonata] Error in loading YASP", {
                    code: "E_SONATA",
                    cause: e,
                  });
                  this.logger.error(t);
                });
        }
        yaspEventHandler(e) {
          var t;
          null === (t = this.yaspTelemetry) ||
            void 0 === t ||
            t.logYaspEvent(e.name, e.data);
        }
        getYaspAudioElement() {
          if (!this.isYaspLoaded)
            throw new l.y("YaspAudioElement has not been loaded");
          return window.Ya.YaspAudioElement;
        }
        attachYasp(e) {
          let t = window.Ya.YaspAudioElement;
          if (!this.isYaspLoaded)
            throw new l.y("YaspAudioElement has not been loaded");
          t.isYaspAudioElement(e) || t.attach(e);
        }
        constructor({ logger: e, yaspTelemetry: t }) {
          (0, r._)(this, "logger", void 0),
            (0, r._)(this, "yaspTelemetry", void 0),
            (this.logger = e),
            (this.yaspTelemetry = t),
            (this.yaspEventHandler = this.yaspEventHandler.bind(this));
        }
      }
      var h = s(8215),
        u = s(27851);
      function m(e) {
        let t = [];
        for (let s = 0; s < e.buffered.length; s++)
          try {
            t.push({
              start: (0, u.my)(e.buffered.start(s)),
              end: (0, u.my)(e.buffered.end(s)),
            });
          } catch (e) {}
        return (function (e) {
          if (e.length <= 1) return e;
          let t = e.slice().sort((e, t) => e.start - t.start),
            s = t[0] ? [t[0]] : [];
          for (let e = 1; e < t.length; e++) {
            let r = t[e],
              i = s[s.length - 1];
            r &&
              i &&
              (i.end < r.start ? s.push(r) : i.end < r.end && (i.end = r.end));
          }
          return s;
        })(t);
      }
      function E(e) {
        let t = m(e),
          s = t[t.length - 1];
        if (!s) return (0, u.my)(0);
        let r = s.end - e.currentTime;
        return (0, u.my)(Number(r.toFixed(3)));
      }
      class p {
        setupAudioElement() {
          (this.audioElement.autoplay = !1),
            (this.audioElement.loop = !1),
            (this.audioElement.preload = "auto"),
            (this.audioElement.crossOrigin = "anonymous");
        }
        get source() {
          return this.audioElement;
        }
        play(e) {
          let { source: t, position: s } = e;
          return (
            (this.audioElement.src = t.src),
            this.audioElement.load(),
            this.audioElement.play().then(() => {
              void 0 !== s && (this.audioElement.currentTime = s);
            })
          );
        }
        setSrc(e) {
          let { source: t, position: s } = e;
          (this.audioElement.src = t.src),
            this.audioElement.load(),
            void 0 !== s && (this.audioElement.currentTime = s);
        }
        pause() {
          return this.audioElement.pause(), Promise.resolve();
        }
        resume() {
          return this.audioElement.play().then(() => {
            this.emitter.emit("resume");
          });
        }
        setProgress(e) {
          let t =
            e >= this.audioElement.duration
              ? this.audioElement.duration - 0.01
              : e;
          return (
            (this.audioElement.currentTime = t),
            Promise.resolve(this.audioElement.currentTime)
          );
        }
        setVolume(e) {
          return (
            (this.audioElement.volume = e),
            Promise.resolve(this.audioElement.volume)
          );
        }
        setSpeed(e) {
          return (
            (this.audioElement.defaultPlaybackRate = e),
            (this.audioElement.playbackRate = e),
            Promise.resolve(this.audioElement.playbackRate)
          );
        }
        stop() {
          return (
            this.audioElement.removeAttribute("src"),
            this.audioElement.load(),
            Promise.resolve()
          );
        }
        onEnd(e) {
          this.audioElement.addEventListener("ended", e);
        }
        onPaused(e) {
          this.audioElement.addEventListener("pause", e);
        }
        onResume(e) {
          this.emitter.on("resume", e);
        }
        onUpdatingProgress(e) {
          this.audioElement.addEventListener(
            "timeupdate",
            this.progressHandler,
          ),
            this.audioElement.addEventListener(
              "durationchange",
              this.progressHandler,
            ),
            this.emitter.on("update_progress", e);
        }
        progressHandler() {
          let e = isNaN(this.audioElement.duration)
              ? 0
              : this.audioElement.duration,
            t = this.audioElement.currentTime,
            s = this.audioElement.buffered.length
              ? this.audioElement.buffered.end(
                  this.audioElement.buffered.length - 1,
                )
              : 0;
          this.emitter.emit("update_progress", {
            duration: e,
            position: t,
            loaded: s,
            remainingBufferedTime: E(this.audioElement),
          });
        }
        onSeeked(e) {
          this.audioElement.addEventListener("seeked", e);
        }
        onStalled(e) {
          this.audioElement.addEventListener("stalled", e);
        }
        onCanplay(e) {
          this.audioElement.addEventListener("canplay", e);
        }
        onPlaying(e) {
          this.audioElement.addEventListener("playing", e);
        }
        onError(e) {
          this.audioElement.addEventListener("error", this.audioErrorHandler),
            this.emitter.on("error", e);
        }
        onVolumeChange(e) {
          this.audioElement.addEventListener(
            "volumechange",
            this.volumeChangeHandler,
          ),
            this.emitter.on("volumechange", e);
        }
        volumeChangeHandler() {
          this.emitter.emit("volumechange", this.audioElement.volume);
        }
        onSpeedChange(e) {
          this.audioElement.addEventListener(
            "ratechange",
            this.speedChangeHandler,
          ),
            this.emitter.on("ratechange", e);
        }
        speedChangeHandler() {
          this.emitter.emit("ratechange", this.audioElement.playbackRate);
        }
        audioErrorHandler(e) {
          this.emitter.emit("error", e);
        }
        onWaiting(e) {
          this.audioElement.addEventListener("waiting", e);
        }
        offEnd(e) {
          this.audioElement.removeEventListener("ended", e);
        }
        offPaused(e) {
          this.audioElement.removeEventListener("pause", e);
        }
        offResume(e) {
          this.emitter.off("resume", e);
        }
        offUpdatingProgress(e) {
          this.audioElement.removeEventListener(
            "timeupdate",
            this.progressHandler,
          ),
            this.audioElement.removeEventListener(
              "durationchange",
              this.progressHandler,
            ),
            this.emitter.off("update_progress", e);
        }
        offSeeked(e) {
          this.audioElement.removeEventListener("seeked", e);
        }
        offStalled(e) {
          this.audioElement.removeEventListener("stalled", e);
        }
        offCanplay(e) {
          this.audioElement.removeEventListener("canplay", e);
        }
        offPlaying(e) {
          this.audioElement.removeEventListener("playing", e);
        }
        offError(e) {
          this.audioElement.removeEventListener("error", e);
        }
        offVolumeChange(e) {
          this.audioElement.removeEventListener(
            "volumechange",
            this.volumeChangeHandler,
          ),
            this.emitter.off("volumechange", e);
        }
        offSpeedChange(e) {
          this.audioElement.removeEventListener(
            "ratechange",
            this.speedChangeHandler,
          ),
            this.emitter.off("ratechange", e);
        }
        offWaiting(e) {
          this.audioElement.removeEventListener("waiting", e);
        }
        constructor() {
          (0, r._)(this, "coreContentType", "audio"),
            (0, r._)(this, "emitter", new h.v()),
            (this.progressHandler = this.progressHandler.bind(this)),
            (this.volumeChangeHandler = this.volumeChangeHandler.bind(this)),
            (this.speedChangeHandler = this.speedChangeHandler.bind(this)),
            (this.audioErrorHandler = this.audioErrorHandler.bind(this));
        }
      }
      class c extends p {
        yaspEventHandler(e) {
          var t;
          null === (t = this.yaspTelemetry) ||
            void 0 === t ||
            t.logYaspEvent(e.detail.name, e.detail.data);
        }
        yaspErrorHandler(e) {
          var t;
          null === (t = this.yaspTelemetry) ||
            void 0 === t ||
            t.logYaspError(e);
        }
        play(e) {
          let { source: t, position: s } = e;
          return (
            window.Ya.YaspAudioElement.configureSource(t.src, {
              audioDecodingKey: t.key,
              mirrorUrls: t.mirrorUrls,
            }),
            (this.audioElement.src = t.src),
            this.audioElement.play().then(() => {
              void 0 !== s && (this.audioElement.currentTime = s);
            })
          );
        }
        setSrc(e) {
          let { source: t, position: s } = e;
          window.Ya.YaspAudioElement.configureSource(t.src, {
            audioDecodingKey: t.key,
            mirrorUrls: t.mirrorUrls,
          }),
            (this.audioElement.src = t.src),
            void 0 !== s && (this.audioElement.currentTime = s);
        }
        setProgress(e) {
          var t;
          return (
            null === (t = this.yaspTelemetry) ||
              void 0 === t ||
              t.onSeek(this.audioElement.currentTime, e),
            super.setProgress(e)
          );
        }
        detachYasp() {
          this.audioElement.removeEventListener(
            "yasp-event",
            this.yaspEventHandler,
          ),
            this.audioElement.removeEventListener(
              "yasp-error",
              this.yaspErrorHandler,
            ),
            this.audioElement.detach();
        }
        constructor({ yaspAudioElement: e, yaspTelemetry: t }) {
          super(),
            (0, r._)(this, "audioElement", void 0),
            (0, r._)(this, "yaspTelemetry", void 0),
            (this.audioElement = e.attach(document.createElement("audio"))),
            (this.yaspTelemetry = t),
            (this.yaspEventHandler = this.yaspEventHandler.bind(this)),
            (this.yaspErrorHandler = this.yaspErrorHandler.bind(this)),
            this.setupAudioElement(),
            this.audioElement.addEventListener(
              "yasp-event",
              this.yaspEventHandler,
            ),
            this.audioElement.addEventListener(
              "yasp-error",
              this.yaspErrorHandler,
            );
        }
      }
      var v = s(94379);
      class y extends p {
        play(e) {
          let { source: t } = e;
          return (
            this.hls || this.initHls(),
            this.stop(),
            this.load(t.src).then(() => this.audioElement.play())
          );
        }
        stop() {
          return (
            this.removeAllHlsEvents(),
            this.hls &&
              (this.hls.stopLoad(), this.hls.media && this.hls.detachMedia()),
            this.audioElement.removeAttribute("src"),
            this.audioElement.load(),
            Promise.resolve()
          );
        }
        initHls() {
          this.hls ||
            ((this.hls = new v.ZP({
              liveDurationInfinity: !0,
              maxBufferSize: 3e6,
            })),
            this.setErrorListener(this.errorListener));
        }
        load(e) {
          return this.hls
            ? (this.hls.attachMedia(this.audioElement),
              this.hls.loadSource(e),
              new Promise((e) => {
                this.addOnceHlsEvent(v.zW.MANIFEST_PARSED, () => {
                  this.hls && this.hls.startLoad();
                }),
                  this.addOnceHlsEvent(v.zW.MEDIA_ATTACHED, () => {
                    e();
                  });
              }))
            : Promise.resolve();
        }
        destroyHls() {
          (this.retryCounter = 0),
            this.removeErrorListener(),
            this.removeAllHlsEvents(),
            this.hls && (this.stop(), this.hls.destroy(), (this.hls = null));
        }
        addOnceHlsEvent(e, t) {
          this.hls &&
            (this.hls.once(e, t),
            this.hlsListeners.push({ event: e, listener: t, once: !0 }));
        }
        removeAllHlsEvents() {
          this.hlsListeners.forEach((e) => {
            this.hls && this.hls.off(e.event, e.listener, void 0, e.once);
          }),
            (this.hlsListeners = []);
        }
        errorListener(e, t) {
          if (this.hls)
            switch (t.type) {
              case v.ZB.NETWORK_ERROR:
                if (
                  (this.retryCounter++,
                  this.retryCounter > this.hlsErrorRetryLimit)
                ) {
                  this.destroyHls();
                  let e = new l.y("HLS error", { data: t });
                  this.emitter.emit("error", e);
                } else this.hls.startLoad();
                break;
              case v.ZP.ErrorTypes.MEDIA_ERROR:
                this.hls.recoverMediaError();
                break;
              default:
                this.destroyHls(),
                  this.emitter.emit("error", new l.y("HLS error", { data: t }));
            }
        }
        setErrorListener(e) {
          this.removeErrorListener(),
            this.hls &&
              ((this.hlsJsErrorListener = e), this.hls.on(v.zW.ERROR, e));
        }
        removeErrorListener() {
          this.hls &&
            this.hlsJsErrorListener &&
            this.hls.off(v.zW.ERROR, this.hlsJsErrorListener),
            (this.hlsJsErrorListener = null);
        }
        constructor(e) {
          super(),
            (0, r._)(this, "audioElement", document.createElement("audio")),
            (0, r._)(this, "hls", null),
            (0, r._)(this, "retryCounter", 0),
            (0, r._)(this, "hlsErrorRetryLimit", void 0),
            (0, r._)(this, "hlsJsErrorListener", null),
            (0, r._)(this, "hlsListeners", []),
            this.setupAudioElement(),
            (this.hlsErrorRetryLimit = e.hlsErrorRetryLimit),
            (this.errorListener = this.errorListener.bind(this)),
            this.initHls();
        }
      }
      class f extends p {
        constructor() {
          super(),
            (0, r._)(this, "audioElement", document.createElement("audio")),
            this.setupAudioElement();
        }
      }
      let g = (0, u.my)(0.15);
      function L(e) {
        let { currentTime: t, duration: s } = e;
        return (
          e.readyState < e.HAVE_FUTURE_DATA ||
          !m(e).some((e) => {
            let { start: r, end: i } = e;
            return !(t < r) && !(t > i) && (s <= i || t + g < i);
          })
        );
      }
    },
  },
]);
