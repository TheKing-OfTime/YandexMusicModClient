const config_js_1 = require("../../config.js");

class TracksApiWrapper {
    constructor(token, userAgent) {
        this.token = token;
        this.prefixUrl = "https://api.music.yandex.net/";
        this.codecs = ['flac','aac','he-aac','mp3','flac-mp4','aac-mp4','he-aac-mp4'];
        this.userAgent = userAgent;
    }

    getRequestHeaders() {
        return {
            authorization: this.token ? "OAuth ".concat(this.token) : undefined,
            "x-yandex-music-client": `YandexMusicDesktopAppWindows/${config_js_1.config.buildInfo.VERSION}`,
            "accept-language": "ru",
            "x-yandex-music-without-invocation-info": "1",
            "user-agent": this.userAgent,
        };
    }

    async getSign(signStr) {
        let secretKey = 'kzqU4XhfCaY6B6JTHODeq5',
            textEncoder = new TextEncoder(),
            secretKeyEncoded = textEncoder.encode(secretKey);

        return crypto.subtle
        .importKey(
            "raw",
            secretKeyEncoded,
            { name: "HMAC", hash: { name: "SHA-256" } },
            !0,
            ["sign", "verify"],
        )
        .then(async (t) => {
            let signStrEncoded = textEncoder.encode(signStr);
            return crypto.subtle
            .sign("HMAC", t, signStrEncoded)
            .then((t) =>
                btoa(String.fromCharCode(...new Uint8Array(t))).slice(0, -1),
            );
        });
    };


    request(method, route, { body, headers = {}, searchParams, formData } = {}) {
        const url = new URL(route, this.prefixUrl);
        if (searchParams) {
            if (searchParams instanceof URLSearchParams) {
                url.search = searchParams.toString();
            } else if (typeof searchParams === "object") {
                const sp = new URLSearchParams();
                Object.entries(searchParams).forEach(([k, v]) => {
                    if (v !== undefined && v !== null) sp.append(k, String(v));
                });
                url.search = sp.toString();
            } else if (typeof searchParams === "string") {
                url.search = searchParams.startsWith("?")
                    ? searchParams.slice(1)
                    : searchParams;
            }
        }

        const opts = {
            method: (method || "GET").toUpperCase(),
            headers: {
                ...this.getRequestHeaders(),
                ...headers,
            },
        };

        // If formData provided and method allows a body, prefer it over plain body.
        if (
            formData !== undefined &&
            formData !== null &&
            !["GET", "HEAD"].includes(opts.method)
        ) {
            let fd;
            if (formData instanceof FormData) {
                fd = formData;
            } else if (typeof formData === "object") {
                fd = new FormData();
                Object.getOwnPropertyNames(formData).forEach(i => {
                    let s = formData[i];
                    ("number" == typeof s || "string" == typeof s || "boolean" == typeof s) && fd.append(i, String(s)),
                    Array.isArray(s) && s.forEach((t => {
                            ("number" == typeof t || "string" == typeof t || "boolean" == typeof t) && fd.append(i, String(t))
                        }
                    ))
                });
            }

            if (fd) {
                // Let the runtime set the proper multipart boundary — remove content-type if present.
                if (opts.headers["content-type"]) delete opts.headers["content-type"];
                if (opts.headers["Content-Type"]) delete opts.headers["Content-Type"];
                opts.body = fd;
            }
        } else if (
            body !== undefined &&
            body !== null &&
            !["GET", "HEAD"].includes(opts.method)
        ) {
            if (
                body instanceof FormData ||
                body instanceof URLSearchParams ||
                body instanceof Blob
            ) {
                opts.body = body;
            } else if (typeof body === "object") {
                opts.body = JSON.stringify(body);
                if (
                    !opts.headers["content-type"] &&
                    !opts.headers["Content-Type"]
                ) {
                    opts.headers["content-type"] = "application/json";
                }
            } else {
                opts.body = String(body);
            }
        }

        return fetch(url.toString(), opts).then(async (res) => {
            const result = {
                ok: res.ok,
                status: res.status,
                headers: res.headers,
                data: null,
            };
            const ct = (res.headers.get("content-type") || "").toLowerCase();
            if (ct.includes("application/json")) {
                result.data = await res.json();
            } else if (
                ct.includes("application/octet-stream") ||
                ct.startsWith("audio/") ||
                ct.startsWith("image/")
            ) {
                result.data = await res.arrayBuffer();
            } else {
                result.data = await res.text();
            }
            if (!res.ok) {
                const err = new Error(
                    `Request failed with status ${res.status}`,
                );
                err.response = result;
                throw err;
            }
            return result;
        });
    }

    async getTracksMeta(ids, { removeDuplicates = false, withProgress = false }) {
        return (await this.request("POST", "tracks", {
            formData: {
                trackIds: ids,
                removeDuplicates,
                withProgress,
            }
        })).data;
    }

    async getFileInfo(trackId, { quality='lossless', codecs=this.codecs, transports = ['encraw'] }) {

        const timestamp = Math.floor(Date.now() / 1e3);
        const signStr = "".concat(timestamp).concat(trackId).concat(quality).concat(codecs.join("")).concat(transports.join(""));
        const sign = await this.getSign(signStr);

        return (await this.request("GET", "get-file-info", {
            searchParams: {
                trackId: trackId,
                ts: timestamp,
                quality: quality,
                codecs: codecs.join(","),
                transports: transports.join(","),
                sign: sign,
            }
        })).data;
    }

    async getFileInfoBatch(trackIds, { quality='lossless', codecs=this.codecs, transports = ['encraw'] }) {

        const timestamp = Math.floor(Date.now() / 1e3);
        const signStr = "".concat(timestamp).concat(trackIds.join(",")).concat(quality).concat(codecs.join("")).concat(transports.join(""));
        const sign = await this.getSign(signStr);

        return (await this.request("GET", "get-file-info", {
            searchParams: {
                trackIds: trackIds.join(","),
                ts: timestamp,
                quality: quality,
                codecs: codecs.join(","),
                transports: transports.join(","),
                sign: sign,
            }
        })).data;
    }

    async fetchTrackCover(track, size=400) {
        let coverRes, coverBuffer;
        if (track?.coverUri) {
            coverRes = await fetch(
                "https://" + track?.coverUri.replace("%%", `${size}x${size}`),
            );
            coverBuffer = Buffer.from(await coverRes.arrayBuffer());
        }
        return coverBuffer;
    }
}

exports.TracksApiWrapper = TracksApiWrapper;
