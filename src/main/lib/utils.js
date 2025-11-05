"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.downloadFileWithProgress = exports.makeDecryptor = exports.numberToUint8Counter = exports.hexStringToUint8Array = exports.createDirIfNotExist = void 0;

const fs = require("fs");
const fsp = require("fs").promises;

async function createDirIfNotExist(target) {
    if (!fs.existsSync(target)) {
        await fsp.mkdir(target);
    }
}
exports.createDirIfNotExist = createDirIfNotExist;

function throttle(callee, delay) {
    let lastCall = 0;
    let timeout = null;
    let lastArgs;
    let lastContext;

    return function (...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCall);
        lastContext = this;
        lastArgs = args;

        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastCall = now;
            callee.apply(lastContext, lastArgs);
        } else if (!timeout) {

            timeout = setTimeout(() => {
                timeout = null;
                lastCall = Date.now();
                callee.apply(lastContext, lastArgs);
            }, remaining);
        }
    };
}

exports.throttle = throttle;

/**
 * Скачивает файл по URL, потоково обрабатывает (через трансформер) и сохраняет в файл.
 *
 * @param {string} url - Ссылка на файл
 * @param {string} outputPath - Путь для сохранения файла
 * @param {(progress: number) => void} [onProgress] - Колбэк прогресса (0..1)
 * @param {(input: ReadableStream) => ReadableStream | Promise<ReadableStream>} [transformStream] - Опциональная функция-трансформер
 */
async function downloadFileWithProgress(url, outputPath, onProgress, transformStream) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const total = parseInt(response.headers.get("content-length") || "0", 10);
    const reader = response.body.getReader();
    const fileStream = fs.createWriteStream(outputPath);

    let downloaded = 0;

    // Базовый поток, только считает прогресс
    let baseStream = new ReadableStream({
        async pull(controller) {
            const { done, value } = await reader.read();
            if (done) {
                controller.close();
                return;
            }

            downloaded += value.length;
            if (onProgress && total) onProgress(downloaded / total);

            controller.enqueue(value);
        },
    });

    // Пропускаем поток через трансформер (если передан)
    if (typeof transformStream === "function") {
        baseStream = await transformStream(baseStream);
    }

    const writable = new WritableStream({
        write(chunk) {
            fileStream.write(Buffer.from(chunk));
        },
        close() {
            fileStream.end();
        },
    });

    await baseStream.pipeTo(writable);
}

exports.downloadFileWithProgress = downloadFileWithProgress;

/**
 * Преобразует строку шестнадцатеричных символов в Uint8Array.
 * @param {string} hexString - Строка, содержащая шестнадцатеричные цифры (например, "a1b2c3...").
 * @returns {Uint8Array} - Массив байтов.
 */
function hexStringToUint8Array(hexString) {
    // Разбиваем строку на пары символов
    const hexPairs = hexString.match(/.{1,2}/g);
    // Преобразуем каждую пару в число
    const byteValues = hexPairs.map((pair) => parseInt(pair, 16));
    return new Uint8Array(byteValues);
}

exports.hexStringToUint8Array = hexStringToUint8Array;

/**
 * Преобразует число в 16-байтовый массив, используемый в качестве counter для AES-CTR.
 * @param {number} num - Число, которое нужно преобразовать.
 * @returns {Uint8Array} - 16-байтовый массив, заполненный байтами числа.
 */
function numberToUint8Counter(num) {
    let value = num;
    const counter = new Uint8Array(16);
    // Записываем число в массив, начиная с младших байтов (с конца массива)
    for (let i = 0; i < 16; i++) {
        counter[15 - i] = value & 0xff; // Получаем младший байт
        value >>= 8; // Сдвигаем число на 8 бит вправо
    }
    return counter;
}

exports.numberToUint8Counter = numberToUint8Counter;

/**
 * Делает трансформер, который расшифровывает входной ReadableStream (AES-CTR).
 * @param {string} keyHex - AES key в hex
 * @returns {(stream: ReadableStream) => Promise<ReadableStream>}
 */
