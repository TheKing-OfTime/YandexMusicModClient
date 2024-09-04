(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [708, 3276],
  {
    63955: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, i) => {
          let n = (n) => {
            let a = (n + e / 30) % 12;
            return (
              i -
              t * Math.min(i, 1 - i) * Math.max(-1, Math.min(a - 3, 9 - a, 1))
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
        a = i(97456);
      (t.normalizeFrequency = (e) => Math.min(1, (0, a.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : n.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: i, collectionHue: a, energy: l, backgroundColor: o } = e,
            s = { collectionHue: (0, t.normalizeCollectionHue)(a) };
          return (
            i && (s.hue = i),
            l && (s.energy = (l + 1) * n.ENERGY_FACTOR),
            o && (s.backgroundColor = o),
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
        (t.MAX_FPS = window.VIBE_ANIMATION_MAX_FPS ?? 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_ENERGY = 0.2),
        (t.ENERGY_FACTOR = 0.4);
    },
    47456: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let a = i(63955),
        l = i(97456),
        o = i(83664),
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
          let i = (0, a.adjustHue)(e),
            n = (0, a.safeHue)(i + (0, l.randomNumber)(40, 80), i),
            o = (0, a.adjustHue)(t);
          this.topStart.update(i),
            this.topEnd.update(
              (0, a.safeHue)(i + (0, l.randomNumber)(30, 40), i),
            ),
            this.middleStart.update(n),
            this.middleEnd.update(
              (0, a.safeHue)(n + (0, l.randomNumber)(30, 40), i),
            ),
            this.bottomStart.update(o),
            this.bottomEnd.update(
              (0, a.safeHue)(o + (0, l.randomNumber)(30, 40), i),
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
          n._(this, "hue", o.DEFAULT_HUE),
            n._(this, "collectionHue", o.DEFAULT_COLLECTION_HUE),
            n._(this, "topStart", void 0),
            n._(this, "topEnd", void 0),
            n._(this, "middleStart", void 0),
            n._(this, "middleEnd", void 0),
            n._(this, "bottomStart", void 0),
            n._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, a.adjustHue)(e),
            i = (0, a.safeHue)(t + (0, l.randomNumber)(30, 40), t);
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
      class a {
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
        constructor(e, t, i, a) {
          n._(this, "currentValue", void 0),
            n._(this, "targetValue", void 0),
            n._(this, "elapsedTime", void 0),
            n._(this, "duration", void 0),
            n._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = i),
            (this.elapsedTime = 0),
            (this.formatter = a);
        }
      }
      t.DynamicValue = a;
    },
    19434: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let a = i(26716),
        l = i(43055),
        o = i(83664),
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
            t = new a.Plane(e, { width: 2, height: 2 }),
            i = new a.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new a.Mesh(e, { geometry: t, program: i }).setParent(this.scene), i
          );
        }
        render() {
          if (window.VIBE_ANIMATION_DISABLE_RENDERING ?? false) return;
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyser),
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
              backgroundColor: a,
            } = (0, l.normalizeSettings)(e);
          t && i && this.uniforms.updateColor(t, i),
            n && this.uniforms.updateEnergy(n),
            a && this.uniforms.updateBackgroundColor(a);
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
          this.uniforms.updateEnergy(o.DEFAULT_ENERGY),
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
          n._(this, "analyser", void 0),
            n._(this, "ticker", void 0),
            n._(this, "scene", new a.Transform()),
            n._(this, "shader", void 0),
            n._(this, "renderer", void 0),
            n._(this, "uniforms", void 0),
            n._(this, "renderState", {
              [r.RenderState.ACTIVE_TAB]: !0,
              [r.RenderState.BLOCK_VISIBILITY]: !0,
              [r.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new d.Uniforms((0, l.normalizeCollectionHue)(i))),
            (this.renderer = new a.Renderer(this.rendererOptions)),
            (this.ticker = new c.Ticker(o.MAX_FPS, this.render.bind(this))),
            (this.analyser = t),
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
      let a = i(63955),
        l = i(83664),
        o = i(69407);
      class s {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, a.hsl2rgb)(e, l.DEFAULT_SATURATION, l.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          n._(this, "r", void 0),
            n._(this, "g", void 0),
            n._(this, "b", void 0);
          let t = (0, a.hsl2rgb)(e, l.DEFAULT_SATURATION, l.DEFAULT_LIGHTNESS);
          (this.r = new o.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new o.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new o.DynamicValue(t[2], t[2], 3e3));
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
      class a {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            i = (n) => {
              this.requestId = requestAnimationFrame(i);
              let a = n - e;
              a >= t - 0.1 && ((e = n - (a % t)), this.render(a));
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
      t.Ticker = a;
    },
    49198: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let a = i(26716),
        l = i(83664),
        o = i(47456),
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
          this.background = new a.Vec3(e, e, e);
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
              a = t.getAverageFrequencies({ low: 2e3, high: 4e3 });
            this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                i * this.audioLowRatio.value,
                n * this.audioMiddleRatio.value,
                a * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new a.Vec2(this.width, this.height)),
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
            n._(this, "background", new a.Vec3(0, 0, 0)),
            n._(
              this,
              "energy",
              new s.DynamicValue(l.DEFAULT_ENERGY, l.DEFAULT_ENERGY, 1e3),
            ),
            n._(this, "time", Math.floor(3600 * Math.random())),
            n._(this, "color", void 0),
            n._(this, "rotation", [
              new a.Vec3(-0.3, 0.3, 0.2),
              new a.Vec3(-0.3, -0.3, -0.2),
              new a.Vec3(-0.3, -0.3, 0.2),
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
            (this.color = new o.Color(e));
        }
      }
      t.Uniforms = r;
    },
    53367: function (e, t, i) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.kB = t.wX = void 0;
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
      var o = i(83664);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return o.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return o.DEFAULT_COLLECTION_LIGHTNESS;
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
    73276: function (e, t, i) {
      "use strict";
      i.d(t, {
        vY: function () {
          return l.EmptyPlaylistBlock;
        },
        ZL: function () {
          return n.PlaylistCard;
        },
        Nn: function () {
          return _;
        },
        d2: function () {
          return c;
        },
        VD: function () {
          return a.PlaylistsCarousel;
        },
        RE: function () {
          return b;
        },
        Q9: function () {
          return g;
        },
        VB: function () {
          return x;
        },
        PB: function () {
          return f;
        },
      });
      var n = i(22003),
        a = i(18921),
        l = i(6030),
        o = i(42288),
        s = i(33589),
        r = i(10668);
      let c = r.$h.props({ artists: o.V5.maybe(o.V5.array(s.Go)) });
      var d = i(38527),
        u = i(395),
        m = i(95695);
      let h = o.V5.model("PlaylistOwner", {
          uid: o.V5.number,
          login: o.V5.string,
          name: o.V5.string,
          sex: o.V5.enumeration(Object.values(m.oF)),
          verified: o.V5.boolean,
        }),
        v = o.V5.model("PlaylistOwner", {
          userInfo: o.V5.maybeNull(h),
          caseForms: o.V5.maybeNull(u.S2),
        }),
        _ = r.Cd.props({
          owner: o.V5.maybe(h),
          modified: o.V5.string,
          description: o.V5.maybe(o.V5.string),
          madeFor: o.V5.maybeNull(v),
        })
          .views((e) => ({
            get seeds() {
              var t;
              return [
                "playlist:"
                  .concat(
                    null === (t = e.owner) || void 0 === t ? void 0 : t.login,
                    "_",
                  )
                  .concat(e.kind),
              ];
            },
          }))
          .actions((e) => ({
            changeDescription: (0, o.ls)(function* (t) {
              if (!(0, o.fh)(e)) return d.SLo.ERROR;
              if (e.description === t) return d.SLo.OK;
              if (t.length > r.Zn) return d.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: n } = (0, o.dU)(e);
              if (e.canUserChange) {
                let a = e.description;
                e.description = t;
                try {
                  let n = yield i.changePlaylistDescription({
                    description: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = n.description), d.SLo.OK;
                } catch (t) {
                  (e.description = a), n.error(t);
                }
              }
              return d.SLo.ERROR;
            }),
            changePlaylistCover: (0, o.ls)(function* (t) {
              if (!(0, o.fh)(e)) return d.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: n } = (0, o.dU)(e);
              try {
                return (
                  yield i.uploadPlaylistCover({
                    userId: e.uid,
                    formData: t,
                    playlistKind: e.kind,
                  }),
                  d.SLo.OK
                );
              } catch (e) {
                n.error(e);
              }
              return d.SLo.ERROR;
            }),
          })),
        C = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        p = (e) =>
          (0, o.pj)({
            userInfo: e.userInfo ? C(e.userInfo) : null,
            caseForms: e.caseForms ? (0, d.GA0)(e.caseForms) : null,
          }),
        g = (e) =>
          (0, o.pj)({
            ...(0, r.PV)(e),
            owner: e.owner ? C(e.owner) : void 0,
            description: e.description,
            modified: e.modified,
            madeFor: e.madeFor ? p(e.madeFor) : null,
          }),
        x = (e) => {
          var t, i;
          return (0, o.pj)({
            ...(0, r.PV)(e),
            artists:
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (t = e.artists) || void 0 === t
                      ? void 0
                      : t.map(s.d)) && void 0 !== i
                ? i
                : [],
          });
        },
        b = (e) => {
          var t, i;
          let {
            playlist: n,
            generatedPlaylistType: a,
            likesCount: l,
            trailer: s,
          } = e;
          return (0, o.pj)({
            isAvailable: null === (i = n.available) || void 0 === i || i,
            uuid: n.playlistUuid,
            title: n.title,
            uid: n.uid,
            kind: n.kind,
            coverUri: null === (t = n.cover) || void 0 === t ? void 0 : t.uri,
            generatedPlaylistType: a,
            likesCount: l,
            trailer: (0, d.GFX)(s),
          });
        };
      var y = i(78604);
      let f = (e) => {
        var t, i;
        return (0, o.pj)({
          ...(0, r.PV)(e),
          tracks:
            null !==
              (i =
                null == e
                  ? void 0
                  : null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.map(y.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
    },
    6030: function (e, t, i) {
      "use strict";
      i.d(t, {
        EmptyPlaylistBlock: function () {
          return u;
        },
      });
      var n = i(9753),
        a = i(60836),
        l = i(98639),
        o = i(31014),
        s = i(28852),
        r = i(2570),
        c = i(98746),
        d = i.n(c);
      let u = (e) => {
        let { className: t, isEmptySearch: i } = e,
          c = (0, l.useMemo)(
            () =>
              i
                ? (0, n.jsx)(o.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(o.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          u = (0, l.useMemo)(
            () =>
              i
                ? (0, n.jsx)(o.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, n.jsx)(o.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [i],
          );
        return (0, n.jsxs)("div", {
          className: (0, a.W)(d().root, t),
          children: [
            (0, n.jsx)("div", {
              className: d().iconBackground,
              children: (0, n.jsx)(s.J, {
                variant: "search",
                size: "l",
                className: d().icon,
              }),
            }),
            (0, n.jsx)(r.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              children: c,
            }),
            (0, n.jsx)(r.Caption, {
              variant: "span",
              size: "l",
              className: d().subtitle,
              children: u,
            }),
          ],
        });
      };
    },
    22003: function (e, t, i) {
      "use strict";
      i.d(t, {
        PlaylistCard: function () {
          return k;
        },
      });
      var n = i(9753),
        a = i(60836),
        l = i(9544),
        o = i(98639),
        s = i(80542),
        r = i(18375),
        c = i(23881),
        d = i(84338),
        u = i(27491),
        m = i(28852),
        h = i(12404),
        v = i(2570),
        _ = i(33589),
        C = i(10668),
        p = i(38527),
        g = i(3084);
      let x = (e) => {
        let { formatMessage: t } = (0, s.Z)();
        return (0, o.useMemo)(() => {
          let i = "";
          e.isLiked && !e.actualLikesCount
            ? (i = t({ id: "entity-names.has-your-like" }))
            : "number" == typeof e.actualLikesCount &&
              (i =
                e.actualLikesCount > 0
                  ? t(
                      { id: "entity-names.likes-counter" },
                      { counter: e.actualLikesCount },
                    )
                  : t({ id: "entity-names.likes-counter-empty" }));
          let n = t(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(n, " ").concat(i);
        }, [t, e]);
      };
      var b = i(385);
      let y = (0, l.Pi)((e) => {
        var t;
        let { playlist: i, onOpenChange: a, open: l, ...c } = e,
          { settings: d, trailer: u } = (0, p.oR4)(),
          m = (0, C.SB)(i),
          h = (0, C.BV)(i),
          v = (0, p.FTC)(),
          _ = d.layout === p.t8m.Mobile,
          { formatMessage: x } = (0, s.Z)();
        (0, p.ZP4)(l);
        let y = (0, o.useCallback)(() => {
          u.openPlaylistTrailer(i.id), v(r.OB.Playlist, i.id);
        }, [i.id, v, u]);
        return (0, n.jsxs)(b.v2, {
          title: i.title,
          onOpenChange: a,
          open: l,
          offsetOptions: 10,
          isMobile: _,
          ariaLabel: x({ id: "interface-actions.context-menu" }),
          ...c,
          children: [
            !_ && (0, n.jsx)(g.Zd, { onClick: h, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, n.jsx)(g.xZ, { onClick: m, isLiked: i.isLiked }),
            (null === (t = i.trailer) || void 0 === t ? void 0 : t.canShow) &&
              (0, n.jsx)(g.NB, { onClick: y }),
          ],
        });
      });
      var f = i(88308),
        P = i.n(f);
      let k = (0, l.Pi)((e) => {
        let {
            className: t,
            playlist: i,
            children: l,
            contentLinesCount: b,
            customDescription: f,
          } = e,
          { ref: k, intersectionPropertyId: S } = (0, p.VfV)(),
          { trailer: j } = (0, p.oR4)(),
          E = (0, p.x5)(),
          { formatMessage: N } = (0, s.Z)(),
          {
            sendLikeSearchFeedback: L,
            sendNavigateSearchFeedback: A,
            sendPlaySearchFeedback: I,
          } = (0, p.sAF)(),
          [T, R] = (0, o.useState)(!1),
          [w, B] = (0, o.useState)(!1),
          [D, M] = (0, o.useState)(!1),
          O = x(i),
          z = (0, C.SB)(i),
          H = (0, C.BV)(i),
          U = (0, p.zxW)(),
          F = (0, p.s0h)(i.url),
          V = (0, p.s0h)(i.url, !0),
          G = (0, _.ik)(V, F),
          W = (0, p.FTC)(),
          K = (0, o.useCallback)(
            (e) => {
              e.stopPropagation(),
                j.openPlaylistTrailer(i.id),
                W(r.OB.Playlist, i.id);
            },
            [i.id, W, j],
          ),
          [Z, q] = (0, o.useState)(!1),
          { isPlaying: Y, togglePlay: X } = (0, p.qmq)({
            playContextParams: {
              contextData: {
                type: d.Ak.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: E,
              },
              loadContextMeta: !0,
            },
          }),
          J = (0, o.useCallback)(() => {
            U({ to: r.qU.PlaylistScreen }), null == A || A();
          }, [U, A]),
          $ = (0, o.useCallback)(
            (e) => {
              J(), G(e);
            },
            [G, J],
          ),
          Q = (0, o.useCallback)(() => {
            T || Y || (R(!0), null == I || I()), X();
          }, [Y, T, I, X]),
          ee = (0, o.useCallback)(() => {
            w || i.isLiked || (B(!0), null == L || L()), z();
          }, [z, w, i.isLiked, L]),
          et = (0, o.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ei = (0, o.useCallback)(() => {
            M(!D), q(!D);
          }, [D]),
          en = (0, o.useMemo)(() => {
            var e;
            return f
              ? (0, n.jsx)(
                  v.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: f,
                  },
                  i.getKey("description"),
                )
              : (null === (e = i.artists) || void 0 === e ? void 0 : e.length)
                ? (0, n.jsx)(
                    _.jO,
                    {
                      className: P().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: P().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [f, i]),
          ea = (0, o.useMemo)(() => {
            if (!i.isFavouritePlaylist)
              return (0, n.jsx)(
                g.dJ,
                {
                  className: (0, a.W)(P().likeButton, P().control),
                  isLiked: i.isLiked,
                  onClick: ee,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                },
                i.getKey("LikeButton"),
              );
          }, [ee, i]),
          el = (0, o.useMemo)(() => {
            var e;
            if (
              null == i
                ? void 0
                : null === (e = i.trailer) || void 0 === e
                  ? void 0
                  : e.canShow
            )
              return (0, n.jsx)(
                g.eP,
                {
                  className: (0, a.W)(P().trailerButton, P().control),
                  radius: "round",
                  size: "s",
                  iconSize: "xxs",
                  enabledTooltip: !0,
                  onClick: K,
                },
                i.getKey("TrailerButton"),
              );
          }, [K, i]),
          eo = (0, o.useMemo)(
            () =>
              (0, n.jsx)(h.Paper, {
                className: P().cover,
                radius: "s",
                withShadow: !0,
                ...(0, c.BA)(c.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: P().coverBlock,
                  onClick: $,
                  children: [
                    (0, n.jsx)(g.BE, {
                      className: P().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: O,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(u.kk, {
                      isVisible: D || Z,
                      className: P().controls,
                      playControl: (0, n.jsx)(
                        g.JM,
                        {
                          className: (0, a.W)(P().playButton, P().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: Q,
                          isPlaying: Y,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: ea,
                      menuControl: (0, n.jsx)(
                        y,
                        {
                          playlist: i,
                          onOpenChange: ei,
                          open: D,
                          onClick: et,
                          className: (0, a.W)(P().menuButton, P().control),
                          icon: (0, n.jsx)(m.J, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, c.BA)(
                            c.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        },
                        i.getKey("PlaylistContextMenu"),
                      ),
                      pinControl: (0, n.jsx)(
                        g.RT,
                        {
                          onClick: H,
                          isPinned: i.isPinned,
                          className: (0, a.W)(P().pinButton, P().control),
                          withRipple: !1,
                        },
                        i.getKey("PinButton"),
                      ),
                      trailerControl: el,
                    }),
                  ],
                }),
              }),
            [$, i, O, D, Z, Q, Y, ea, ei, et, H, el],
          ),
          es = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, n.jsxs)(u.m7, {
          ref: k,
          "aria-label": O,
          className: (0, a.W)(P().root, t),
          title: (0, n.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, c.BA)(c.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(g.rU, {
              className: P().titleLink,
              href: i.url,
              onClick: J,
              children: i.title,
            }),
          }),
          srTitle: (0, n.jsx)(g.rU, {
            href: i.url,
            onClick: J,
            children: i.title,
          }),
          "data-intersection-property-id": S,
          contentLinesCount: b,
          view: eo,
          description: en,
          ...(0, c.BA)(c.bG.playlist.PLAYLIST_ITEM),
          children: [
            es &&
              (0, n.jsx)(g.DB, {
                ariaLabel: N(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: z,
              }),
            l,
          ],
        });
      });
    },
    18921: function (e, t, i) {
      "use strict";
      i.d(t, {
        PlaylistsCarousel: function () {
          return r;
        },
      });
      var n = i(9753),
        a = i(98639),
        l = i(3084),
        o = i(22003);
      let s = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            title: s,
            description: r,
            playlists: c,
            containerClassName: d,
            className: u,
            headerClassName: m,
            viewAllActionLink: h,
            ...v
          } = e;
          return (0, n.jsx)(l.HY, {
            isShimmerVisible: i,
            isShimmerActive: a,
            className: u,
            headerClassName: m,
            containerClassName: d,
            ref: t,
            title: s,
            description: r,
            viewAllActionLink: h,
            ...v,
            children:
              null == c
                ? void 0
                : c.map((e) =>
                    (0, n.jsx)(
                      o.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        r = (0, a.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e }));
    },
    27097: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return C;
        },
        C: function () {
          return p;
        },
      });
      var n = i(9753),
        a = i(9544),
        l = i(98639),
        o = i(23881),
        s = i(84338),
        r = i(78507),
        c = i(15419),
        d = i(53367),
        u = i(38527);
      let m = (e) => {
        var t, i;
        let [n, a] = (0, l.useState)({}),
          { sonataState: o } = (0, u.oR4)();
        (0, l.useEffect)(() => {
          if (o.contextType === s.Ak.Vibe) {
            var t, i, l, r;
            n.id ===
              (null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !n.isLiked &&
              (null === (r = o.entityMeta) || void 0 === r
                ? void 0
                : r.isLiked) &&
              e(),
              a({
                id: null === (i = o.entityMeta) || void 0 === i ? void 0 : i.id,
                isLiked:
                  null === (l = o.entityMeta) || void 0 === l
                    ? void 0
                    : l.isLiked,
              });
          }
        }, [
          o.contextType,
          null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (i = o.entityMeta) || void 0 === i ? void 0 : i.isLiked,
          n.id,
          n.isLiked,
          e,
        ]);
      };
      var h = i(11799),
        v = i.n(h);
      let _ = "vibe-animation",
        C = (0, a.Pi)((e) => {
          var t, i, a, h, C, p, g;
          let { className: x } = e,
            b = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            { isIntersecting: f } =
              null !== (g = (0, r.S1)([b])[_]) && void 0 !== g ? g : {},
            { sonataState: P, user: k } = (0, u.oR4)(),
            { theme: S } = (0, u.FgM)(),
            j = (0, u.jpI)(),
            E = P.status === c.Xz.PLAYING && P.contextType === s.Ak.Vibe;
          return (
            (0, l.useEffect)(() => {
              if (b.current) {
                var e, t;
                let i =
                    null === (t = P.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  n = k.collectionHue;
                (y.current = new d.dr(
                  b.current,
                  null == j ? void 0 : j.analyser,
                  n,
                )),
                  y.current.applySettings({ hue: i, collectionHue: n }),
                  b.current.classList.add(v().root_visible);
              }
              return () => {
                var e;
                null === (e = y.current) || void 0 === e || e.destroy();
              };
            }, []),
            (0, l.useEffect)(() => {
              var e, t, i, n, a, l, o, s;
              let r =
                  null === (t = P.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                c =
                  null === (n = P.entityMeta) || void 0 === n
                    ? void 0
                    : null === (i = n.trackParameters) || void 0 === i
                      ? void 0
                      : i.energy,
                d =
                  null === (l = P.entityMeta) || void 0 === l
                    ? void 0
                    : null === (a = l.trackParameters) || void 0 === a
                      ? void 0
                      : a.userCollectionHue;
              d && k.setUserCollectionHue(d),
                E
                  ? null === (o = y.current) ||
                    void 0 === o ||
                    o.playAnimation({ hue: r, collectionHue: d, energy: c })
                  : null === (s = y.current) ||
                    void 0 === s ||
                    s.idleAnimation();
            }, [
              k,
              E,
              null === (i = P.entityMeta) || void 0 === i
                ? void 0
                : null === (t = i.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (h = P.entityMeta) || void 0 === h
                ? void 0
                : null === (a = h.trackParameters) || void 0 === a
                  ? void 0
                  : a.energy,
              null === (p = P.entityMeta) || void 0 === p
                ? void 0
                : null === (C = p.trackParameters) || void 0 === C
                  ? void 0
                  : C.userCollectionHue,
            ]),
            (0, l.useEffect)(() => {
              var e;
              let t = S === u.Q2A.Dark ? 0.0705 : 0.9607;
              null === (e = y.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [S]),
            (0, l.useEffect)(() => {
              if (y.current) {
                var e, t;
                f
                  ? null === (e = y.current) ||
                    void 0 === e ||
                    e.enableRender(d.nT.BLOCK_VISIBILITY)
                  : null === (t = y.current) ||
                    void 0 === t ||
                    t.disableRender(d.nT.BLOCK_VISIBILITY);
              }
            }, [f]),
            m(
              (0, l.useCallback)(() => {
                var e;
                null === (e = y.current) || void 0 === e || e.likeAnimation();
              }, []),
            ),
            (0, n.jsx)("div", {
              className: x,
              "data-intersection-property-id": _,
              ref: b,
              ...(0, o.BA)(o.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        p = (e) => {
          let t = (0, d.wX)((0, d.kB)(e), d.UE, d.TP),
            i = Math.round(255 * t[0]),
            n = Math.round(255 * t[1]),
            a = Math.round(255 * t[2]);
          return "rgb(".concat(i, ", ").concat(n, ", ").concat(a, ")");
        };
    },
    54267: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionAlbumsPage: function () {
          return O;
        },
      });
      var n,
        a,
        l = i(9753),
        o = i(9544),
        s = i(74717),
        r = i(98639),
        c = i(23881),
        d = i(14102),
        u = i(36084),
        m = i(38527);
      ((n = a || (a = {}))[(n.LIKED_ALBUMS = 0)] = "LIKED_ALBUMS"),
        (n[(n.UPCOMING_ALBUMS = 1)] = "UPCOMING_ALBUMS");
      var h = i(90515),
        v = i.n(h),
        _ = i(60836),
        C = i(80542),
        p = i(93490),
        g = i(3084),
        x = i(31014),
        b = i(2570),
        y = i(55784);
      let f = (e) => {
        let t = (0, m.m5R)();
        return (0, r.useCallback)(
          (i) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, i), i)
            ) {
              case a.LIKED_ALBUMS:
                t("/collection/albums?tab=".concat(m.GrA.LIKED_ALBUMS));
                break;
              case a.UPCOMING_ALBUMS:
                t("/collection/albums?tab=".concat(m.GrA.UPCOMING_ALBUMS));
            }
          },
          [t, e],
        );
      };
      var P = i(72114),
        k = i.n(P),
        S = i(90679);
      let j = () =>
          (0, l.jsxs)("div", {
            className: k().tabsShimmer,
            children: [
              (0, l.jsx)(S.Shimmer, { className: k().tabShimmer }),
              (0, l.jsx)(S.Shimmer, { className: k().tabShimmer }),
            ],
          }),
        E = (0, o.Pi)((e) => {
          var t, i, n;
          let { tabsState: o, tabElementId: s } = e,
            { collection: c } = (0, m.oR4)(),
            { formatMessage: d } = (0, C.Z)(),
            u = (0, m.k67)(),
            { isScrolling: h } = (0, r.useContext)(g.pI),
            v = f(o),
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
          return (0, l.jsxs)("header", {
            className: k().root,
            "aria-hidden": h,
            children: [
              (0, l.jsxs)("div", {
                className: k().container,
                children: [
                  u.canBack &&
                    (0, l.jsx)(y.n, {
                      withForwardControl: !1,
                      withBackwardControl: u.canBack,
                    }),
                  (0, l.jsx)(b.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: k().title,
                    children: (0, l.jsx)(x.Z, {
                      id: "entity-names.favourite-albums",
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)(g.no, {
                isShimmerVisible: c.albums.isLoading,
                shimmer: (0, l.jsx)(j, {}),
                className: k().tabs,
                elementId: s,
                ...o,
                onTabChange: v,
                children: [
                  (0, l.jsx)(g.OK, {
                    className: k().tab,
                    value: a.LIKED_ALBUMS,
                    title: _,
                    "aria-label": d(
                      { id: "entity-names.albums-count" },
                      { value: c.albums.items.length },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                  (0, l.jsx)(g.OK, {
                    className: k().tab,
                    value: a.UPCOMING_ALBUMS,
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
      var N = i(5275),
        L = i.n(N);
      let A = (0, o.Pi)((e) => {
        var t, i, n;
        let { forwardRef: o, tabsState: s, tabElementId: c } = e,
          { user: u, collection: h } = (0, m.oR4)(),
          { formatMessage: v } = (0, C.Z)(),
          x = (0, r.useCallback)(
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
          b = (0, r.useMemo)(
            () => ({
              Header: () => (0, l.jsx)(E, { tabsState: s, tabElementId: c }),
              Footer: () => (0, l.jsx)(g.$_, { className: L().footer }),
            }),
            [c, s],
          );
        return (0, l.jsx)("div", {
          className: L().root,
          children: (0, l.jsx)(d.TabPanel, {
            value: s.value,
            name: a.LIKED_ALBUMS,
            elementId: c,
            className: L().tabPanel,
            children: (0, l.jsx)(g.Wv, {
              className: (0, _.W)(L().scrollContainer, L().important),
              customComponents: b,
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
                  ? (0, l.jsx)(p.rf, { album: i, contentLinesCount: 4 }, i.id)
                  : (0, l.jsx)(g.hi, { "aria-label": n });
              },
              totalCount:
                null !==
                  (i =
                    null === (t = h.albums.pager) || void 0 === t
                      ? void 0
                      : t.total) && void 0 !== i
                  ? i
                  : 0,
              onGetDataByPage: x,
              pageSize: 20,
              totalRequests:
                null !== (n = h.albums.requestsCount) && void 0 !== n ? n : 0,
              listClassName: L().content,
              itemClassName: L().item,
              handleRef: o,
              context: {
                listAriaLabel: v({ id: "collection.liked-albums-list" }),
              },
            }),
          }),
        });
      });
      var I = i(41055);
      let T = (0, o.Pi)((e) => {
        let { forwardRef: t, tabsState: i, tabElementId: n } = e,
          { collection: o } = (0, m.oR4)(),
          { formatMessage: s } = (0, C.Z)(),
          c = (0, r.useMemo)(() => {
            var e;
            let t = s(
              { id: "loading-messages.entity-is-loading" },
              { entityName: s({ id: "entity-names.album" }) },
            );
            return o.albums.isUpcomingAlbumsLoading
              ? (0, l.jsx)(g.Wm, { isActive: !0, "aria-label": t })
              : null === (e = o.albums.upcomingAlbums) || void 0 === e
                ? void 0
                : e.map((e) => (0, l.jsx)(p.vK, { upcomingAlbum: e }, e.id));
          }, [o.albums.isUpcomingAlbumsLoading, o.albums.upcomingAlbums, s]);
        return (0, l.jsxs)(I.t, {
          className: L().root,
          containerClassName: (0, _.W)(L().scrollContainer, L().important),
          ref: t,
          children: [
            (0, l.jsx)(E, { tabsState: i, tabElementId: n }),
            (0, l.jsx)(d.TabPanel, {
              value: i.value,
              name: a.UPCOMING_ALBUMS,
              elementId: n,
              className: L().content,
              children: c,
            }),
            (0, l.jsx)(g.$_, { className: L().footer }),
          ],
        });
      });
      var R = i(28852),
        w = i(87294),
        B = i.n(w);
      let D = (0, o.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            n = (0, r.useMemo)(() => {
              switch (t.value) {
                case a.LIKED_ALBUMS:
                  return (0, l.jsx)(x.Z, {
                    id: "error-messages.empty-collection-albums-title",
                  });
                case a.UPCOMING_ALBUMS:
                  return (0, l.jsx)(x.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-title",
                  });
              }
            }, [t.value]),
            o = t.value === a.LIKED_ALBUMS;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(E, { tabsState: t, tabElementId: i }),
              (0, l.jsxs)(d.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: B().root,
                children: [
                  (0, l.jsx)(R.J, {
                    className: B().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, l.jsx)(b.Heading, {
                    className: B().title,
                    variant: "h3",
                    size: "xs",
                    children: n,
                  }),
                  o &&
                    (0, l.jsx)(b.Caption, {
                      className: B().text,
                      variant: "span",
                      type: "controls",
                      size: "l",
                      weight: "normal",
                      children: (0, l.jsx)(x.Z, {
                        id: "error-messages.empty-collection-albums-description",
                      }),
                    }),
                ],
              }),
            ],
          });
        }),
        M = (0, o.Pi)((e) => {
          var t, i, n;
          let { tabsState: o, tabElementId: s } = e,
            { collection: c } = (0, m.oR4)(),
            { formatMessage: d } = (0, C.Z)(),
            { isScrolling: u } = (0, r.useContext)(g.pI),
            h = (0, m.k67)(),
            v = f(o),
            p = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            x = (0, r.useMemo)(() => {
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
          return (0, l.jsx)(g.h4, {
            variant: "composite",
            staticClassName: (0, _.W)(k().staticHeader, k().important),
            "aria-hidden": !u,
            stickyClassName: (0, _.W)(k().stickyHeader, k().important),
            stickyChild: (0, l.jsxs)("div", {
              className: k().container,
              children: [
                h.canBack &&
                  (0, l.jsx)(y.n, {
                    withForwardControl: !1,
                    withBackwardControl: h.canBack,
                    buttonSize: "xs",
                  }),
                (0, l.jsxs)(g.no, {
                  isShimmerVisible: c.albums.isLoading,
                  shimmer: (0, l.jsx)(j, {}),
                  className: k().tabs,
                  elementId: s,
                  ...o,
                  onTabChange: v,
                  children: [
                    (0, l.jsx)(g.OK, {
                      className: k().tab,
                      value: a.LIKED_ALBUMS,
                      title: p,
                      "aria-label": d(
                        { id: "entity-names.albums-count" },
                        { value: c.albums.items.length },
                      ),
                      "aria-hidden": !u,
                      tabIndex: u ? 0 : -1,
                    }),
                    (0, l.jsx)(g.OK, {
                      className: k().tab,
                      value: a.UPCOMING_ALBUMS,
                      title: x,
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
        O = (0, o.Pi)(() => {
          let e = (0, s.useSearchParams)(),
            { user: t, collection: i, experiments: n } = (0, m.oR4)(),
            [o, h] = (0, m.zU3)(),
            _ = n.checkExperiment(m.peG.WebNextDisableCollectionAlbums, "on"),
            C = n.checkExperiment(m.peG.WebNextDisableCollection, "on"),
            p = (0, r.useId)(),
            g = (0, r.useMemo)(() => {
              switch (e.get(m.wxR.TAB)) {
                case m.GrA.LIKED_ALBUMS:
                  break;
                case m.GrA.UPCOMING_ALBUMS:
                  return a.UPCOMING_ALBUMS;
              }
              return a.LIKED_ALBUMS;
            }, [e]),
            x = (0, d.useTabsState)(g);
          if (
            (_ && C && (0, s.redirect)("/"),
            _ && (0, s.redirect)("/collection"),
            t.account.uid && i.albums.loadingState === m.Gui.IDLE)
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
          (0, m.NOh)(i.albums.loadingState === m.Gui.RESOLVE),
            (0, r.useEffect)(
              () => () => {
                i.albums.reset();
              },
              [i.albums],
            );
          let b = (0, r.useMemo)(() => {
            switch (x.value) {
              case a.LIKED_ALBUMS:
                if (i.albums.isAlbumsEmpty)
                  return (0, l.jsx)(D, { tabsState: x, tabElementId: p });
                return (0, l.jsx)(A, {
                  forwardRef: h,
                  tabsState: x,
                  tabElementId: p,
                });
              case a.UPCOMING_ALBUMS:
                if (i.albums.isUpcomingAlbumsEmpty)
                  return (0, l.jsx)(D, { tabsState: x, tabElementId: p });
                return (0, l.jsx)(T, {
                  forwardRef: h,
                  tabsState: x,
                  tabElementId: p,
                });
            }
          }, [i.albums.isAlbumsEmpty, i.albums.isUpcomingAlbumsEmpty, h, p, x]);
          return (0, l.jsx)(m.Lh6, {
            pageId: m.Rhz.OWN_ALBUMS,
            children: (0, l.jsx)(u.I7, {
              scrollElement: o,
              headerThreshold: 148,
              children: (0, l.jsxs)("div", {
                className: v().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_ALBUMS_PAGE),
                children: [(0, l.jsx)(M, { tabsState: x, tabElementId: p }), b],
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
        a = i(60836),
        l = i(9544),
        o = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(2570),
        m = i(4491),
        h = i(36084),
        v = i(38527),
        _ = i(3084),
        C = i(18354),
        p = i.n(C);
      let g = (0, l.Pi)(() => {
        var e, t, i, l;
        let { user: C, collection: g, experiments: x } = (0, v.oR4)(),
          { formatMessage: b } = (0, r.Z)(),
          [y, f] = (0, v.zU3)(),
          P = (0, v.k67)(),
          k = x.checkExperiment(v.peG.WebNextDisableCollectionArtists, "on"),
          S = x.checkExperiment(v.peG.WebNextDisableCollection, "on");
        k && S && (0, o.redirect)("/"),
          k && (0, o.redirect)("/collection"),
          C.account.uid &&
            g.artists.loadingState === v.Gui.IDLE &&
            (0, s.use)(g.artists.getData({ userId: C.account.uid })),
          (0, v.NOh)(g.artists.loadingState === v.Gui.RESOLVE),
          (0, s.useEffect)(
            () => () => {
              g.artists.reset();
            },
            [g.artists],
          );
        let j = (0, s.useCallback)(
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
          E = (0, s.useMemo)(
            () => ({
              Footer: () => (0, n.jsx)(_.$_, { className: p().footer }),
            }),
            [],
          );
        return (0, n.jsx)(v.Lh6, {
          pageId: v.Rhz.OWN_ARTISTS,
          children: (0, n.jsx)(h.I7, {
            scrollElement: y,
            outerTitle: b({ id: "entity-names.artists" }),
            children: (0, n.jsxs)("div", {
              className: p().root,
              ...(0, d.BA)(d.Br.collection.COLLECTION_ARTISTS_PAGE),
              children: [
                (0, n.jsx)(_.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: P.canBack,
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
                  className: (0, a.W)(p().scrollContainer, p().important),
                  customComponents: E,
                  itemContentCallback: (e) => {
                    var t, i;
                    let a =
                        null === (i = g.artists) || void 0 === i
                          ? void 0
                          : null === (t = i.items) || void 0 === t
                            ? void 0
                            : t[e],
                      l = b(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: b({ id: "entity-names.artist" }) },
                      );
                    return a
                      ? (0, n.jsx)(
                          m.IT,
                          { artist: a, contentLinesCount: 3 },
                          a.id,
                        )
                      : (0, n.jsx)(_.hi, {
                          "aria-label": l,
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
                  onGetDataByPage: j,
                  pageSize: 20,
                  totalRequests:
                    null !== (l = g.artists.requests) && void 0 !== l ? l : 0,
                  listClassName: p().content,
                  itemClassName: p().item,
                  handleRef: f,
                  context: {
                    listAriaLabel: b({ id: "collection.liked-artists-list" }),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    36832: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionDislikesPage: function () {
          return F;
        },
      });
      var n,
        a,
        l,
        o,
        s = i(9753),
        r = i(9544),
        c = i(74717),
        d = i(98639),
        u = i(14102),
        m = i(36084),
        h = i(38527);
      ((n = l || (l = {})).TRACKS = "tracks"),
        (n.ARTISTS = "artists"),
        ((a = o || (o = {}))[(a.TRACKS = 0)] = "TRACKS"),
        (a[(a.ARTISTS = 1)] = "ARTISTS");
      var v = i(16473),
        _ = i.n(v),
        C = i(60836),
        p = i(80542),
        g = i(68106),
        x = i(4491),
        b = i(3084),
        y = i(31014),
        f = i(2570),
        P = i(55784),
        k = i(6156),
        S = i.n(k);
      let j = (e) => {
        let t = (0, h.m5R)();
        return (0, d.useCallback)(
          (i) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, i), i)
            ) {
              case o.TRACKS:
                t("/collection/dislikes?tab=".concat(l.TRACKS));
                break;
              case o.ARTISTS:
                t("/collection/dislikes?tab=".concat(l.ARTISTS));
            }
          },
          [t, e],
        );
      };
      var E = i(90679);
      let N = () =>
          (0, s.jsxs)("div", {
            className: S().tabsShimmer,
            children: [
              (0, s.jsx)(E.Shimmer, { className: S().tabShimmer }),
              (0, s.jsx)(E.Shimmer, { className: S().tabShimmer }),
            ],
          }),
        L = (0, r.Pi)((e) => {
          var t, i, n, a, l, r, c, u, m, v;
          let { tabsState: _, tabElementId: C, isStickyHeader: g = !1 } = e,
            {
              collection: { dislikes: x },
            } = (0, h.oR4)(),
            { formatMessage: y } = (0, p.Z)(),
            { isScrolling: f } = (0, d.useContext)(b.pI),
            P = j(_),
            k = f ? -1 : 0;
          g && (k = f ? 0 : -1);
          let E = (0, d.useMemo)(() => {
              var e, t;
              return (
                null === (t = x.tracks) || void 0 === t
                  ? void 0
                  : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length
              )
                ? ""
                    .concat(y({ id: "entity-names.tracks" }), " • ")
                    .concat(x.tracks.items.length)
                : y({ id: "entity-names.tracks" });
            }, [
              null === (i = x.tracks) || void 0 === i
                ? void 0
                : null === (t = i.items) || void 0 === t
                  ? void 0
                  : t.length,
              y,
            ]),
            L = (0, d.useMemo)(() => {
              var e, t;
              return (
                null === (t = x.artists) || void 0 === t
                  ? void 0
                  : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length
              )
                ? ""
                    .concat(y({ id: "entity-names.artists" }), " • ")
                    .concat(x.artists.items.length)
                : y({ id: "entity-names.artists" });
            }, [
              null === (a = x.artists) || void 0 === a
                ? void 0
                : null === (n = a.items) || void 0 === n
                  ? void 0
                  : n.length,
              y,
            ]);
          return (0, s.jsxs)(b.no, {
            isShimmerVisible: x.isLoading,
            shimmer: (0, s.jsx)(N, {}),
            className: S().tabs,
            elementId: C,
            ..._,
            onTabChange: P,
            children: [
              (0, s.jsx)(b.OK, {
                className: S().tab,
                value: o.TRACKS,
                title: E,
                "aria-label": y(
                  { id: "entity-names.tracks-count" },
                  {
                    value:
                      null !==
                        (m =
                          null === (r = x.tracks) || void 0 === r
                            ? void 0
                            : null === (l = r.items) || void 0 === l
                              ? void 0
                              : l.length) && void 0 !== m
                        ? m
                        : 0,
                  },
                ),
                "aria-hidden": f,
                tabIndex: k,
              }),
              (0, s.jsx)(b.OK, {
                className: S().tab,
                value: o.ARTISTS,
                title: L,
                "aria-label": y(
                  { id: "entity-names.artists-count" },
                  {
                    value:
                      null !==
                        (v =
                          null === (u = x.artists) || void 0 === u
                            ? void 0
                            : null === (c = u.items) || void 0 === c
                              ? void 0
                              : c.length) && void 0 !== v
                        ? v
                        : 0,
                  },
                ),
                "aria-hidden": f,
                tabIndex: k,
              }),
            ],
          });
        }),
        A = (0, r.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            n = (0, h.k67)(),
            { isScrolling: a } = (0, d.useContext)(b.pI);
          return (0, s.jsxs)("header", {
            className: S().root,
            "aria-hidden": a,
            children: [
              (0, s.jsxs)("div", {
                className: S().container,
                children: [
                  n.canBack &&
                    (0, s.jsx)(P.n, {
                      withForwardControl: !1,
                      withBackwardControl: n.canBack,
                    }),
                  (0, s.jsx)(f.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: S().title,
                    children: (0, s.jsx)(y.Z, { id: "collection.my-dislikes" }),
                  }),
                ],
              }),
              (0, s.jsx)(L, { tabsState: t, tabElementId: i }),
            ],
          });
        });
      var I = i(78834),
        T = i.n(I);
      let R = (0, r.Pi)((e) => {
        var t, i, n;
        let { forwardRef: a, tabsState: l, tabElementId: r } = e,
          {
            collection: { dislikes: c },
          } = (0, h.oR4)(),
          { formatMessage: m } = (0, p.Z)(),
          v = c.artists.isLoading
            ? 10
            : null !==
                  (n =
                    null === (i = c.artists) || void 0 === i
                      ? void 0
                      : null === (t = i.items) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== n
              ? n
              : 0,
          _ = (0, d.useMemo)(
            () => ({
              Header: () => (0, s.jsx)(A, { tabsState: l, tabElementId: r }),
              Footer: () => (0, s.jsx)(b.$_, { className: T().footer }),
            }),
            [r, l],
          );
        return c.artists.isRejected
          ? (0, s.jsx)(g.D, {})
          : (0, s.jsx)("div", {
              className: T().root,
              children: (0, s.jsx)(u.TabPanel, {
                value: l.value,
                name: o.ARTISTS,
                elementId: r,
                className: T().tabPanel,
                children: (0, s.jsx)(b.Wv, {
                  className: (0, C.W)(T().scrollContainer, T().important),
                  listClassName: (0, C.W)(T().content, T().content_withGrid),
                  customComponents: _,
                  totalCount: v,
                  itemContentCallback: (e) => {
                    var t, i;
                    let n =
                      null === (i = c.artists) || void 0 === i
                        ? void 0
                        : null === (t = i.items) || void 0 === t
                          ? void 0
                          : t[e];
                    if (!n) {
                      let e = m(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: m({ id: "entity-names.artist" }) },
                      );
                      return (0, s.jsx)(b.hi, {
                        "aria-label": e,
                        round: !0,
                        centered: !0,
                      });
                    }
                    return (0, s.jsx)(
                      x.IT,
                      { artist: n, contentLinesCount: 3, className: T().item },
                      n.id,
                    );
                  },
                  handleRef: a,
                  context: { listAriaLabel: m({ id: "entity-names.artists" }) },
                }),
              }),
            });
      });
      var w = i(84338),
        B = i(44023);
      let D = (0, r.Pi)((e) => {
        var t, i, n;
        let { forwardRef: a, tabsState: l, tabElementId: r } = e,
          c = (0, h.x5)(),
          {
            collection: { dislikes: m },
          } = (0, h.oR4)(),
          { formatMessage: v } = (0, p.Z)(),
          _ = m.tracks.isLoading
            ? 10
            : null !==
                  (n =
                    null === (i = m.tracks) || void 0 === i
                      ? void 0
                      : null === (t = i.items) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== n
              ? n
              : 0,
          x = (0, d.useCallback)(
            (e) => {
              var t;
              null === (t = m.tracks) ||
                void 0 === t ||
                t.getTracksByRange(e.startIndex, e.endIndex);
            },
            [m.tracks],
          ),
          y = (0, d.useMemo)(
            () => ({
              Header: () => (0, s.jsx)(A, { tabsState: l, tabElementId: r }),
              Footer: () => (0, s.jsx)(b.$_, { className: T().footer }),
            }),
            [r, l],
          );
        return m.tracks.isRejected
          ? (0, s.jsx)(g.D, {})
          : (0, s.jsx)("div", {
              className: T().root,
              children: (0, s.jsx)(u.TabPanel, {
                value: l.value,
                name: o.TRACKS,
                elementId: r,
                className: T().tabPanel,
                children: (0, s.jsx)(b.Wv, {
                  className: (0, C.W)(T().scrollContainer, T().important),
                  listClassName: (0, C.W)(T().content, T().content_tracks),
                  customComponents: y,
                  totalCount: _,
                  itemContentCallback: (e) => {
                    var t, i, n;
                    let a =
                      null === (n = m.tracks) || void 0 === n
                        ? void 0
                        : null === (i = n.items) || void 0 === i
                          ? void 0
                          : null === (t = i[e]) || void 0 === t
                            ? void 0
                            : t.data;
                    if (!a)
                      return (0, s.jsx)(b.DX, {
                        isActive: !0,
                        className: T().shimmerItem,
                        variant: h.Lxt.PLAYLIST,
                      });
                    let l = {
                      contextData: {
                        type: w.Ak.Various,
                        meta: { id: "disliked-tracks" },
                        from: c,
                        playDisliked: !0,
                      },
                      entitiesData: m.tracks.sonataEntitiesData,
                      queueParams: { index: e },
                      loadContextMeta: !1,
                    };
                    return a.isTrackNonMusic
                      ? (0, s.jsx)(B.FP, {
                          track: a,
                          playContextParams: l,
                          ignoreDislikedStyles: !0,
                          withPodcastName: !0,
                        })
                      : (0, s.jsx)(B.O2, {
                          track: a,
                          playContextParams: l,
                          ignoreDislikedStyles: !0,
                        });
                  },
                  onGetDataByRange: x,
                  debounceDurationInMs: 300,
                  handleRef: a,
                  context: { listAriaLabel: v({ id: "entity-names.tracks" }) },
                }),
              }),
            });
      });
      var M = i(28852),
        O = i(42485),
        z = i.n(O);
      let H = (0, r.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(A, { tabsState: t, tabElementId: i }),
              (0, s.jsxs)(u.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: z().root,
                children: [
                  (0, s.jsx)(M.J, {
                    className: z().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, s.jsx)(f.Heading, {
                    className: z().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, s.jsx)(y.Z, {
                      id: "entity-names.list-is-empty",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        U = (0, r.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            { isScrolling: n } = (0, d.useContext)(b.pI),
            a = (0, h.k67)();
          return (0, s.jsx)(b.h4, {
            variant: "composite",
            staticClassName: (0, C.W)(S().staticHeader, S().important),
            "aria-hidden": !n,
            stickyClassName: (0, C.W)(S().stickyHeader, S().important),
            stickyChild: (0, s.jsxs)("div", {
              className: S().container,
              children: [
                a.canBack &&
                  (0, s.jsx)(P.n, {
                    withForwardControl: !1,
                    withBackwardControl: a.canBack,
                    buttonSize: "xs",
                  }),
                (0, s.jsx)(L, {
                  tabsState: t,
                  tabElementId: i,
                  isStickyHeader: !0,
                }),
              ],
            }),
          });
        }),
        F = (0, r.Pi)(() => {
          let e = (0, c.useSearchParams)(),
            {
              user: t,
              collection: { dislikes: i },
            } = (0, h.oR4)(),
            [n, a] = (0, h.zU3)(),
            r = (0, d.useId)(),
            v = (0, d.useMemo)(() => {
              switch (e.get(h.wxR.TAB)) {
                case l.TRACKS:
                  break;
                case l.ARTISTS:
                  return o.ARTISTS;
              }
              return o.TRACKS;
            }, [e]),
            C = (0, u.useTabsState)(v);
          if ((t.account.uid || (0, c.notFound)(), i.isIdle)) {
            let e = Promise.allSettled([
              i.tracks.getData(),
              i.artists.getData(),
            ]);
            (0, d.use)(e);
          }
          (0, h.NOh)(i.isResolved),
            (0, d.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            );
          let p = (0, d.useMemo)(() => {
            switch (C.value) {
              case o.TRACKS:
                if (i.tracks.isEmpty)
                  return (0, s.jsx)(H, { tabsState: C, tabElementId: r });
                return (0, s.jsx)(D, {
                  forwardRef: a,
                  tabsState: C,
                  tabElementId: r,
                });
              case o.ARTISTS:
                if (i.artists.isEmpty)
                  return (0, s.jsx)(H, { tabsState: C, tabElementId: r });
                return (0, s.jsx)(R, {
                  forwardRef: a,
                  tabsState: C,
                  tabElementId: r,
                });
            }
          }, [i.artists.isEmpty, i.tracks.isEmpty, a, r, C]);
          return (0, s.jsx)(h.Lh6, {
            pageId: h.Rhz.OWN_DISLIKES,
            children: (0, s.jsx)(m.I7, {
              scrollElement: n,
              headerThreshold: 148,
              children: (0, s.jsxs)("div", {
                className: _().root,
                children: [(0, s.jsx)(U, { tabsState: C, tabElementId: r }), p],
              }),
            }),
          });
        });
    },
    50971: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicLikedPage: function () {
          return x;
        },
      });
      var n = i(9753),
        a = i(60836),
        l = i(9544),
        o = i(98639),
        s = i(80542),
        r = i(31014),
        c = i(23881),
        d = i(2570),
        u = i(68106),
        m = i(93490),
        h = i(36084),
        v = i(38527),
        _ = i(3084),
        C = i(2554),
        p = i(80776),
        g = i.n(p);
      let x = (0, l.Pi)(() => {
        var e, t, i;
        let {
            user: l,
            collection: { nonMusicLiked: p },
          } = (0, v.oR4)(),
          { formatMessage: x } = (0, s.Z)(),
          [b, y] = (0, v.zU3)(),
          f = (0, v.k67)();
        l.account.uid &&
          p.loadingState === v.Gui.IDLE &&
          (0, o.use)(
            p.getData({
              userId: l.account.uid,
              metaType: "podcast",
              pageSize: 20,
            }),
          ),
          (0, v.NOh)(p.isResolved);
        let P = (0, o.useCallback)(
          (e) => {
            l.account.uid &&
              p.getData({
                userId: l.account.uid,
                metaType: "podcast",
                page: e,
                pageSize: 20,
              });
          },
          [p, l.account.uid],
        );
        if (p.isRejected) return (0, n.jsx)(u.D, {});
        (0, o.useEffect)(
          () => () => {
            p.reset();
          },
          [p],
        );
        let k = (0, o.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(_.$_, { className: g().footer }) }),
          [],
        );
        return (0, n.jsx)(v.Lh6, {
          pageId: v.Rhz.OWN_PODCASTS,
          children: (0, n.jsx)(h.I7, {
            scrollElement: b,
            outerTitle: x({ id: "page.delayed-non-music" }),
            children: (0, n.jsxs)("div", {
              className: g().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_LIKED_PAGE),
              children: [
                (0, n.jsx)(_.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: f.canBack,
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
                  className: (0, a.W)(g().scrollContainer, g().important),
                  listClassName: g().content,
                  itemClassName: g().item,
                  customComponents: k,
                  itemContentCallback: (e) => {
                    var t;
                    let i =
                        null === (t = p.items) || void 0 === t ? void 0 : t[e],
                      a = x(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: x({ id: "entity-names.podcast" }) },
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
                      : (0, n.jsx)(_.hi, { "aria-label": a });
                  },
                  totalCount:
                    null !==
                      (t =
                        null === (e = p.pager) || void 0 === e
                          ? void 0
                          : e.total) && void 0 !== t
                      ? t
                      : 0,
                  onGetDataByPage: P,
                  pageSize: 20,
                  totalRequests:
                    null !== (i = p.requestsCount) && void 0 !== i ? i : 0,
                  handleRef: y,
                  context: {
                    listAriaLabel: x({ id: "collection.liked-non-music-list" }),
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
        a = i(60836),
        l = i(31014),
        o = i(28852),
        s = i(2570),
        r = i(18045),
        c = i.n(r);
      let d = (e) => {
        let { className: t } = e;
        return (0, n.jsxs)("div", {
          className: (0, a.W)(c().emptyContent, t),
          children: [
            (0, n.jsx)(o.J, {
              className: c().emptyContentIcon,
              size: "l",
              variant: "album",
            }),
            (0, n.jsx)(s.Heading, {
              className: c().emptyContentTitle,
              variant: "h3",
              size: "xs",
              children: (0, n.jsx)(l.Z, {
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
          return y;
        },
      });
      var n = i(9753),
        a = i(60836),
        l = i(9544),
        o = i(98639),
        s = i(80542),
        r = i(31014),
        c = i(23881),
        d = i(41055),
        u = i(2570),
        m = i(68106),
        h = i(93490),
        v = i(36084),
        _ = i(38527),
        C = i(3084),
        p = i(66936),
        g = i(2554),
        x = i(19517),
        b = i.n(x);
      let y = (0, l.Pi)(() => {
        var e, t;
        let {
            user: i,
            collection: { nonMusicLiked: l, shelf: x },
          } = (0, _.oR4)(),
          { formatMessage: y } = (0, s.Z)(),
          [f, P] = (0, _.zU3)(),
          k = (0, _.k67)();
        if (
          (i.account.uid &&
            l.loadingState === _.Gui.IDLE &&
            (0, o.use)(
              l.getData({
                userId: i.account.uid,
                metaType: "podcast",
                pageSize: 10,
              }),
            ),
          (0, _.NOh)(l.isResolved),
          l.isRejected && !x.hasLiked)
        )
          return (0, n.jsx)(m.D, {});
        (0, o.useEffect)(
          () => () => {
            l.reset(), x.reset();
          },
          [l, x],
        );
        let S = (0, o.useMemo)(() => {
            var e;
            return null === (e = l.items) || void 0 === e
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
            l.items,
            null === (e = l.items) || void 0 === e ? void 0 : e.length,
          ]),
          j = (0, o.useMemo)(() => {
            var e;
            return !l.isEmptyItems || l.isRejected || x.hasLiked
              ? l.isRejected ||
                (!(null === (e = l.items) || void 0 === e
                  ? void 0
                  : e.length) &&
                  l.requestsCount)
                ? null
                : (0, n.jsx)(C.HY, {
                    headerClassName: b().blockHeader,
                    containerClassName: b().carousel,
                    isShimmerVisible: l.isLoading,
                    isShimmerActive: !0,
                    title: y({ id: "page.delayed-non-music" }),
                    viewAllActionLink: "/collection/non-music/liked",
                    children: S,
                  })
              : (0, n.jsx)(g.u, {});
          }, [
            l.isLoading,
            y,
            S,
            l.isRejected,
            x.hasLiked,
            l.isEmptyItems,
            null === (t = l.items) || void 0 === t ? void 0 : t.length,
            l.requestsCount,
          ]);
        return (0, n.jsx)(_.Lh6, {
          pageId: _.Rhz.OWN_PODCASTS,
          children: (0, n.jsx)(v.I7, {
            scrollElement: f,
            outerTitle: y({ id: "page.podcasts-and-books" }),
            children: (0, n.jsxs)("div", {
              className: b().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_PAGE),
              children: [
                (0, n.jsx)(C.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: k.canBack,
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
                  ref: P,
                  containerClassName: (0, a.W)(
                    b().scrollableContainer,
                    b().important,
                  ),
                  className: b().root,
                  children: (0, n.jsxs)("div", {
                    className: b().content,
                    children: [
                      (0, n.jsxs)("div", {
                        className: b().likedBlocks,
                        children: [
                          j,
                          x.hasLiked &&
                            (0, n.jsx)(p.X, {
                              className: b().shelfBlock,
                              headerClassName: b().shelfBlockHeader,
                              itemsCount: 5,
                              withHeader: !0,
                            }),
                        ],
                      }),
                      (0, n.jsx)(C.$_, { className: b().footer }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      });
    },
    34590: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNotFoundPage: function () {
          return o;
        },
      });
      var n = i(9753),
        a = i(9544),
        l = i(23948);
      let o = (0, a.Pi)(() => (0, n.jsx)(l.T, {}));
    },
    27539: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPage: function () {
          return f;
        },
      });
      var n = i(9753),
        a = i(60836),
        l = i(9544),
        o = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(95695),
        m = i(41055),
        h = i(2570),
        v = i(84799),
        _ = i(68106),
        C = i(36084),
        p = i(27097),
        g = i(38527),
        x = i(3084),
        b = i(23705),
        y = i.n(b);
      let f = (0, l.Pi)(() => {
        let { collection: e, user: t, experiments: i } = (0, g.oR4)(),
          [l, b] = (0, g.zU3)(),
          { formatMessage: f } = (0, r.Z)(),
          P = e.landing.loadingState !== g.Gui.REJECT && !!t.collectionHue;
        i.checkExperiment(g.peG.WebNextDisableCollection, "on") &&
          (0, o.redirect)("/"),
          e.landing.loadingState === g.Gui.IDLE &&
            (0, s.use)(
              e.landing.getSkeleton(
                { id: u.jB.WEB_COLLECTION, showWizard: t.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, g.NOh)(e.landing.loadingState === g.Gui.RESOLVE);
        let k = (0, v._B)(e.landing),
          S = (0, s.useMemo)(
            () =>
              P && t.collectionHue
                ? { "--collection-color": (0, p.C)(t.collectionHue) }
                : null,
            [P, t.collectionHue],
          ),
          j = (0, s.useMemo)(
            () => ({
              color: (e) =>
                (0, n.jsx)(x.wx, {
                  title: f({ id: "collection.collection-color-title" }),
                  description: f({
                    id: "collection.collection-color-description",
                  }),
                  placement: "right",
                  children: (0, n.jsx)("span", {
                    className: y().collectionColor,
                    style: S,
                    children: e,
                  }),
                }),
            }),
            [S, f],
          );
        return (0, n.jsx)(g.Lh6, {
          pageId: g.Rhz.OWN_COLLECTION,
          children: (0, n.jsxs)(C.I7, {
            scrollElement: l,
            outerTitle: f({ id: "entity-names.collection" }),
            children: [
              (0, n.jsx)(x.h4, {
                variant: "text",
                showControls: !1,
                children: (0, n.jsxs)("div", {
                  className: y().header,
                  children: [
                    (0, n.jsx)(h.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      children: (0, n.jsx)(c.Z, {
                        id: "entity-names.collection",
                      }),
                    }),
                    P &&
                      (0, n.jsx)(h.Caption, {
                        className: y().description,
                        variant: "div",
                        size: "m",
                        children: (0, n.jsx)(c.Z, {
                          id: "collection.collection-color",
                          values: j,
                        }),
                      }),
                  ],
                }),
              }),
              (0, n.jsxs)(m.t, {
                className: (0, a.W)(y().root, {
                  [y().root_withCollectionColor]: P,
                }),
                containerClassName: y().content,
                ref: b,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, a.W)(y().landing, {
                      [y().landing_onlyWizard]: k,
                    }),
                    ...(0, d.BA)(d.Br.collection.COLLECTION_PAGE),
                    children: (0, n.jsx)(v.Od, {
                      landing: e.landing,
                      errorComponent: (0, n.jsx)(_.D, {
                        className: y().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, n.jsx)(x.$_, { className: y().footer }),
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
        a = i(60836),
        l = i(9544),
        o = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(2570),
        m = i(36084),
        h = i(73276),
        v = i(38527),
        _ = i(3084),
        C = i(86479),
        p = i.n(C);
      let g = (0, l.Pi)(() => {
        var e, t, i;
        let {
            user: l,
            collection: { playlistsCreated: C },
            experiments: g,
          } = (0, v.oR4)(),
          { formatMessage: x } = (0, r.Z)(),
          [b, y] = (0, v.zU3)(),
          f = (0, v.k67)(),
          P = g.checkExperiment(
            v.peG.WebNextDisableCollectionCreatedPlaylists,
            "on",
          ),
          k = g.checkExperiment(v.peG.WebNextDisableCollection, "on");
        P && k && (0, o.redirect)("/"), P && (0, o.redirect)("/collection");
        let S = (0, s.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(_.$_, { className: p().footer }) }),
          [],
        );
        l.account.uid &&
          C.loadingState === v.Gui.IDLE &&
          (0, s.use)(
            C.getData({ userId: l.account.uid, page: 0, pageSize: 20 }),
          ),
          (0, v.NOh)(C.loadingState === v.Gui.RESOLVE);
        let j = (0, s.useCallback)(
          (e) => {
            l.account.uid &&
              C.getData({ userId: l.account.uid, page: e, pageSize: 20 });
          },
          [C, l.account.uid],
        );
        return (
          (0, s.useEffect)(
            () => () => {
              C.reset();
            },
            [C],
          ),
          (0, n.jsx)(v.Lh6, {
            pageId: v.Rhz.OWN_PLAYLISTS,
            children: (0, n.jsx)(m.I7, {
              scrollElement: b,
              outerTitle: x({ id: "entity-names.my-playlists" }),
              children: (0, n.jsxs)("div", {
                className: p().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_CREATED_PAGE),
                children: [
                  (0, n.jsx)(_.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: f.canBack,
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
                    className: (0, a.W)(p().scrollContainer, p().important),
                    customComponents: S,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == C
                            ? void 0
                            : null === (t = C.items) || void 0 === t
                              ? void 0
                              : t[e],
                        a = x(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: x({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, n.jsx)(
                            h.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, n.jsx)(_.hi, { "aria-label": a });
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
                    onGetDataByPage: j,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = C.requests) && void 0 !== i ? i : 0,
                    listClassName: p().content,
                    itemClassName: p().item,
                    handleRef: y,
                    context: {
                      listAriaLabel: x({
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
          return x;
        },
      });
      var n = i(9753),
        a = i(60836),
        l = i(9544),
        o = i(74717),
        s = i(98639),
        r = i(80542),
        c = i(31014),
        d = i(23881),
        u = i(95695),
        m = i(2570),
        h = i(36084),
        v = i(73276),
        _ = i(38527),
        C = i(3084),
        p = i(58953),
        g = i.n(p);
      let x = (0, l.Pi)(() => {
        var e, t, i;
        let {
            user: l,
            collection: { playlistsLiked: p },
            experiments: x,
          } = (0, _.oR4)(),
          { formatMessage: b } = (0, r.Z)(),
          [y, f] = (0, _.zU3)(),
          P = (0, _.k67)(),
          k = x.checkExperiment(
            _.peG.WebNextDisableCollectionLikedPlaylists,
            "on",
          ),
          S = x.checkExperiment(_.peG.WebNextDisableCollection, "on");
        k && S && (0, o.redirect)("/"), k && (0, o.redirect)("/collection");
        let j = (0, s.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(C.$_, { className: g().footer }) }),
          [],
        );
        l.account.uid &&
          p.loadingState === _.Gui.IDLE &&
          (0, s.use)(
            p.getData({
              userId: l.account.uid,
              sortOrder: u.As.DESC,
              metaType: "music",
              page: 0,
              pageSize: 20,
            }),
          ),
          (0, _.NOh)(p.loadingState === _.Gui.RESOLVE);
        let E = (0, s.useCallback)(
          (e) => {
            l.account.uid &&
              p.getData({
                userId: l.account.uid,
                sortOrder: u.As.DESC,
                metaType: "music",
                page: e,
                pageSize: 20,
              });
          },
          [p, l.account.uid],
        );
        return (
          (0, s.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          ),
          (0, n.jsx)(_.Lh6, {
            pageId: _.Rhz.OWN_PLAYLISTS,
            children: (0, n.jsx)(h.I7, {
              scrollElement: y,
              outerTitle: b({ id: "entity-names.favourite-playlists" }),
              children: (0, n.jsxs)("div", {
                className: g().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_LIKED_PAGE),
                children: [
                  (0, n.jsx)(C.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: P.canBack,
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
                    className: (0, a.W)(g().scrollContainer, g().important),
                    customComponents: j,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == p
                            ? void 0
                            : null === (t = p.items) || void 0 === t
                              ? void 0
                              : t[e],
                        a = b(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: b({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, n.jsx)(
                            v.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, n.jsx)(C.hi, { "aria-label": a });
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
                    onGetDataByPage: E,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = p.requests) && void 0 !== i ? i : 0,
                    listClassName: g().content,
                    itemClassName: g().item,
                    handleRef: f,
                    context: {
                      listAriaLabel: b({
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
        a,
        l = i(9753),
        o = i(9544),
        s = i(74717),
        r = i(98639),
        c = i(23881),
        d = i(95695),
        u = i(14102),
        m = i(36084),
        h = i(38527);
      ((n = a || (a = {}))[(n.CREATED = 0)] = "CREATED"),
        (n[(n.LIKED = 1)] = "LIKED");
      var v = i(52593),
        _ = i.n(v),
        C = i(60836),
        p = i(80542),
        g = i(73276),
        x = i(10668),
        b = i(3084),
        y = i(31014),
        f = i(2570),
        P = i(55784);
      let k = (e) => {
        let t = (0, h.m5R)();
        return (0, r.useCallback)(
          (i) => {
            var n;
            switch (
              (null === (n = e.onTabChange) || void 0 === n || n.call(e, i), i)
            ) {
              case a.CREATED:
                t("/collection/playlists?tab=".concat(h.cUw.CREATED));
                break;
              case a.LIKED:
                t("/collection/playlists?tab=".concat(h.cUw.LIKED));
            }
          },
          [t, e],
        );
      };
      var S = i(56889),
        j = i.n(S),
        E = i(90679);
      let N = () =>
          (0, l.jsxs)("div", {
            className: j().tabsShimmer,
            children: [
              (0, l.jsx)(E.Shimmer, { className: j().tabShimmer }),
              (0, l.jsx)(E.Shimmer, { className: j().tabShimmer }),
            ],
          }),
        L = (0, o.Pi)((e) => {
          var t, i, n, o, s, c;
          let { tabsState: d, tabElementId: u } = e,
            {
              collection: { playlistsCreated: m, playlistsLiked: v },
            } = (0, h.oR4)(),
            { formatMessage: _ } = (0, p.Z)(),
            C = (0, h.k67)(),
            { isScrolling: g } = (0, r.useContext)(b.pI),
            x = k(d),
            S = (0, r.useMemo)(() => {
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
            E = (0, r.useMemo)(() => {
              var e;
              return (null === (e = v.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(_({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(v.pager.total)
                : _({ id: "collection.your-liked-playlists" });
            }, [_, null === (i = v.pager) || void 0 === i ? void 0 : i.total]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("header", {
                className: j().root,
                "aria-hidden": g,
                children: (0, l.jsxs)("div", {
                  className: j().container,
                  children: [
                    C.canBack &&
                      (0, l.jsx)(P.n, {
                        withForwardControl: !1,
                        withBackwardControl: C.canBack,
                      }),
                    (0, l.jsx)(f.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      className: j().title,
                      children: (0, l.jsx)(y.Z, {
                        id: "entity-names.artist-playlist",
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)(b.no, {
                isShimmerVisible: m.isLoading,
                shimmer: (0, l.jsx)(N, {}),
                className: j().staticTabs,
                elementId: u,
                ...d,
                onTabChange: x,
                children: [
                  (0, l.jsx)(b.OK, {
                    className: j().tab,
                    value: a.CREATED,
                    title: S,
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
                  (0, l.jsx)(b.OK, {
                    className: j().tab,
                    value: a.LIKED,
                    title: E,
                    "aria-label": _(
                      { id: "entity-names.liked-playlists-count" },
                      {
                        value:
                          null !==
                            (c =
                              null === (o = v.pager) || void 0 === o
                                ? void 0
                                : o.total) && void 0 !== c
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
      var A = i(88788),
        I = i.n(A);
      let T = (0, o.Pi)((e) => {
          var t, i, n;
          let { forwardRef: o, tabsState: s, tabElementId: c } = e,
            {
              user: d,
              collection: { playlistsCreated: m },
            } = (0, h.oR4)(),
            { formatMessage: v } = (0, p.Z)(),
            _ = (0, r.useMemo)(
              () => ({
                Header: () => (0, l.jsx)(L, { tabsState: s, tabElementId: c }),
                Footer: () => (0, l.jsx)(b.$_, { className: I().footer }),
              }),
              [c, s],
            ),
            y = (0, r.useCallback)(
              (e) => {
                d.account.uid &&
                  m.getData({ userId: d.account.uid, page: e, pageSize: 20 });
              },
              [m, d.account.uid],
            ),
            f =
              (null !==
                (i =
                  null === (t = m.pager) || void 0 === t ? void 0 : t.total) &&
              void 0 !== i
                ? i
                : 0) + 1;
          return (0, l.jsx)("div", {
            className: I().root,
            children: (0, l.jsx)(u.TabPanel, {
              value: s.value,
              name: a.CREATED,
              elementId: c,
              className: I().tabPanel,
              children: (0, l.jsx)(b.Wv, {
                className: (0, C.W)(I().scrollContainer, I().important),
                customComponents: _,
                itemContentCallback: (e) => {
                  var t;
                  if (0 === e) return (0, l.jsx)(x.lN, {});
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
                    ? (0, l.jsx)(
                        g.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, l.jsx)(b.hi, { "aria-label": n });
                },
                totalCount: f,
                onGetDataByPage: y,
                pageSize: 20,
                totalRequests:
                  null !== (n = m.requests) && void 0 !== n ? n : 0,
                listClassName: I().content,
                itemClassName: I().item,
                handleRef: o,
                context: {
                  listAriaLabel: v({ id: "collection.created-playlists-list" }),
                },
              }),
            }),
          });
        }),
        R = (0, o.Pi)((e) => {
          var t, i, n;
          let { forwardRef: o, tabsState: s, tabElementId: c } = e,
            {
              user: m,
              collection: { playlistsLiked: v },
            } = (0, h.oR4)(),
            { formatMessage: _ } = (0, p.Z)(),
            x = (0, r.useCallback)(
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
            y = (0, r.useMemo)(
              () => ({
                Header: () => (0, l.jsx)(L, { tabsState: s, tabElementId: c }),
                Footer: () => (0, l.jsx)(b.$_, { className: I().footer }),
              }),
              [c, s],
            );
          return (0, l.jsx)("div", {
            className: I().root,
            children: (0, l.jsx)(u.TabPanel, {
              value: s.value,
              name: a.LIKED,
              elementId: c,
              className: I().tabPanel,
              children: (0, l.jsx)(b.Wv, {
                className: (0, C.W)(I().scrollContainer, I().important),
                customComponents: y,
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
                    ? (0, l.jsx)(
                        g.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, l.jsx)(b.hi, { "aria-label": n });
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
                onGetDataByPage: x,
                pageSize: 20,
                totalRequests:
                  null !== (n = v.requests) && void 0 !== n ? n : 0,
                listClassName: I().content,
                itemClassName: I().item,
                handleRef: o,
                context: {
                  listAriaLabel: _({ id: "collection.liked-playlists-list" }),
                },
              }),
            }),
          });
        });
      var w = i(28852),
        B = i(71245),
        D = i.n(B);
      let M = (0, o.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(L, { tabsState: t, tabElementId: i }),
              (0, l.jsxs)(u.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: D().root,
                children: [
                  (0, l.jsx)(w.J, {
                    className: D().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, l.jsx)(f.Heading, {
                    className: D().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, l.jsx)(y.Z, {
                      id: "error-messages.empty-collection-liked-playlists",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        O = (0, o.Pi)((e) => {
          var t, i, n, o, s, c;
          let { tabsState: d, tabElementId: u } = e,
            {
              collection: { playlistsCreated: m, playlistsLiked: v },
            } = (0, h.oR4)(),
            { formatMessage: _ } = (0, p.Z)(),
            { isScrolling: g } = (0, r.useContext)(b.pI),
            x = (0, h.k67)(),
            y = k(d),
            f = (0, r.useMemo)(() => {
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
            S = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = v.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(_({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(
                      null === (t = v.pager) || void 0 === t ? void 0 : t.total,
                    )
                : _({ id: "collection.your-liked-playlists" });
            }, [_, null === (i = v.pager) || void 0 === i ? void 0 : i.total]);
          return (0, l.jsx)(b.h4, {
            variant: "composite",
            staticClassName: (0, C.W)(j().staticHeader, j().important),
            "aria-hidden": !g,
            stickyClassName: (0, C.W)(j().stickyHeader, j().important),
            stickyChild: (0, l.jsxs)("div", {
              className: j().container,
              children: [
                x.canBack &&
                  (0, l.jsx)(P.n, {
                    withForwardControl: !1,
                    withBackwardControl: x.canBack,
                    buttonSize: "xs",
                  }),
                (0, l.jsxs)(b.no, {
                  isShimmerVisible: m.isLoading,
                  shimmer: (0, l.jsx)(N, {}),
                  className: j().stickyTabs,
                  elementId: u,
                  ...d,
                  onTabChange: y,
                  children: [
                    (0, l.jsx)(b.OK, {
                      className: j().tab,
                      value: a.CREATED,
                      title: f,
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
                    (0, l.jsx)(b.OK, {
                      className: j().tab,
                      value: a.LIKED,
                      title: S,
                      "aria-label": _(
                        { id: "entity-names.liked-playlists-count" },
                        {
                          value:
                            null !==
                              (c =
                                null === (o = v.pager) || void 0 === o
                                  ? void 0
                                  : o.total) && void 0 !== c
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
        z = (0, o.Pi)(() => {
          let e = (0, s.useSearchParams)(),
            {
              user: t,
              collection: { playlistsCreated: i, playlistsLiked: n },
              experiments: o,
            } = (0, h.oR4)(),
            [v, C] = (0, h.zU3)(),
            p = o.checkExperiment(h.peG.WebNextDisableCollection, "on"),
            g = (0, r.useId)(),
            x = (0, r.useMemo)(() => {
              switch (e.get(h.wxR.TAB)) {
                case h.cUw.CREATED:
                  break;
                case h.cUw.LIKED:
                  return a.LIKED;
              }
              return a.CREATED;
            }, [e]),
            b = (0, u.useTabsState)(x);
          if (
            (p && (0, s.redirect)("/"),
            t.account.uid && i.loadingState === h.Gui.IDLE)
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
          (0, h.NOh)(i.loadingState === h.Gui.RESOLVE),
            (0, r.useEffect)(
              () => () => {
                i.reset(), n.reset();
              },
              [i, n],
            );
          let y = (0, r.useMemo)(() => {
            switch (b.value) {
              case a.CREATED:
                return (0, l.jsx)(T, {
                  forwardRef: C,
                  tabsState: b,
                  tabElementId: g,
                });
              case a.LIKED:
                if (n.isEmpty)
                  return (0, l.jsx)(M, { tabsState: b, tabElementId: g });
                return (0, l.jsx)(R, {
                  forwardRef: C,
                  tabsState: b,
                  tabElementId: g,
                });
            }
          }, [C, n.isEmpty, g, b]);
          return (0, l.jsx)(h.Lh6, {
            pageId: h.Rhz.OWN_PLAYLISTS,
            children: (0, l.jsx)(m.I7, {
              scrollElement: v,
              headerThreshold: 148,
              children: (0, l.jsxs)("div", {
                className: _().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_PLAYLISTS_PAGE),
                children: [(0, l.jsx)(O, { tabsState: b, tabElementId: g }), y],
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
        a = i(60836),
        l = i(9544),
        o = i(98639),
        s = i(84338),
        r = i(23194),
        c = i(44023),
        d = i(38527),
        u = i(47041),
        m = i(33859),
        h = i.n(m);
      let v = (0, l.Pi)((e) => {
        var t;
        let {
            className: i,
            itemsCount: l,
            withHeader: m,
            headerClassName: v,
          } = e,
          {
            sonataState: _,
            collection: {
              shelf: { liked: C },
            },
          } = (0, d.oR4)();
        C.loadingState === d.Gui.IDLE && (0, o.use)(C.getData());
        let p = (0, o.useMemo)(() => {
          var e;
          return null === (e = C.entities) || void 0 === e
            ? void 0
            : e.map((e) =>
                (0, n.jsx)(
                  c.FP,
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
                headerClassName: (0, a.W)(h().header, v),
                isLoading: C.isLoading,
                title: null !== (t = C.title) && void 0 !== t ? t : "",
                maxColumns: 1,
                itemsPerColumn: l,
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
        a = i(60836),
        l = i(9544),
        o = i(98639),
        s = i(23194),
        r = i(44023),
        c = i(38527),
        d = i(84338),
        u = i(95695);
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
      let C = (0, l.Pi)((e) => {
        var t;
        let {
            className: i,
            itemsCount: l,
            withHeader: d,
            headerClassName: u,
          } = e,
          {
            sonataState: v,
            collection: {
              shelf: { recentlyPlayed: C },
            },
          } = (0, c.oR4)();
        C.loadingState === c.Gui.IDLE && (0, o.use)(C.getData());
        let p = (0, o.useMemo)(() => {
          var e;
          return null === (e = C.entities) || void 0 === e
            ? void 0
            : e.map((e, t) => {
                let i = m(e, C.typeForFrom);
                return (0, n.jsx)(
                  r.FP,
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
                headerClassName: (0, a.W)(_().header, u),
                isLoading: C.isLoading,
                title: null !== (t = C.title) && void 0 !== t ? t : "",
                maxColumns: 1,
                itemsPerColumn: l,
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
        a = i(9544),
        l = i(90679),
        o = i(38527),
        s = i(3084),
        r = i(84748),
        c = i.n(r);
      let d = () =>
          Array.from({ length: 5 }, (e) =>
            (0, n.jsx)(
              s.DX,
              { variant: o.Lxt.PLAYLIST, className: c().track, isActive: !0 },
              e,
            ),
          ),
        u = (0, a.Pi)((e) => {
          let { className: t, withHeader: i } = e;
          return (0, n.jsxs)("div", {
            className: t,
            children: [
              i &&
                (0, n.jsx)(l.Shimmer, {
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
    70640: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfLikedPage: function () {
          return P;
        },
      });
      var n = i(9753),
        a = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(31014),
        r = i(23881),
        c = i(41055),
        d = i(2570),
        u = i(68106),
        m = i(36084),
        h = i(38527),
        v = i(3084),
        _ = i(66936),
        C = i(33604),
        p = i.n(C),
        g = i(39513),
        x = i(28852),
        b = i(10347),
        y = i.n(b);
      let f = (0, a.Pi)(() => {
          let e = (0, h.s0h)("/non-music");
          return (0, n.jsxs)("div", {
            className: y().root,
            children: [
              (0, n.jsx)("div", {
                className: y().iconBackground,
                children: (0, n.jsx)(x.J, { variant: "like", size: "l" }),
              }),
              (0, n.jsx)(d.Heading, {
                className: y().title,
                variant: "h3",
                size: "xs",
                children: (0, n.jsx)(s.Z, {
                  id: "error-messages.empty-shelf-liked-page-title",
                }),
              }),
              (0, n.jsx)(g.z, {
                onClick: e,
                className: y().button,
                role: "link",
                color: "secondary",
                size: "l",
                radius: "xxxl",
                children: (0, n.jsx)(d.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, n.jsx)(s.Z, {
                    id: "error-messages.empty-shelf-liked-page-link",
                  }),
                }),
              }),
            ],
          });
        }),
        P = (0, a.Pi)(() => {
          let {
              collection: {
                shelf: { liked: e },
              },
            } = (0, h.oR4)(),
            [t, i] = (0, h.zU3)(),
            { formatMessage: a } = (0, o.Z)(),
            C = (0, h.k67)();
          (0, l.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
            (0, h.NOh)(e.isResolved);
          let g = (0, l.useMemo)(
            () => (e.isEmpty ? (0, n.jsx)(f, {}) : (0, n.jsx)(_.X, {})),
            [e.isEmpty],
          );
          return e.isRejected
            ? (0, n.jsx)(u.D, {})
            : (0, n.jsxs)(m.I7, {
                scrollElement: t,
                outerTitle: a({ id: "podcast.shelf-liked-title" }),
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
                    children: [g, (0, n.jsx)(v.$_, { className: p().footer })],
                  }),
                ],
              });
        });
    },
    55742: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfPage: function () {
          return x;
        },
      });
      var n = i(9753),
        a = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(31014),
        r = i(23881),
        c = i(41055),
        d = i(2570),
        u = i(68106),
        m = i(36084),
        h = i(38527),
        v = i(3084),
        _ = i(66936),
        C = i(91077),
        p = i(62876),
        g = i.n(p);
      let x = (0, a.Pi)(() => {
        let {
            collection: { shelf: e },
          } = (0, h.oR4)(),
          [t, i] = (0, h.zU3)(),
          { formatMessage: a } = (0, o.Z)(),
          p = (0, h.k67)();
        return ((0, l.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NOh)(e.isResolved),
        e.isRejected)
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: a({ id: "page.shelf" }),
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
        a = i(9544),
        l = i(98639),
        o = i(80542),
        s = i(31014),
        r = i(23881),
        c = i(41055),
        d = i(2570),
        u = i(68106),
        m = i(36084),
        h = i(38527),
        v = i(3084),
        _ = i(91077),
        C = i(16389),
        p = i.n(C);
      let g = (0, a.Pi)(() => {
        let {
            collection: {
              shelf: { recentlyPlayed: e },
            },
          } = (0, h.oR4)(),
          [t, i] = (0, h.zU3)(),
          { formatMessage: a } = (0, o.Z)(),
          C = (0, h.k67)();
        return ((0, l.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NOh)(e.isResolved),
        e.isRejected)
          ? (0, n.jsx)(u.D, {})
          : (0, n.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: a({ id: "podcast.shelf-recently-played-title" }),
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
    98746: function (e) {
      e.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    88308: function (e) {
      e.exports = {
        root: "PlaylistCard_root__i3pR4",
        controls: "PlaylistCard_controls__Ej8Rz",
        cover: "PlaylistCard_cover__tpK5L",
        coverBlock: "PlaylistCard_coverBlock__1slsN",
        image: "PlaylistCard_image__Li6oy",
        titleLink: "PlaylistCard_titleLink__H8qEc",
        artists: "PlaylistCard_artists__HtVIF",
        artistLink: "PlaylistCard_artistLink__jx3KB",
        playButton: "PlaylistCard_playButton__eaduk",
        likeButton: "PlaylistCard_likeButton__RYXJz",
        menuButton: "PlaylistCard_menuButton__jFcWr",
        pinButton: "PlaylistCard_pinButton__jhWnL",
        trailerButton: "PlaylistCard_trailerButton__Qjg_U",
        control: "PlaylistCard_control__73YUq",
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
    16473: function (e) {
      e.exports = { root: "CollectionDislikesPage_root__Qnohu" };
    },
    78834: function (e) {
      e.exports = {
        root: "CollectionDislikesPageContent_root__3AoS5",
        scrollContainer: "CollectionDislikesPageContent_scrollContainer__px7Vr",
        important: "CollectionDislikesPageContent_important__Oz6io",
        content: "CollectionDislikesPageContent_content__fScA9",
        content_withGrid:
          "CollectionDislikesPageContent_content_withGrid__wcx80",
        content_tracks: "CollectionDislikesPageContent_content_tracks__Hyiz_",
        footer: "CollectionDislikesPageContent_footer__E6nZG",
        item: "CollectionDislikesPageContent_item__aty4k",
        tabPanel: "CollectionDislikesPageContent_tabPanel__5L5T_",
        shimmerItem: "CollectionDislikesPageContent_shimmerItem__FMFR5",
      };
    },
    42485: function (e) {
      e.exports = {
        root: "CollectionDislikesPageEmpty_root__F9g35",
        icon: "CollectionDislikesPageEmpty_icon__hbz5L",
        title: "CollectionDislikesPageEmpty_title__AqUTM",
      };
    },
    6156: function (e) {
      e.exports = {
        root: "CollectionDislikesPageHeader_root__lZ6LT",
        container: "CollectionDislikesPageHeader_container__ACUbW",
        title: "CollectionDislikesPageHeader_title__6h9Km",
        tabs: "CollectionDislikesPageHeader_tabs__gt5AJ",
        tab: "CollectionDislikesPageHeader_tab__bxN5I",
        tabsShimmer: "CollectionDislikesPageHeader_tabsShimmer__akKoq",
        tabShimmer: "CollectionDislikesPageHeader_tabShimmer__0QLuH",
        staticHeader: "CollectionDislikesPageHeader_staticHeader__75rsF",
        important: "CollectionDislikesPageHeader_important__5ZM6D",
        stickyHeader: "CollectionDislikesPageHeader_stickyHeader__cAkxR",
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
        likedBlocks: "CollectionNonMusicPage_likedBlocks__cNqyq",
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
    52593: function (e) {
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
    10347: function (e) {
      e.exports = {
        root: "CollectionShelfLikedPageEmpty_root___9JuU",
        iconBackground: "CollectionShelfLikedPageEmpty_iconBackground__NQFXl",
        title: "CollectionShelfLikedPageEmpty_title__trUBM",
        button: "CollectionShelfLikedPageEmpty_button__jZpBa",
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
