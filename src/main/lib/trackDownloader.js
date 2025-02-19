const Logger_js_1 = require('../packages/logger/Logger');
const electron_1 = require('electron');
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require('path');
const promisify = require("util").promisify;
const { exec } = require('child_process');
const FFMPEG_PATH = require('ffmpeg-static');

const execPromise = promisify(exec);

const TMP_PATH = path.join(
    process.env.LOCALAPPDATA,
    "\\Programs\\YandexMusic\\temp",
);

const EXTRACTED_FFMPEG_PATH = path.join(process.env.LOCALAPPDATA, "Programs", "YandexMusic", 'resources', 'ffmpeg.exe');

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

    async fetchTrack(data) {
        const res = await fetch(data.downloadURL);
        let arrayBuffer = await res.arrayBuffer();

        if(!arrayBuffer) return;

        if (data?.transport === 'encraw')
            arrayBuffer = await this.decryptData({ key: data.key, data: arrayBuffer });

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

    async handleSaveDialog(data) {
        const fileExtension = getFileExtensionFromCodec(data.codec);
        const defaultFilepath = removeInvalidCharsFromFilename(`${artists2string(data.track?.artists)} — ${data.track?.title}.`) + fileExtension;

        const { canceled, filePath } = await electron_1.dialog.showSaveDialog({
            defaultPath: defaultFilepath, //.replace("-mp4", "")
        });
        if (canceled || !filePath || !data.downloadURL)
            return this.logger.info("Track download canceled");

        return filePath;
    }

    async removeIfExistsDir(dirPath) {
        if (fsSync.existsSync(dirPath)) {
            await fs.rm(dirPath, { recursive: true });
        }
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

    async reEncodeWithFfmpeg(data, finalFilepath, tempDirPath, tempFilepath) {
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
            "-c:a", "copy",
            ...(withCover ? ["-c:v", "mjpeg"] : []),
            ...(withCover ? ["-metadata:s:v", 'title="Album cover"'] : []),
            ...(withCover ? ["-metadata:s:v", 'comment="Cover (front)"'] : []),
            ...(withCover ? ["-disposition:v", "attached_pic"] : []),
            ...(data.track?.artists ? ["-metadata", `artist="${artists2string(data.track?.artists)}"`] : []),
            ...(data.track?.title ? ["-metadata", `title="${data.track?.title}"`] : []),
            ...(data.track?.albums?.[0]?.title ? ["-metadata", `album="${data.track?.albums?.[0]?.title}"`] : []),
            `"${finalFilepath}"`
        ];

        const command = `${EXTRACTED_FFMPEG_PATH} ${args.join(" ")}`;
        this.logger.info(`ReEncoding: ${command}`);


        try {
            const { stdout, stderr } = await execPromise(command);
            this.logger.info(stdout);
            this.logger.error(stderr);
        } catch (error) {
            this.logger.error(`ffmpeg error: ${error.message}`);
        }
    }

    async downloadTrack(data) {

        const finalTrackPath = await this.handleSaveDialog(data);
        const tempDirPath = await this.createTempDirPath(data);
        if(!tempDirPath) return;

        const tempTrackPath = path.join(tempDirPath, `${data.trackId}.${data.codec}`);

        this.window.setProgressBar(0);

        const buffer = await this.fetchTrack(data);
        this.logger.info("Got track. Saving to:", tempTrackPath);

        this.window.setProgressBar(0.6);

        await fs.writeFile(tempTrackPath, buffer);
        this.logger.info("Track saved to temp directory");
        this.window.setProgressBar(0.8);

        const coverBuffer = await this.fetchAlbumCover(data);
        this.logger.info("Got cover");
        if (coverBuffer) {
            await fs.writeFile(path.join(tempDirPath, "400x400.jpg"), coverBuffer);
            this.logger.info("Cover saved to temp directory");
        }

        await this.reEncodeWithFfmpeg(data, finalTrackPath, tempDirPath, tempTrackPath);
        this.window.setProgressBar(1.0);
        this.logger.info("Track downloaded");

        await this.removeIfExistsDir(tempDirPath);

        setTimeout(() => {
            this.window.setProgressBar(-1);
        }, 1000);
    }
}

exports.TrackDownloader = TrackDownloader;
