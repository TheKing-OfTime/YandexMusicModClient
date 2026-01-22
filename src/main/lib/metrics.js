// metrics.js (main process)
"use strict";

const { app } = require("electron");
const path = require("path");
const fs = require("fs/promises");
const crypto = require("crypto");

function uuidV4() {
    if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
    const b = crypto.randomBytes(16);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    const hex = b.toString("hex");
    return (
        hex.slice(0, 8) + "-" +
        hex.slice(8, 12) + "-" +
        hex.slice(12, 16) + "-" +
        hex.slice(16, 20) + "-" +
        hex.slice(20)
    );
}

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function readJsonSafe(filePath) {
    try {
        const raw = await fs.readFile(filePath, "utf8");
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

async function writeJsonAtomic(filePath, data) {
    const dir = path.dirname(filePath);
    await ensureDir(dir);

    const tmp = filePath + ".tmp";
    const json = JSON.stringify(data);

    await fs.writeFile(tmp, json, "utf8");

    try {
        try { await fs.unlink(filePath); } catch {}
        await fs.rename(tmp, filePath);
        return;
    } catch {
        try {
            await fs.copyFile(tmp, filePath);
        } finally {
            try { await fs.unlink(tmp); } catch {}
        }
    }
}

function getMetricsStatePath() {
    return path.join(app.getPath("userData"), "metrics-state.json");
}

async function getOrCreateInstallId(statePath) {
    const state = (await readJsonSafe(statePath)) || {};
    if (typeof state.install_id === "string" && state.install_id.length > 10) {
        return { state, installId: state.install_id, isNew: false };
    }
    const installId = uuidV4();
    const newState = { ...state, install_id: installId, install_created_at_ms: Date.now() };
    await writeJsonAtomic(statePath, newState);
    return { state: newState, installId, isNew: true };
}

function nowMs() {
    return Date.now();
}

function shouldSendHeartbeat(lastSentAtMs, intervalMs) {
    if (!lastSentAtMs || typeof lastSentAtMs !== "number") return true;
    return (nowMs() - lastSentAtMs) >= intervalMs;
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

function isRetryableStatus(status) {
    return status === 429 || status === 500 || status === 502 || status === 503 || status === 504;
}

async function sendEvent({ endpointUrl, apiKey, payload, timeoutMs = 10_000, maxRetries = 2 }) {
    const f = globalThis.fetch;
    if (typeof f !== "function") {
        throw new Error("fetch is not available in this runtime (consider upgrading Node/Electron or using undici)");
    }

    let attempt = 0;
    let lastErr = null;

    while (attempt <= maxRetries) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);

        try {
            const res = await f(endpointUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                    ...(apiKey ? { "authorization": `Bearer ${apiKey}` } : {})
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (!res.ok) {
                const text = await res.text().catch(() => "");
                const err = new Error(`Metrics send failed: ${res.status} ${res.statusText} ${text}`.trim());
                if (attempt < maxRetries && isRetryableStatus(res.status)) {
                    lastErr = err;
                    attempt += 1;
                    await sleep(300 * Math.pow(3, attempt - 1));
                    continue;
                }
                throw err;
            }

            return;
        } catch (e) {
            lastErr = e;
            const msg = String(e && e.message ? e.message : e);
            const retryable =
                msg.includes("aborted") ||
                msg.includes("AbortError") ||
                msg.toLowerCase().includes("network") ||
                msg.toLowerCase().includes("fetch");

            if (attempt < maxRetries && retryable) {
                attempt += 1;
                await sleep(300 * Math.pow(3, attempt - 1));
                continue;
            }
            throw e;
        } finally {
            clearTimeout(timer);
        }
    }

    throw lastErr || new Error("Metrics send failed");
}

function buildCommonPayload({ installId, appName, modVersion }) {
    return {
        ts: new Date().toISOString(),
        install_id: installId,
        app_name: appName,
        app_version: app.getVersion(),
        mod_version: modVersion || null,
        platform: process.platform,
        arch: process.arch
    };
}

/* -------------------------
 PERIODIC HEARTBEAT SCHEDULER
 ------------------------- */

// Глобальное состояние планировщика (на процесс)
let heartbeatTimer = null;
let heartbeatStopped = false;
let heartbeatInFlight = false;
let teardownBound = false;

function stopHeartbeatScheduler() {
    heartbeatStopped = true;
    if (heartbeatTimer) {
        clearTimeout(heartbeatTimer);
        heartbeatTimer = null;
    }
}

function bindTeardownOnce() {
    if (teardownBound) return;
    teardownBound = true;

    // Electron lifecycle
    app.on("before-quit", stopHeartbeatScheduler);
    app.on("quit", stopHeartbeatScheduler);

    // Node lifecycle
    process.on("exit", stopHeartbeatScheduler);
    process.on("SIGINT", stopHeartbeatScheduler);
    process.on("SIGTERM", stopHeartbeatScheduler);
}

async function trySendHeartbeatOnce({
    endpointUrl,
    apiKey,
    statePath,
    installId,
    appName,
    modVersion,
    heartbeatIntervalMs,
    timeoutMs,
    maxRetries
}) {
    if (heartbeatInFlight) return;
    heartbeatInFlight = true;

    try {
        const state = (await readJsonSafe(statePath)) || {};
        const lastSentAt = state.last_heartbeat_at_ms || 0;

        if (!shouldSendHeartbeat(lastSentAt, heartbeatIntervalMs)) return;

        const payload = {
            event: "app_heartbeat",
            ...buildCommonPayload({ installId, appName, modVersion })
        };

        await sendEvent({ endpointUrl, apiKey, payload, timeoutMs, maxRetries });

        const newState = { ...state, last_heartbeat_at_ms: nowMs() };
        await writeJsonAtomic(statePath, newState);
    } catch {
        // тихо
    } finally {
        heartbeatInFlight = false;
    }
}

function scheduleNextTick(fn, delayMs) {
    if (heartbeatStopped) return;
    if (heartbeatTimer) clearTimeout(heartbeatTimer);
    heartbeatTimer = setTimeout(fn, delayMs);
}

function startHeartbeatScheduler(params) {
    // setTimeout-петля, чтобы не накапливать вызовы при лагах
    const {
        heartbeatIntervalMs
    } = params;

    const tick = async () => {
        if (heartbeatStopped) return;

        // если вкладка приложения "спит" (Windows), таймеры могут дрифтить — это ок:
        // мы всё равно проверяем shouldSendHeartbeat по last_sent.
        await trySendHeartbeatOnce(params);

        // планируем следующий тик; можно ставить меньше интервала (например, interval/2),
        // но в большинстве случаев достаточно равного интервалу.
        scheduleNextTick(tick, heartbeatIntervalMs);
    };

    // Первый тик: через интервал (а не сразу), потому что "сразу" мы делаем в init
    scheduleNextTick(tick, heartbeatIntervalMs);
}

/* -------------------------
 INIT
 ------------------------- */

async function initUserCountMetric(options) {
    const {
        endpointUrl,
        apiKey = "",
        heartbeatIntervalMs = 3 * 60 * 60 * 1000,
        appName = app.getName(),
        modVersion = "",
        timeoutMs = 10_000,
        maxRetries = 2,
        enablePeriodicHeartbeat = true
    } = options || {};

    if (!endpointUrl) return;

    await app.whenReady();

    bindTeardownOnce();

    const statePath = getMetricsStatePath();
    const { state, installId, isNew } = await getOrCreateInstallId(statePath);

    // 1) install event (один раз)
    if (isNew && !state.install_event_sent) {
        const payload = {
            event: "app_install",
            ...buildCommonPayload({ installId, appName, modVersion })
        };

        try {
            await sendEvent({ endpointUrl, apiKey, payload, timeoutMs, maxRetries });
            const newState = { ...state, install_event_sent: true };
            await writeJsonAtomic(statePath, newState);
        } catch {
            // тихо
        }
    }

    // 2) heartbeat на запуске (если пора)
    try {
        await trySendHeartbeatOnce({
            endpointUrl,
            apiKey,
            statePath,
            installId,
            appName,
            modVersion,
            heartbeatIntervalMs,
            timeoutMs,
            maxRetries
        });
    } catch {
        // тихо
    }

    // 3) периодический heartbeat
    if (enablePeriodicHeartbeat) {
        startHeartbeatScheduler({
            endpointUrl,
            apiKey,
            statePath,
            installId,
            appName,
            modVersion,
            heartbeatIntervalMs,
            timeoutMs,
            maxRetries
        });
    }
}

module.exports = {
    initUserCountMetric,
    stopHeartbeatScheduler
};
