const Logger_js_1 = require('../packages/logger/Logger');
const electron_1 = require('electron');
const NodeID3 = require("node-id3").Promise;
const fs = require("fs").promises;

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

class TrackDownloader {
    logger;
    window;
    constructor(window) {
        this.window = window;
        this.logger = new Logger_js_1.Logger("TrackDownloaderLogger");
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

    async applyNodeID3(data, buffer) {
        const tags = {
            title: data.track?.title,
            artist: artists2string(data.track?.artists),
            album: data.track?.albums?.[0]?.title,
        };

        let coverRes, coverBuffer;
        if (data.track?.coverUri) {
            coverRes = await fetch(
                "https://" + data.track?.coverUri.replace("%%", "1000x1000"),
            );
            coverBuffer = Buffer.from(await coverRes.arrayBuffer());
            this.logger.info("Got cover");
        }
        if (coverBuffer) {
            tags.APIC = coverBuffer;
        }

        return await NodeID3.write(tags, buffer);
    }

    async fetchTrack(data) {
        const res = await fetch(data.downloadURL);
        let arrayBuffer = await res.arrayBuffer();

        if (data?.transport === 'encraw')
            arrayBuffer = await this.decryptData({ key: data.key, data: arrayBuffer });

        return arrayBuffer
    }

    async downloadTrack(data) {

        const { canceled, filePath } = await electron_1.dialog.showSaveDialog({
            defaultPath: `${artists2string(data.track?.artists)} — ${data.track?.title}.${data.codec.replace("-mp4", "")}`,
        });
        if (canceled || !filePath || !data.downloadURL)
            return this.logger.info("Track download canceled");


        this.window.setProgressBar(0);

        const arrayBuffer = await this.fetchTrack(data);

        let buffer = Buffer.from(arrayBuffer);

        this.window.setProgressBar(1.1);

        this.logger.info("Got track");

        buffer = await this.applyNodeID3(data, buffer);

        this.window.setProgressBar(0.95);

        await fs.writeFile(filePath, buffer);

        this.window.setProgressBar(1);

        this.logger.info("Track downloaded");

        setTimeout(() => {
            this.window.setProgressBar(-1);
        }, 1000);
    }
}

exports.TrackDownloader = TrackDownloader;
