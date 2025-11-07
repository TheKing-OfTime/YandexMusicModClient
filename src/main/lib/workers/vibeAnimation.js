/* rollup-plugin-web-worker-loader */
!(function () {
    'use strict';
    var t;
    function e(t) {
        let e = t[0],
            i = t[1],
            s = t[2];
        return Math.sqrt(e * e + i * i + s * s);
    }
    function i(t, e) {
        return ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t);
    }
    function s(t, e, i) {
        return ((t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t);
    }
    function r(t, e, i) {
        return ((t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t);
    }
    function n(t, e, i) {
        return ((t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t);
    }
    function a(t) {
        let e = t[0],
            i = t[1],
            s = t[2];
        return e * e + i * i + s * s;
    }
    function h(t, e) {
        let i = e[0],
            s = e[1],
            r = e[2],
            n = i * i + s * s + r * r;
        return (n > 0 && (n = 1 / Math.sqrt(n)), (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t);
    }
    function o(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
    }
    function l(t, e, i) {
        let s = e[0],
            r = e[1],
            n = e[2],
            a = i[0],
            h = i[1],
            o = i[2];
        return ((t[0] = r * o - n * h), (t[1] = n * a - s * o), (t[2] = s * h - r * a), t);
    }
    !(function (t) {
        ((t.INIT = 'vibe-animation-worker-init'),
            (t.ERROR = 'vibe-animation-worker-error'),
            (t.LOG = 'vibe-animation-worker-log'),
            (t.UPDATE_LAYOUT = 'vibe-animation-worker-update-layout'),
            (t.APPLY_SETTINGS = 'vibe-animation-worker-apply-settings'),
            (t.IDLE_ANIMATION = 'vibe-animation-worker-idle-animation'),
            (t.PLAY_ANIMATION = 'vibe-animation-worker-play-animation'),
            (t.LIKE_ANIMATION = 'vibe-animation-worker-like-animation'),
            (t.ENABLE = 'vibe-animation-worker-enable'),
            (t.DISABLE = 'vibe-animation-worker-disable'),
            (t.AUDIO_ANALYZER_FREQUENCIES = 'vibe-animation-worker-audio-analyzer-frequencies'),
            (t.UPDATE_ENERGY = 'vibe-animation-worker-update-energy'),
            (t.ENABLE_LITE_ANIMATION = 'vibe-animation-worker-enable-lite-animation'));
    })(t || (t = {}));
    const u = (function () {
        const t = [0, 0, 0],
            e = [0, 0, 0];
        return function (s, r) {
            (i(t, s), i(e, r), h(t, t), h(e, e));
            let n = o(t, e);
            return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
        };
    })();
    class c extends Array {
        constructor(t = 0, e = t, i = t) {
            return (super(t, e, i), this);
        }
        get x() {
            return this[0];
        }
        get y() {
            return this[1];
        }
        get z() {
            return this[2];
        }
        set x(t) {
            this[0] = t;
        }
        set y(t) {
            this[1] = t;
        }
        set z(t) {
            this[2] = t;
        }
        set(t, e = t, i = t) {
            return t.length
                ? this.copy(t)
                : ((function (t, e, i, s) {
                      ((t[0] = e), (t[1] = i), (t[2] = s));
                  })(this, t, e, i),
                  this);
        }
        copy(t) {
            return (i(this, t), this);
        }
        add(t, e) {
            return (e ? s(this, t, e) : s(this, this, t), this);
        }
        sub(t, e) {
            return (e ? r(this, t, e) : r(this, this, t), this);
        }
        multiply(t) {
            var e, i, s;
            return (t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] * s[0]), (e[1] = i[1] * s[1]), (e[2] = i[2] * s[2])) : n(this, this, t), this);
        }
        divide(t) {
            var e, i, s;
            return (t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] / s[0]), (e[1] = i[1] / s[1]), (e[2] = i[2] / s[2])) : n(this, this, 1 / t), this);
        }
        inverse(t = this) {
            var e, i;
            return ((i = t), ((e = this)[0] = 1 / i[0]), (e[1] = 1 / i[1]), (e[2] = 1 / i[2]), this);
        }
        len() {
            return e(this);
        }
        distance(t) {
            return t
                ? (function (t, e) {
                      let i = e[0] - t[0],
                          s = e[1] - t[1],
                          r = e[2] - t[2];
                      return Math.sqrt(i * i + s * s + r * r);
                  })(this, t)
                : e(this);
        }
        squaredLen() {
            return a(this);
        }
        squaredDistance(t) {
            return t
                ? (function (t, e) {
                      let i = e[0] - t[0],
                          s = e[1] - t[1],
                          r = e[2] - t[2];
                      return i * i + s * s + r * r;
                  })(this, t)
                : a(this);
        }
        negate(t = this) {
            var e, i;
            return ((i = t), ((e = this)[0] = -i[0]), (e[1] = -i[1]), (e[2] = -i[2]), this);
        }
        cross(t, e) {
            return (e ? l(this, t, e) : l(this, this, t), this);
        }
        scale(t) {
            return (n(this, this, t), this);
        }
        normalize() {
            return (h(this, this), this);
        }
        dot(t) {
            return o(this, t);
        }
        equals(t) {
            return ((i = t), (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2]);
            var e, i;
        }
        applyMatrix3(t) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2];
                    ((t[0] = s * i[0] + r * i[3] + n * i[6]), (t[1] = s * i[1] + r * i[4] + n * i[7]), (t[2] = s * i[2] + r * i[5] + n * i[8]));
                })(this, this, t),
                this
            );
        }
        applyMatrix4(t) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = i[3] * s + i[7] * r + i[11] * n + i[15];
                    ((a = a || 1),
                        (t[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / a),
                        (t[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / a),
                        (t[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / a));
                })(this, this, t),
                this
            );
        }
        scaleRotateMatrix4(t) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = i[3] * s + i[7] * r + i[11] * n + i[15];
                    ((a = a || 1),
                        (t[0] = (i[0] * s + i[4] * r + i[8] * n) / a),
                        (t[1] = (i[1] * s + i[5] * r + i[9] * n) / a),
                        (t[2] = (i[2] * s + i[6] * r + i[10] * n) / a));
                })(this, this, t),
                this
            );
        }
        applyQuaternion(t) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = i[0],
                        h = i[1],
                        o = i[2],
                        l = h * n - o * r,
                        u = o * s - a * n,
                        c = a * r - h * s,
                        d = h * c - o * u,
                        g = o * l - a * c,
                        p = a * u - h * l,
                        f = 2 * i[3];
                    ((l *= f), (u *= f), (c *= f), (d *= 2), (g *= 2), (p *= 2), (t[0] = s + l + d), (t[1] = r + u + g), (t[2] = n + c + p));
                })(this, this, t),
                this
            );
        }
        angle(t) {
            return u(this, t);
        }
        lerp(t, e) {
            return (
                (function (t, e, i, s) {
                    let r = e[0],
                        n = e[1],
                        a = e[2];
                    ((t[0] = r + s * (i[0] - r)), (t[1] = n + s * (i[1] - n)), (t[2] = a + s * (i[2] - a)));
                })(this, this, t, e),
                this
            );
        }
        smoothLerp(t, e, i) {
            return (
                (function (t, e, i, s, r) {
                    const n = Math.exp(-s * r);
                    let a = e[0],
                        h = e[1],
                        o = e[2];
                    ((t[0] = i[0] + (a - i[0]) * n), (t[1] = i[1] + (h - i[1]) * n), (t[2] = i[2] + (o - i[2]) * n));
                })(this, this, t, e, i),
                this
            );
        }
        clone() {
            return new c(this[0], this[1], this[2]);
        }
        fromArray(t, e = 0) {
            return ((this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this);
        }
        toArray(t = [], e = 0) {
            return ((t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t);
        }
        transformDirection(t) {
            const e = this[0],
                i = this[1],
                s = this[2];
            return (
                (this[0] = t[0] * e + t[4] * i + t[8] * s),
                (this[1] = t[1] * e + t[5] * i + t[9] * s),
                (this[2] = t[2] * e + t[6] * i + t[10] * s),
                this.normalize()
            );
        }
    }
    const d = new c();
    let g = 1,
        p = 1,
        f = !1;
    class m {
        constructor(t, e = {}) {
            (t.canvas || console.error('gl not passed as first argument to Geometry'),
                (this.gl = t),
                (this.attributes = e),
                (this.id = g++),
                (this.VAOs = {}),
                (this.drawRange = { start: 0, count: 0 }),
                (this.instancedCount = 0),
                this.gl.renderer.bindVertexArray(null),
                (this.gl.renderer.currentGeometry = null),
                (this.glState = this.gl.renderer.state));
            for (let t in e) this.addAttribute(t, e[t]);
        }
        addAttribute(t, e) {
            if (
                ((this.attributes[t] = e),
                (e.id = p++),
                (e.size = e.size || 1),
                (e.type =
                    e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT)),
                (e.target = 'index' === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
                (e.normalized = e.normalized || !1),
                (e.stride = e.stride || 0),
                (e.offset = e.offset || 0),
                (e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size)),
                (e.divisor = e.instanced || 0),
                (e.needsUpdate = !1),
                (e.usage = e.usage || this.gl.STATIC_DRAW),
                e.buffer || this.updateAttribute(e),
                e.divisor)
            ) {
                if (((this.isInstanced = !0), this.instancedCount && this.instancedCount !== e.count * e.divisor))
                    return (
                        console.warn('geometry has multiple instanced buffers of different length'),
                        (this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor))
                    );
                this.instancedCount = e.count * e.divisor;
            } else 'index' === t ? (this.drawRange.count = e.count) : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count));
        }
        updateAttribute(t) {
            const e = !t.buffer;
            (e && (t.buffer = this.gl.createBuffer()),
                this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), (this.glState.boundBuffer = t.buffer)),
                e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data),
                (t.needsUpdate = !1));
        }
        setIndex(t) {
            this.addAttribute('index', t);
        }
        setDrawRange(t, e) {
            ((this.drawRange.start = t), (this.drawRange.count = e));
        }
        setInstancedCount(t) {
            this.instancedCount = t;
        }
        createVAO(t) {
            ((this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t));
        }
        bindAttributes(t) {
            (t.attributeLocations.forEach((t, { name: e, type: i }) => {
                if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
                const s = this.attributes[e];
                (this.gl.bindBuffer(s.target, s.buffer), (this.glState.boundBuffer = s.buffer));
                let r = 1;
                (35674 === i && (r = 2), 35675 === i && (r = 3), 35676 === i && (r = 4));
                const n = s.size / r,
                    a = 1 === r ? 0 : r * r * 4,
                    h = 1 === r ? 0 : 4 * r;
                for (let e = 0; e < r; e++)
                    (this.gl.vertexAttribPointer(t + e, n, s.type, s.normalized, s.stride + a, s.offset + e * h),
                        this.gl.enableVertexAttribArray(t + e),
                        this.gl.renderer.vertexAttribDivisor(t + e, s.divisor));
            }),
                this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer));
        }
        draw({ program: t, mode: e = this.gl.TRIANGLES }) {
            (this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` &&
                (this.VAOs[t.attributeOrder] || this.createVAO(t),
                this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
                (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
                t.attributeLocations.forEach((t, { name: e }) => {
                    const i = this.attributes[e];
                    i.needsUpdate && this.updateAttribute(i);
                }));
            let i = 2;
            (this.attributes.index?.type === this.gl.UNSIGNED_INT && (i = 4),
                this.isInstanced
                    ? this.attributes.index
                        ? this.gl.renderer.drawElementsInstanced(
                              e,
                              this.drawRange.count,
                              this.attributes.index.type,
                              this.attributes.index.offset + this.drawRange.start * i,
                              this.instancedCount,
                          )
                        : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount)
                    : this.attributes.index
                      ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * i)
                      : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count));
        }
        getPosition() {
            const t = this.attributes.position;
            return t.data ? t : f ? void 0 : (console.warn('No position buffer data found to compute bounds'), (f = !0));
        }
        computeBoundingBox(t) {
            t || (t = this.getPosition());
            const e = t.data,
                i = t.size;
            this.bounds || (this.bounds = { min: new c(), max: new c(), center: new c(), scale: new c(), radius: 1 / 0 });
            const s = this.bounds.min,
                r = this.bounds.max,
                n = this.bounds.center,
                a = this.bounds.scale;
            (s.set(1 / 0), r.set(-1 / 0));
            for (let t = 0, n = e.length; t < n; t += i) {
                const i = e[t],
                    n = e[t + 1],
                    a = e[t + 2];
                ((s.x = Math.min(i, s.x)),
                    (s.y = Math.min(n, s.y)),
                    (s.z = Math.min(a, s.z)),
                    (r.x = Math.max(i, r.x)),
                    (r.y = Math.max(n, r.y)),
                    (r.z = Math.max(a, r.z)));
            }
            (a.sub(r, s), n.add(s, r).divide(2));
        }
        computeBoundingSphere(t) {
            t || (t = this.getPosition());
            const e = t.data,
                i = t.size;
            this.bounds || this.computeBoundingBox(t);
            let s = 0;
            for (let t = 0, r = e.length; t < r; t += i) (d.fromArray(e, t), (s = Math.max(s, this.bounds.center.squaredDistance(d))));
            this.bounds.radius = Math.sqrt(s);
        }
        remove() {
            for (let t in this.VAOs) (this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t]);
            for (let t in this.attributes) (this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]);
        }
    }
    let v = 1;
    const x = {};
    class b {
        constructor(
            t,
            {
                vertex: e,
                fragment: i,
                uniforms: s = {},
                transparent: r = !1,
                cullFace: n = t.BACK,
                frontFace: a = t.CCW,
                depthTest: h = !0,
                depthWrite: o = !0,
                depthFunc: l = t.LEQUAL,
            } = {},
        ) {
            (t.canvas || console.error('gl not passed as first argument to Program'),
                (this.gl = t),
                (this.uniforms = s),
                (this.id = v++),
                e || console.warn('vertex shader not supplied'),
                i || console.warn('fragment shader not supplied'),
                (this.transparent = r),
                (this.cullFace = n),
                (this.frontFace = a),
                (this.depthTest = h),
                (this.depthWrite = o),
                (this.depthFunc = l),
                (this.blendFunc = {}),
                (this.blendEquation = {}),
                (this.stencilFunc = {}),
                (this.stencilOp = {}),
                this.transparent &&
                    !this.blendFunc.src &&
                    (this.gl.renderer.premultipliedAlpha
                        ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
                        : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
                (this.vertexShader = t.createShader(t.VERTEX_SHADER)),
                (this.fragmentShader = t.createShader(t.FRAGMENT_SHADER)),
                (this.program = t.createProgram()),
                t.attachShader(this.program, this.vertexShader),
                t.attachShader(this.program, this.fragmentShader),
                this.setShaders({ vertex: e, fragment: i }));
        }
        setShaders({ vertex: t, fragment: e }) {
            if (
                (t &&
                    (this.gl.shaderSource(this.vertexShader, t),
                    this.gl.compileShader(this.vertexShader),
                    '' !== this.gl.getShaderInfoLog(this.vertexShader) && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}\nVertex Shader\n${A(t)}`)),
                e &&
                    (this.gl.shaderSource(this.fragmentShader, e),
                    this.gl.compileShader(this.fragmentShader),
                    '' !== this.gl.getShaderInfoLog(this.fragmentShader) && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}\nFragment Shader\n${A(e)}`)),
                this.gl.linkProgram(this.program),
                !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
            )
                return console.warn(this.gl.getProgramInfoLog(this.program));
            this.uniformLocations = new Map();
            let i = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
            for (let t = 0; t < i; t++) {
                let e = this.gl.getActiveUniform(this.program, t);
                this.uniformLocations.set(e, this.gl.getUniformLocation(this.program, e.name));
                const i = e.name.match(/(\w+)/g);
                ((e.uniformName = i[0]), (e.nameComponents = i.slice(1)));
            }
            this.attributeLocations = new Map();
            const s = [],
                r = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
            for (let t = 0; t < r; t++) {
                const e = this.gl.getActiveAttrib(this.program, t),
                    i = this.gl.getAttribLocation(this.program, e.name);
                -1 !== i && ((s[i] = e.name), this.attributeLocations.set(e, i));
            }
            this.attributeOrder = s.join('');
        }
        setBlendFunc(t, e, i, s) {
            ((this.blendFunc.src = t), (this.blendFunc.dst = e), (this.blendFunc.srcAlpha = i), (this.blendFunc.dstAlpha = s), t && (this.transparent = !0));
        }
        setBlendEquation(t, e) {
            ((this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e));
        }
        setStencilFunc(t, e, i) {
            ((this.stencilRef = e), (this.stencilFunc.func = t), (this.stencilFunc.ref = e), (this.stencilFunc.mask = i));
        }
        setStencilOp(t, e, i) {
            ((this.stencilOp.stencilFail = t), (this.stencilOp.depthFail = e), (this.stencilOp.depthPass = i));
        }
        applyState() {
            (this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
                this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
                this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
                this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
                this.gl.renderer.setFrontFace(this.frontFace),
                this.gl.renderer.setDepthMask(this.depthWrite),
                this.gl.renderer.setDepthFunc(this.depthFunc),
                this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
                this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha),
                this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST),
                this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask),
                this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass));
        }
        use({ flipFaces: t = !1 } = {}) {
            let e = -1;
            (this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), (this.gl.renderer.state.currentProgram = this.id)),
                this.uniformLocations.forEach((t, i) => {
                    let s = this.uniforms[i.uniformName];
                    for (const t of i.nameComponents) {
                        if (!s) break;
                        if (!(t in s)) {
                            if (Array.isArray(s.value)) break;
                            s = void 0;
                            break;
                        }
                        s = s[t];
                    }
                    if (!s) return _(`Active uniform ${i.name} has not been supplied`);
                    if (s && void 0 === s.value) return _(`${i.name} uniform is missing a value parameter`);
                    if (s.value.texture) return ((e += 1), s.value.update(e), E(this.gl, i.type, t, e));
                    if (s.value.length && s.value[0].texture) {
                        const r = [];
                        return (
                            s.value.forEach((t) => {
                                ((e += 1), t.update(e), r.push(e));
                            }),
                            E(this.gl, i.type, t, r)
                        );
                    }
                    E(this.gl, i.type, t, s.value);
                }),
                this.applyState(),
                t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW));
        }
        remove() {
            this.gl.deleteProgram(this.program);
        }
    }
    function E(t, e, i, s) {
        s = s.length
            ? (function (t) {
                  const e = t.length,
                      i = t[0].length;
                  if (void 0 === i) return t;
                  const s = e * i;
                  let r = x[s];
                  r || (x[s] = r = new Float32Array(s));
                  for (let s = 0; s < e; s++) r.set(t[s], s * i);
                  return r;
              })(s)
            : s;
        const r = t.renderer.state.uniformLocations.get(i);
        if (s.length)
            if (void 0 === r || r.length !== s.length) t.renderer.state.uniformLocations.set(i, s.slice(0));
            else {
                if (
                    (function (t, e) {
                        if (t.length !== e.length) return !1;
                        for (let i = 0, s = t.length; i < s; i++) if (t[i] !== e[i]) return !1;
                        return !0;
                    })(r, s)
                )
                    return;
                (r.set
                    ? r.set(s)
                    : (function (t, e) {
                          for (let i = 0, s = t.length; i < s; i++) t[i] = e[i];
                      })(r, s),
                    t.renderer.state.uniformLocations.set(i, r));
            }
        else {
            if (r === s) return;
            t.renderer.state.uniformLocations.set(i, s);
        }
        switch (e) {
            case 5126:
                return s.length ? t.uniform1fv(i, s) : t.uniform1f(i, s);
            case 35664:
                return t.uniform2fv(i, s);
            case 35665:
                return t.uniform3fv(i, s);
            case 35666:
                return t.uniform4fv(i, s);
            case 35670:
            case 5124:
            case 35678:
            case 36306:
            case 35680:
            case 36289:
                return s.length ? t.uniform1iv(i, s) : t.uniform1i(i, s);
            case 35671:
            case 35667:
                return t.uniform2iv(i, s);
            case 35672:
            case 35668:
                return t.uniform3iv(i, s);
            case 35673:
            case 35669:
                return t.uniform4iv(i, s);
            case 35674:
                return t.uniformMatrix2fv(i, !1, s);
            case 35675:
                return t.uniformMatrix3fv(i, !1, s);
            case 35676:
                return t.uniformMatrix4fv(i, !1, s);
        }
    }
    function A(t) {
        let e = t.split('\n');
        for (let t = 0; t < e.length; t++) e[t] = t + 1 + ': ' + e[t];
        return e.join('\n');
    }
    let M = 0;
    function _(t) {
        M > 100 || (console.warn(t), M++, M > 100 && console.warn('More than 100 program warnings - stopping logs.'));
    }
    const y = new c();
    let S = 1;
    class w {
        constructor({
            canvas: t = document.createElement('canvas'),
            width: e = 300,
            height: i = 150,
            dpr: s = 1,
            alpha: r = !1,
            depth: n = !0,
            stencil: a = !1,
            antialias: h = !1,
            premultipliedAlpha: o = !1,
            preserveDrawingBuffer: l = !1,
            powerPreference: u = 'default',
            autoClear: c = !0,
            webgl: d = 2,
        } = {}) {
            const g = { alpha: r, depth: n, stencil: a, antialias: h, premultipliedAlpha: o, preserveDrawingBuffer: l, powerPreference: u };
            ((this.dpr = s),
                (this.alpha = r),
                (this.color = !0),
                (this.depth = n),
                (this.stencil = a),
                (this.premultipliedAlpha = o),
                (this.autoClear = c),
                (this.id = S++),
                2 === d && (this.gl = t.getContext('webgl2', g)),
                (this.isWebgl2 = !!this.gl),
                this.gl || (this.gl = t.getContext('webgl', g)),
                this.gl || console.error('unable to create webgl context'),
                (this.gl.renderer = this),
                this.setSize(e, i),
                (this.state = {}),
                (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
                (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
                (this.state.cullFace = !1),
                (this.state.frontFace = this.gl.CCW),
                (this.state.depthMask = !0),
                (this.state.depthFunc = this.gl.LEQUAL),
                (this.state.premultiplyAlpha = !1),
                (this.state.flipY = !1),
                (this.state.unpackAlignment = 4),
                (this.state.framebuffer = null),
                (this.state.viewport = { x: 0, y: 0, width: null, height: null }),
                (this.state.textureUnits = []),
                (this.state.activeTextureUnit = 0),
                (this.state.boundBuffer = null),
                (this.state.uniformLocations = new Map()),
                (this.state.currentProgram = null),
                (this.extensions = {}),
                this.isWebgl2
                    ? (this.getExtension('EXT_color_buffer_float'), this.getExtension('OES_texture_float_linear'))
                    : (this.getExtension('OES_texture_float'),
                      this.getExtension('OES_texture_float_linear'),
                      this.getExtension('OES_texture_half_float'),
                      this.getExtension('OES_texture_half_float_linear'),
                      this.getExtension('OES_element_index_uint'),
                      this.getExtension('OES_standard_derivatives'),
                      this.getExtension('EXT_sRGB'),
                      this.getExtension('WEBGL_depth_texture'),
                      this.getExtension('WEBGL_draw_buffers')),
                this.getExtension('WEBGL_compressed_texture_astc'),
                this.getExtension('EXT_texture_compression_bptc'),
                this.getExtension('WEBGL_compressed_texture_s3tc'),
                this.getExtension('WEBGL_compressed_texture_etc1'),
                this.getExtension('WEBGL_compressed_texture_pvrtc'),
                this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
                (this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE')),
                (this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE')),
                (this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE')),
                (this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES')),
                (this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES')),
                (this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES')),
                (this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL')),
                (this.parameters = {}),
                (this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                (this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic')
                    ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    : 0));
        }
        setSize(t, e) {
            ((this.width = t),
                (this.height = e),
                (this.gl.canvas.width = t * this.dpr),
                (this.gl.canvas.height = e * this.dpr),
                this.gl.canvas.style && Object.assign(this.gl.canvas.style, { width: t + 'px', height: e + 'px' }));
        }
        setViewport(t, e, i = 0, s = 0) {
            (this.state.viewport.width === t && this.state.viewport.height === e) ||
                ((this.state.viewport.width = t),
                (this.state.viewport.height = e),
                (this.state.viewport.x = i),
                (this.state.viewport.y = s),
                this.gl.viewport(i, s, t, e));
        }
        setScissor(t, e, i = 0, s = 0) {
            this.gl.scissor(i, s, t, e);
        }
        enable(t) {
            !0 !== this.state[t] && (this.gl.enable(t), (this.state[t] = !0));
        }
        disable(t) {
            !1 !== this.state[t] && (this.gl.disable(t), (this.state[t] = !1));
        }
        setBlendFunc(t, e, i, s) {
            (this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === s) ||
                ((this.state.blendFunc.src = t),
                (this.state.blendFunc.dst = e),
                (this.state.blendFunc.srcAlpha = i),
                (this.state.blendFunc.dstAlpha = s),
                void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, s) : this.gl.blendFunc(t, e));
        }
        setBlendEquation(t, e) {
            ((t = t || this.gl.FUNC_ADD),
                (this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) ||
                    ((this.state.blendEquation.modeRGB = t),
                    (this.state.blendEquation.modeAlpha = e),
                    void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t)));
        }
        setCullFace(t) {
            this.state.cullFace !== t && ((this.state.cullFace = t), this.gl.cullFace(t));
        }
        setFrontFace(t) {
            this.state.frontFace !== t && ((this.state.frontFace = t), this.gl.frontFace(t));
        }
        setDepthMask(t) {
            this.state.depthMask !== t && ((this.state.depthMask = t), this.gl.depthMask(t));
        }
        setDepthFunc(t) {
            this.state.depthFunc !== t && ((this.state.depthFunc = t), this.gl.depthFunc(t));
        }
        setStencilMask(t) {
            this.state.stencilMask !== t && ((this.state.stencilMask = t), this.gl.stencilMask(t));
        }
        setStencilFunc(t, e, i) {
            (this.state.stencilFunc === t && this.state.stencilRef === e && this.state.stencilFuncMask === i) ||
                ((this.state.stencilFunc = t || this.gl.ALWAYS),
                (this.state.stencilRef = e || 0),
                (this.state.stencilFuncMask = i || 0),
                this.gl.stencilFunc(t || this.gl.ALWAYS, e || 0, i || 0));
        }
        setStencilOp(t, e, i) {
            (this.state.stencilFail === t && this.state.stencilDepthFail === e && this.state.stencilDepthPass === i) ||
                ((this.state.stencilFail = t), (this.state.stencilDepthFail = e), (this.state.stencilDepthPass = i), this.gl.stencilOp(t, e, i));
        }
        activeTexture(t) {
            this.state.activeTextureUnit !== t && ((this.state.activeTextureUnit = t), this.gl.activeTexture(this.gl.TEXTURE0 + t));
        }
        bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: e = null } = {}) {
            this.state.framebuffer !== e && ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
        }
        getExtension(t, e, i) {
            return e && this.gl[e]
                ? this.gl[e].bind(this.gl)
                : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
                  e ? (this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null) : this.extensions[t]);
        }
        sortOpaque(t, e) {
            return t.renderOrder !== e.renderOrder
                ? t.renderOrder - e.renderOrder
                : t.program.id !== e.program.id
                  ? t.program.id - e.program.id
                  : t.zDepth !== e.zDepth
                    ? t.zDepth - e.zDepth
                    : e.id - t.id;
        }
        sortTransparent(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id;
        }
        sortUI(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id;
        }
        getRenderList({ scene: t, camera: e, frustumCull: i, sort: s }) {
            let r = [];
            if (
                (e && i && e.updateFrustum(),
                t.traverse((t) => {
                    if (!t.visible) return !0;
                    t.draw && ((i && t.frustumCulled && e && !e.frustumIntersectsMesh(t)) || r.push(t));
                }),
                s)
            ) {
                const t = [],
                    i = [],
                    s = [];
                (r.forEach((r) => {
                    (r.program.transparent ? (r.program.depthTest ? i.push(r) : s.push(r)) : t.push(r),
                        (r.zDepth = 0),
                        0 === r.renderOrder && r.program.depthTest && e && (r.worldMatrix.getTranslation(y), y.applyMatrix4(e.projectionViewMatrix), (r.zDepth = y.z)));
                }),
                    t.sort(this.sortOpaque),
                    i.sort(this.sortTransparent),
                    s.sort(this.sortUI),
                    (r = t.concat(i, s)));
            }
            return r;
        }
        render({ scene: t, camera: e, target: i = null, update: s = !0, sort: r = !0, frustumCull: n = !0, clear: a }) {
            (null === i
                ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr))
                : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)),
                (a || (this.autoClear && !1 !== a)) &&
                    (!this.depth || (i && !i.depth) || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
                    (this.stencil || !i || i.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)),
                    this.gl.clear(
                        (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0),
                    )),
                s && t.updateMatrixWorld(),
                e && e.updateMatrixWorld());
            this.getRenderList({ scene: t, camera: e, frustumCull: n, sort: r }).forEach((t) => {
                t.draw({ camera: e });
            });
        }
    }
    function R(t, e, i) {
        let s = e[0],
            r = e[1],
            n = e[2],
            a = e[3],
            h = i[0],
            o = i[1],
            l = i[2],
            u = i[3];
        return (
            (t[0] = s * u + a * h + r * l - n * o),
            (t[1] = r * u + a * o + n * h - s * l),
            (t[2] = n * u + a * l + s * o - r * h),
            (t[3] = a * u - s * h - r * o - n * l),
            t
        );
    }
    const T = function (t, e) {
            return ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t);
        },
        F = function (t, e, i, s, r) {
            return ((t[0] = e), (t[1] = i), (t[2] = s), (t[3] = r), t);
        },
        C = function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        },
        I = function (t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = i * i + s * s + r * r + n * n;
            return (a > 0 && (a = 1 / Math.sqrt(a)), (t[0] = i * a), (t[1] = s * a), (t[2] = r * a), (t[3] = n * a), t);
        };
    class O extends Array {
        constructor(t = 0, e = 0, i = 0, s = 1) {
            (super(t, e, i, s), (this.onChange = () => {}), (this._target = this));
            const r = ['0', '1', '2', '3'];
            return new Proxy(this, {
                set(t, e) {
                    const i = Reflect.set(...arguments);
                    return (i && r.includes(e) && t.onChange(), i);
                },
            });
        }
        get x() {
            return this[0];
        }
        get y() {
            return this[1];
        }
        get z() {
            return this[2];
        }
        get w() {
            return this[3];
        }
        set x(t) {
            ((this._target[0] = t), this.onChange());
        }
        set y(t) {
            ((this._target[1] = t), this.onChange());
        }
        set z(t) {
            ((this._target[2] = t), this.onChange());
        }
        set w(t) {
            ((this._target[3] = t), this.onChange());
        }
        identity() {
            var t;
            return (((t = this._target)[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), this.onChange(), this);
        }
        set(t, e, i, s) {
            return t.length ? this.copy(t) : (F(this._target, t, e, i, s), this.onChange(), this);
        }
        rotateX(t) {
            return (
                (function (t, e, i) {
                    i *= 0.5;
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        h = Math.sin(i),
                        o = Math.cos(i);
                    ((t[0] = s * o + a * h), (t[1] = r * o + n * h), (t[2] = n * o - r * h), (t[3] = a * o - s * h));
                })(this._target, this._target, t),
                this.onChange(),
                this
            );
        }
        rotateY(t) {
            return (
                (function (t, e, i) {
                    i *= 0.5;
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        h = Math.sin(i),
                        o = Math.cos(i);
                    ((t[0] = s * o - n * h), (t[1] = r * o + a * h), (t[2] = n * o + s * h), (t[3] = a * o - r * h));
                })(this._target, this._target, t),
                this.onChange(),
                this
            );
        }
        rotateZ(t) {
            return (
                (function (t, e, i) {
                    i *= 0.5;
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        h = Math.sin(i),
                        o = Math.cos(i);
                    ((t[0] = s * o + r * h), (t[1] = r * o - s * h), (t[2] = n * o + a * h), (t[3] = a * o - n * h));
                })(this._target, this._target, t),
                this.onChange(),
                this
            );
        }
        inverse(t = this._target) {
            return (
                (function (t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = i * i + s * s + r * r + n * n,
                        h = a ? 1 / a : 0;
                    ((t[0] = -i * h), (t[1] = -s * h), (t[2] = -r * h), (t[3] = n * h));
                })(this._target, t),
                this.onChange(),
                this
            );
        }
        conjugate(t = this._target) {
            var e, i;
            return ((e = this._target), (i = t), (e[0] = -i[0]), (e[1] = -i[1]), (e[2] = -i[2]), (e[3] = i[3]), this.onChange(), this);
        }
        copy(t) {
            return (T(this._target, t), this.onChange(), this);
        }
        normalize(t = this._target) {
            return (I(this._target, t), this.onChange(), this);
        }
        multiply(t, e) {
            return (e ? R(this._target, t, e) : R(this._target, this._target, t), this.onChange(), this);
        }
        dot(t) {
            return C(this._target, t);
        }
        fromMatrix3(t) {
            return (
                (function (t, e) {
                    let i,
                        s = e[0] + e[4] + e[8];
                    if (s > 0)
                        ((i = Math.sqrt(s + 1)), (t[3] = 0.5 * i), (i = 0.5 / i), (t[0] = (e[5] - e[7]) * i), (t[1] = (e[6] - e[2]) * i), (t[2] = (e[1] - e[3]) * i));
                    else {
                        let s = 0;
                        (e[4] > e[0] && (s = 1), e[8] > e[3 * s + s] && (s = 2));
                        let r = (s + 1) % 3,
                            n = (s + 2) % 3;
                        ((i = Math.sqrt(e[3 * s + s] - e[3 * r + r] - e[3 * n + n] + 1)),
                            (t[s] = 0.5 * i),
                            (i = 0.5 / i),
                            (t[3] = (e[3 * r + n] - e[3 * n + r]) * i),
                            (t[r] = (e[3 * r + s] + e[3 * s + r]) * i),
                            (t[n] = (e[3 * n + s] + e[3 * s + n]) * i));
                    }
                })(this._target, t),
                this.onChange(),
                this
            );
        }
        fromEuler(t, e) {
            return (
                (function (t, e, i = 'YXZ') {
                    let s = Math.sin(0.5 * e[0]),
                        r = Math.cos(0.5 * e[0]),
                        n = Math.sin(0.5 * e[1]),
                        a = Math.cos(0.5 * e[1]),
                        h = Math.sin(0.5 * e[2]),
                        o = Math.cos(0.5 * e[2]);
                    'XYZ' === i
                        ? ((t[0] = s * a * o + r * n * h), (t[1] = r * n * o - s * a * h), (t[2] = r * a * h + s * n * o), (t[3] = r * a * o - s * n * h))
                        : 'YXZ' === i
                          ? ((t[0] = s * a * o + r * n * h), (t[1] = r * n * o - s * a * h), (t[2] = r * a * h - s * n * o), (t[3] = r * a * o + s * n * h))
                          : 'ZXY' === i
                            ? ((t[0] = s * a * o - r * n * h), (t[1] = r * n * o + s * a * h), (t[2] = r * a * h + s * n * o), (t[3] = r * a * o - s * n * h))
                            : 'ZYX' === i
                              ? ((t[0] = s * a * o - r * n * h), (t[1] = r * n * o + s * a * h), (t[2] = r * a * h - s * n * o), (t[3] = r * a * o + s * n * h))
                              : 'YZX' === i
                                ? ((t[0] = s * a * o + r * n * h), (t[1] = r * n * o + s * a * h), (t[2] = r * a * h - s * n * o), (t[3] = r * a * o - s * n * h))
                                : 'XZY' === i &&
                                  ((t[0] = s * a * o - r * n * h), (t[1] = r * n * o - s * a * h), (t[2] = r * a * h + s * n * o), (t[3] = r * a * o + s * n * h));
                })(this._target, t, t.order),
                e || this.onChange(),
                this
            );
        }
        fromAxisAngle(t, e) {
            return (
                (function (t, e, i) {
                    i *= 0.5;
                    let s = Math.sin(i);
                    ((t[0] = s * e[0]), (t[1] = s * e[1]), (t[2] = s * e[2]), (t[3] = Math.cos(i)));
                })(this._target, t, e),
                this.onChange(),
                this
            );
        }
        slerp(t, e) {
            return (
                (function (t, e, i, s) {
                    let r,
                        n,
                        a,
                        h,
                        o,
                        l = e[0],
                        u = e[1],
                        c = e[2],
                        d = e[3],
                        g = i[0],
                        p = i[1],
                        f = i[2],
                        m = i[3];
                    ((n = l * g + u * p + c * f + d * m),
                        n < 0 && ((n = -n), (g = -g), (p = -p), (f = -f), (m = -m)),
                        1 - n > 1e-6 ? ((r = Math.acos(n)), (a = Math.sin(r)), (h = Math.sin((1 - s) * r) / a), (o = Math.sin(s * r) / a)) : ((h = 1 - s), (o = s)),
                        (t[0] = h * l + o * g),
                        (t[1] = h * u + o * p),
                        (t[2] = h * c + o * f),
                        (t[3] = h * d + o * m));
                })(this._target, this._target, t, e),
                this.onChange(),
                this
            );
        }
        fromArray(t, e = 0) {
            return ((this._target[0] = t[e]), (this._target[1] = t[e + 1]), (this._target[2] = t[e + 2]), (this._target[3] = t[e + 3]), this.onChange(), this);
        }
        toArray(t = [], e = 0) {
            return ((t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), (t[e + 3] = this[3]), t);
        }
    }
    function L(t) {
        let e = t[0],
            i = t[1],
            s = t[2],
            r = t[3],
            n = t[4],
            a = t[5],
            h = t[6],
            o = t[7],
            l = t[8],
            u = t[9],
            c = t[10],
            d = t[11],
            g = t[12],
            p = t[13],
            f = t[14],
            m = t[15];
        return (
            (e * a - i * n) * (c * m - d * f) -
            (e * h - s * n) * (u * m - d * p) +
            (e * o - r * n) * (u * f - c * p) +
            (i * h - s * a) * (l * m - d * g) -
            (i * o - r * a) * (l * f - c * g) +
            (s * o - r * h) * (l * p - u * g)
        );
    }
    function z(t, e, i) {
        let s = e[0],
            r = e[1],
            n = e[2],
            a = e[3],
            h = e[4],
            o = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            d = e[9],
            g = e[10],
            p = e[11],
            f = e[12],
            m = e[13],
            v = e[14],
            x = e[15],
            b = i[0],
            E = i[1],
            A = i[2],
            M = i[3];
        return (
            (t[0] = b * s + E * h + A * c + M * f),
            (t[1] = b * r + E * o + A * d + M * m),
            (t[2] = b * n + E * l + A * g + M * v),
            (t[3] = b * a + E * u + A * p + M * x),
            (b = i[4]),
            (E = i[5]),
            (A = i[6]),
            (M = i[7]),
            (t[4] = b * s + E * h + A * c + M * f),
            (t[5] = b * r + E * o + A * d + M * m),
            (t[6] = b * n + E * l + A * g + M * v),
            (t[7] = b * a + E * u + A * p + M * x),
            (b = i[8]),
            (E = i[9]),
            (A = i[10]),
            (M = i[11]),
            (t[8] = b * s + E * h + A * c + M * f),
            (t[9] = b * r + E * o + A * d + M * m),
            (t[10] = b * n + E * l + A * g + M * v),
            (t[11] = b * a + E * u + A * p + M * x),
            (b = i[12]),
            (E = i[13]),
            (A = i[14]),
            (M = i[15]),
            (t[12] = b * s + E * h + A * c + M * f),
            (t[13] = b * r + E * o + A * d + M * m),
            (t[14] = b * n + E * l + A * g + M * v),
            (t[15] = b * a + E * u + A * p + M * x),
            t
        );
    }
    function k(t, e) {
        let i = e[0],
            s = e[1],
            r = e[2],
            n = e[4],
            a = e[5],
            h = e[6],
            o = e[8],
            l = e[9],
            u = e[10];
        return ((t[0] = Math.hypot(i, s, r)), (t[1] = Math.hypot(n, a, h)), (t[2] = Math.hypot(o, l, u)), t);
    }
    const B = (function () {
        const t = [1, 1, 1];
        return function (e, i) {
            let s = t;
            k(s, i);
            let r = 1 / s[0],
                n = 1 / s[1],
                a = 1 / s[2],
                h = i[0] * r,
                o = i[1] * n,
                l = i[2] * a,
                u = i[4] * r,
                c = i[5] * n,
                d = i[6] * a,
                g = i[8] * r,
                p = i[9] * n,
                f = i[10] * a,
                m = h + c + f,
                v = 0;
            return (
                m > 0
                    ? ((v = 2 * Math.sqrt(m + 1)), (e[3] = 0.25 * v), (e[0] = (d - p) / v), (e[1] = (g - l) / v), (e[2] = (o - u) / v))
                    : h > c && h > f
                      ? ((v = 2 * Math.sqrt(1 + h - c - f)), (e[3] = (d - p) / v), (e[0] = 0.25 * v), (e[1] = (o + u) / v), (e[2] = (g + l) / v))
                      : c > f
                        ? ((v = 2 * Math.sqrt(1 + c - h - f)), (e[3] = (g - l) / v), (e[0] = (o + u) / v), (e[1] = 0.25 * v), (e[2] = (d + p) / v))
                        : ((v = 2 * Math.sqrt(1 + f - h - c)), (e[3] = (o - u) / v), (e[0] = (g + l) / v), (e[1] = (d + p) / v), (e[2] = 0.25 * v)),
                e
            );
        };
    })();
    function N(t, e, i) {
        return (
            (t[0] = e[0] + i[0]),
            (t[1] = e[1] + i[1]),
            (t[2] = e[2] + i[2]),
            (t[3] = e[3] + i[3]),
            (t[4] = e[4] + i[4]),
            (t[5] = e[5] + i[5]),
            (t[6] = e[6] + i[6]),
            (t[7] = e[7] + i[7]),
            (t[8] = e[8] + i[8]),
            (t[9] = e[9] + i[9]),
            (t[10] = e[10] + i[10]),
            (t[11] = e[11] + i[11]),
            (t[12] = e[12] + i[12]),
            (t[13] = e[13] + i[13]),
            (t[14] = e[14] + i[14]),
            (t[15] = e[15] + i[15]),
            t
        );
    }
    function D(t, e, i) {
        return (
            (t[0] = e[0] - i[0]),
            (t[1] = e[1] - i[1]),
            (t[2] = e[2] - i[2]),
            (t[3] = e[3] - i[3]),
            (t[4] = e[4] - i[4]),
            (t[5] = e[5] - i[5]),
            (t[6] = e[6] - i[6]),
            (t[7] = e[7] - i[7]),
            (t[8] = e[8] - i[8]),
            (t[9] = e[9] - i[9]),
            (t[10] = e[10] - i[10]),
            (t[11] = e[11] - i[11]),
            (t[12] = e[12] - i[12]),
            (t[13] = e[13] - i[13]),
            (t[14] = e[14] - i[14]),
            (t[15] = e[15] - i[15]),
            t
        );
    }
    class P extends Array {
        constructor(t = 1, e = 0, i = 0, s = 0, r = 0, n = 1, a = 0, h = 0, o = 0, l = 0, u = 1, c = 0, d = 0, g = 0, p = 0, f = 1) {
            return (super(t, e, i, s, r, n, a, h, o, l, u, c, d, g, p, f), this);
        }
        get x() {
            return this[12];
        }
        get y() {
            return this[13];
        }
        get z() {
            return this[14];
        }
        get w() {
            return this[15];
        }
        set x(t) {
            this[12] = t;
        }
        set y(t) {
            this[13] = t;
        }
        set z(t) {
            this[14] = t;
        }
        set w(t) {
            this[15] = t;
        }
        set(t, e, i, s, r, n, a, h, o, l, u, c, d, g, p, f) {
            return t.length
                ? this.copy(t)
                : ((function (t, e, i, s, r, n, a, h, o, l, u, c, d, g, p, f, m) {
                      ((t[0] = e),
                          (t[1] = i),
                          (t[2] = s),
                          (t[3] = r),
                          (t[4] = n),
                          (t[5] = a),
                          (t[6] = h),
                          (t[7] = o),
                          (t[8] = l),
                          (t[9] = u),
                          (t[10] = c),
                          (t[11] = d),
                          (t[12] = g),
                          (t[13] = p),
                          (t[14] = f),
                          (t[15] = m));
                  })(this, t, e, i, s, r, n, a, h, o, l, u, c, d, g, p, f),
                  this);
        }
        translate(t, e = this) {
            return (
                (function (t, e, i) {
                    let s,
                        r,
                        n,
                        a,
                        h,
                        o,
                        l,
                        u,
                        c,
                        d,
                        g,
                        p,
                        f = i[0],
                        m = i[1],
                        v = i[2];
                    e === t
                        ? ((t[12] = e[0] * f + e[4] * m + e[8] * v + e[12]),
                          (t[13] = e[1] * f + e[5] * m + e[9] * v + e[13]),
                          (t[14] = e[2] * f + e[6] * m + e[10] * v + e[14]),
                          (t[15] = e[3] * f + e[7] * m + e[11] * v + e[15]))
                        : ((s = e[0]),
                          (r = e[1]),
                          (n = e[2]),
                          (a = e[3]),
                          (h = e[4]),
                          (o = e[5]),
                          (l = e[6]),
                          (u = e[7]),
                          (c = e[8]),
                          (d = e[9]),
                          (g = e[10]),
                          (p = e[11]),
                          (t[0] = s),
                          (t[1] = r),
                          (t[2] = n),
                          (t[3] = a),
                          (t[4] = h),
                          (t[5] = o),
                          (t[6] = l),
                          (t[7] = u),
                          (t[8] = c),
                          (t[9] = d),
                          (t[10] = g),
                          (t[11] = p),
                          (t[12] = s * f + h * m + c * v + e[12]),
                          (t[13] = r * f + o * m + d * v + e[13]),
                          (t[14] = n * f + l * m + g * v + e[14]),
                          (t[15] = a * f + u * m + p * v + e[15]));
                })(this, e, t),
                this
            );
        }
        rotate(t, e, i = this) {
            return (
                (function (t, e, i, s) {
                    let r,
                        n,
                        a,
                        h,
                        o,
                        l,
                        u,
                        c,
                        d,
                        g,
                        p,
                        f,
                        m,
                        v,
                        x,
                        b,
                        E,
                        A,
                        M,
                        _,
                        y,
                        S,
                        w,
                        R,
                        T = s[0],
                        F = s[1],
                        C = s[2],
                        I = Math.hypot(T, F, C);
                    Math.abs(I) < 1e-6 ||
                        ((I = 1 / I),
                        (T *= I),
                        (F *= I),
                        (C *= I),
                        (r = Math.sin(i)),
                        (n = Math.cos(i)),
                        (a = 1 - n),
                        (h = e[0]),
                        (o = e[1]),
                        (l = e[2]),
                        (u = e[3]),
                        (c = e[4]),
                        (d = e[5]),
                        (g = e[6]),
                        (p = e[7]),
                        (f = e[8]),
                        (m = e[9]),
                        (v = e[10]),
                        (x = e[11]),
                        (b = T * T * a + n),
                        (E = F * T * a + C * r),
                        (A = C * T * a - F * r),
                        (M = T * F * a - C * r),
                        (_ = F * F * a + n),
                        (y = C * F * a + T * r),
                        (S = T * C * a + F * r),
                        (w = F * C * a - T * r),
                        (R = C * C * a + n),
                        (t[0] = h * b + c * E + f * A),
                        (t[1] = o * b + d * E + m * A),
                        (t[2] = l * b + g * E + v * A),
                        (t[3] = u * b + p * E + x * A),
                        (t[4] = h * M + c * _ + f * y),
                        (t[5] = o * M + d * _ + m * y),
                        (t[6] = l * M + g * _ + v * y),
                        (t[7] = u * M + p * _ + x * y),
                        (t[8] = h * S + c * w + f * R),
                        (t[9] = o * S + d * w + m * R),
                        (t[10] = l * S + g * w + v * R),
                        (t[11] = u * S + p * w + x * R),
                        e !== t && ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])));
                })(this, i, t, e),
                this
            );
        }
        scale(t, e = this) {
            return (
                (function (t, e, i) {
                    let s = i[0],
                        r = i[1],
                        n = i[2];
                    ((t[0] = e[0] * s),
                        (t[1] = e[1] * s),
                        (t[2] = e[2] * s),
                        (t[3] = e[3] * s),
                        (t[4] = e[4] * r),
                        (t[5] = e[5] * r),
                        (t[6] = e[6] * r),
                        (t[7] = e[7] * r),
                        (t[8] = e[8] * n),
                        (t[9] = e[9] * n),
                        (t[10] = e[10] * n),
                        (t[11] = e[11] * n),
                        (t[12] = e[12]),
                        (t[13] = e[13]),
                        (t[14] = e[14]),
                        (t[15] = e[15]));
                })(this, e, 'number' == typeof t ? [t, t, t] : t),
                this
            );
        }
        add(t, e) {
            return (e ? N(this, t, e) : N(this, this, t), this);
        }
        sub(t, e) {
            return (e ? D(this, t, e) : D(this, this, t), this);
        }
        multiply(t, e) {
            var i, s, r;
            return (
                t.length
                    ? e
                        ? z(this, t, e)
                        : z(this, this, t)
                    : ((s = this),
                      (r = t),
                      ((i = this)[0] = s[0] * r),
                      (i[1] = s[1] * r),
                      (i[2] = s[2] * r),
                      (i[3] = s[3] * r),
                      (i[4] = s[4] * r),
                      (i[5] = s[5] * r),
                      (i[6] = s[6] * r),
                      (i[7] = s[7] * r),
                      (i[8] = s[8] * r),
                      (i[9] = s[9] * r),
                      (i[10] = s[10] * r),
                      (i[11] = s[11] * r),
                      (i[12] = s[12] * r),
                      (i[13] = s[13] * r),
                      (i[14] = s[14] * r),
                      (i[15] = s[15] * r)),
                this
            );
        }
        identity() {
            var t;
            return (
                ((t = this)[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = 1),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = 1),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                this
            );
        }
        copy(t) {
            var e, i;
            return (
                (i = t),
                ((e = this)[0] = i[0]),
                (e[1] = i[1]),
                (e[2] = i[2]),
                (e[3] = i[3]),
                (e[4] = i[4]),
                (e[5] = i[5]),
                (e[6] = i[6]),
                (e[7] = i[7]),
                (e[8] = i[8]),
                (e[9] = i[9]),
                (e[10] = i[10]),
                (e[11] = i[11]),
                (e[12] = i[12]),
                (e[13] = i[13]),
                (e[14] = i[14]),
                (e[15] = i[15]),
                this
            );
        }
        fromPerspective({ fov: t, aspect: e, near: i, far: s } = {}) {
            return (
                (function (t, e, i, s, r) {
                    let n = 1 / Math.tan(e / 2),
                        a = 1 / (s - r);
                    ((t[0] = n / i),
                        (t[1] = 0),
                        (t[2] = 0),
                        (t[3] = 0),
                        (t[4] = 0),
                        (t[5] = n),
                        (t[6] = 0),
                        (t[7] = 0),
                        (t[8] = 0),
                        (t[9] = 0),
                        (t[10] = (r + s) * a),
                        (t[11] = -1),
                        (t[12] = 0),
                        (t[13] = 0),
                        (t[14] = 2 * r * s * a),
                        (t[15] = 0));
                })(this, t, e, i, s),
                this
            );
        }
        fromOrthogonal({ left: t, right: e, bottom: i, top: s, near: r, far: n }) {
            return (
                (function (t, e, i, s, r, n, a) {
                    let h = 1 / (e - i),
                        o = 1 / (s - r),
                        l = 1 / (n - a);
                    ((t[0] = -2 * h),
                        (t[1] = 0),
                        (t[2] = 0),
                        (t[3] = 0),
                        (t[4] = 0),
                        (t[5] = -2 * o),
                        (t[6] = 0),
                        (t[7] = 0),
                        (t[8] = 0),
                        (t[9] = 0),
                        (t[10] = 2 * l),
                        (t[11] = 0),
                        (t[12] = (e + i) * h),
                        (t[13] = (r + s) * o),
                        (t[14] = (a + n) * l),
                        (t[15] = 1));
                })(this, t, e, i, s, r, n),
                this
            );
        }
        fromQuaternion(t) {
            return (
                (function (t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = i + i,
                        h = s + s,
                        o = r + r,
                        l = i * a,
                        u = s * a,
                        c = s * h,
                        d = r * a,
                        g = r * h,
                        p = r * o,
                        f = n * a,
                        m = n * h,
                        v = n * o;
                    ((t[0] = 1 - c - p),
                        (t[1] = u + v),
                        (t[2] = d - m),
                        (t[3] = 0),
                        (t[4] = u - v),
                        (t[5] = 1 - l - p),
                        (t[6] = g + f),
                        (t[7] = 0),
                        (t[8] = d + m),
                        (t[9] = g - f),
                        (t[10] = 1 - l - c),
                        (t[11] = 0),
                        (t[12] = 0),
                        (t[13] = 0),
                        (t[14] = 0),
                        (t[15] = 1));
                })(this, t),
                this
            );
        }
        setPosition(t) {
            return ((this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this);
        }
        inverse(t = this) {
            return (
                (function (t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = e[4],
                        h = e[5],
                        o = e[6],
                        l = e[7],
                        u = e[8],
                        c = e[9],
                        d = e[10],
                        g = e[11],
                        p = e[12],
                        f = e[13],
                        m = e[14],
                        v = e[15],
                        x = i * h - s * a,
                        b = i * o - r * a,
                        E = i * l - n * a,
                        A = s * o - r * h,
                        M = s * l - n * h,
                        _ = r * l - n * o,
                        y = u * f - c * p,
                        S = u * m - d * p,
                        w = u * v - g * p,
                        R = c * m - d * f,
                        T = c * v - g * f,
                        F = d * v - g * m,
                        C = x * F - b * T + E * R + A * w - M * S + _ * y;
                    C &&
                        ((C = 1 / C),
                        (t[0] = (h * F - o * T + l * R) * C),
                        (t[1] = (r * T - s * F - n * R) * C),
                        (t[2] = (f * _ - m * M + v * A) * C),
                        (t[3] = (d * M - c * _ - g * A) * C),
                        (t[4] = (o * w - a * F - l * S) * C),
                        (t[5] = (i * F - r * w + n * S) * C),
                        (t[6] = (m * E - p * _ - v * b) * C),
                        (t[7] = (u * _ - d * E + g * b) * C),
                        (t[8] = (a * T - h * w + l * y) * C),
                        (t[9] = (s * w - i * T - n * y) * C),
                        (t[10] = (p * M - f * E + v * x) * C),
                        (t[11] = (c * E - u * M - g * x) * C),
                        (t[12] = (h * S - a * R - o * y) * C),
                        (t[13] = (i * R - s * S + r * y) * C),
                        (t[14] = (f * b - p * A - m * x) * C),
                        (t[15] = (u * A - c * b + d * x) * C));
                })(this, t),
                this
            );
        }
        compose(t, e, i) {
            return (
                (function (t, e, i, s) {
                    const r = t,
                        n = e[0],
                        a = e[1],
                        h = e[2],
                        o = e[3],
                        l = n + n,
                        u = a + a,
                        c = h + h,
                        d = n * l,
                        g = n * u,
                        p = n * c,
                        f = a * u,
                        m = a * c,
                        v = h * c,
                        x = o * l,
                        b = o * u,
                        E = o * c,
                        A = s[0],
                        M = s[1],
                        _ = s[2];
                    ((r[0] = (1 - (f + v)) * A),
                        (r[1] = (g + E) * A),
                        (r[2] = (p - b) * A),
                        (r[3] = 0),
                        (r[4] = (g - E) * M),
                        (r[5] = (1 - (d + v)) * M),
                        (r[6] = (m + x) * M),
                        (r[7] = 0),
                        (r[8] = (p + b) * _),
                        (r[9] = (m - x) * _),
                        (r[10] = (1 - (d + f)) * _),
                        (r[11] = 0),
                        (r[12] = i[0]),
                        (r[13] = i[1]),
                        (r[14] = i[2]),
                        (r[15] = 1));
                })(this, t, e, i),
                this
            );
        }
        decompose(t, i, s) {
            return (
                (function (t, i, s, r) {
                    let n = e([t[0], t[1], t[2]]);
                    const a = e([t[4], t[5], t[6]]),
                        h = e([t[8], t[9], t[10]]);
                    (L(t) < 0 && (n = -n), (s[0] = t[12]), (s[1] = t[13]), (s[2] = t[14]));
                    const o = t.slice(),
                        l = 1 / n,
                        u = 1 / a,
                        c = 1 / h;
                    ((o[0] *= l),
                        (o[1] *= l),
                        (o[2] *= l),
                        (o[4] *= u),
                        (o[5] *= u),
                        (o[6] *= u),
                        (o[8] *= c),
                        (o[9] *= c),
                        (o[10] *= c),
                        B(i, o),
                        (r[0] = n),
                        (r[1] = a),
                        (r[2] = h));
                })(this, t, i, s),
                this
            );
        }
        getRotation(t) {
            return (B(t, this), this);
        }
        getTranslation(t) {
            var e, i;
            return ((i = this), ((e = t)[0] = i[12]), (e[1] = i[13]), (e[2] = i[14]), this);
        }
        getScaling(t) {
            return (k(t, this), this);
        }
        getMaxScaleOnAxis() {
            return (function (t) {
                let e = t[0],
                    i = t[1],
                    s = t[2],
                    r = t[4],
                    n = t[5],
                    a = t[6],
                    h = t[8],
                    o = t[9],
                    l = t[10];
                const u = e * e + i * i + s * s,
                    c = r * r + n * n + a * a,
                    d = h * h + o * o + l * l;
                return Math.sqrt(Math.max(u, c, d));
            })(this);
        }
        lookAt(t, e, i) {
            return (
                (function (t, e, i, s) {
                    let r = e[0],
                        n = e[1],
                        a = e[2],
                        h = s[0],
                        o = s[1],
                        l = s[2],
                        u = r - i[0],
                        c = n - i[1],
                        d = a - i[2],
                        g = u * u + c * c + d * d;
                    0 === g ? (d = 1) : ((g = 1 / Math.sqrt(g)), (u *= g), (c *= g), (d *= g));
                    let p = o * d - l * c,
                        f = l * u - h * d,
                        m = h * c - o * u;
                    ((g = p * p + f * f + m * m),
                        0 === g &&
                            (l ? (h += 1e-6) : o ? (l += 1e-6) : (o += 1e-6), (p = o * d - l * c), (f = l * u - h * d), (m = h * c - o * u), (g = p * p + f * f + m * m)),
                        (g = 1 / Math.sqrt(g)),
                        (p *= g),
                        (f *= g),
                        (m *= g),
                        (t[0] = p),
                        (t[1] = f),
                        (t[2] = m),
                        (t[3] = 0),
                        (t[4] = c * m - d * f),
                        (t[5] = d * p - u * m),
                        (t[6] = u * f - c * p),
                        (t[7] = 0),
                        (t[8] = u),
                        (t[9] = c),
                        (t[10] = d),
                        (t[11] = 0),
                        (t[12] = r),
                        (t[13] = n),
                        (t[14] = a),
                        (t[15] = 1));
                })(this, t, e, i),
                this
            );
        }
        determinant() {
            return L(this);
        }
        fromArray(t, e = 0) {
            return (
                (this[0] = t[e]),
                (this[1] = t[e + 1]),
                (this[2] = t[e + 2]),
                (this[3] = t[e + 3]),
                (this[4] = t[e + 4]),
                (this[5] = t[e + 5]),
                (this[6] = t[e + 6]),
                (this[7] = t[e + 7]),
                (this[8] = t[e + 8]),
                (this[9] = t[e + 9]),
                (this[10] = t[e + 10]),
                (this[11] = t[e + 11]),
                (this[12] = t[e + 12]),
                (this[13] = t[e + 13]),
                (this[14] = t[e + 14]),
                (this[15] = t[e + 15]),
                this
            );
        }
        toArray(t = [], e = 0) {
            return (
                (t[e] = this[0]),
                (t[e + 1] = this[1]),
                (t[e + 2] = this[2]),
                (t[e + 3] = this[3]),
                (t[e + 4] = this[4]),
                (t[e + 5] = this[5]),
                (t[e + 6] = this[6]),
                (t[e + 7] = this[7]),
                (t[e + 8] = this[8]),
                (t[e + 9] = this[9]),
                (t[e + 10] = this[10]),
                (t[e + 11] = this[11]),
                (t[e + 12] = this[12]),
                (t[e + 13] = this[13]),
                (t[e + 14] = this[14]),
                (t[e + 15] = this[15]),
                t
            );
        }
    }
    const q = new P();
    class U extends Array {
        constructor(t = 0, e = t, i = t, s = 'YXZ') {
            (super(t, e, i), (this.order = s), (this.onChange = () => {}), (this._target = this));
            const r = ['0', '1', '2'];
            return new Proxy(this, {
                set(t, e) {
                    const i = Reflect.set(...arguments);
                    return (i && r.includes(e) && t.onChange(), i);
                },
            });
        }
        get x() {
            return this[0];
        }
        get y() {
            return this[1];
        }
        get z() {
            return this[2];
        }
        set x(t) {
            ((this._target[0] = t), this.onChange());
        }
        set y(t) {
            ((this._target[1] = t), this.onChange());
        }
        set z(t) {
            ((this._target[2] = t), this.onChange());
        }
        set(t, e = t, i = t) {
            return t.length ? this.copy(t) : ((this._target[0] = t), (this._target[1] = e), (this._target[2] = i), this.onChange(), this);
        }
        copy(t) {
            return ((this._target[0] = t[0]), (this._target[1] = t[1]), (this._target[2] = t[2]), this.onChange(), this);
        }
        reorder(t) {
            return ((this._target.order = t), this.onChange(), this);
        }
        fromRotationMatrix(t, e = this.order) {
            return (
                (function (t, e, i = 'YXZ') {
                    'XYZ' === i
                        ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
                          Math.abs(e[8]) < 0.99999
                              ? ((t[0] = Math.atan2(-e[9], e[10])), (t[2] = Math.atan2(-e[4], e[0])))
                              : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
                        : 'YXZ' === i
                          ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
                            Math.abs(e[9]) < 0.99999
                                ? ((t[1] = Math.atan2(e[8], e[10])), (t[2] = Math.atan2(e[1], e[5])))
                                : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
                          : 'ZXY' === i
                            ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
                              Math.abs(e[6]) < 0.99999
                                  ? ((t[1] = Math.atan2(-e[2], e[10])), (t[2] = Math.atan2(-e[4], e[5])))
                                  : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
                            : 'ZYX' === i
                              ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
                                Math.abs(e[2]) < 0.99999
                                    ? ((t[0] = Math.atan2(e[6], e[10])), (t[2] = Math.atan2(e[1], e[0])))
                                    : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
                              : 'YZX' === i
                                ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
                                  Math.abs(e[1]) < 0.99999
                                      ? ((t[0] = Math.atan2(-e[9], e[5])), (t[1] = Math.atan2(-e[2], e[0])))
                                      : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
                                : 'XZY' === i &&
                                  ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
                                  Math.abs(e[4]) < 0.99999
                                      ? ((t[0] = Math.atan2(e[6], e[5])), (t[1] = Math.atan2(e[8], e[0])))
                                      : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0)));
                })(this._target, t, e),
                this.onChange(),
                this
            );
        }
        fromQuaternion(t, e = this.order, i) {
            return (q.fromQuaternion(t), this._target.fromRotationMatrix(q, e), i || this.onChange(), this);
        }
        fromArray(t, e = 0) {
            return ((this._target[0] = t[e]), (this._target[1] = t[e + 1]), (this._target[2] = t[e + 2]), this);
        }
        toArray(t = [], e = 0) {
            return ((t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t);
        }
    }
    class V {
        constructor() {
            ((this.parent = null),
                (this.children = []),
                (this.visible = !0),
                (this.matrix = new P()),
                (this.worldMatrix = new P()),
                (this.matrixAutoUpdate = !0),
                (this.worldMatrixNeedsUpdate = !1),
                (this.position = new c()),
                (this.quaternion = new O()),
                (this.scale = new c(1)),
                (this.rotation = new U()),
                (this.up = new c(0, 1, 0)),
                (this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0)),
                (this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)));
        }
        setParent(t, e = !0) {
            (this.parent && t !== this.parent && this.parent.removeChild(this, !1), (this.parent = t), e && t && t.addChild(this, !1));
        }
        addChild(t, e = !0) {
            (~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1));
        }
        removeChild(t, e = !0) {
            (~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1));
        }
        updateMatrixWorld(t) {
            (this.matrixAutoUpdate && this.updateMatrix(),
                (this.worldMatrixNeedsUpdate || t) &&
                    (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
                    (this.worldMatrixNeedsUpdate = !1),
                    (t = !0)));
            for (let e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t);
        }
        updateMatrix() {
            (this.matrix.compose(this.quaternion, this.position, this.scale), (this.worldMatrixNeedsUpdate = !0));
        }
        traverse(t) {
            if (!t(this)) for (let e = 0, i = this.children.length; e < i; e++) this.children[e].traverse(t);
        }
        decompose() {
            (this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion));
        }
        lookAt(t, e = !1) {
            (e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
                this.matrix.getRotation(this.quaternion._target),
                this.rotation.fromQuaternion(this.quaternion));
        }
    }
    function G(t, e, i) {
        let s = e[0],
            r = e[1],
            n = e[2],
            a = e[3],
            h = e[4],
            o = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            d = i[0],
            g = i[1],
            p = i[2],
            f = i[3],
            m = i[4],
            v = i[5],
            x = i[6],
            b = i[7],
            E = i[8];
        return (
            (t[0] = d * s + g * a + p * l),
            (t[1] = d * r + g * h + p * u),
            (t[2] = d * n + g * o + p * c),
            (t[3] = f * s + m * a + v * l),
            (t[4] = f * r + m * h + v * u),
            (t[5] = f * n + m * o + v * c),
            (t[6] = x * s + b * a + E * l),
            (t[7] = x * r + b * h + E * u),
            (t[8] = x * n + b * o + E * c),
            t
        );
    }
    class H extends Array {
        constructor(t = 1, e = 0, i = 0, s = 0, r = 1, n = 0, a = 0, h = 0, o = 1) {
            return (super(t, e, i, s, r, n, a, h, o), this);
        }
        set(t, e, i, s, r, n, a, h, o) {
            return t.length
                ? this.copy(t)
                : ((function (t, e, i, s, r, n, a, h, o, l) {
                      ((t[0] = e), (t[1] = i), (t[2] = s), (t[3] = r), (t[4] = n), (t[5] = a), (t[6] = h), (t[7] = o), (t[8] = l));
                  })(this, t, e, i, s, r, n, a, h, o),
                  this);
        }
        translate(t, e = this) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        h = e[4],
                        o = e[5],
                        l = e[6],
                        u = e[7],
                        c = e[8],
                        d = i[0],
                        g = i[1];
                    ((t[0] = s),
                        (t[1] = r),
                        (t[2] = n),
                        (t[3] = a),
                        (t[4] = h),
                        (t[5] = o),
                        (t[6] = d * s + g * a + l),
                        (t[7] = d * r + g * h + u),
                        (t[8] = d * n + g * o + c));
                })(this, e, t),
                this
            );
        }
        rotate(t, e = this) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1],
                        n = e[2],
                        a = e[3],
                        h = e[4],
                        o = e[5],
                        l = e[6],
                        u = e[7],
                        c = e[8],
                        d = Math.sin(i),
                        g = Math.cos(i);
                    ((t[0] = g * s + d * a),
                        (t[1] = g * r + d * h),
                        (t[2] = g * n + d * o),
                        (t[3] = g * a - d * s),
                        (t[4] = g * h - d * r),
                        (t[5] = g * o - d * n),
                        (t[6] = l),
                        (t[7] = u),
                        (t[8] = c));
                })(this, e, t),
                this
            );
        }
        scale(t, e = this) {
            return (
                (function (t, e, i) {
                    let s = i[0],
                        r = i[1];
                    ((t[0] = s * e[0]),
                        (t[1] = s * e[1]),
                        (t[2] = s * e[2]),
                        (t[3] = r * e[3]),
                        (t[4] = r * e[4]),
                        (t[5] = r * e[5]),
                        (t[6] = e[6]),
                        (t[7] = e[7]),
                        (t[8] = e[8]));
                })(this, e, t),
                this
            );
        }
        multiply(t, e) {
            return (e ? G(this, t, e) : G(this, this, t), this);
        }
        identity() {
            var t;
            return (((t = this)[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), this);
        }
        copy(t) {
            var e, i;
            return (
                (i = t),
                ((e = this)[0] = i[0]),
                (e[1] = i[1]),
                (e[2] = i[2]),
                (e[3] = i[3]),
                (e[4] = i[4]),
                (e[5] = i[5]),
                (e[6] = i[6]),
                (e[7] = i[7]),
                (e[8] = i[8]),
                this
            );
        }
        fromMatrix4(t) {
            var e, i;
            return (
                (i = t),
                ((e = this)[0] = i[0]),
                (e[1] = i[1]),
                (e[2] = i[2]),
                (e[3] = i[4]),
                (e[4] = i[5]),
                (e[5] = i[6]),
                (e[6] = i[8]),
                (e[7] = i[9]),
                (e[8] = i[10]),
                this
            );
        }
        fromQuaternion(t) {
            return (
                (function (t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = i + i,
                        h = s + s,
                        o = r + r,
                        l = i * a,
                        u = s * a,
                        c = s * h,
                        d = r * a,
                        g = r * h,
                        p = r * o,
                        f = n * a,
                        m = n * h,
                        v = n * o;
                    ((t[0] = 1 - c - p),
                        (t[3] = u - v),
                        (t[6] = d + m),
                        (t[1] = u + v),
                        (t[4] = 1 - l - p),
                        (t[7] = g - f),
                        (t[2] = d - m),
                        (t[5] = g + f),
                        (t[8] = 1 - l - c));
                })(this, t),
                this
            );
        }
        fromBasis(t, e, i) {
            return (this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this);
        }
        inverse(t = this) {
            return (
                (function (t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = e[4],
                        h = e[5],
                        o = e[6],
                        l = e[7],
                        u = e[8],
                        c = u * a - h * l,
                        d = -u * n + h * o,
                        g = l * n - a * o,
                        p = i * c + s * d + r * g;
                    p &&
                        ((p = 1 / p),
                        (t[0] = c * p),
                        (t[1] = (-u * s + r * l) * p),
                        (t[2] = (h * s - r * a) * p),
                        (t[3] = d * p),
                        (t[4] = (u * i - r * o) * p),
                        (t[5] = (-h * i + r * n) * p),
                        (t[6] = g * p),
                        (t[7] = (-l * i + s * o) * p),
                        (t[8] = (a * i - s * n) * p));
                })(this, t),
                this
            );
        }
        getNormalMatrix(t) {
            return (
                (function (t, e) {
                    let i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = e[4],
                        h = e[5],
                        o = e[6],
                        l = e[7],
                        u = e[8],
                        c = e[9],
                        d = e[10],
                        g = e[11],
                        p = e[12],
                        f = e[13],
                        m = e[14],
                        v = e[15],
                        x = i * h - s * a,
                        b = i * o - r * a,
                        E = i * l - n * a,
                        A = s * o - r * h,
                        M = s * l - n * h,
                        _ = r * l - n * o,
                        y = u * f - c * p,
                        S = u * m - d * p,
                        w = u * v - g * p,
                        R = c * m - d * f,
                        T = c * v - g * f,
                        F = d * v - g * m,
                        C = x * F - b * T + E * R + A * w - M * S + _ * y;
                    C &&
                        ((C = 1 / C),
                        (t[0] = (h * F - o * T + l * R) * C),
                        (t[1] = (o * w - a * F - l * S) * C),
                        (t[2] = (a * T - h * w + l * y) * C),
                        (t[3] = (r * T - s * F - n * R) * C),
                        (t[4] = (i * F - r * w + n * S) * C),
                        (t[5] = (s * w - i * T - n * y) * C),
                        (t[6] = (f * _ - m * M + v * A) * C),
                        (t[7] = (m * E - p * _ - v * b) * C),
                        (t[8] = (p * M - f * E + v * x) * C));
                })(this, t),
                this
            );
        }
    }
    let W = 0;
    class Y extends V {
        constructor(t, { geometry: e, program: i, mode: s = t.TRIANGLES, frustumCulled: r = !0, renderOrder: n = 0 } = {}) {
            (super(),
                t.canvas || console.error('gl not passed as first argument to Mesh'),
                (this.gl = t),
                (this.id = W++),
                (this.geometry = e),
                (this.program = i),
                (this.mode = s),
                (this.frustumCulled = r),
                (this.renderOrder = n),
                (this.modelViewMatrix = new P()),
                (this.normalMatrix = new H()),
                (this.beforeRenderCallbacks = []),
                (this.afterRenderCallbacks = []));
        }
        onBeforeRender(t) {
            return (this.beforeRenderCallbacks.push(t), this);
        }
        onAfterRender(t) {
            return (this.afterRenderCallbacks.push(t), this);
        }
        draw({ camera: t } = {}) {
            (t &&
                (this.program.uniforms.modelMatrix ||
                    Object.assign(this.program.uniforms, {
                        modelMatrix: { value: null },
                        viewMatrix: { value: null },
                        modelViewMatrix: { value: null },
                        normalMatrix: { value: null },
                        projectionMatrix: { value: null },
                        cameraPosition: { value: null },
                    }),
                (this.program.uniforms.projectionMatrix.value = t.projectionMatrix),
                (this.program.uniforms.cameraPosition.value = t.worldPosition),
                (this.program.uniforms.viewMatrix.value = t.viewMatrix),
                this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                (this.program.uniforms.modelMatrix.value = this.worldMatrix),
                (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
                (this.program.uniforms.normalMatrix.value = this.normalMatrix)),
                this.beforeRenderCallbacks.forEach((e) => e && e({ mesh: this, camera: t })));
            let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
            (this.program.use({ flipFaces: e }),
                this.geometry.draw({ mode: this.mode, program: this.program }),
                this.afterRenderCallbacks.forEach((e) => e && e({ mesh: this, camera: t })));
        }
    }
    function X(t, e, i) {
        return ((t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), t);
    }
    function j(t, e, i) {
        return ((t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), t);
    }
    function Z(t, e, i) {
        return ((t[0] = e[0] * i), (t[1] = e[1] * i), t);
    }
    function $(t) {
        var e = t[0],
            i = t[1];
        return Math.sqrt(e * e + i * i);
    }
    function Q(t, e) {
        return t[0] * e[1] - t[1] * e[0];
    }
    class K extends Array {
        constructor(t = 0, e = t) {
            return (super(t, e), this);
        }
        get x() {
            return this[0];
        }
        get y() {
            return this[1];
        }
        set x(t) {
            this[0] = t;
        }
        set y(t) {
            this[1] = t;
        }
        set(t, e = t) {
            return t.length
                ? this.copy(t)
                : ((function (t, e, i) {
                      ((t[0] = e), (t[1] = i));
                  })(this, t, e),
                  this);
        }
        copy(t) {
            var e, i;
            return ((i = t), ((e = this)[0] = i[0]), (e[1] = i[1]), this);
        }
        add(t, e) {
            return (e ? X(this, t, e) : X(this, this, t), this);
        }
        sub(t, e) {
            return (e ? j(this, t, e) : j(this, this, t), this);
        }
        multiply(t) {
            var e, i, s;
            return (t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] * s[0]), (e[1] = i[1] * s[1])) : Z(this, this, t), this);
        }
        divide(t) {
            var e, i, s;
            return (t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] / s[0]), (e[1] = i[1] / s[1])) : Z(this, this, 1 / t), this);
        }
        inverse(t = this) {
            var e, i;
            return ((i = t), ((e = this)[0] = 1 / i[0]), (e[1] = 1 / i[1]), this);
        }
        len() {
            return $(this);
        }
        distance(t) {
            return t ? ((e = this), (s = (i = t)[0] - e[0]), (r = i[1] - e[1]), Math.sqrt(s * s + r * r)) : $(this);
            var e, i, s, r;
        }
        squaredLen() {
            return this.squaredDistance();
        }
        squaredDistance(t) {
            return t
                ? ((e = this), (s = (i = t)[0] - e[0]), (r = i[1] - e[1]), s * s + r * r)
                : (function (t) {
                      var e = t[0],
                          i = t[1];
                      return e * e + i * i;
                  })(this);
            var e, i, s, r;
        }
        negate(t = this) {
            var e, i;
            return ((i = t), ((e = this)[0] = -i[0]), (e[1] = -i[1]), this);
        }
        cross(t, e) {
            return e ? Q(t, e) : Q(this, t);
        }
        scale(t) {
            return (Z(this, this, t), this);
        }
        normalize() {
            var t, e, i, s, r;
            return ((t = this), (i = (e = this)[0]), (s = e[1]), (r = i * i + s * s) > 0 && (r = 1 / Math.sqrt(r)), (t[0] = e[0] * r), (t[1] = e[1] * r), this);
        }
        dot(t) {
            return ((i = t), (e = this)[0] * i[0] + e[1] * i[1]);
            var e, i;
        }
        equals(t) {
            return ((i = t), (e = this)[0] === i[0] && e[1] === i[1]);
            var e, i;
        }
        applyMatrix3(t) {
            var e, i, s, r, n;
            return ((e = this), (s = t), (r = (i = this)[0]), (n = i[1]), (e[0] = s[0] * r + s[3] * n + s[6]), (e[1] = s[1] * r + s[4] * n + s[7]), this);
        }
        applyMatrix4(t) {
            return (
                (function (t, e, i) {
                    let s = e[0],
                        r = e[1];
                    ((t[0] = i[0] * s + i[4] * r + i[12]), (t[1] = i[1] * s + i[5] * r + i[13]));
                })(this, this, t),
                this
            );
        }
        lerp(t, e) {
            return (
                (function (t, e, i, s) {
                    var r = e[0],
                        n = e[1];
                    ((t[0] = r + s * (i[0] - r)), (t[1] = n + s * (i[1] - n)));
                })(this, this, t, e),
                this
            );
        }
        smoothLerp(t, e, i) {
            return (
                (function (t, e, i, s, r) {
                    const n = Math.exp(-s * r);
                    let a = e[0],
                        h = e[1];
                    ((t[0] = i[0] + (a - i[0]) * n), (t[1] = i[1] + (h - i[1]) * n));
                })(this, this, t, e, i),
                this
            );
        }
        clone() {
            return new K(this[0], this[1]);
        }
        fromArray(t, e = 0) {
            return ((this[0] = t[e]), (this[1] = t[e + 1]), this);
        }
        toArray(t = [], e = 0) {
            return ((t[e] = this[0]), (t[e + 1] = this[1]), t);
        }
    }
    class J extends m {
        constructor(t, { width: e = 1, height: i = 1, widthSegments: s = 1, heightSegments: r = 1, attributes: n = {} } = {}) {
            const a = s,
                h = r,
                o = (a + 1) * (h + 1),
                l = a * h * 6,
                u = new Float32Array(3 * o),
                c = new Float32Array(3 * o),
                d = new Float32Array(2 * o),
                g = l > 65536 ? new Uint32Array(l) : new Uint16Array(l);
            (J.buildPlane(u, c, d, g, e, i, 0, a, h),
                Object.assign(n, { position: { size: 3, data: u }, normal: { size: 3, data: c }, uv: { size: 2, data: d }, index: { data: g } }),
                super(t, n));
        }
        static buildPlane(t, e, i, s, r, n, a, h, o, l = 0, u = 1, c = 2, d = 1, g = -1, p = 0, f = 0) {
            const m = p,
                v = r / h,
                x = n / o;
            for (let b = 0; b <= o; b++) {
                let E = b * x - n / 2;
                for (let n = 0; n <= h; n++, p++) {
                    let x = n * v - r / 2;
                    if (
                        ((t[3 * p + l] = x * d),
                        (t[3 * p + u] = E * g),
                        (t[3 * p + c] = a / 2),
                        (e[3 * p + l] = 0),
                        (e[3 * p + u] = 0),
                        (e[3 * p + c] = a >= 0 ? 1 : -1),
                        (i[2 * p] = n / h),
                        (i[2 * p + 1] = 1 - b / o),
                        b === o || n === h)
                    )
                        continue;
                    let A = m + n + b * (h + 1),
                        M = m + n + (b + 1) * (h + 1),
                        _ = m + n + (b + 1) * (h + 1) + 1,
                        y = m + n + b * (h + 1) + 1;
                    ((s[6 * f] = A), (s[6 * f + 1] = M), (s[6 * f + 2] = y), (s[6 * f + 3] = M), (s[6 * f + 4] = _), (s[6 * f + 5] = y), f++);
                }
            }
        }
    }
    const tt = (t, e) => Math.floor(Math.random() * (Math.floor(e) - t + 1)) + t,
        et = (t, e = 0, i = 1) => Math.min(i, Math.max(e, t)),
        it = (t) => t ?? 10,
        st = (t) => (t ? 'vec4' : 'vec3'),
        rt = (t, e) =>
`
precision highp float;

