(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6548],
  {
    63955: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, i) => {
          let n = (n) => {
            let o = (n + e / 30) % 12;
            return (
              i -
              t * Math.min(i, 1 - i) * Math.max(-1, Math.min(o - 3, 9 - o, 1))
            );
          };
          return [n(0), n(8), n(4)];
        });
    },
    43055: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let n = i(83664),
        o = i(97456);
      (t.normalizeFrequency = (e) => Math.min(1, (0, o.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : n.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: i, collectionHue: o, energy: a, backgroundColor: l } = e,
            s = { collectionHue: (0, t.normalizeCollectionHue)(o) };
          return (
            i && (s.hue = i),
            a && (s.energy = (a + 1) * n.ENERGY_FACTOR),
            l && (s.backgroundColor = l),
            s
          );
        });
    },
    97456: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    83664: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_ENERGY =
          t.DEFAULT_COLLECTION_LIGHTNESS =
          t.DEFAULT_COLLECTION_SATURATION =
          t.DEFAULT_COLLECTION_HUE =
          t.DEFAULT_LIGHTNESS =
          t.DEFAULT_SATURATION =
          t.DEFAULT_HUE =
          t.MAX_FPS =
            void 0),
        (t.MAX_FPS = 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_ENERGY = 0.2),
        (t.ENERGY_FACTOR = 0.4);
    },
    54098: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DumbAnalyzer = t.FrequencyAnalyzer = void 0);
      let o = i(43055);
      class a {
        handleUserAction() {
          this.audioContext.resume(),
            document.removeEventListener("click", this.handleUserAction);
        }
        setupListeners() {
          document.addEventListener("click", this.handleUserAction);
        }
        getAverageFrequencies(e) {
          var t, i;
          let { low: n, high: a } = e,
            l = Math.floor(
              n / (this.audioContext.sampleRate / this.bufferLength),
            ),
            s = Math.floor(
              a / (this.audioContext.sampleRate / this.bufferLength),
            );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let r = 0,
            c = 0;
          for (let e = l; e <= s; e++)
            (r +=
              (null !== (i = this.spectrum[e]) && void 0 !== i ? i : 0) / 256),
              c++;
          return (0, o.normalizeFrequency)(r / c);
        }
        constructor(e) {
          n._(this, "audioContext", void 0),
            n._(this, "sourceNode", void 0),
            n._(this, "analyserNode", void 0),
            n._(this, "bufferLength", 0),
            n._(this, "spectrum", new Uint8Array()),
            (this.audioContext = new AudioContext()),
            (this.sourceNode = this.audioContext.createMediaElementSource(e)),
            (this.analyserNode = this.audioContext.createAnalyser()),
            (this.analyserNode.fftSize = 32),
            (this.analyserNode.smoothingTimeConstant = 0.9),
            this.sourceNode.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength)),
            (this.handleUserAction = this.handleUserAction.bind(this)),
            this.setupListeners();
        }
      }
      t.FrequencyAnalyzer = a;
      class l {
        getAverageFrequencies() {
          return 0;
        }
      }
      t.DumbAnalyzer = l;
    },
    47456: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let o = i(63955),
        a = i(97456),
        l = i(83664),
        s = i(80749);
      class r {
        get value() {
          return [
            this.bottomStart.value,
            this.middleStart.value,
            this.topStart.value,
            this.bottomEnd.value,
            this.middleEnd.value,
            this.topEnd.value,
          ];
        }
        update(e, t) {
          (this.hue = e), (this.collectionHue = t);
          let i = (0, o.adjustHue)(e),
            n = (0, o.safeHue)(i + (0, a.randomNumber)(40, 80), i),
            l = (0, o.adjustHue)(t);
          this.topStart.update(i),
            this.topEnd.update(
              (0, o.safeHue)(i + (0, a.randomNumber)(30, 40), i),
            ),
            this.middleStart.update(n),
            this.middleEnd.update(
              (0, o.safeHue)(n + (0, a.randomNumber)(30, 40), i),
            ),
            this.bottomStart.update(l),
            this.bottomEnd.update(
              (0, o.safeHue)(l + (0, a.randomNumber)(30, 40), i),
            );
        }
        next(e) {
          this.topStart.next(e),
            this.topEnd.next(e),
            this.middleStart.next(e),
            this.middleEnd.next(e),
            this.bottomStart.next(e),
            this.bottomEnd.next(e);
        }
        constructor(e) {
          n._(this, "hue", l.DEFAULT_HUE),
            n._(this, "collectionHue", l.DEFAULT_COLLECTION_HUE),
            n._(this, "topStart", void 0),
            n._(this, "topEnd", void 0),
            n._(this, "middleStart", void 0),
            n._(this, "middleEnd", void 0),
            n._(this, "bottomStart", void 0),
            n._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, o.adjustHue)(e),
            i = (0, o.safeHue)(t + (0, a.randomNumber)(30, 40), t);
          (this.topStart = new s.RGB(50)),
            (this.topEnd = new s.RGB(50)),
            (this.middleStart = new s.RGB(300)),
            (this.middleEnd = new s.RGB(320)),
            (this.bottomStart = new s.RGB(t)),
            (this.bottomEnd = new s.RGB(i));
        }
      }
      t.Color = r;
    },
    69407: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0);
      class o {
        clamp(e, t, i) {
          return Math.min(Math.max(e, t), i);
        }
        get value() {
          return this.formatter
            ? this.formatter(this.currentValue)
            : this.currentValue;
        }
        update(e) {
          (this.targetValue = e), (this.elapsedTime = 0);
        }
        next(e) {
          let t = this.clamp(this.elapsedTime / this.duration, 0, 1);
          return (
            (this.elapsedTime += e),
            (this.currentValue =
              this.currentValue + (this.targetValue - this.currentValue) * t),
            this.currentValue
          );
        }
        constructor(e, t, i, o) {
          n._(this, "currentValue", void 0),
            n._(this, "targetValue", void 0),
            n._(this, "elapsedTime", void 0),
            n._(this, "duration", void 0),
            n._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = i),
            (this.elapsedTime = 0),
            (this.formatter = o);
        }
      }
      t.DynamicValue = o;
    },
    19434: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let o = i(26716),
        a = i(43055),
        l = i(83664),
        s = i(52999),
        r = i(98355),
        c = i(61939),
        d = i(49198);
      class u {
        get rendererOptions() {
          return { alpha: !1, antialias: !1, preserveDrawingBuffer: !1 };
        }
        get vertexAndFragment() {
          return { vertex: s.VertexShaderV2, fragment: s.FragmentShaderV2 };
        }
        setupListeners() {
          window.addEventListener("resize", this.handleOnResize),
            document.addEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        createElement(e) {
          (e.innerHTML = ""), e.appendChild(this.renderer.gl.canvas);
        }
        createShader() {
          let e = this.renderer.gl,
            t = new o.Plane(e, { width: 2, height: 2 }),
            i = new o.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new o.Mesh(e, { geometry: t, program: i }).setParent(this.scene), i
          );
        }
        render() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyzer),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnResize() {
          this.renderer.setSize(this.uniforms.width, this.uniforms.height);
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(r.RenderState.ACTIVE_TAB)
            : this.disableRender(r.RenderState.ACTIVE_TAB);
        }
        updateRenderingState() {
          Object.values(this.renderState).every((e) => e)
            ? this.ticker.start()
            : this.ticker.stop();
        }
        applySettings() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              hue: t,
              collectionHue: i,
              energy: n,
              backgroundColor: o,
            } = (0, a.normalizeSettings)(e);
          t && i && this.uniforms.updateColor(t, i),
            n && this.uniforms.updateEnergy(n),
            o && this.uniforms.updateBackgroundColor(o);
        }
        likeAnimation() {
          this.uniforms.updateReactTop(0.7),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0.7);
            }, 100),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0.7);
            }, 150),
            setTimeout(() => {
              this.uniforms.updateReactTop(0);
            }, 850),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0);
            }, 950),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0);
            }, 1050);
        }
        playAnimation(e) {
          this.uniforms.updatePlayingState(!0), this.applySettings(e);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(l.DEFAULT_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnResize &&
            window.removeEventListener("resize", this.handleOnResize),
            this.handleOnVisibilityChange &&
              document.removeEventListener(
                "visibilitychange",
                this.handleOnVisibilityChange,
              );
        }
        constructor(e, t, i) {
          n._(this, "analyzer", void 0),
            n._(this, "ticker", void 0),
            n._(this, "scene", new o.Transform()),
            n._(this, "shader", void 0),
            n._(this, "renderer", void 0),
            n._(this, "uniforms", void 0),
            n._(this, "renderState", {
              [r.RenderState.ACTIVE_TAB]: !0,
              [r.RenderState.BLOCK_VISIBILITY]: !0,
              [r.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new d.Uniforms((0, a.normalizeCollectionHue)(i))),
            (this.renderer = new o.Renderer(this.rendererOptions)),
            (this.ticker = new c.Ticker(l.MAX_FPS, this.render.bind(this))),
            (this.analyzer = t),
            this.createElement(e),
            (this.handleOnResize = this.handleOnResize.bind(this)),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnResize(),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
      }
      t.VibeAnimationRenderer = u;
    },
    80749: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let o = i(63955),
        a = i(83664),
        l = i(69407);
      class s {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, o.hsl2rgb)(e, a.DEFAULT_SATURATION, a.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          n._(this, "r", void 0),
            n._(this, "g", void 0),
            n._(this, "b", void 0);
          let t = (0, o.hsl2rgb)(e, a.DEFAULT_SATURATION, a.DEFAULT_LIGHTNESS);
          (this.r = new l.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new l.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new l.DynamicValue(t[2], t[2], 3e3));
        }
      }
      t.RGB = s;
    },
    61939: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0);
      class o {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            i = (n) => {
              this.requestId = requestAnimationFrame(i);
              let o = n - e;
              o >= t - 0.1 && ((e = n - (o % t)), this.render(o));
            };
          (this.isActive = !0), (this.requestId = requestAnimationFrame(i));
        }
        stop() {
          this.isActive &&
            ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
        constructor(e, t) {
          n._(this, "fps", void 0),
            n._(this, "render", void 0),
            n._(this, "isActive", !1),
            n._(this, "requestId", 0),
            (this.fps = e),
            (this.render = t);
        }
      }
      t.Ticker = o;
    },
    49198: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let o = i(26716),
        a = i(83664),
        l = i(47456),
        s = i(69407);
      class r {
        toValue(e) {
          return { value: e };
        }
        get width() {
          return Math.min(window.innerWidth * this.quality, 800);
        }
        get height() {
          let e = window.innerHeight / window.innerWidth;
          return Math.min(window.innerHeight * this.quality, 800 * e);
        }
        updatePlayingState(e) {
          (this.isPlaying = e),
            e
              ? (this.audioLowRatio.update(1),
                this.audioMiddleRatio.update(1),
                this.audioHighRatio.update(1))
              : (this.audioLowRatio.update(0),
                this.audioMiddleRatio.update(0),
                this.audioHighRatio.update(0));
        }
        updateColor(e, t) {
          this.color.update(e, t);
        }
        updateBackgroundColor(e) {
          this.background = new o.Vec3(e, e, e);
        }
        updateEnergy(e) {
          this.energy.update(e);
        }
        updateReactTop(e) {
          this.reactTop.update(e);
        }
        updateReactMiddle(e) {
          this.reactMiddle.update(e);
        }
        updateReactBottom(e) {
          this.reactBottom.update(e);
        }
        updateTime(e) {
          let t = (this.energy.value * e) / 1e3;
          this.time = (this.time + t) % 86400;
        }
        update(e, t) {
          if (
            (this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e),
            t)
          ) {
            let i = t.getAverageFrequencies({ low: 0, high: 250 }),
              n = t.getAverageFrequencies({ low: 500, high: 2e3 }),
              o = t.getAverageFrequencies({ low: 2e3, high: 4e3 });
            this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                i * this.audioLowRatio.value,
                n * this.audioMiddleRatio.value,
                o * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new o.Vec2(this.width, this.height)),
            vTime: this.toValue(this.time),
            vColorBackground: this.toValue(this.background),
            vColor: this.toValue(this.color.value),
            vRotation: this.toValue(this.rotation),
            vAudio: this.toValue(this.audio),
            vReact: this.toValue([
              this.reactTop.value,
              this.reactMiddle.value,
              this.reactBottom.value,
            ]),
            vInteractionPoint: this.toValue(this.point),
            vInteraction: this.toValue(this.interaction),
          };
        }
        constructor(e) {
          n._(this, "isPlaying", !1),
            n._(this, "quality", 0.6),
            n._(this, "background", new o.Vec3(0, 0, 0)),
            n._(
              this,
              "energy",
              new s.DynamicValue(a.DEFAULT_ENERGY, a.DEFAULT_ENERGY, 1e3),
            ),
            n._(this, "time", Math.floor(3600 * Math.random())),
            n._(this, "color", void 0),
            n._(this, "rotation", [
              new o.Vec3(-0.3, 0.3, 0.2),
              new o.Vec3(-0.3, -0.3, -0.2),
              new o.Vec3(-0.3, -0.3, 0.2),
            ]),
            n._(this, "audio", [0, 0, 0]),
            n._(this, "audioLowRatio", new s.DynamicValue(0, 0, 1e3)),
            n._(this, "audioMiddleRatio", new s.DynamicValue(0, 0, 1e3)),
            n._(this, "audioHighRatio", new s.DynamicValue(0, 0, 1e3)),
            n._(this, "reactTop", new s.DynamicValue(0, 0, 600)),
            n._(this, "reactMiddle", new s.DynamicValue(0, 0, 600)),
            n._(this, "reactBottom", new s.DynamicValue(0, 0, 600)),
            n._(this, "point", [0, 0]),
            n._(this, "interaction", 0),
            (this.color = new l.Color(e));
        }
      }
      t.Uniforms = r;
    },
    53367: function (e, t, i) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.Qz = t.WZ = t.kB = t.wX = void 0;
      var n = i(63955);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return n.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return n.adjustHue;
          },
        });
      var o = i(54098);
      Object.defineProperty(t, "WZ", {
        enumerable: !0,
        get: function () {
          return o.FrequencyAnalyzer;
        },
      }),
        Object.defineProperty(t, "Qz", {
          enumerable: !0,
          get: function () {
            return o.DumbAnalyzer;
          },
        });
      var a = i(19434);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return a.VibeAnimationRenderer;
        },
      });
      var l = i(98355);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return l.RenderState;
        },
      });
      var s = i(83664);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return s.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return s.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    52999: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 =
          "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n"),
        (t.FragmentShaderV2 =
          "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.55;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.55;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");
    },
    98355: function (e, t) {
      "use strict";
      var i, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((n = i || (t.RenderState = i = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (n.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (n.MANUAL = "MANUAL");
    },
    78918: function (e, t, i) {
      "use strict";
      i.d(t, {
        Pj: function () {
          return l.ReleaseNotesModal;
        },
        TF: function () {
          return a.TitleBar;
        },
        l7: function () {
          return u;
        },
        Yl: function () {
          return o;
        },
        F5: function () {
          return C;
        },
        Pt: function () {
          return m;
        },
        KZ: function () {
          return c;
        },
        vs: function () {
          return v.useApplicationDeeplinks;
        },
        Er: function () {
          return s.useApplicationUpdate;
        },
        Zw: function () {
          return _.useLaunch;
        },
        A4: function () {
          return h.usePlayerAction;
        },
        bO: function () {
          return d.useRefreshApplicationData;
        },
        Tk: function () {
          return r.useReleaseNotes;
        },
      });
      var n = i(63394);
      let o = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(n.BO.APPLICATION_READY);
      };
      i(44928);
      var a = i(91021),
        l = i(22485),
        s = i(46813),
        r = i(15291);
      let c = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(n.BO.RELEASE_NOTES_READY);
      };
      var d = i(64422);
      let u = () => {
          document.addEventListener("auxclick", (e) => e.preventDefault()),
            document.addEventListener("click", (e) => {
              (e.ctrlKey || e.metaKey) && e.preventDefault();
            });
        },
        m = (e) => {
          var t;
          let { isPlaying: i, canMoveBackward: o, canMoveForward: a } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(n.BO.PLAYER_STATE, {
              isPlaying: i,
              canMoveBackward: o,
              canMoveForward: a,
              status: e.status,
              track: e.track,
              progress: e.progress,
              availableActions: e.availableActions,
              actionsStore: e.actionsStore,
            });
        };
      var h = i(43215),
        v = i(27327),
        _ = i(17256);
      let C = (e) => {
        let t = e === n.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(n.BO.APPLICATION_THEME, t);
      };
    },
    44928: function (e, t, i) {
      "use strict";
      i.d(t, {
        N$: function () {
          return o;
        },
        eZ: function () {
          return l;
        },
        tX: function () {
          return a;
        },
      });
      var n = i(63394);
      let o = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BO.WINDOW_MINIMIZE);
        },
        a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BO.WINDOW_MAXIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BO.WINDOW_CLOSE);
        };
    },
    27327: function (e, t, i) {
      "use strict";
      i.d(t, {
        useApplicationDeeplinks: function () {
          return s;
        },
      });
      var n = i(74717),
        o = i(98639),
        a = i(63394);
      let l = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/album\/(.*)\/track\/(.*)$/,
            (e) => {
              var t;
              let i = (0, a.z)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, a.SZ)("/album/".concat(i))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        s = () => {
          let e = (0, n.useRouter)(),
            t = (0, o.useCallback)(
              (t, i) => {
                for (let [t, n] of l)
                  if (t.test(i)) {
                    e.push(n(i));
                    return;
                  }
                let n = (0, a.SZ)(i);
                n ? e.push(n) : e.push("/");
              },
              [e],
            );
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BO.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BO.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    46813: function (e, t, i) {
      "use strict";
      i.d(t, {
        useApplicationUpdate: function () {
          return v;
        },
      });
      var n = i(9753),
        o = i(98639),
        a = i(80542),
        l = i(63394),
        s = i(60836),
        r = i(39513),
        c = i(2570),
        d = i(67868),
        u = i(8544),
        m = i.n(u);
      let h = (e) => {
          let { version: t, formatMessage: i, closeToast: a } = e,
            u = (0, o.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(l.BO.INSTALL_UPDATE),
                null == a || a();
            }, [a]),
            h = (0, o.useMemo)(
              () =>
                (0, n.jsxs)("div", {
                  className: m().message,
                  children: [
                    (0, n.jsx)(c.Caption, {
                      className: m().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: i(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, n.jsx)(r.z, {
                      className: m().button,
                      onClick: u,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: i({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [i, u, t],
            );
          return (0, n.jsx)(d.Yj, {
            className: (0, s.W)(m().root, m().important),
            message: h,
          });
        },
        v = () => {
          let { formatMessage: e } = (0, a.Z)(),
            { notify: t } = (0, l.d$)(),
            i = (0, o.useRef)(""),
            s = (0, o.useCallback)(
              (o, a) => {
                i.current !== a &&
                  ((i.current = a),
                  t((0, n.jsx)(h, { formatMessage: e, version: a }), {
                    containerId: l.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, i, t],
            );
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BO.UPDATE_AVAILABLE, s),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BO.UPDATE_AVAILABLE, s);
              }
            );
          }, [s]);
        };
    },
    17256: function (e, t, i) {
      "use strict";
      i.d(t, {
        useLaunch: function () {
          return a;
        },
      });
      var n = i(98639),
        o = i(63394);
      let a = () => {
        let e = (0, o.sv)(),
          t = (0, n.useCallback)(() => {
            let t = (0, o.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(o.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(o.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    43215: function (e, t, i) {
      "use strict";
      i.d(t, {
        usePlayerAction: function () {
          return s;
        },
      });
      var n,
        o,
        a = i(98639),
        l = i(63394),
        eventPS = i(78918);
      ((n = o || (o = {})).PLAY = "PLAY"),
        (n.PAUSE = "PAUSE"),
        (n.TOGGLE_PLAY = "TOGGLE_PLAY"),
        (n.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (n.MOVE_FORWARD = "MOVE_FORWARD"),
        (n.TOGGLE_REPEAT = "TOGGLE_REPEAT"),
        (n.REPEAT_NONE = "REPEAT_NONE"),
        (n.REPEAT_CONTEXT = "REPEAT_CONTEXT"),
        (n.REPEAT_ONE = "REPEAT_ONE"),
        (n.TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE"),
        (n.TOGGLE_LIKE = "TOGGLE_LIKE"),
        (n.TOGGLE_DISLIKE = "TOGGLE_DISLIKE");
      let s = (e) => {
        let t = (0, a.useCallback)(
          (t, i) => {
            switch (i) {
              case o.PLAY:
              case o.PAUSE:
              case o.TOGGLE_PLAY:
                null == e || e.togglePause();
                break;
              case o.MOVE_BACKWARD:
                null == e || e.moveBackward();
                break;
              case o.MOVE_FORWARD:
                null == e || e.moveForward();
                break;
              case o.TOGGLE_REPEAT:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.toggleRepeat();
                break;
              case o.REPEAT_NONE:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "none",
                  );
                break;
              case o.REPEAT_CONTEXT:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "context",
                  );
                break;
              case o.REPEAT_ONE:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "one",
                  );
                break;
              case o.TOGGLE_SHUFFLE:
                null == e || e.toggleShuffle();
                break;
              case o.TOGGLE_LIKE: {
                console.log("triggered2");
                null == e ||
                  e.mainPlayback.contextController.entityFactory.likeStore.toggleTrackLike(
                    {
                      entityId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.state.queueState.currentEntity.value?.entity.entityData
                      .meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.mainPlayback.playbackState.queueState.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.queueState.shuffle.value,
                    isLiked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
              case o.TOGGLE_DISLIKE: {
                null == e ||
                  e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.toggleTrackDislike(
                    {
                      entityId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.mainPlayback.playbackState.queueState.currentEntity.value
                      ?.entity.entityData.meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.mainPlayback.playbackState.queueState.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.queueState.shuffle.value,
                    isLiked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
            }
          },
          [e],
        );
        (0, a.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BO.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BO.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    64422: function (e, t, i) {
      "use strict";
      i.d(t, {
        useRefreshApplicationData: function () {
          return l;
        },
      });
      var n = i(98639),
        o = i(21585),
        a = i(63394);
      let l = () => {
        let {
            library: e,
            collection: t,
            experiments: i,
            main: l,
            user: s,
          } = (0, a.oR)(),
          r = (0, n.useCallback)(() => {
            i.getData(),
              e.getData(),
              l.landing.isLoaded &&
                l.landing.getSkeleton(
                  { id: o.jB.WEB_MAIN, showWizard: s.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: o.jB.WEB_COLLECTION,
                    showWizard: s.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, i, e, l.landing, s.settings.showWizard]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BO.REFRESH_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BO.REFRESH_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    15291: function (e, t, i) {
      "use strict";
      i.d(t, {
        useReleaseNotes: function () {
          return a;
        },
      });
      var n = i(98639),
        o = i(63394);
      let a = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, o.oR)();
        (0, n.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(o.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(o.BO.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    22485: function (e, t, i) {
      "use strict";
      i.d(t, {
        ReleaseNotesModal: function () {
          return C;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(98639),
        s = i(80542),
        r = i(31014),
        c = i(89352),
        d = i(41055),
        u = i(2570),
        m = i(63394),
        h = i(6582),
        v = i.n(h);
      let _ = {
          ul: (e) =>
            (0, n.jsx)("ul", { className: v().description, children: e }),
          li: (e) => (0, n.jsx)("li", { className: v().item, children: e }),
          code: (e) => (0, n.jsx)("code", { className: v().code, children: e }),
          date: (e) => (0, n.jsx)("span", { className: v().date, children: e }),
          p: (e) => (0, n.jsx)("p", { className: v().paragraph, children: e }),
          br: (0, n.jsx)("br", {}),
        },
        C = (0, a.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: i },
            } = (0, m.oR)(),
            { formatMessage: a } = (0, s.Z)(),
            h = (0, l.useMemo)(() => (0, m.L)(t), [t]);
          return (0, n.jsx)(c.u, {
            title: a({ id: "desktop.release-notes-modal-title" }),
            open: i.isOpened,
            onOpenChange: i.onOpenChange,
            onClose: i.close,
            size: "fitContent",
            placement: "center",
            labelClose: a({ id: "interface-actions.close" }),
            className: v().root,
            headerClassName: v().modalHeader,
            contentClassName: v().modalContent,
            children: (0, n.jsx)(d.t, {
              className: (0, o.W)(v().scrollableContent, v().important),
              containerClassName: (0, o.W)(v().notes, v().important),
              children: h.map((e) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: v().note,
                    children: [
                      (0, n.jsx)(u.Heading, {
                        variant: "h4",
                        className: (0, o.W)(v().version, v().important),
                        children: (0, m.K7)(e),
                      }),
                      (0, n.jsx)(r.Z, { id: e, values: _ }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    91021: function (e, t, i) {
      "use strict";
      i.d(t, {
        TitleBar: function () {
          return h;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(98639),
        s = i(80542),
        r = i(63394),
        c = i(44928),
        d = i(84814),
        u = i.n(d);
      let m = (e) => {
          let {
            children: t,
            className: i,
            onClick: a,
            ariaLabel: l,
            withSecondaryColor: s,
          } = e;
          return (0, n.jsx)("button", {
            type: "button",
            className: (0, o.W)(
              u().button,
              { [u().button_withSecondaryColor]: s },
              i,
            ),
            onClick: a,
            "aria-label": l,
            children: t,
          });
        },
        h = (0, a.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            i = (0, r.Xf)() === r.t4.WINDOWS,
            { formatMessage: a } = (0, s.Z)(),
            d = (0, l.useCallback)(() => {
              (0, c.N$)();
            }, []),
            h = (0, l.useCallback)(() => {
              (0, c.tX)();
            }, []),
            v = (0, l.useCallback)(() => {
              (0, c.eZ)();
            }, []);
          return (0, n.jsx)("div", {
            className: u().root,
            onDoubleClick: h,
            children:
              i &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(m, {
                    onClick: d,
                    ariaLabel: a({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(m, {
                    onClick: h,
                    ariaLabel: a({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(m, {
                    className: u().closeButton,
                    onClick: v,
                    ariaLabel: a({ id: "windows-menu.close" }),
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
          });
        });
    },
    54050: function (e, t, i) {
      "use strict";
      i.d(t, {
        y5: function () {
          return o;
        },
        iX: function () {
          return p;
        },
        Cx: function () {
          return g;
        },
      });
      var n = i(98639);
      let o = (0, n.createContext)(null);
      var a = i(9753),
        l = i(9544),
        s = i(23881),
        r = i(84338),
        c = i(78507),
        d = i(30742),
        u = i(53367),
        m = i(63394);
      let h = (e) => {
        var t, i;
        let [o, a] = (0, n.useState)({}),
          { sonataState: l } = (0, m.oR)();
        (0, n.useEffect)(() => {
          if (l.contextType === r.Ak.Vibe) {
            var t, i, n, s;
            o.id ===
              (null === (t = l.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !o.isLiked &&
              (null === (s = l.entityMeta) || void 0 === s
                ? void 0
                : s.isLiked) &&
              e(),
              a({
                id: null === (i = l.entityMeta) || void 0 === i ? void 0 : i.id,
                isLiked:
                  null === (n = l.entityMeta) || void 0 === n
                    ? void 0
                    : n.isLiked,
              });
          }
        }, [
          l.contextType,
          null === (t = l.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (i = l.entityMeta) || void 0 === i ? void 0 : i.isLiked,
          o.id,
          o.isLiked,
          e,
        ]);
      };
      var v = i(11799),
        _ = i.n(v);
      let C = "vibe-animation",
        p = (0, l.Pi)((e) => {
          var t, i, l, v, p, g, f;
          let { className: x } = e,
            b = (0, n.useRef)(null),
            y = (0, n.useRef)(null),
            { isIntersecting: E } =
              null !== (f = (0, c.S1)([b])[C]) && void 0 !== f ? f : {},
            { sonataState: N, user: P } = (0, m.oR)(),
            { theme: A } = (0, m.Fg)(),
            S = (0, n.useContext)(o),
            L = N.status === d.Xz.PLAYING && N.contextType === r.Ak.Vibe;
          return (
            (0, n.useEffect)(() => {
              if (b.current && S) {
                var e, t;
                let i =
                    null === (t = N.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  n = P.collectionHue;
                (y.current = new u.dr(b.current, S, n)),
                  y.current.applySettings({ hue: i, collectionHue: n }),
                  b.current.classList.add(_().root_visible);
              }
              return () => {
                var e;
                null === (e = y.current) || void 0 === e || e.destroy();
              };
            }, []),
            (0, n.useEffect)(() => {
              var e, t, i, n, o, a, l, s;
              let r =
                  null === (t = N.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                c =
                  null === (n = N.entityMeta) || void 0 === n
                    ? void 0
                    : null === (i = n.trackParameters) || void 0 === i
                      ? void 0
                      : i.energy,
                d =
                  null === (a = N.entityMeta) || void 0 === a
                    ? void 0
                    : null === (o = a.trackParameters) || void 0 === o
                      ? void 0
                      : o.userCollectionHue;
              d && P.setUserCollectionHue(d),
                L
                  ? null === (l = y.current) ||
                    void 0 === l ||
                    l.playAnimation({ hue: r, collectionHue: d, energy: c })
                  : null === (s = y.current) ||
                    void 0 === s ||
                    s.idleAnimation();
            }, [
              P,
              L,
              null === (i = N.entityMeta) || void 0 === i
                ? void 0
                : null === (t = i.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (v = N.entityMeta) || void 0 === v
                ? void 0
                : null === (l = v.trackParameters) || void 0 === l
                  ? void 0
                  : l.energy,
              null === (g = N.entityMeta) || void 0 === g
                ? void 0
                : null === (p = g.trackParameters) || void 0 === p
                  ? void 0
                  : p.userCollectionHue,
            ]),
            (0, n.useEffect)(() => {
              var e;
              let t = A === m.Q2.Dark ? 0.0705 : 0.9607;
              null === (e = y.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [A]),
            (0, n.useEffect)(() => {
              if (y.current) {
                var e, t;
                E
                  ? null === (e = y.current) ||
                    void 0 === e ||
                    e.enableRender(u.nT.BLOCK_VISIBILITY)
                  : null === (t = y.current) ||
                    void 0 === t ||
                    t.disableRender(u.nT.BLOCK_VISIBILITY);
              }
            }, [E]),
            h(
              (0, n.useCallback)(() => {
                var e;
                null === (e = y.current) || void 0 === e || e.likeAnimation();
              }, []),
            ),
            (0, a.jsx)("div", {
              className: x,
              "data-intersection-property-id": C,
              ref: b,
              ...(0, s.BA)(s.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        g = (e) => {
          let t = (0, u.wX)((0, u.kB)(e), u.UE, u.TP),
            i = Math.round(255 * t[0]),
            n = Math.round(255 * t[1]),
            o = Math.round(255 * t[2]);
          return "rgb(".concat(i, ", ").concat(n, ", ").concat(o, ")");
        };
    },
    54267: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionAlbumsPage: function () {
          return D;
        },
      });
      var n,
        o,
        a = i(9753),
        l = i(9544),
        s = i(74717),
        r = i(98639),
        c = i(23881),
        d = i(14102),
        u = i(5293),
        m = i(63394);
      ((n = o || (o = {}))[(n.LIKED_ALBUMS = 0)] = "LIKED_ALBUMS"),
        (n[(n.UPCOMING_ALBUMS = 1)] = "UPCOMING_ALBUMS");
      var h = i(90515),
        v = i.n(h),
        _ = i(60836),
        C = i(80542),
        p = i(93490),
        g = i(67868),
        f = i(31014),
        x = i(2570),
        b = i(55784);
      let y = (e) => {
        let t = (0, m.m5)();
        return (0, r.useCallback)(
          (i) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, i), i)
            ) {
              case o.LIKED_ALBUMS:
                t("/collection/albums?tab=".concat(m.Gr.LIKED_ALBUMS));
                break;
              case o.UPCOMING_ALBUMS:
                t("/collection/albums?tab=".concat(m.Gr.UPCOMING_ALBUMS));
            }
          },
          [t, e],
        );
      };
      var E = i(72114),
        N = i.n(E),
        P = i(90679);
      let A = () =>
          (0, a.jsxs)("div", {
            className: N().tabsShimmer,
            children: [
              (0, a.jsx)(P.Shimmer, { className: N().tabShimmer }),
              (0, a.jsx)(P.Shimmer, { className: N().tabShimmer }),
            ],
          }),
        S = (0, l.Pi)((e) => {
          var t, i, n;
          let { tabsState: l, tabElementId: s } = e,
            { collection: c } = (0, m.oR)(),
            { formatMessage: d } = (0, C.Z)(),
            u = (0, m.k6)(),
            { isScrolling: h } = (0, r.useContext)(g.pI),
            v = y(l),
            _ = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            p = (0, r.useMemo)(() => {
              var e, t;
              return (
                null === (e = c.albums.upcomingAlbums) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(d({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = c.albums.upcomingAlbums) || void 0 === t
                        ? void 0
                        : t.length,
                    )
                : d({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums) || void 0 === t
                ? void 0
                : t.length,
              d,
            ]);
          return (0, a.jsxs)("header", {
            className: N().root,
            "aria-hidden": h,
            children: [
              (0, a.jsxs)("div", {
                className: N().container,
                children: [
                  u.canBack &&
                    (0, a.jsx)(b.n, {
                      withForwardControl: !1,
                      withBackwardControl: u.canBack,
                    }),
                  (0, a.jsx)(x.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: N().title,
                    children: (0, a.jsx)(f.Z, {
                      id: "entity-names.favourite-albums",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(g.no, {
                isShimmerVisible: c.albums.isLoading,
                shimmer: (0, a.jsx)(A, {}),
                className: N().tabs,
                elementId: s,
                ...l,
                onTabChange: v,
                children: [
                  (0, a.jsx)(g.OK, {
                    className: N().tab,
                    value: o.LIKED_ALBUMS,
                    title: _,
                    "aria-label": d(
                      { id: "entity-names.albums-count" },
                      { value: c.albums.items.length },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                  (0, a.jsx)(g.OK, {
                    className: N().tab,
                    value: o.UPCOMING_ALBUMS,
                    title: p,
                    "aria-label": d(
                      { id: "entity-names.upcoming-albums-count" },
                      {
                        value:
                          null !==
                            (n =
                              null === (i = c.albums.upcomingAlbums) ||
                              void 0 === i
                                ? void 0
                                : i.length) && void 0 !== n
                            ? n
                            : 0,
                      },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var L = i(5275),
        j = i.n(L);
      let k = (0, l.Pi)((e) => {
        var t, i, n;
        let { forwardRef: l, tabsState: s, tabElementId: c } = e,
          { user: u, collection: h } = (0, m.oR)(),
          { formatMessage: v } = (0, C.Z)(),
          f = (0, r.useCallback)(
            (e) => {
              u.account.uid &&
                h.albums.getData({
                  userId: u.account.uid,
                  metaType: "music",
                  page: e,
                  pageSize: 20,
                });
            },
            [h.albums, u.account.uid],
          ),
          x = (0, r.useMemo)(
            () => ({
              Header: () => (0, a.jsx)(S, { tabsState: s, tabElementId: c }),
              Footer: () => (0, a.jsx)(g.$_, { className: j().footer }),
            }),
            [c, s],
          );
        return (0, a.jsx)("div", {
          className: j().root,
          children: (0, a.jsx)(d.TabPanel, {
            value: s.value,
            name: o.LIKED_ALBUMS,
            elementId: c,
            className: j().tabPanel,
            children: (0, a.jsx)(g.Wv, {
              className: (0, _.W)(j().scrollContainer, j().important),
              customComponents: x,
              itemContentCallback: (e) => {
                var t;
                let i =
                    null === (t = h.albums.items) || void 0 === t
                      ? void 0
                      : t[e],
                  n = v(
                    { id: "loading-messages.entity-is-loading" },
                    { entityName: v({ id: "entity-names.album" }) },
                  );
                return i
                  ? (0, a.jsx)(p.rf, { album: i, contentLinesCount: 4 }, i.id)
                  : (0, a.jsx)(g.hi, { "aria-label": n });
              },
              totalCount:
                null !==
                  (i =
                    null === (t = h.albums.pager) || void 0 === t
                      ? void 0
                      : t.total) && void 0 !== i
                  ? i
                  : 0,
              onGetDataByPage: f,
              pageSize: 20,
              totalRequests:
                null !== (n = h.albums.requestsCount) && void 0 !== n ? n : 0,
              listClassName: j().content,
              itemClassName: j().item,
              handleRef: l,
              context: {
                listAriaLabel: v({ id: "collection.liked-albums-list" }),
              },
            }),
          }),
        });
      });
      var I = i(41055);
      let w = (0, l.Pi)((e) => {
        let { forwardRef: t, tabsState: i, tabElementId: n } = e,
          { collection: l } = (0, m.oR)(),
          { formatMessage: s } = (0, C.Z)(),
          c = (0, r.useMemo)(() => {
            var e;
            let t = s(
              { id: "loading-messages.entity-is-loading" },
              { entityName: s({ id: "entity-names.album" }) },
            );
            return l.albums.isUpcomingAlbumsLoading
              ? (0, a.jsx)(g.Wm, { isActive: !0, "aria-label": t })
              : null === (e = l.albums.upcomingAlbums) || void 0 === e
                ? void 0
                : e.map((e) => (0, a.jsx)(p.vK, { upcomingAlbum: e }, e.id));
          }, [l.albums.isUpcomingAlbumsLoading, l.albums.upcomingAlbums, s]);
        return (0, a.jsxs)(I.t, {
          className: j().root,
          containerClassName: (0, _.W)(j().scrollContainer, j().important),
          ref: t,
          children: [
            (0, a.jsx)(S, { tabsState: i, tabElementId: n }),
            (0, a.jsx)(d.TabPanel, {
              value: i.value,
              name: o.UPCOMING_ALBUMS,
              elementId: n,
              className: j().content,
              children: c,
            }),
            (0, a.jsx)(g.$_, { className: j().footer }),
          ],
        });
      });
      var R = i(28852),
        T = i(87294),
        O = i.n(T);
      let M = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            n = (0, r.useMemo)(() => {
              switch (t.value) {
                case o.LIKED_ALBUMS:
                  return (0, a.jsx)(f.Z, {
                    id: "error-messages.empty-collection-albums-title",
                  });
                case o.UPCOMING_ALBUMS:
                  return (0, a.jsx)(f.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-title",
                  });
              }
            }, [t.value]),
            l = (0, r.useMemo)(() => {
              switch (t.value) {
                case o.LIKED_ALBUMS:
                  return (0, a.jsx)(f.Z, {
                    id: "error-messages.empty-collection-albums-description",
                  });
                case o.UPCOMING_ALBUMS:
                  return (0, a.jsx)(f.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-description",
                  });
              }
            }, [t.value]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(S, { tabsState: t, tabElementId: i }),
              (0, a.jsxs)(d.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: O().root,
                children: [
                  (0, a.jsx)(R.J, {
                    className: O().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, a.jsx)(x.Heading, {
                    className: O().title,
                    variant: "h3",
                    size: "xs",
                    children: n,
                  }),
                  (0, a.jsx)(x.Caption, {
                    className: O().text,
                    variant: "span",
                    type: "controls",
                    size: "l",
                    weight: "normal",
                    children: l,
                  }),
                ],
              }),
            ],
          });
        }),
        B = (0, l.Pi)((e) => {
          var t, i, n;
          let { tabsState: l, tabElementId: s } = e,
            { collection: c } = (0, m.oR)(),
            { formatMessage: d } = (0, C.Z)(),
            { isScrolling: u } = (0, r.useContext)(g.pI),
            h = (0, m.k6)(),
            v = y(l),
            p = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            f = (0, r.useMemo)(() => {
              var e, t;
              return (
                null === (e = c.albums.upcomingAlbums) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(d({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = c.albums.upcomingAlbums) || void 0 === t
                        ? void 0
                        : t.length,
                    )
                : d({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums) || void 0 === t
                ? void 0
                : t.length,
              d,
            ]);
          return (0, a.jsx)(g.h4, {
            variant: "composite",
            staticClassName: (0, _.W)(N().staticHeader, N().important),
            "aria-hidden": !u,
            stickyClassName: (0, _.W)(N().stickyHeader, N().important),
            stickyChild: (0, a.jsxs)("div", {
              className: N().container,
              children: [
                h.canBack &&
                  (0, a.jsx)(b.n, {
                    withForwardControl: !1,
                    withBackwardControl: h.canBack,
                    buttonSize: "xs",
                  }),
                (0, a.jsxs)(g.no, {
                  isShimmerVisible: c.albums.isLoading,
                  shimmer: (0, a.jsx)(A, {}),
                  className: N().tabs,
                  elementId: s,
                  ...l,
                  onTabChange: v,
                  children: [
                    (0, a.jsx)(g.OK, {
                      className: N().tab,
                      value: o.LIKED_ALBUMS,
                      title: p,
                      "aria-label": d(
                        { id: "entity-names.albums-count" },
                        { value: c.albums.items.length },
                      ),
                      "aria-hidden": !u,
                      tabIndex: u ? 0 : -1,
                    }),
                    (0, a.jsx)(g.OK, {
                      className: N().tab,
                      value: o.UPCOMING_ALBUMS,
                      title: f,
                      "aria-label": d(
                        { id: "entity-names.upcoming-albums-count" },
                        {
                          value:
                            null !==
                              (n =
                                null === (i = c.albums.upcomingAlbums) ||
                                void 0 === i
                                  ? void 0
                                  : i.length) && void 0 !== n
                              ? n
                              : 0,
                        },
                      ),
                      "aria-hidden": !u,
                      tabIndex: u ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        D = (0, l.Pi)(() => {
          let e = (0, s.useSearchParams)(),
            { user: t, collection: i, experiments: n } = (0, m.oR)(),
            [l, h] = (0, u.zU)(),
            _ = n.checkExperiment(m.pe.WebNextDisableCollectionAlbums, "on"),
            C = n.checkExperiment(m.pe.WebNextDisableCollection, "on"),
            p = (0, r.useId)(),
            g = (0, r.useMemo)(() => {
              switch (e.get(m.wx.TAB)) {
                case m.Gr.LIKED_ALBUMS:
                  break;
                case m.Gr.UPCOMING_ALBUMS:
                  return o.UPCOMING_ALBUMS;
              }
              return o.LIKED_ALBUMS;
            }, [e]),
            f = (0, d.useTabsState)(g);
          if (
            (_ && C && (0, s.redirect)("/"),
            _ && (0, s.redirect)("/collection"),
            t.account.uid && i.albums.loadingState === m.Gu.IDLE)
          ) {
            let e = Promise.allSettled([
              i.albums.getData({
                userId: t.account.uid,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
              i.albums.getPresaves({ userId: t.account.uid }),
            ]);
            (0, r.use)(e);
          }
          (0, m.NO)(i.albums.loadingState === m.Gu.RESOLVE),
            (0, r.useEffect)(
              () => () => {
                i.albums.reset();
              },
              [i.albums],
            );
          let x = (0, r.useMemo)(() => {
            switch (f.value) {
              case o.LIKED_ALBUMS:
                if (i.albums.isAlbumsEmpty)
                  return (0, a.jsx)(M, { tabsState: f, tabElementId: p });
                return (0, a.jsx)(k, {
                  forwardRef: h,
                  tabsState: f,
                  tabElementId: p,
                });
              case o.UPCOMING_ALBUMS:
                if (i.albums.isUpcomingAlbumsEmpty)
                  return (0, a.jsx)(M, { tabsState: f, tabElementId: p });
                return (0, a.jsx)(w, {
                  forwardRef: h,
                  tabsState: f,
                  tabElementId: p,
                });
            }
          }, [i.albums.isAlbumsEmpty, i.albums.isUpcomingAlbumsEmpty, h, p, f]);
          return (0, a.jsx)(m.Lh, {
            pageId: m.Rh.OWN_ALBUMS,
            children: (0, a.jsx)(u.I7, {
              scrollElement: l,
              headerThreshold: 148,
              children: (0, a.jsxs)("div", {
                className: v().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_ALBUMS_PAGE),
                children: [(0, a.jsx)(B, { tabsState: f, tabElementId: p }), x],
              }),
            }),
          });
        });
    },
    25906: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionArtistsPage: function () {
          return g;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(2570),
        m = i(87908),
        h = i(5293),
        v = i(63394),
        _ = i(67868),
        C = i(18354),
        p = i.n(C);
      let g = (0, a.Pi)(() => {
        var e, t, i, a;
        let { user: C, collection: g, experiments: f } = (0, v.oR)(),
          { formatMessage: x } = (0, r.Z)(),
          [b, y] = (0, h.zU)(),
          E = (0, v.k6)(),
          N = f.checkExperiment(v.pe.WebNextDisableCollectionArtists, "on"),
          P = f.checkExperiment(v.pe.WebNextDisableCollection, "on");
        N && P && (0, l.redirect)("/"),
          N && (0, l.redirect)("/collection"),
          C.account.uid &&
            g.artists.loadingState === v.Gu.IDLE &&
            (0, s.use)(g.artists.getData({ userId: C.account.uid })),
          (0, v.NO)(g.artists.loadingState === v.Gu.RESOLVE),
          (0, s.useEffect)(
            () => () => {
              g.artists.reset();
            },
            [g.artists],
          );
        let A = (0, s.useCallback)(
            (e) => {
              C.account.uid &&
                g.artists.getData({
                  userId: C.account.uid,
                  page: e,
                  pageSize: 20,
                });
            },
            [g.artists, C.account.uid],
          ),
          S = (0, s.useMemo)(
            () => ({
              Footer: () => (0, n.jsx)(_.$_, { className: p().footer }),
            }),
            [],
          );
        return (0, n.jsx)(v.Lh, {
          pageId: v.Rh.OWN_ARTISTS,
          children: (0, n.jsx)(h.I7, {
            scrollElement: b,
            outerTitle: x({ id: "entity-names.artists" }),
            children: (0, n.jsxs)("div", {
              className: p().root,
              ...(0, d.BA)(d.Br.collection.COLLECTION_ARTISTS_PAGE),
              children: [
                (0, n.jsx)(_.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: E.canBack,
                  children: (0, n.jsx)(u.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(c.Z, { id: "entity-names.artists" }),
                  }),
                }),
                (0, n.jsx)(_.Wv, {
                  className: (0, o.W)(p().scrollContainer, p().important),
                  customComponents: S,
                  itemContentCallback: (e) => {
                    var t, i;
                    let o =
                        null === (i = g.artists) || void 0 === i
                          ? void 0
                          : null === (t = i.items) || void 0 === t
                            ? void 0
                            : t[e],
                      a = x(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: x({ id: "entity-names.artist" }) },
                      );
                    return o
                      ? (0, n.jsx)(
                          m.IT,
                          { artist: o, contentLinesCount: 3 },
                          o.id,
                        )
                      : (0, n.jsx)(_.hi, {
                          "aria-label": a,
                          round: !0,
                          centered: !0,
                        });
                  },
                  totalCount:
                    null !==
                      (i =
                        null === (t = g.artists) || void 0 === t
                          ? void 0
                          : null === (e = t.pager) || void 0 === e
                            ? void 0
                            : e.total) && void 0 !== i
                      ? i
                      : 0,
                  onGetDataByPage: A,
                  pageSize: 20,
                  totalRequests:
                    null !== (a = g.artists.requests) && void 0 !== a ? a : 0,
                  listClassName: p().content,
                  itemClassName: p().item,
                  handleRef: y,
                  context: {
                    listAriaLabel: x({ id: "collection.liked-artists-list" }),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    50971: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicLikedPage: function () {
          return f;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(98639),
        s = i(80542),
        r = i(31014),
        c = i(23881),
        d = i(2570),
        u = i(68106),
        m = i(93490),
        h = i(5293),
        v = i(63394),
        _ = i(67868),
        C = i(2554),
        p = i(80776),
        g = i.n(p);
      let f = (0, a.Pi)(() => {
        var e, t, i;
        let {
            user: a,
            collection: { nonMusicLiked: p },
          } = (0, v.oR)(),
          { formatMessage: f } = (0, s.Z)(),
          [x, b] = (0, h.zU)(),
          y = (0, v.k6)();
        a.account.uid &&
          p.loadingState === v.Gu.IDLE &&
          (0, l.use)(
            p.getData({
              userId: a.account.uid,
              metaType: "podcast",
              pageSize: 20,
            }),
          ),
          (0, v.NO)(p.isResolved);
        let E = (0, l.useCallback)(
          (e) => {
            a.account.uid &&
              p.getData({
                userId: a.account.uid,
                metaType: "podcast",
                page: e,
                pageSize: 20,
              });
          },
          [p, a.account.uid],
        );
        if (p.isRejected) return (0, n.jsx)(u.D, {});
        (0, l.useEffect)(
          () => () => {
            p.reset();
          },
          [p],
        );
        let N = (0, l.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(_.$_, { className: g().footer }) }),
          [],
        );
        return (0, n.jsx)(v.Lh, {
          pageId: v.Rh.OWN_PODCASTS,
          children: (0, n.jsx)(h.I7, {
            scrollElement: x,
            outerTitle: f({ id: "page.delayed-non-music" }),
            children: (0, n.jsxs)("div", {
              className: g().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_LIKED_PAGE),
              children: [
                (0, n.jsx)(_.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: y.canBack,
                  children: (0, n.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(r.Z, { id: "page.delayed-non-music" }),
                  }),
                }),
                p.isEmptyItems &&
                  !p.isRejected &&
                  (0, n.jsx)(C.u, { className: g().emptyBlock }),
                (0, n.jsx)(_.Wv, {
                  className: (0, o.W)(g().scrollContainer, g().important),
                  listClassName: g().content,
                  itemClassName: g().item,
                  customComponents: N,
                  itemContentCallback: (e) => {
                    var t;
                    let i =
                        null === (t = p.items) || void 0 === t ? void 0 : t[e],
                      o = f(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: f({ id: "entity-names.podcast" }) },
                      );
                    return i
                      ? (0, n.jsx)(
                          m.rf,
                          {
                            album: i,
                            contentLinesCount: 3,
                            withLikesCount: !0,
                            withAddition: !1,
                          },
                          i.id,
                        )
                      : (0, n.jsx)(_.hi, { "aria-label": o });
                  },
                  totalCount:
                    null !==
                      (t =
                        null === (e = p.pager) || void 0 === e
                          ? void 0
                          : e.total) && void 0 !== t
                      ? t
                      : 0,
                  onGetDataByPage: E,
                  pageSize: 20,
                  totalRequests:
                    null !== (i = p.requestsCount) && void 0 !== i ? i : 0,
                  handleRef: b,
                  context: {
                    listAriaLabel: f({ id: "collection.liked-non-music-list" }),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    2554: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return d;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(31014),
        l = i(28852),
        s = i(2570),
        r = i(18045),
        c = i.n(r);
      let d = (e) => {
        let { className: t } = e;
        return (0, n.jsxs)("div", {
          className: (0, o.W)(c().emptyContent, t),
          children: [
            (0, n.jsx)(l.J, {
              className: c().emptyContentIcon,
              size: "l",
              variant: "album",
            }),
            (0, n.jsx)(s.Heading, {
              className: c().emptyContentTitle,
              variant: "h3",
              size: "xs",
              children: (0, n.jsx)(a.Z, {
                id: "error-messages.empty-collection-podcasts-and-books",
              }),
            }),
          ],
        });
      };
    },
    20297: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicPage: function () {
          return b;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(98639),
        s = i(80542),
        r = i(31014),
        c = i(23881),
        d = i(41055),
        u = i(2570),
        m = i(68106),
        h = i(93490),
        v = i(5293),
        _ = i(63394),
        C = i(67868),
        p = i(66936),
        g = i(2554),
        f = i(19517),
        x = i.n(f);
      let b = (0, a.Pi)(() => {
        var e, t;
        let {
            user: i,
            collection: { nonMusicLiked: a, shelf: f },
          } = (0, _.oR)(),
          { formatMessage: b } = (0, s.Z)(),
          [y, E] = (0, v.zU)(),
          N = (0, _.k6)();
        if (
          (i.account.uid &&
            a.loadingState === _.Gu.IDLE &&
            (0, l.use)(
              a.getData({
                userId: i.account.uid,
                metaType: "podcast",
                pageSize: 10,
              }),
            ),
          (0, _.NO)(a.isResolved),
          a.isRejected && !f.hasLiked)
        )
          return (0, n.jsx)(m.D, {});
        (0, l.useEffect)(
          () => () => {
            a.reset(), f.reset();
          },
          [a, f],
        );
        let P = (0, l.useMemo)(() => {
            var e;
            return null === (e = a.items) || void 0 === e
              ? void 0
              : e.slice(0, 10).map((e, t) =>
                  e
                    ? (0, n.jsx)(
                        h.rf,
                        {
                          album: e,
                          contentLinesCount: 3,
                          withLikesCount: !0,
                          withAddition: !1,
                        },
                        null == e ? void 0 : e.id,
                      )
                    : (0, n.jsx)(C.hi, {}, "shimmer-".concat(t)),
                );
          }, [
            a.items,
            null === (e = a.items) || void 0 === e ? void 0 : e.length,
          ]),
          A = (0, l.useMemo)(() => {
            var e;
            return !a.isEmptyItems || a.isRejected || f.hasLiked
              ? a.isRejected ||
                (!(null === (e = a.items) || void 0 === e
                  ? void 0
                  : e.length) &&
                  a.requestsCount)
                ? null
                : (0, n.jsx)(C.HY, {
                    headerClassName: x().blockHeader,
                    containerClassName: x().carousel,
                    isShimmerVisible: a.isLoading,
                    isShimmerActive: !0,
                    title: b({ id: "page.delayed-non-music" }),
                    viewAllActionLink: "/collection/non-music/liked",
                    children: P,
                  })
              : (0, n.jsx)(g.u, {});
          }, [
            a.isLoading,
            b,
            P,
            a.isRejected,
            f.hasLiked,
            a.isEmptyItems,
            null === (t = a.items) || void 0 === t ? void 0 : t.length,
            a.requestsCount,
          ]);
        return (0, n.jsx)(_.Lh, {
          pageId: _.Rh.OWN_PODCASTS,
          children: (0, n.jsx)(v.I7, {
            scrollElement: y,
            outerTitle: b({ id: "page.podcasts-and-books" }),
            children: (0, n.jsxs)("div", {
              className: x().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_PAGE),
              children: [
                (0, n.jsx)(C.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: N.canBack,
                  children: (0, n.jsx)(u.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(r.Z, {
                      id: "page.podcasts-and-books",
                    }),
                  }),
                }),
                (0, n.jsx)(d.t, {
                  ref: E,
                  containerClassName: (0, o.W)(
                    x().scrollableContainer,
                    x().important,
                  ),
                  className: x().root,
                  children: (0, n.jsxs)("div", {
                    className: x().content,
                    children: [
                      A,
                      f.hasLiked &&
                        (0, n.jsx)(p.X, {
                          className: x().shelfBlock,
                          headerClassName: x().shelfBlockHeader,
                          itemsCount: 5,
                          withHeader: !0,
                        }),
                      (0, n.jsx)(C.$_, { className: x().footer }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      });
    },
    27539: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPage: function () {
          return y;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(21585),
        m = i(41055),
        h = i(2570),
        v = i(89102),
        _ = i(68106),
        C = i(5293),
        p = i(54050),
        g = i(63394),
        f = i(67868),
        x = i(23705),
        b = i.n(x);
      let y = (0, a.Pi)(() => {
        let { collection: e, user: t, experiments: i } = (0, g.oR)(),
          [a, x] = (0, C.zU)(),
          { formatMessage: y } = (0, r.Z)(),
          E = e.landing.loadingState !== g.Gu.REJECT && !!t.collectionHue;
        i.checkExperiment(g.pe.WebNextDisableCollection, "on") &&
          (0, l.redirect)("/"),
          e.landing.loadingState === g.Gu.IDLE &&
            (0, s.use)(
              e.landing.getSkeleton(
                { id: u.jB.WEB_COLLECTION, showWizard: t.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, g.NO)(e.landing.loadingState === g.Gu.RESOLVE);
        let N = (0, v._B)(e.landing),
          P = (0, s.useMemo)(
            () =>
              E && t.collectionHue
                ? { "--collection-color": (0, p.Cx)(t.collectionHue) }
                : null,
            [E, t.collectionHue],
          ),
          A = (0, s.useMemo)(
            () => ({
              color: (e) =>
                (0, n.jsx)(f.wx, {
                  title: y({ id: "collection.collection-color-title" }),
                  description: y({
                    id: "collection.collection-color-description",
                  }),
                  placement: "right",
                  children: (0, n.jsx)("span", {
                    className: b().collectionColor,
                    style: P,
                    children: e,
                  }),
                }),
            }),
            [P, y],
          );
        return (0, n.jsx)(g.Lh, {
          pageId: g.Rh.OWN_COLLECTION,
          children: (0, n.jsxs)(C.I7, {
            scrollElement: a,
            outerTitle: y({ id: "entity-names.collection" }),
            children: [
              (0, n.jsx)(f.h4, {
                variant: "text",
                showControls: !1,
                children: (0, n.jsxs)("div", {
                  className: b().header,
                  children: [
                    (0, n.jsx)(h.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.collection",
                      }),
                    }),
                    E &&
                      (0, n.jsx)(h.Caption, {
                        className: b().description,
                        variant: "div",
                        size: "m",
                        children: (0, n.jsx)(c.Z, {
                          id: "collection.collection-color",
                          values: A,
                        }),
                      }),
                  ],
                }),
              }),
              (0, n.jsxs)(m.t, {
                className: (0, o.W)(b().root, {
                  [b().root_withCollectionColor]: E,
                }),
                containerClassName: b().content,
                ref: x,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, o.W)(b().landing, {
                      [b().landing_onlyWizard]: N,
                    }),
                    ...(0, d.BA)(d.Br.collection.COLLECTION_PAGE),
                    children: (0, n.jsx)(v.Od, {
                      landing: e.landing,
                      errorComponent: (0, n.jsx)(_.D, {
                        className: b().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, n.jsx)(f.$_, { className: b().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    74680: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsCreatedPage: function () {
          return g;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(2570),
        m = i(5293),
        h = i(31579),
        v = i(63394),
        _ = i(67868),
        C = i(86479),
        p = i.n(C);
      let g = (0, a.Pi)(() => {
        var e, t, i;
        let {
            user: a,
            collection: { playlistsCreated: C },
            experiments: g,
          } = (0, v.oR)(),
          { formatMessage: f } = (0, r.Z)(),
          [x, b] = (0, m.zU)(),
          y = (0, v.k6)(),
          E = g.checkExperiment(
            v.pe.WebNextDisableCollectionCreatedPlaylists,
            "on",
          ),
          N = g.checkExperiment(v.pe.WebNextDisableCollection, "on");
        E && N && (0, l.redirect)("/"), E && (0, l.redirect)("/collection");
        let P = (0, s.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(_.$_, { className: p().footer }) }),
          [],
        );
        a.account.uid &&
          C.loadingState === v.Gu.IDLE &&
          (0, s.use)(
            C.getData({ userId: a.account.uid, page: 0, pageSize: 20 }),
          ),
          (0, v.NO)(C.loadingState === v.Gu.RESOLVE);
        let A = (0, s.useCallback)(
          (e) => {
            a.account.uid &&
              C.getData({ userId: a.account.uid, page: e, pageSize: 20 });
          },
          [C, a.account.uid],
        );
        return (
          (0, s.useEffect)(
            () => () => {
              C.reset();
            },
            [C],
          ),
          (0, n.jsx)(v.Lh, {
            pageId: v.Rh.OWN_PLAYLISTS,
            children: (0, n.jsx)(m.I7, {
              scrollElement: x,
              outerTitle: f({ id: "entity-names.my-playlists" }),
              children: (0, n.jsxs)("div", {
                className: p().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_CREATED_PAGE),
                children: [
                  (0, n.jsx)(_.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: y.canBack,
                    children: (0, n.jsx)(u.Heading, {
                      id: "collection-playlistsCreated-header",
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.my-playlists",
                      }),
                    }),
                  }),
                  (0, n.jsx)(_.Wv, {
                    className: (0, o.W)(p().scrollContainer, p().important),
                    customComponents: P,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == C
                            ? void 0
                            : null === (t = C.items) || void 0 === t
                              ? void 0
                              : t[e],
                        o = f(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: f({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, n.jsx)(
                            h.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, n.jsx)(_.hi, { "aria-label": o });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == C
                            ? void 0
                            : null === (e = C.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: A,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = C.requests) && void 0 !== i ? i : 0,
                    listClassName: p().content,
                    itemClassName: p().item,
                    handleRef: b,
                    context: {
                      listAriaLabel: f({
                        id: "collection.created-playlists-list",
                      }),
                    },
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    47139: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsLikedPage: function () {
          return f;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(21585),
        m = i(2570),
        h = i(5293),
        v = i(31579),
        _ = i(63394),
        C = i(67868),
        p = i(58953),
        g = i.n(p);
      let f = (0, a.Pi)(() => {
        var e, t, i;
        let {
            user: a,
            collection: { playlistsLiked: p },
            experiments: f,
          } = (0, _.oR)(),
          { formatMessage: x } = (0, r.Z)(),
          [b, y] = (0, h.zU)(),
          E = (0, _.k6)(),
          N = f.checkExperiment(
            _.pe.WebNextDisableCollectionLikedPlaylists,
            "on",
          ),
          P = f.checkExperiment(_.pe.WebNextDisableCollection, "on");
        N && P && (0, l.redirect)("/"), N && (0, l.redirect)("/collection");
        let A = (0, s.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(C.$_, { className: g().footer }) }),
          [],
        );
        a.account.uid &&
          p.loadingState === _.Gu.IDLE &&
          (0, s.use)(
            p.getData({
              userId: a.account.uid,
              sortOrder: u.As.DESC,
              metaType: "music",
              page: 0,
              pageSize: 20,
            }),
          ),
          (0, _.NO)(p.loadingState === _.Gu.RESOLVE);
        let S = (0, s.useCallback)(
          (e) => {
            a.account.uid &&
              p.getData({
                userId: a.account.uid,
                sortOrder: u.As.DESC,
                metaType: "music",
                page: e,
                pageSize: 20,
              });
          },
          [p, a.account.uid],
        );
        return (
          (0, s.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          ),
          (0, n.jsx)(_.Lh, {
            pageId: _.Rh.OWN_PLAYLISTS,
            children: (0, n.jsx)(h.I7, {
              scrollElement: b,
              outerTitle: x({ id: "entity-names.favourite-playlists" }),
              children: (0, n.jsxs)("div", {
                className: g().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_LIKED_PAGE),
                children: [
                  (0, n.jsx)(C.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: E.canBack,
                    children: (0, n.jsx)(m.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.favourite-playlists",
                      }),
                    }),
                  }),
                  (0, n.jsx)(C.Wv, {
                    className: (0, o.W)(g().scrollContainer, g().important),
                    customComponents: A,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == p
                            ? void 0
                            : null === (t = p.items) || void 0 === t
                              ? void 0
                              : t[e],
                        o = x(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: x({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, n.jsx)(
                            v.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, n.jsx)(C.hi, { "aria-label": o });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == p
                            ? void 0
                            : null === (e = p.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: S,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = p.requests) && void 0 !== i ? i : 0,
                    listClassName: g().content,
                    itemClassName: g().item,
                    handleRef: y,
                    context: {
                      listAriaLabel: x({
                        id: "collection.liked-playlists-list",
                      }),
                    },
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    35141: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsPage: function () {
          return z;
        },
      });
      var n,
        o,
        a = i(9753),
        l = i(9544),
        s = i(74717),
        r = i(98639),
        c = i(23881),
        d = i(21585),
        u = i(14102),
        m = i(5293),
        h = i(63394);
      ((n = o || (o = {}))[(n.CREATED = 0)] = "CREATED"),
        (n[(n.LIKED = 1)] = "LIKED");
      var v = i(55805),
        _ = i.n(v),
        C = i(60836),
        p = i(80542),
        g = i(31579),
        f = i(12090),
        x = i(67868),
        b = i(31014),
        y = i(2570),
        E = i(55784);
      let N = (e) => {
        let t = (0, h.m5)();
        return (0, r.useCallback)(
          (i) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, i), i)
            ) {
              case o.CREATED:
                t("/collection/playlists?tab=".concat(h.cU.CREATED));
                break;
              case o.LIKED:
                t("/collection/playlists?tab=".concat(h.cU.LIKED));
            }
          },
          [t, e],
        );
      };
      var P = i(56889),
        A = i.n(P),
        S = i(90679);
      let L = () =>
          (0, a.jsxs)("div", {
            className: A().tabsShimmer,
            children: [
              (0, a.jsx)(S.Shimmer, { className: A().tabShimmer }),
              (0, a.jsx)(S.Shimmer, { className: A().tabShimmer }),
            ],
          }),
        j = (0, l.Pi)((e) => {
          var t, i, n, l, s, c;
          let { tabsState: d, tabElementId: u } = e,
            {
              collection: { playlistsCreated: m, playlistsLiked: v },
            } = (0, h.oR)(),
            { formatMessage: _ } = (0, p.Z)(),
            C = (0, h.k6)(),
            { isScrolling: g } = (0, r.useContext)(x.pI),
            f = N(d),
            P = (0, r.useMemo)(() => {
              var e;
              return (null === (e = m.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      _({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(m.pager.total)
                : _({ id: "collection.your-created-playlists" });
            }, [_, null === (t = m.pager) || void 0 === t ? void 0 : t.total]),
            S = (0, r.useMemo)(() => {
              var e;
              return (null === (e = v.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(_({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(v.pager.total)
                : _({ id: "collection.your-liked-playlists" });
            }, [_, null === (i = v.pager) || void 0 === i ? void 0 : i.total]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("header", {
                className: A().root,
                "aria-hidden": g,
                children: (0, a.jsxs)("div", {
                  className: A().container,
                  children: [
                    C.canBack &&
                      (0, a.jsx)(E.n, {
                        withForwardControl: !1,
                        withBackwardControl: C.canBack,
                      }),
                    (0, a.jsx)(y.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      className: A().title,
                      children: (0, a.jsx)(b.Z, {
                        id: "entity-names.artist-playlist",
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(x.no, {
                isShimmerVisible: m.isLoading,
                shimmer: (0, a.jsx)(L, {}),
                className: A().staticTabs,
                elementId: u,
                ...d,
                onTabChange: f,
                children: [
                  (0, a.jsx)(x.OK, {
                    className: A().tab,
                    value: o.CREATED,
                    title: P,
                    "aria-label": _(
                      { id: "entity-names.created-playlists-count" },
                      {
                        value:
                          null !==
                            (s =
                              null === (n = m.pager) || void 0 === n
                                ? void 0
                                : n.total) && void 0 !== s
                            ? s
                            : 0,
                      },
                    ),
                    "aria-hidden": g,
                    tabIndex: g ? -1 : 0,
                  }),
                  (0, a.jsx)(x.OK, {
                    className: A().tab,
                    value: o.LIKED,
                    title: S,
                    "aria-label": _(
                      { id: "entity-names.liked-playlists-count" },
                      {
                        value:
                          null !==
                            (c =
                              null === (l = v.pager) || void 0 === l
                                ? void 0
                                : l.total) && void 0 !== c
                            ? c
                            : 0,
                      },
                    ),
                    "aria-hidden": g,
                    tabIndex: g ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var k = i(88788),
        I = i.n(k);
      let w = (0, l.Pi)((e) => {
          var t, i, n;
          let { forwardRef: l, tabsState: s, tabElementId: c } = e,
            {
              user: d,
              collection: { playlistsCreated: m },
            } = (0, h.oR)(),
            { formatMessage: v } = (0, p.Z)(),
            _ = (0, r.useMemo)(
              () => ({
                Header: () => (0, a.jsx)(j, { tabsState: s, tabElementId: c }),
                Footer: () => (0, a.jsx)(x.$_, { className: I().footer }),
              }),
              [c, s],
            ),
            b = (0, r.useCallback)(
              (e) => {
                d.account.uid &&
                  m.getData({ userId: d.account.uid, page: e, pageSize: 20 });
              },
              [m, d.account.uid],
            ),
            y =
              (null !==
                (i =
                  null === (t = m.pager) || void 0 === t ? void 0 : t.total) &&
              void 0 !== i
                ? i
                : 0) + 1;
          return (0, a.jsx)("div", {
            className: I().root,
            children: (0, a.jsx)(u.TabPanel, {
              value: s.value,
              name: o.CREATED,
              elementId: c,
              className: I().tabPanel,
              children: (0, a.jsx)(x.Wv, {
                className: (0, C.W)(I().scrollContainer, I().important),
                customComponents: _,
                itemContentCallback: (e) => {
                  var t;
                  if (0 === e) return (0, a.jsx)(f.lN, {});
                  let i =
                      null == m
                        ? void 0
                        : null === (t = m.items) || void 0 === t
                          ? void 0
                          : t[e - 1],
                    n = v(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: v({ id: "entity-names.playlist" }) },
                    );
                  return i
                    ? (0, a.jsx)(
                        g.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, a.jsx)(x.hi, { "aria-label": n });
                },
                totalCount: y,
                onGetDataByPage: b,
                pageSize: 20,
                totalRequests:
                  null !== (n = m.requests) && void 0 !== n ? n : 0,
                listClassName: I().content,
                itemClassName: I().item,
                handleRef: l,
                context: {
                  listAriaLabel: v({ id: "collection.created-playlists-list" }),
                },
              }),
            }),
          });
        }),
        R = (0, l.Pi)((e) => {
          var t, i, n;
          let { forwardRef: l, tabsState: s, tabElementId: c } = e,
            {
              user: m,
              collection: { playlistsLiked: v },
            } = (0, h.oR)(),
            { formatMessage: _ } = (0, p.Z)(),
            f = (0, r.useCallback)(
              (e) => {
                m.account.uid &&
                  v.getData({
                    userId: m.account.uid,
                    sortOrder: d.As.DESC,
                    metaType: "music",
                    page: e,
                    pageSize: 20,
                  });
              },
              [v, m.account.uid],
            ),
            b = (0, r.useMemo)(
              () => ({
                Header: () => (0, a.jsx)(j, { tabsState: s, tabElementId: c }),
                Footer: () => (0, a.jsx)(x.$_, { className: I().footer }),
              }),
              [c, s],
            );
          return (0, a.jsx)("div", {
            className: I().root,
            children: (0, a.jsx)(u.TabPanel, {
              value: s.value,
              name: o.LIKED,
              elementId: c,
              className: I().tabPanel,
              children: (0, a.jsx)(x.Wv, {
                className: (0, C.W)(I().scrollContainer, I().important),
                customComponents: b,
                itemContentCallback: (e) => {
                  var t;
                  let i =
                      null == v
                        ? void 0
                        : null === (t = v.items) || void 0 === t
                          ? void 0
                          : t[e],
                    n = _(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: _({ id: "entity-names.playlist" }) },
                    );
                  return i
                    ? (0, a.jsx)(
                        g.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, a.jsx)(x.hi, { "aria-label": n });
                },
                totalCount:
                  null !==
                    (i =
                      null == v
                        ? void 0
                        : null === (t = v.pager) || void 0 === t
                          ? void 0
                          : t.total) && void 0 !== i
                    ? i
                    : 0,
                onGetDataByPage: f,
                pageSize: 20,
                totalRequests:
                  null !== (n = v.requests) && void 0 !== n ? n : 0,
                listClassName: I().content,
                itemClassName: I().item,
                handleRef: l,
                context: {
                  listAriaLabel: _({ id: "collection.liked-playlists-list" }),
                },
              }),
            }),
          });
        });
      var T = i(28852),
        O = i(71245),
        M = i.n(O);
      let B = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(j, { tabsState: t, tabElementId: i }),
              (0, a.jsxs)(u.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: M().root,
                children: [
                  (0, a.jsx)(T.J, {
                    className: M().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, a.jsx)(y.Heading, {
                    className: M().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, a.jsx)(b.Z, {
                      id: "error-messages.empty-collection-liked-playlists",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        D = (0, l.Pi)((e) => {
          var t, i, n, l, s, c;
          let { tabsState: d, tabElementId: u } = e,
            {
              collection: { playlistsCreated: m, playlistsLiked: v },
            } = (0, h.oR)(),
            { formatMessage: _ } = (0, p.Z)(),
            { isScrolling: g } = (0, r.useContext)(x.pI),
            f = (0, h.k6)(),
            b = N(d),
            y = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = m.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      _({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(
                      null === (t = m.pager) || void 0 === t ? void 0 : t.total,
                    )
                : _({ id: "collection.your-created-playlists" });
            }, [_, null === (t = m.pager) || void 0 === t ? void 0 : t.total]),
            P = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = v.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(_({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(
                      null === (t = v.pager) || void 0 === t ? void 0 : t.total,
                    )
                : _({ id: "collection.your-liked-playlists" });
            }, [_, null === (i = v.pager) || void 0 === i ? void 0 : i.total]);
          return (0, a.jsx)(x.h4, {
            variant: "composite",
            staticClassName: (0, C.W)(A().staticHeader, A().important),
            "aria-hidden": !g,
            stickyClassName: (0, C.W)(A().stickyHeader, A().important),
            stickyChild: (0, a.jsxs)("div", {
              className: A().container,
              children: [
                f.canBack &&
                  (0, a.jsx)(E.n, {
                    withForwardControl: !1,
                    withBackwardControl: f.canBack,
                    buttonSize: "xs",
                  }),
                (0, a.jsxs)(x.no, {
                  isShimmerVisible: m.isLoading,
                  shimmer: (0, a.jsx)(L, {}),
                  className: A().stickyTabs,
                  elementId: u,
                  ...d,
                  onTabChange: b,
                  children: [
                    (0, a.jsx)(x.OK, {
                      className: A().tab,
                      value: o.CREATED,
                      title: y,
                      "aria-label": _(
                        { id: "entity-names.created-playlists-count" },
                        {
                          value:
                            null !==
                              (s =
                                null === (n = m.pager) || void 0 === n
                                  ? void 0
                                  : n.total) && void 0 !== s
                              ? s
                              : 0,
                        },
                      ),
                      "aria-hidden": !g,
                      tabIndex: g ? 0 : -1,
                    }),
                    (0, a.jsx)(x.OK, {
                      className: A().tab,
                      value: o.LIKED,
                      title: P,
                      "aria-label": _(
                        { id: "entity-names.liked-playlists-count" },
                        {
                          value:
                            null !==
                              (c =
                                null === (l = v.pager) || void 0 === l
                                  ? void 0
                                  : l.total) && void 0 !== c
                              ? c
                              : 0,
                        },
                      ),
                      "aria-hidden": !g,
                      tabIndex: g ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        z = (0, l.Pi)(() => {
          let e = (0, s.useSearchParams)(),
            {
              user: t,
              collection: { playlistsCreated: i, playlistsLiked: n },
              experiments: l,
            } = (0, h.oR)(),
            [v, C] = (0, m.zU)(),
            p = l.checkExperiment(h.pe.WebNextDisableCollection, "on"),
            g = (0, r.useId)(),
            f = (0, r.useMemo)(() => {
              switch (e.get(h.wx.TAB)) {
                case h.cU.CREATED:
                  break;
                case h.cU.LIKED:
                  return o.LIKED;
              }
              return o.CREATED;
            }, [e]),
            x = (0, u.useTabsState)(f);
          if (
            (p && (0, s.redirect)("/"),
            t.account.uid && i.loadingState === h.Gu.IDLE)
          ) {
            let e = Promise.allSettled([
              i.getData({ userId: t.account.uid, page: 0, pageSize: 20 }),
              n.getData({
                userId: t.account.uid,
                sortOrder: d.As.DESC,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
            ]);
            (0, r.use)(e);
          }
          (0, h.NO)(i.loadingState === h.Gu.RESOLVE),
            (0, r.useEffect)(
              () => () => {
                i.reset(), n.reset();
              },
              [i, n],
            );
          let b = (0, r.useMemo)(() => {
            switch (x.value) {
              case o.CREATED:
                return (0, a.jsx)(w, {
                  forwardRef: C,
                  tabsState: x,
                  tabElementId: g,
                });
              case o.LIKED:
                if (n.isEmpty)
                  return (0, a.jsx)(B, { tabsState: x, tabElementId: g });
                return (0, a.jsx)(R, {
                  forwardRef: C,
                  tabsState: x,
                  tabElementId: g,
                });
            }
          }, [C, n.isEmpty, g, x]);
          return (0, a.jsx)(h.Lh, {
            pageId: h.Rh.OWN_PLAYLISTS,
            children: (0, a.jsx)(m.I7, {
              scrollElement: v,
              headerThreshold: 148,
              children: (0, a.jsxs)("div", {
                className: _().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_PLAYLISTS_PAGE),
                children: [(0, a.jsx)(D, { tabsState: x, tabElementId: g }), b],
              }),
            }),
          });
        });
    },
    66936: function (e, t, i) {
      "use strict";
      i.d(t, {
        X: function () {
          return v;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(98639),
        s = i(84338),
        r = i(23194),
        c = i(23472),
        d = i(63394),
        u = i(47041),
        m = i(33859),
        h = i.n(m);
      let v = (0, a.Pi)((e) => {
        var t;
        let {
            className: i,
            itemsCount: a,
            withHeader: m,
            headerClassName: v,
          } = e,
          {
            sonataState: _,
            collection: {
              shelf: { liked: C },
            },
          } = (0, d.oR)();
        C.loadingState === d.Gu.IDLE && (0, l.use)(C.getData());
        let p = (0, l.useMemo)(() => {
          var e;
          return null === (e = C.entities) || void 0 === e
            ? void 0
            : e.map((e) =>
                (0, n.jsx)(
                  c.N6,
                  {
                    track: e.track,
                    playContextParams: {
                      contextData: {
                        type: s.Ak.Album,
                        meta: {
                          id: e.track.albumId ? Number(e.track.albumId) : 0,
                        },
                        from: C.typeForFrom || "",
                      },
                      queueParams: { entityId: e.track.id },
                      loadContextMeta: !1,
                      entitiesData: _.unloadedEntitiesDataFromModels,
                    },
                    withPodcastName: !0,
                  },
                  "".concat(e.track.id, ":").concat(e.track.albumId),
                ),
              );
        }, [C.entities, C.typeForFrom, _.unloadedEntitiesDataFromModels]);
        return C.isLoading
          ? (0, n.jsx)(u.D, { className: i, withHeader: m })
          : m
            ? (0, n.jsx)(r.KN, {
                className: i,
                headerClassName: (0, o.W)(h().header, v),
                isLoading: C.isLoading,
                title: null !== (t = C.title) && void 0 !== t ? t : "",
                maxColumns: 1,
                itemsPerColumn: a,
                viewAllAction: "/collection/shelf/liked",
                showControls: !0,
                children: p,
              })
            : (0, n.jsx)("div", { className: i, children: p });
      });
    },
    91077: function (e, t, i) {
      "use strict";
      i.d(t, {
        c: function () {
          return C;
        },
      });
      var n = i(9753),
        o = i(60836),
        a = i(9544),
        l = i(98639),
        s = i(23194),
        r = i(23472),
        c = i(63394),
        d = i(84338),
        u = i(21585);
      let m = (e, t) => {
        var i, n;
        return e.type === u.lp.ALBUM
          ? {
              type: d.Ak.Album,
              meta: {
                id:
                  (null === (n = e.album) || void 0 === n ? void 0 : n.id) || 0,
              },
              from: t || "",
            }
          : {
              type: d.Ak.Playlist,
              meta: {
                id:
                  (null === (i = e.playlist) || void 0 === i ? void 0 : i.id) ||
                  "",
              },
              from: t || "",
            };
      };
      var h = i(47041),
        v = i(25575),
        _ = i.n(v);
      let C = (0, a.Pi)((e) => {
        var t;
        let {
            className: i,
            itemsCount: a,
            withHeader: d,
            headerClassName: u,
          } = e,
          {
            sonataState: v,
            collection: {
              shelf: { recentlyPlayed: C },
            },
          } = (0, c.oR)();
        C.loadingState === c.Gu.IDLE && (0, l.use)(C.getData());
        let p = (0, l.useMemo)(() => {
          var e;
          return null === (e = C.entities) || void 0 === e
            ? void 0
            : e.map((e, t) => {
                let i = m(e, C.typeForFrom);
                return (0, n.jsx)(
                  r.N6,
                  {
                    track: e.track,
                    playContextParams: {
                      contextData: i,
                      queueParams: { entityId: e.track.id },
                      loadContextMeta: !1,
                      entitiesData: v.unloadedEntitiesDataFromModels,
                    },
                    withPodcastName: !0,
                  },
                  t,
                );
              });
        }, [C.entities, C.typeForFrom, v.unloadedEntitiesDataFromModels]);
        return C.isLoading
          ? (0, n.jsx)(h.D, { className: i, withHeader: d })
          : d
            ? (0, n.jsx)(s.KN, {
                className: i,
                headerClassName: (0, o.W)(_().header, u),
                isLoading: C.isLoading,
                title: null !== (t = C.title) && void 0 !== t ? t : "",
                maxColumns: 1,
                itemsPerColumn: a,
                viewAllAction: "/collection/shelf/recently-played",
                showControls: !0,
                children: p,
              })
            : (0, n.jsx)("div", { className: i, children: p });
      });
    },
    47041: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return u;
        },
      });
      var n = i(9753),
        o = i(9544),
        a = i(90679),
        l = i(63394),
        s = i(67868),
        r = i(84748),
        c = i.n(r);
      let d = () =>
          Array.from({ length: 5 }, (e) =>
            (0, n.jsx)(
              s.DX,
              { variant: l.Lx.PLAYLIST, className: c().track, isActive: !0 },
              e,
            ),
          ),
        u = (0, o.Pi)((e) => {
          let { className: t, withHeader: i } = e;
          return (0, n.jsxs)("div", {
            className: t,
            children: [
              i &&
                (0, n.jsx)(a.Shimmer, {
                  radius: "l",
                  width: 100,
                  height: 24,
                  className: c().title,
                  isActive: !0,
                }),
              (0, n.jsx)(d, {}),
            ],
          });
        });
    },
    77855: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfLikedPage: function () {
          return g;
        },
      });
      var n = i(9753),
        o = i(9544),
        a = i(98639),
        l = i(80542),
        s = i(31014),
        r = i(23881),
        c = i(41055),
        d = i(2570),
        u = i(68106),
        m = i(5293),
        h = i(63394),
        v = i(67868),
        _ = i(66936),
        C = i(33604),
        p = i.n(C);
      let g = (0, o.Pi)(() => {
        let {
            collection: {
              shelf: { liked: e },
            },
          } = (0, h.oR)(),
          [t, i] = (0, m.zU)(),
          { formatMessage: o } = (0, l.Z)(),
          C = (0, h.k6)();
        return ((0, a.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NO)(e.isResolved),
        e.isRejected)
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: o({ id: "podcast.shelf-liked-title" }),
              children: [
                (0, n.jsx)(v.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, n.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(s.Z, {
                      id: "podcast.shelf-liked-title",
                    }),
                  }),
                }),
                (0, n.jsxs)(c.t, {
                  ref: i,
                  containerClassName: p().scrollableContainer,
                  className: p().root,
                  ...(0, r.BA)(r.Br.collection.COLLECTION_SHELF_LIKED_PAGE),
                  children: [
                    (0, n.jsx)(_.X, {}),
                    (0, n.jsx)(v.$_, { className: p().footer }),
                  ],
                }),
              ],
            });
      });
    },
    55742: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfPage: function () {
          return f;
        },
      });
      var n = i(9753),
        o = i(9544),
        a = i(98639),
        l = i(80542),
        s = i(31014),
        r = i(23881),
        c = i(41055),
        d = i(2570),
        u = i(68106),
        m = i(5293),
        h = i(63394),
        v = i(67868),
        _ = i(66936),
        C = i(91077),
        p = i(62876),
        g = i.n(p);
      let f = (0, o.Pi)(() => {
        let {
            collection: { shelf: e },
          } = (0, h.oR)(),
          [t, i] = (0, m.zU)(),
          { formatMessage: o } = (0, l.Z)(),
          p = (0, h.k6)();
        return ((0, a.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NO)(e.isResolved),
        e.isRejected)
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: o({ id: "page.shelf" }),
              children: [
                (0, n.jsx)(v.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: p.canBack,
                  children: (0, n.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(s.Z, { id: "page.shelf" }),
                  }),
                }),
                (0, n.jsx)(c.t, {
                  ref: i,
                  containerClassName: g().scrollableContainer,
                  className: g().root,
                  ...(0, r.BA)(r.Br.collection.COLLECTION_SHELF_PAGE),
                  children: (0, n.jsxs)("div", {
                    className: g().content,
                    children: [
                      e.hasRecentlyPlayed &&
                        (0, n.jsx)(C.c, {
                          className: g().block,
                          headerClassName: g().blockHeader,
                          itemsCount: 5,
                          withHeader: !0,
                        }),
                      e.hasLiked &&
                        (0, n.jsx)(_.X, {
                          className: g().block,
                          headerClassName: g().blockHeader,
                          itemsCount: 5,
                          withHeader: !0,
                        }),
                      (0, n.jsx)(v.$_, { className: g().footer }),
                    ],
                  }),
                }),
              ],
            });
      });
    },
    69069: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfRecentlyPlayedPage: function () {
          return g;
        },
      });
      var n = i(9753),
        o = i(9544),
        a = i(98639),
        l = i(80542),
        s = i(31014),
        r = i(23881),
        c = i(41055),
        d = i(2570),
        u = i(68106),
        m = i(5293),
        h = i(63394),
        v = i(67868),
        _ = i(91077),
        C = i(16389),
        p = i.n(C);
      let g = (0, o.Pi)(() => {
        let {
            collection: {
              shelf: { recentlyPlayed: e },
            },
          } = (0, h.oR)(),
          [t, i] = (0, m.zU)(),
          { formatMessage: o } = (0, l.Z)(),
          C = (0, h.k6)();
        return ((0, a.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NO)(e.isResolved),
        e.isRejected)
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: o({ id: "podcast.shelf-recently-played-title" }),
              children: [
                (0, n.jsx)(v.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, n.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, n.jsx)(s.Z, {
                      id: "podcast.shelf-recently-played-title",
                    }),
                  }),
                }),
                (0, n.jsxs)(c.t, {
                  ref: i,
                  containerClassName: p().scrollableContainer,
                  className: p().root,
                  ...(0, r.BA)(
                    r.Br.collection.COLLECTION_SHELF_RECENTLY_PLAYED_PAGE,
                  ),
                  children: [
                    (0, n.jsx)(_.c, {}),
                    (0, n.jsx)(v.$_, { className: p().footer }),
                  ],
                }),
              ],
            });
      });
    },
    8544: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    6582: function (e) {
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
    84814: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    11799: function (e) {
      e.exports = {
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    90515: function (e) {
      e.exports = { root: "CollectionAlbumsPage_root__qMtcC" };
    },
    5275: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageContent_root__2Ya18",
        scrollContainer: "CollectionAlbumsPageContent_scrollContainer__0TjJm",
        important: "CollectionAlbumsPageContent_important__fixM8",
        content: "CollectionAlbumsPageContent_content__jcwRU",
        footer: "CollectionAlbumsPageContent_footer__ZkUKY",
        item: "CollectionAlbumsPageContent_item__I_Wuz",
        tabPanel: "CollectionAlbumsPageContent_tabPanel__0qXKZ",
      };
    },
    87294: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageEmpty_root__7yn1F",
        icon: "CollectionAlbumsPageEmpty_icon__XFf9x",
        title: "CollectionAlbumsPageEmpty_title__hMQde",
        text: "CollectionAlbumsPageEmpty_text__jp_lj",
      };
    },
    72114: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageHeader_root__87L_c",
        container: "CollectionAlbumsPageHeader_container__96cIo",
        title: "CollectionAlbumsPageHeader_title__1Ps8d",
        tabs: "CollectionAlbumsPageHeader_tabs__P4GTY",
        tab: "CollectionAlbumsPageHeader_tab__JSFBc",
        tabsShimmer: "CollectionAlbumsPageHeader_tabsShimmer__fGlR0",
        tabShimmer: "CollectionAlbumsPageHeader_tabShimmer__9hCc6",
        staticHeader: "CollectionAlbumsPageHeader_staticHeader__YNfX4",
        important: "CollectionAlbumsPageHeader_important__0dgC2",
        stickyHeader: "CollectionAlbumsPageHeader_stickyHeader__L_1IS",
      };
    },
    18354: function (e) {
      e.exports = {
        root: "CollectionArtistsPage_root__EH25F",
        container: "CollectionArtistsPage_container__mNUIo",
        scrollContent: "CollectionArtistsPage_scrollContent__CSeYr",
        scrollContainer: "CollectionArtistsPage_scrollContainer__tT6NQ",
        important: "CollectionArtistsPage_important__MG_XV",
        footer: "CollectionArtistsPage_footer__aZrx3",
        item: "CollectionArtistsPage_item___cy_9",
        content: "CollectionArtistsPage_content__Jd9hE",
      };
    },
    80776: function (e) {
      e.exports = {
        root: "CollectionNonMusicLikedPage_root__0e_hz",
        scrollContent: "CollectionNonMusicLikedPage_scrollContent__ThdnN",
        scrollContainer: "CollectionNonMusicLikedPage_scrollContainer__OthtN",
        important: "CollectionNonMusicLikedPage_important__MNJX3",
        footer: "CollectionNonMusicLikedPage_footer__F_mtD",
        item: "CollectionNonMusicLikedPage_item__Rb0yS",
        emptyBlock: "CollectionNonMusicLikedPage_emptyBlock__WAdri",
        content: "CollectionNonMusicLikedPage_content__9WDX5",
      };
    },
    18045: function (e) {
      e.exports = {
        emptyContent: "CollectionNonMusicEmpty_emptyContent__Km4Xo",
        emptyContentIcon: "CollectionNonMusicEmpty_emptyContentIcon__ZHVte",
        emptyContentTitle: "CollectionNonMusicEmpty_emptyContentTitle__PJIFd",
      };
    },
    19517: function (e) {
      e.exports = {
        root: "CollectionNonMusicPage_root__U6DRX",
        scrollableContainer:
          "CollectionNonMusicPage_scrollableContainer__iIZvl",
        important: "CollectionNonMusicPage_important__Y9D5x",
        content: "CollectionNonMusicPage_content__d8E7R",
        carousel: "CollectionNonMusicPage_carousel__zDCY0",
        blockHeader: "CollectionNonMusicPage_blockHeader__PoAFY",
        footer: "CollectionNonMusicPage_footer__9feIA",
        shelfBlock: "CollectionNonMusicPage_shelfBlock__gC5Vu",
        shelfBlockHeader: "CollectionNonMusicPage_shelfBlockHeader__yfFcf",
      };
    },
    23705: function (e) {
      e.exports = {
        root: "CollectionPage_root__CZAxL",
        root_withCollectionColor:
          "CollectionPage_root_withCollectionColor__4kV02",
        content: "CollectionPage_content__c3f8z",
        header: "CollectionPage_header__z193s",
        description: "CollectionPage_description__A3dny",
        collectionColor: "CollectionPage_collectionColor__M5l1f",
        landing: "CollectionPage_landing__B4jW_",
        landing_onlyWizard: "CollectionPage_landing_onlyWizard__umeEK",
        footer: "CollectionPage_footer__9kzD0",
        footer_onlyWizard: "CollectionPage_footer_onlyWizard__FxCwa",
        error: "CollectionPage_error__xs4ZH",
      };
    },
    86479: function (e) {
      e.exports = {
        root: "CollectionPlaylistsCreatedPage_root__o77CF",
        scrollContainer:
          "CollectionPlaylistsCreatedPage_scrollContainer__Spb2M",
        important: "CollectionPlaylistsCreatedPage_important__DLkOq",
        content: "CollectionPlaylistsCreatedPage_content___qalr",
        footer: "CollectionPlaylistsCreatedPage_footer__I2jJa",
        item: "CollectionPlaylistsCreatedPage_item__2RmBg",
      };
    },
    58953: function (e) {
      e.exports = {
        root: "CollectionPlaylistsLikedPage_root__ZyIwA",
        scrollContainer: "CollectionPlaylistsLikedPage_scrollContainer__H_vPA",
        important: "CollectionPlaylistsLikedPage_important__GjYTU",
        content: "CollectionPlaylistsLikedPage_content__WIxhp",
        footer: "CollectionPlaylistsLikedPage_footer__A60Ui",
        item: "CollectionPlaylistsLikedPage_item__PpCht",
      };
    },
    55805: function (e) {
      e.exports = { root: "CollectionPlaylistsPage_root__1QnBw" };
    },
    88788: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageContent_root__hGnWW",
        scrollContainer:
          "CollectionPlaylistsPageContent_scrollContainer__fiLLm",
        important: "CollectionPlaylistsPageContent_important__ebi2p",
        content: "CollectionPlaylistsPageContent_content__aZ2bA",
        footer: "CollectionPlaylistsPageContent_footer__4Ir_w",
        item: "CollectionPlaylistsPageContent_item__OPBiS",
        tabPanel: "CollectionPlaylistsPageContent_tabPanel__2uB2_",
      };
    },
    71245: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageEmpty_root__mKZt2",
        icon: "CollectionPlaylistsPageEmpty_icon__x9v_P",
        title: "CollectionPlaylistsPageEmpty_title__8RfSi",
      };
    },
    56889: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageHeader_root__GfGIl",
        container: "CollectionPlaylistsPageHeader_container__oh7C2",
        title: "CollectionPlaylistsPageHeader_title__2D23I",
        staticTabs: "CollectionPlaylistsPageHeader_staticTabs__9c9yq",
        stickyTabs: "CollectionPlaylistsPageHeader_stickyTabs__Iot6U",
        tab: "CollectionPlaylistsPageHeader_tab__aNTOB",
        tabsShimmer: "CollectionPlaylistsPageHeader_tabsShimmer__u9JIN",
        tabShimmer: "CollectionPlaylistsPageHeader_tabShimmer__ekXeT",
        staticHeader: "CollectionPlaylistsPageHeader_staticHeader__lzc4l",
        important: "CollectionPlaylistsPageHeader_important__uR36G",
        stickyHeader: "CollectionPlaylistsPageHeader_stickyHeader__ojvbQ",
      };
    },
    33859: function (e) {
      e.exports = { header: "CollectionShelfLiked_header__u9MqV" };
    },
    25575: function (e) {
      e.exports = { header: "CollectionShelfRecentlyPlayed_header__Nx7Cc" };
    },
    84748: function (e) {
      e.exports = {
        track: "CollectionShelfShimmer_track__ERLFm",
        title: "CollectionShelfShimmer_title__X3d9J",
      };
    },
    33604: function (e) {
      e.exports = {
        root: "CollectionShelfLikedPage_root__KRXgN",
        scrollableContainer:
          "CollectionShelfLikedPage_scrollableContainer__CI8xw",
        footer: "CollectionShelfLikedPage_footer__NgcOJ",
      };
    },
    62876: function (e) {
      e.exports = {
        root: "CollectionShelfPage_root__S0__c",
        scrollableContainer: "CollectionShelfPage_scrollableContainer__9f317",
        content: "CollectionShelfPage_content__AG3r8",
        block: "CollectionShelfPage_block__34jyy",
        blockHeader: "CollectionShelfPage_blockHeader__Qjoln",
        footer: "CollectionShelfPage_footer__pgWKV",
      };
    },
    16389: function (e) {
      e.exports = {
        root: "CollectionShelfRecentlyPlayedPage_root__1eSLj",
        scrollableContainer:
          "CollectionShelfRecentlyPlayedPage_scrollableContainer__QhPaX",
        footer: "CollectionShelfRecentlyPlayedPage_footer__5pPcU",
      };
    },
  },
]);
