const Logger_js_1 = require('../packages/logger/Logger');
const store_js_1 = require('./store');
const electron_1 = require('electron');
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require('path');
const promisify = require("util").promisify;
const { exec } = require('child_process');
const FFMPEG_PATH = require('ffmpeg-static');
const electron = require('electron');

const execPromise = promisify(exec);

const TMP_PATH = path.join(
    electron.app.getAppPath(),
    '../../',
    "\\temp",
);

const EXTRACTED_FFMPEG_PATH = path.join(electron.app.getAppPath(), '../', 'ffmpeg.exe');

async function extractFfmpeg() {
    await fs.copyFile(FFMPEG_PATH, EXTRACTED_FFMPEG_PATH);
}

function artists2string(artists) {
    if (!artists) return;
    if (artists.length <= 1) return artists?.[0].name;
    let string = artists.shift()?.name;
    artists.forEach((a) => {
        string += " & " + a.name;
    });
    return string;
}

/**
 * Преобразует строку шестнадцатеричных символов в Uint8Array.
 * @param {string} hexString - Строка, содержащая шестнадцатеричные цифры (например, "a1b2c3...").
 * @returns {Uint8Array} - Массив байтов.
 */
function hexStringToUint8Array(hexString) {
    // Разбиваем строку на пары символов
    const hexPairs = hexString.match(/.{1,2}/g);
    // Преобразуем каждую пару в число
    const byteValues = hexPairs.map(pair => parseInt(pair, 16));
    return new Uint8Array(byteValues);
}

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
        counter[15 - i] = value & 0xFF; // Получаем младший байт
        value >>= 8;                    // Сдвигаем число на 8 бит вправо
    }
    return counter;
}

function getFileExtensionFromCodec(codec) {
    return codec.replaceAll("he-aac", "m4a").replaceAll("aac", "m4a").replace(/(.*)-mp4/, "$1");
}