function makeDecryptor(keyHex) {
    return async function decryptTransform(stream) {
        const keyBytes = hexStringToUint8Array(keyHex);
        const cryptoKey = await crypto.subtle.importKey(
            "raw",
            keyBytes,
            { name: "AES-CTR" },
            false,
            ["decrypt"]
        );

        let loadedBytes = 0; // абсолютный офсет уже обработанных байт
        let reader;

        // Внутренний буфер для выравнивания по 16 байтам
        let buffer = new Uint8Array(0);

        function concatUint8Arrays(a, b) {
            const out = new Uint8Array(a.length + b.length);
            out.set(a, 0);
            out.set(b, a.length);
            return out;
        }

        return new ReadableStream({
            async start(controller) {
                reader = stream.getReader();
            },

            async pull(controller) {
                try {
                    const { done, value } = await reader.read();

                    // Если получили кусок, привести его к Uint8Array и добавить в буфер
                    if (!done && value) {
                        const chunk = (value instanceof Uint8Array)
                            ? value
                            : (value instanceof ArrayBuffer ? new Uint8Array(value) : new Uint8Array(value.buffer || value));
                        buffer = concatUint8Arrays(buffer, chunk);
                    }

                    // Если нет достаточных данных и поток ещё не завершён — ждём следующего pull
                    // Но если поток завершён (done) — нужно обработать остаток (включая неполный блок)
                    if (!done) {
                        // Обрабатываем все полные 16-байтовые блоки (можно обрабатывать N*16 байт)
                        const fullBlocks = Math.floor(buffer.length / 16);
                        if (fullBlocks === 0) {
                            // нечего отправить пока — дождёмся следующего чанка
                            return;
                        }

                        const processLen = fullBlocks * 16;
                        const toProcess = buffer.subarray(0, processLen);

                        // counter = numberToUint8Counter(floor(loadedBytes / 16))
                        const blockNumber = Math.floor(loadedBytes / 16);
                        const counter = numberToUint8Counter(blockNumber);

                        const decryptedBuf = await crypto.subtle.decrypt(
                            { name: "AES-CTR", counter, length: 128 },
                            cryptoKey,
                            toProcess
                        );

                        // Отправляем расшифрованные байты
                        controller.enqueue(new Uint8Array(decryptedBuf));

                        // Обновляем loadedBytes и буфер (оставляем хвост <16 байт)
                        loadedBytes += processLen;
                        buffer = buffer.subarray(processLen);

                        return;
                    } else {
                        // done === true: поток входа закончился
                        if (buffer.length > 0) {
                            // Расшифровываем остаток (возможно <16 байт) — это корректно для финального фрагмента
                            const blockNumber = Math.floor(loadedBytes / 16);
                            const counter = numberToUint8Counter(blockNumber);

                            const decryptedBuf = await crypto.subtle.decrypt(
                                { name: "AES-CTR", counter, length: 128 },
                                cryptoKey,
                                buffer
                            );

                            controller.enqueue(new Uint8Array(decryptedBuf));
                            loadedBytes += buffer.length;
                            buffer = new Uint8Array(0);
                        }

                        controller.close();
                        return;
                    }
                } catch (err) {
                    controller.error(err);
                }
            },

            async cancel(reason) {
                if (reader) {
                    try { await reader.cancel(reason); } catch (e) { /* ignore */ }
                }
            }
        });
    };
}

exports.makeDecryptor = makeDecryptor;

function artists2string(artists) {
    if (!artists || artists?.length === 0) return;
    if (artists.length <= 1) return artists?.[0].name;
    let string = artists.shift()?.name;
    artists.forEach((a) => {
        string += " & " + a.name;
    });
    return string;
}

exports.artists2string = artists2string;


function getFileExtensionFromCodec(codec) {
    return codec
    .replaceAll("he-aac", "m4a")
    .replaceAll("aac", "m4a")
    .replace(/(.*)-mp4/, "$1");
}
exports.getFileExtensionFromCodec = getFileExtensionFromCodec;

function removeInvalidCharsFromFilename(str) {
    return str.replace(/[/\\?%*:|"<>]/g, "_");
}
exports.removeInvalidCharsFromFilename = removeInvalidCharsFromFilename;

function removeInvalidEndingsFromTrackTitle(str) {
    if (str.endsWith(".mp3")) str.replaceAll(".mp3", "");
    if (str.endsWith(".mp4")) str.replaceAll(".mp4", "");
    if (str.endsWith(".m4a")) str.replaceAll(".m4a", "");
    if (str.endsWith(".flac")) str.replaceAll(".flac", "");
    return str;
}
exports.removeInvalidEndingsFromTrackTitle = removeInvalidEndingsFromTrackTitle;

function LRC2SYLT(lrcString) {
    const lines = lrcString.split(/\r?\n/);
    const result = [];

    const timeTagRegex = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,2}))?\]/g;
    const metaTagRegex = /^\[(ar|ti|al|by|offset|re|ve):.*?\]$/i;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        // Игнорируем метаданные
        if (metaTagRegex.test(trimmed)) continue;

        let match;
        const times = [];
        let text = trimmed;

        // Извлекаем все временные теги
        while ((match = timeTagRegex.exec(trimmed)) !== null) {
            const minutes = parseInt(match[1], 10);
            const seconds = parseInt(match[2], 10);
            const hundredths = match[3] ? parseInt(match[3].padEnd(2, '0'), 10) : 0;
            const timestamp = (minutes * 60 + seconds) * 1000 + hundredths * 10;
            times.push(timestamp);
        }

        // Убираем временные теги из текста
        text = trimmed.replace(timeTagRegex, '').trim();

        // Если нет текста — пропускаем
        if (!text) continue;

        // Добавляем элементы synchronisedText
        for (const timeStamp of times) {
            result.push({
                text,
                timeStamp
            });
        }
    }

    // Сортируем по времени
    result.sort((a, b) => a.timeStamp - b.timeStamp);

    return result;
}

exports.LRC2SYLT = LRC2SYLT;