uniform vec2 vScreenSize;
uniform float vTime;
uniform float vScale;

uniform ${st(e)} vColorBackground;

uniform vec3 vColor[6];
uniform vec3 vRotation[3];

uniform float vAudio[3];
uniform float vReact[3];

uniform vec2 vInteractionPoint;
uniform float vInteraction;

#define CIRCLE_WIDTH_BASE 0.8
#define CIRCLE_WIDTH_STEP 0.2

#define SPARK_STRENGTH_BASE 1.0
#define SPARK_STRENGTH_STEP 0.3

#define CIRCLE_RADIUS_BASE 0.95
#define CIRCLE_RADIUS_STEP 0.15

#define CIRCLE_OFFSET_BASE 0.0
#define CIRCLE_OFFSET_STEP 1.57

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise3(vec3 v) {
  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  // x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float tri(in float x){return abs(fract(x)-.5);}
vec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}

float triNoise3D(in vec3 p, in float spd)
{
  float z=0.4;
  float rz = 0.1;
  vec3 bp = p;
  for (float i=0.; i<=4.; i++ )
  {
    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent
    p += (dg+vTime*.1*spd);

    bp *= 4.; // Increase the scale factor
    z *= 0.9;
    p *= 1.6; // Increase the scale factor

    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;
  }
  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);
}