function removeInvalidCharsFromFilename(str) {
    return str.replace(/[/\\?%*:|"<>]/g, '_');
}

class TrackDownloader {
    logger;
    window;
    constructor(window) {
        this.window = window;
        this.logger = new Logger_js_1.Logger("TrackDownloaderLogger");
        extractFfmpeg().then(() => {
            this.logger.info("Extracted ffmpeg");
        });
        this.logger.log("Initialized");
    }

    /**
     * Асинхронно расшифровывает данные с использованием алгоритма AES-CTR.
     * @param {Object} params - Параметры расшифровки.
     * @param {string} params.key - Ключ в виде шестнадцатеричной строки.
     * @param {ArrayBuffer} params.data - Зашифрованные данные.
     * @param {number} [params.loadedBytes] - Количество загруженных байт (используется для вычисления counter).
     * @returns {Promise<ArrayBuffer>} - Промис, который при разрешении возвращает расшифрованные данные.
     */
    async decryptData({ key, data, loadedBytes }) {
        // Импортируем ключ: преобразуем строку в Uint8Array и импортируем его для AES-CTR
        const keyBytes = hexStringToUint8Array(key);
        const cryptoKey = await crypto.subtle.importKey(
            "raw",
            keyBytes,
            { name: "AES-CTR" },
            false,
            ["encrypt", "decrypt"]
        );

        // Инициализируем counter нулевым массивом
        let counter = new Uint8Array(16);
        // Если указано количество загруженных байт, вычисляем номер блока и создаем counter
        if (loadedBytes) {
            const blockNumber = loadedBytes / 16;
            counter = numberToUint8Counter(blockNumber);
        }

        // Выполняем расшифровку данных
        return await crypto.subtle.decrypt(
            {
                name: "AES-CTR",
                counter: counter,
                length: 128 // Длина блока в битах
            },
            cryptoKey,
            data
        );

    }

    async fetchTrack(data, callback = (x,b)=>{return null}) {
        this.logger.log("Fetching track:", data);

        const res = await fetch(data.downloadURL);

        const contentLength = res.headers.get('content-length');
        let arrayBuffer;

        if (contentLength) {
            const total = parseInt(contentLength, 10);
            let loaded = 0;
            const reader = res.body.getReader();
            const chunks = [];
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                loaded += value.length;
                const result = Math.min((loaded / total) * 0.7, 1);
                callback(result, result);
            }
            arrayBuffer = new Uint8Array(chunks.reduce((acc, val) => acc + val.length, 0));
            let offset = 0;
            for (const chunk of chunks) {
                arrayBuffer.set(chunk, offset);
                offset += chunk.length;
            }
            arrayBuffer = arrayBuffer.buffer;
        } else {
            arrayBuffer = await res.arrayBuffer();
            callback(0.7, 0.7);
        }

        if (!arrayBuffer) return this.logger.warn("Failed to fetch:", res);

        this.logger.log("Fetched!");

        if (data?.transport === "encraw") {
            this.logger.log("Track is encrypted. Decrypting...");
            arrayBuffer = await this.decryptData({ key: data.key, data: arrayBuffer });
            this.logger.log("Decrypted!");
        }

        return Buffer.from(arrayBuffer);
    }

    async fetchAlbumCover(data) {
        let coverRes, coverBuffer;
        if (data.track?.coverUri) {
            coverRes = await fetch(
                "https://" + data.track?.coverUri.replace("%%", "400x400"),
            );
            coverBuffer = Buffer.from(await coverRes.arrayBuffer());
        }
        return coverBuffer;
    }

    async handleSaveDialog(data, defaultFilepath) {

        const { canceled, filePath } = await electron_1.dialog.showSaveDialog({
            defaultPath: defaultFilepath, //.replace("-mp4", "")
        });
        if (canceled || !filePath || !data.downloadURL)
            return this.logger.info("Track download canceled");

        return filePath;
    }

    async removeIfExistsDir(dirPath) {
        if (!fsSync.existsSync(dirPath)) return;
            await fs.rm(dirPath, { recursive: true });
            this.logger.log("Deleted temp track directory.", dirPath);
    }

    async createTempDirPath(data) {
        if(!data?.trackId) return;
        if (!fsSync.existsSync(TMP_PATH)) {
            await fs.mkdir(TMP_PATH);
            this.logger.log("Created temp directory.");
        }
        const dirPath = path.join(TMP_PATH, data?.trackId);
        await this.removeIfExistsDir(dirPath)
        await fs.mkdir(dirPath);
        this.logger.log("Created temp track directory.", dirPath);
        return dirPath;
    }

    async extractWithFfmpeg(data, finalFilepath, tempDirPath, tempFilepath, fileExtension=undefined) {
        if (!fsSync.existsSync(tempDirPath) ||!fsSync.existsSync(tempFilepath)) return;
        let withCover = false;
        const coverPath = path.join(tempDirPath, "400x400.jpg");

        if(fsSync.existsSync(coverPath)) {
            withCover = true;
        }

        const args = [
            "-i", `"${tempFilepath}"`,
            ...(withCover ? ["-i", path.join(tempDirPath, "400x400.jpg")] : []),
            "-map", "0:a",
            ...(withCover ? ["-map", "1"] : []),
            ...(fileExtension === 'mp3' ? ["-codec:a", "libmp3lame","-id3v2_version", "3", "-write_id3v1", "1", "-b:a", (data.bitrate ?? 320) + "k",] : ["-c:a", "copy"]),
            ...(withCover ? ["-c:v", "mjpeg"] : []),
            ...(withCover ? ["-metadata:s:v", 'title="Album cover"'] : []),
            ...(withCover ? ["-metadata:s:v", 'comment="Cover (front)"'] : []),
            ...(withCover ? ["-disposition:v", "attached_pic"] : []),
            ...(data.track?.artists ? ["-metadata", `artist="${artists2string(data.track?.artists)}"`] : []),
            ...(data.track?.title ? ["-metadata", `title="${data.track?.title}"`] : []),
            ...(data.track?.albums?.[0]?.title ? ["-metadata", `album="${data.track?.albums?.[0]?.title}"`] : []),
            `-y "${finalFilepath}"`
        ];

        const command = `"${EXTRACTED_FFMPEG_PATH}" ${args.join(" ")}`;
        this.logger.info(`ReEncoding: ${command}`);


        try {
            const { stdout, stderr } = await execPromise(command);
            this.logger.info(stdout);
            this.logger.error(stderr);
        } catch (error) {
            this.logger.error(`ffmpeg error: ${error.message}`);
        }
    }

    async convertToMP3(inputAudioPath, outputAudioPath) {
        if (!fsSync.existsSync(inputAudioPath)) return;

        const args = [
            "-i", `"${inputAudioPath}"`,
            "-map", "0",
            "-map_metadata", "0",
            "-codec:a", "libmp3lame",
            "-b:a", "320k",
            "-id3v2_version", "3",
            "-write_id3v1", "1",
            `-y "${outputAudioPath}"`
        ];

        const command = `"${EXTRACTED_FFMPEG_PATH}" ${args.join(" ")}`;
        this.logger.info(`ReEncoding: ${command}`);


        try {
            const { stdout, stderr } = await execPromise(command);
            this.logger.info(stdout);
            this.logger.error(stderr);
        } catch (error) {
            this.logger.error(`ffmpeg error: ${error.message}`);
            return false;
        }
    }

    async downloadTrack(data, callback = (x,b)=>{return null} ) {

        const fileExtension = getFileExtensionFromCodec(data.codec);
        const convertToMP3 = (store_js_1.getModFeatures()?.downloader?.useMP3 ?? false) && (fileExtension !== "mp3");
        const defaultFilepath = removeInvalidCharsFromFilename(`${artists2string(data.track?.artists)} — ${data.track?.title}.`) + (convertToMP3 ? 'mp3' : fileExtension);
        const defaultDirPath = store_js_1.getModFeatures()?.downloader?.defaultPath;

        const finalTrackPath = (store_js_1.getModFeatures()?.downloader?.useDefaultPath && defaultDirPath) ? path.join(defaultDirPath, defaultFilepath) : await this.handleSaveDialog(data, defaultFilepath);
        if(!finalTrackPath) return;

        const tempDirPath = await this.createTempDirPath(data);
        if(!tempDirPath) return;

        const tempTrackPath = path.join(tempDirPath, `${data.trackId}.${data.codec}`);
        const tempExtractedTrackPath = path.join(tempDirPath, `extracted${data.trackId}.${fileExtension}`);

        callback(0, 0);

        const buffer = await this.fetchTrack(data, callback);
        this.logger.info("Got track. Saving to:", tempTrackPath);

        await fs.writeFile(tempTrackPath, buffer);
        this.logger.info("Track saved to temp directory");
        callback(0.8, 0.8);

        const coverBuffer = await this.fetchAlbumCover(data);
        this.logger.info("Got cover");
        if (coverBuffer) {
            await fs.writeFile(path.join(tempDirPath, "400x400.jpg"), coverBuffer);
            this.logger.info("Cover saved to temp directory");
        }

        await this.extractWithFfmpeg(data, convertToMP3 ? tempExtractedTrackPath : finalTrackPath, tempDirPath, tempTrackPath, fileExtension);

        if(convertToMP3) {
            callback(0.8, 0.9);
            this.logger.info("Converting to MP3", tempExtractedTrackPath);
            await this.convertToMP3(tempExtractedTrackPath, finalTrackPath);
            this.logger.info("Converted to MP3", finalTrackPath);
        }

        callback(1.0, 1.0);
        this.logger.info("Track downloaded");

        await this.removeIfExistsDir(tempDirPath);

        setTimeout(() => {
          callback(-1.0, -1.0);
        }, 1000);
    }
}

exports.TrackDownloader = TrackDownloader;
