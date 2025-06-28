"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7553],
  {
    67553: function (e, t, r) {
      r.r(t),
        r.d(t, {
          VHPlayerCoreAdapter: function () {
            return p;
          },
          loadVHPlayerSdk: function () {
            return d;
          },
        });
      var n,
        a,
        i,
        s,
        o = r(61850);
      function h(e) {
        try {
          return e();
        } catch {
          return;
        }
      }
      let l = (0, r(32416).I)();
      async function u(e) {
        if (h(() => l.Ya.playerSdk)?.init) return Promise.resolve();
        await (0, o.e)({
          file: "player-sdk.js",
          version: e?.version,
          checkLoad: () => !!h(() => l.Ya.playerSdk)?.preloadScripts,
        }),
          await l.Ya.playerSdk.preloadScripts();
      }
      function d(e) {
        return u({ version: e });
      }
      var g = r(27198),
        C = r(8215);
      ((n = i || (i = {})).SourceChange = "SourceChange"),
        (n.StatusChange = "StatusChange"),
        (n.ErrorChange = "ErrorChange"),
        (n.CurrentTimeChange = "CurrentTimeChange"),
        (n.DurationChange = "DurationChange"),
        (n.UtcStartTimeChange = "UtcStartTimeChange"),
        (n.VideoTypeChange = "VideoTypeChange"),
        (n.MutedChange = "MutedChange"),
        (n.VolumeChange = "VolumeChange"),
        ((a = s || (s = {})).idle = "idle"),
        (a.init = "init"),
        (a.buffering = "buffering"),
        (a.play = "play"),
        (a.pause = "pause"),
        (a.end = "end"),
        (a.fatal = "fatal"),
        (a.broken = "broken"),
        (a.destroyed = "destroyed"),
        (a.cancelled = "cancelled"),
        (a.preparing = "preparing"),
        (a.finished = "finished");
      class p {
        statusChangeHandler() {
          let { status: e } = this.player.getState();
          switch (e) {
            case "end":
              this.emitter.emit("end");
              break;
            case "play":
              this.emitter.emit("play");
              break;
            case "pause":
              this.emitter.emit("pause");
          }
        }
        currentTimeChangeHandler() {
          let { duration: e, currentTime: t } = this.player.getState();
          this.emitter.emit("currentTimeChange", {
            duration: e,
            position: t,
            loaded: 0,
          });
        }
        volumeChangeHandler() {
          let { volume: e } = this.player.getState();
          this.emitter.emit("volumeChange", e);
        }
        errorChangeHandler() {
          let { error: e } = this.player.getState();
          e instanceof Error && this.emitter.emit("errorChange", e);
        }
        subscribePlayerEvents() {
          this.player &&
            (this.player.on(i.StatusChange, this.statusChangeHandler),
            this.player.on(i.CurrentTimeChange, this.currentTimeChangeHandler),
            this.player.on(i.VolumeChange, this.volumeChangeHandler),
            this.player.on(i.ErrorChange, this.errorChangeHandler));
        }
        unsubscribePlayerEvents() {
          this.player &&
            (this.player.off(i.StatusChange, this.statusChangeHandler),
            this.player.off(i.CurrentTimeChange, this.currentTimeChangeHandler),
            this.player.off(i.VolumeChange, this.volumeChangeHandler),
            this.player.off(i.ErrorChange, this.errorChangeHandler));
        }
        get adConfig() {
          if (this.hideAds) return { adBreaks: [] };
        }
        initPlayer(e) {
          let { src: t, autoplay: r, container: n } = e;
          (this.player = window.Ya.playerSdk.init({
            element: n,
            source: t,
            hiddenControls: "*",
            autoplay: r,
            adConfig: this.adConfig,
          })),
            this.subscribePlayerEvents();
        }
        play(e) {
          let { source: t } = e;
          return this.internalSetSrc({ source: t, autoplay: !0 });
        }
        setSrc(e) {
          let { source: t } = e;
          this.internalSetSrc({ source: t, autoplay: !1 });
        }
        internalSetSrc(e) {
          let { source: t, autoplay: r } = e;
          if (this.player)
            return this.player.setSource({
              source: t.src,
              autoplay: r,
              adConfig: this.adConfig,
            });
          try {
            return (
              this.container &&
                this.initPlayer({
                  src: t.src,
                  autoplay: r,
                  container: this.container,
                }),
              Promise.resolve()
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }
        pause() {
          var e;
          return (
            null === (e = this.player) || void 0 === e || e.pause(),
            Promise.resolve()
          );
        }
        resume() {
          return this.player ? this.player.play() : Promise.resolve();
        }
        setProgress(e) {
          var t;
          return (
            null === (t = this.player) || void 0 === t || t.seek(e),
            Promise.resolve(e)
          );
        }
        setVolume(e) {
          var t;
          return (
            null === (t = this.player) || void 0 === t || t.setVolume(e),
            Promise.resolve(e)
          );
        }
        setSpeed(e) {
          return Promise.resolve(e);
        }
        stop() {
          return Promise.resolve();
        }
        destroy() {
          return (this.unsubscribePlayerEvents(), this.player)
            ? this.player.destroy().finally(() => {
                (this.player = null), (this.container = null);
              })
            : Promise.resolve();
        }
        setContainer(e) {
          this.container = e;
        }
        setVideoQuality() {}
        onEnd(e) {
          this.emitter.on("end", e);
        }
        onPaused(e) {
          this.emitter.on("pause", e);
        }
        onUpdatingProgress(e) {
          this.emitter.on("currentTimeChange", e);
        }
        onPlaying(e) {
          this.emitter.on("play", e);
        }
        onError(e) {
          this.emitter.on("errorChange", e);
        }
        onVolumeChange(e) {
          this.emitter.on("volumeChange", e);
        }
        onSpeedChange() {}
        onResume() {}
        onSeeked() {}
        onStalled() {}
        onCanplay() {}
        onWaiting() {}
        offEnd(e) {
          this.emitter.off("end", e);
        }
        offPaused(e) {
          this.emitter.off("pause", e);
        }
        offUpdatingProgress(e) {
          this.emitter.off("currentTimeChange", e);
        }
        offPlaying(e) {
          this.emitter.off("play", e);
        }
        offError(e) {
          this.emitter.off("errorChange", e);
        }
        offVolumeChange(e) {
          this.emitter.off("volumeChange", e);
        }
        offSpeedChange() {}
        offResume() {}
        offSeeked() {}
        offStalled() {}
        offCanplay() {}
        offWaiting() {}
        constructor(e) {
          (0, g._)(this, "coreContentType", "video"),
            (0, g._)(this, "player", null),
            (0, g._)(this, "container", null),
            (0, g._)(this, "emitter", new C.v()),
            (0, g._)(this, "hideAds", void 0),
            (this.hideAds = !!e.hideAds),
            (this.statusChangeHandler = this.statusChangeHandler.bind(this)),
            (this.currentTimeChangeHandler =
              this.currentTimeChangeHandler.bind(this)),
            (this.volumeChangeHandler = this.volumeChangeHandler.bind(this)),
            (this.errorChangeHandler = this.errorChangeHandler.bind(this));
        }
      }
    },
  },
]);