vec2 rotate(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

float light(float intensity, float attenuation, float dist) {
  return intensity / (1.0 + dist + dist * attenuation);
}

vec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {
  float len = length(uv);
  float v0, v1, cl;
  float r0, d0, n0;
  float r, d;

  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;
  r0 = mix(0.0, 1.0, n0);
  d0 = distance(uv, r0 / len * uv);
  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);

  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);

  vec3 col = mix(color1, color2, uv.y * 2.);
  col = col + v1;
  col.rgb = clamp(col.rgb, 0.0, 1.0);
  return vec4(col, v0);
}

vec4 makeBlob(vec2 uv,
              float blob,
              vec3 color1,
              vec3 color2,
              float width,
              float baseReaction,
              float likeReaction,
              float audioStrength,
              float offset,
              vec2 noiseOffset) {
  float len = length(uv);

  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);

  float strength = max(likeReaction, audioStrength);

  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);
  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));
  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));

  return noise;
}

void main() {
  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;

  uv = uv * 2.0 - 1.0;
  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / vScale;
  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / vScale;

  vec2 ruv = uv * 2.0;
  float pr = length(ruv);
  float pa = atan(ruv.y, ruv.x);

  float idx = (pa/3.1415) / 2.0;   // 0 to 1

  vec2 ruv1 = rotate(uv * 2.0, 3.1415);
  float pa1 = atan(ruv1.y, ruv1.x);
  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1
  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI

  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);
  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));
  spark = spark * 0.2 + pow(spark, 10.);
  spark = smoothstep(0.0, spark, 0.3) * spark;

  ${st(e)} color = vColorBackground;
  vec4 blobColor;
  float floatIndex;
  float radius;

  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));

  for (int i = 0; i < ${t}; i++) {
    floatIndex = float(i);
    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;
    blobColor = makeBlob(uv,
                         mix(radius, radius + 0.3, n0),
                         vColor[i],
                         vColor[i+3],
                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,
                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,
                         vReact[i],
                         vAudio[i],
                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,
                         rotate(vRotation[i].xy, vTime * vRotation[i].z));


    ${((t) => (t ? 'color.rgb = mix(color.rgb, blobColor.rgb, blobColor.a); color.a = max(blobColor.a, color.a);' : 'color = mix(color, blobColor.rgb, blobColor.a);'))(e)}
  }

  ${((t) => (t ? 'gl_FragColor = color;' : 'gl_FragColor = vec4(color, 1.0);'))(e)}
}
`;
    class nt {
        fps;
        render;
        isActive = !1;
        requestId = 0;
        constructor(t, e) {
            ((this.fps = t), (this.render = e));
        }
        start() {
            if (this.isActive) return;
            let t = performance.now();
            const e = 1e3 / this.fps,
                i = (s) => {
                    this.requestId = requestAnimationFrame(i);
                    const r = s - t;
                    r >= e - 0.1 && ((t = s - (r % e)), this.render(r));
                };
            ((this.isActive = !0), (this.requestId = requestAnimationFrame(i)));
        }
        stop() {
            this.isActive && ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
    }
    const at = (t, e) => (e >= 280 && e < 360 ? t % 360 : t),
        ht = (t) => (t + 280) % 360,
        ot = (t, e, i) => {
            const s = (s) => {
                const r = (s + t / 30) % 12,
                    n = e * Math.min(i, 1 - i);
                return i - n * Math.max(-1, Math.min(r - 3, 9 - r, 1));
            };
            return [s(0), s(8), s(4)];
        };
    class lt {
        currentValue;
        targetValue;
        elapsedTime;
        duration;
        formatter;
        constructor(t, e, i, s) {
            ((this.currentValue = t), (this.targetValue = e), (this.duration = i), (this.elapsedTime = 0), (this.formatter = s));
        }
        clamp(t, e, i) {
            return Math.min(Math.max(t, e), i);
        }
        get value() {
            return this.formatter ? this.formatter(this.currentValue) : this.currentValue;
        }
        update(t) {
            ((this.targetValue = t), (this.elapsedTime = 0));
        }
        next(t) {
            const e = this.clamp(this.elapsedTime / this.duration, 0, 1);
            return ((this.elapsedTime += t), (this.currentValue = this.currentValue + (this.targetValue - this.currentValue) * e), this.currentValue);
        }
    }
    const ut = 3e3;
    class ct {
        r;
        g;
        b;
        constructor(t) {
            const e = ot(t, 1, 0.5);
            ((this.r = new lt(e[0], e[0], ut)), (this.g = new lt(e[1], e[1], ut)), (this.b = new lt(e[2], e[2], ut)));
        }
        get value() {
            return [this.r.value, this.g.value, this.b.value];
        }
        update(t) {
            const e = ot(t, 1, 0.5);
            (this.r.update(e[0]), this.g.update(e[1]), this.b.update(e[2]));
        }
        next(t) {
            (this.r.next(t), this.g.next(t), this.b.next(t));
        }
    }
    class dt {
        useDefaultHue = !1;
        topStart;
        topEnd;
        middleStart;
        middleEnd;
        bottomStart;
        bottomEnd;
        createParts(t) {
            const e = ht(t),
                i = at(e + tt(30, 40), e);
            return [new ct(e), new ct(300), new ct(50), new ct(i), new ct(320), new ct(50)];
        }
        constructor(t = 10) {
            const [e, i, s, r, n, a] = this.createParts(t);
            ((this.topStart = s), (this.topEnd = a), (this.middleStart = i), (this.middleEnd = n), (this.bottomStart = e), (this.bottomEnd = r));
        }
        get value() {
            if (this.useDefaultHue) {
                return this.createParts(10).map((t) => t.value);
            }
            return [this.bottomStart.value, this.middleStart.value, this.topStart.value, this.bottomEnd.value, this.middleEnd.value, this.topEnd.value];
        }
        switchToDefaultHue(t) {
            this.useDefaultHue = t;
        }
        update(t, e) {
            const i = ht(t),
                s = at(i + tt(40, 80), i),
                r = ht(e);
            (this.topStart.update(i),
                this.topEnd.update(at(i + tt(30, 40), i)),
                this.middleStart.update(s),
                this.middleEnd.update(at(s + tt(30, 40), i)),
                this.bottomStart.update(r),
                this.bottomEnd.update(at(r + tt(30, 40), i)));
        }
        next(t) {
            (this.topStart.next(t), this.topEnd.next(t), this.middleStart.next(t), this.middleEnd.next(t), this.bottomStart.next(t), this.bottomEnd.next(t));
        }
    }
    class gt {
        isMobile = !1;
        audioFrequencies = null;
        background = new c(0, 0, 0);
        baseScale = 1;
        energy = new lt(0.2, 0.2, 250);
        time = Math.floor(3600 * Math.random());
        color;
        rotation = [new c(-0.3, 0.3, 0.2), new c(-0.3, -0.3, -0.2), new c(-0.3, -0.3, 0.2)];
        audioLow = 0;
        audioMiddle = 0;
        audioHigh = 0;
        audioRatio = new lt(0, 0, 1e3);
        reactTop = new lt(0, 0, 600);
        reactMiddle = new lt(0, 0, 600);
        reactBottom = new lt(0, 0, 600);
        point = [0, 0];
        interaction = 0;
        width = 0;
        height = 0;
        shaderOptions;
        constructor(t, e) {
            ((this.shaderOptions = e), (this.color = new dt(t)), this.updateSize());
        }
        switchToDefaultHue(t) {
            this.color.switchToDefaultHue(t);
        }
        toValue(t) {
            return { value: t };
        }
        get size() {
            return { width: this.width, height: this.height };
        }
        updateLayout(t) {
            this.isMobile = t;
        }
        updateAudioFrequencies(t) {
            this.audioFrequencies = t;
        }
        updateSize() {
            const { width: t, height: e } = this.getDimensions();
            ((this.width = t), (this.height = e));
        }
        updatePlayingState(t) {
            t ? this.audioRatio.update(1) : this.audioRatio.update(0);
        }
        updateColor(t, e) {
            this.color.update(t, e);
        }
        updateBackgroundColor(t) {
            this.background = new c(t, t, t);
        }
        updateBaseScale(t) {
            this.baseScale = t;
        }
        updateEnergy(t) {
            this.energy.update(t);
        }
        updateNewEnergy(t) {
            this.energy.targetValue = t;
        }
        updateReactTop(t) {
            this.reactTop.update(t);
        }
        updateReactMiddle(t) {
            this.reactMiddle.update(t);
        }
        updateReactBottom(t) {
            this.reactBottom.update(t);
        }
        updateTime(t) {
            const e = (this.energy.value * t) / 1e3;
            this.time = (this.time + e) % 86400;
        }
        getUpdatedAudioParam(t, e, i = 0.02) {
            const s = Math.max(0, Math.min(1, t)),
                r = Math.max(0, Math.min(1, e));
            if (r > s) return r;
            if (r < s) {
                return s - Math.min(i, s - r);
            }
            return s;
        }
        update(t) {
            (this.energy.next(t),
                this.color.next(t),
                this.reactTop.next(t),
                this.reactMiddle.next(t),
                this.reactBottom.next(t),
                this.updateTime(t),
                this.audioFrequencies &&
                    (this.audioRatio.next(t),
                    (this.audioLow = this.getUpdatedAudioParam(this.audioLow, this.audioFrequencies.low) * this.audioRatio.value),
                    (this.audioMiddle = this.getUpdatedAudioParam(this.audioMiddle, this.audioFrequencies.middle) * this.audioRatio.value),
                    (this.audioHigh = this.getUpdatedAudioParam(this.audioHigh, this.audioFrequencies.high) * this.audioRatio.value)));
        }
        get fragmentScale() {
            return this.isMobile ? this.baseScale * this.shaderOptions.canvasSize.mobileScale : this.baseScale * this.shaderOptions.canvasSize.desktopScale;
        }
        getDimensions() {
            const t = this.isMobile ? this.shaderOptions.canvasSize.mobileSizePx : this.shaderOptions.canvasSize.desktopSizePx;
            return { width: t, height: t };
        }
        toObject() {
            return {
                vScreenSize: this.toValue(new K(this.width, this.height)),
                vTime: this.toValue(this.time),
                vScale: this.toValue(this.fragmentScale),
                vColorBackground: this.toValue(this.background),
                vColor: this.toValue(this.color.value),
                vRotation: this.toValue(this.rotation),
                vAudio: this.toValue([this.audioLow, this.audioMiddle, this.audioHigh]),
                vReact: this.toValue([this.reactTop.value, this.reactMiddle.value, this.reactBottom.value]),
                vInteractionPoint: this.toValue(this.point),
                vInteraction: this.toValue(this.interaction),
            };
        }
    }
    var pt;
    !(function (t) {
        ((t.DEFAULT = 'DEFAULT'), (t.LITE = 'LITE'));
    })(pt || (pt = {}));
    class ft {
        isRenderingEnabled = !0;
        state;
        scene = new V();
        shader;
        renderer;
        ticker;
        program;
        canvas;
        shaderOptions;
        uniforms;
        constructor({ canvas: t, state: e, collectionHue: i, fps: maxFps, shaderOptions: s, onError: r }) {
            ((this.canvas = t),
                (this.shaderOptions = ((t) => ({
                    transparent: !1,
                    antialias: !1,
                    canvasSize: { mobileSizePx: 430, desktopSizePx: 650, mobileScale: 0.4, desktopScale: 0.35 },
                    ...t,
                }))(s)));
            try {
                ((this.uniforms = new gt(it(i), this.shaderOptions)),
                    (this.renderer = this.createRenderer()),
                    (this.ticker = new nt(maxFps, this.render.bind(this))),
                    this.ticker.start());
            } catch (t) {
                ('string' == typeof t || t instanceof Error) && r?.(t);
            }
            ((this.state = e ?? pt.DEFAULT), (this.shader = this.createShader()));
        }
        createRenderer() {
            const { width: t, height: e } = this.uniforms?.size ?? {};
            return new w({
                canvas: this.canvas,
                alpha: this.shaderOptions.transparent,
                antialias: this.shaderOptions.antialias,
                preserveDrawingBuffer: this.shaderOptions.transparent,
                width: t,
                height: e,
            });
        }
        getVertexAndFragment(t) {
            return {
                vertex: '\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n',
                fragment: rt(t, this.shaderOptions.transparent),
            };
        }
        enableLiteAnimation() {
            ((this.state = pt.LITE), this.program?.setShaders(this.getVertexAndFragment(2)));
        }
        createShader() {
            if (!this.renderer || !this.uniforms) return;
            const t = this.renderer.gl,
                e = this.isLiteAnimationEnabled ? 2 : 3,
                i = new J(t, { width: 2, height: 2 }),
                s = new b(t, { ...this.getVertexAndFragment(e), uniforms: this.uniforms.toObject() });
            this.program = s;
            return (new Y(t, { geometry: i, program: s }).setParent(this.scene), s);
        }
        render(t = 1) {
            this.shader && this.uniforms && (this.uniforms.update(t), (this.shader.uniforms = this.uniforms.toObject()), this.renderer?.render({ scene: this.scene }));
        }
        updateRenderingState() {
            this.isRenderingEnabled ? this.ticker?.start() : this.ticker?.stop();
        }
        get isLiteAnimationEnabled() {
            return this.state === pt.LITE;
        }
        applySettings(t = {}) {
            const {
                hue: e,
                collectionHue: i,
                energy: s,
                backgroundColor: r,
                baseScale: n,
                useDefaultHue: a,
            } = (({ hue: t, collectionHue: e, energy: i, backgroundColor: s, baseScale: r, useDefaultHue: n }) => {
                const a = { useDefaultHue: n, collectionHue: it(e) };
                workerLog('applySettings', t, e, i, s, r, n);
                return (t && (a.hue = et(t, 0, 360)), i && (a.energy = 0.4 * (i + 1)), s && (a.backgroundColor = s), r && (a.baseScale = et(r, 0, 1)), a);
            })(t);
            (e && i && this.uniforms?.updateColor(e, i),
                s && this.uniforms?.updateEnergy(s),
                r && this.uniforms?.updateBackgroundColor(r),
                n && this.uniforms?.updateBaseScale(n),
                'boolean' == typeof a && this.uniforms?.switchToDefaultHue(a));
        }
        likeAnimation() {
            const t = this.uniforms;
            if (!t) return;
            (t.updateReactTop(0.7),
                setTimeout(() => {
                    t.updateReactMiddle(0.7);
                }, 100),
                setTimeout(() => {
                    t.updateReactBottom(0.7);
                }, 150),
                setTimeout(() => {
                    t.updateReactTop(0);
                }, 850),
                setTimeout(() => {
                    t.updateReactMiddle(0);
                }, 950),
                setTimeout(() => {
                    t.updateReactBottom(0);
                }, 1050));
        }
        playAnimation(t) {
            const e = { ...t, energy: t.energy ?? 0.6 };
            (this.uniforms?.updatePlayingState(!0), this.applySettings(e));
        }
        idleAnimation() {
            (this.uniforms?.updateEnergy(0.2), this.uniforms?.updatePlayingState(!1));
        }
        enableRender() {
            ((this.isRenderingEnabled = !0), this.updateRenderingState());
        }
        disableRender() {
            ((this.isRenderingEnabled = !1), this.updateRenderingState());
        }
        destroy() {
            this.ticker?.stop();
        }
    }
    let mt = null;
    const vt = (e) => {
        self.postMessage({ type: t.ERROR, payload: e });
    };
    self.addEventListener('message', (e) => {
        switch (e.data.type) {
            case t.INIT: {
                const t = e.data.payload;
                mt = new ft({ ...t, onError: vt });
                break;
            }
            case t.APPLY_SETTINGS: {
                const t = e.data.payload;
                mt?.applySettings(t);
                break;
            }
            case t.UPDATE_LAYOUT: {
                const t = e.data.payload;
                mt?.uniforms?.updateLayout(Boolean(t?.isMobile));
                break;
            }
            case t.AUDIO_ANALYZER_FREQUENCIES: {
                const t = e.data.payload;
                mt?.uniforms?.updateAudioFrequencies(t);
                break;
            }
            case t.UPDATE_ENERGY: {
                const t = e.data.payload;
                mt?.uniforms?.updateNewEnergy(t);
                break;
            }
            case t.ENABLE:
                mt?.enableRender();
                break;
            case t.DISABLE:
                mt?.disableRender();
                break;
            case t.IDLE_ANIMATION:
                mt?.idleAnimation();
                break;
            case t.PLAY_ANIMATION: {
                const t = e.data.payload;
                mt?.playAnimation(t);
                break;
            }
            case t.LIKE_ANIMATION:
                mt?.likeAnimation();
                break;
            case t.ENABLE_LITE_ANIMATION:
                mt?.enableLiteAnimation();
        }
    });
})();
function workerLog(...args) {
    try {
        self.postMessage({ type: 'vibe-animation-worker-log', payload: args });
    } catch (e) {
        console.debug('[WORKER]', ...args);
    }
}
//# sourceMappingURL=worker.js.map
