const Logger_js_1 = require("../../packages/logger/Logger.js");
const store_js_1 = require("../store.js");
const electron_1 = require("electron");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const electron = require("electron");
const { downloadFileWithProgress, makeDecryptor, artists2string, removeInvalidCharsFromFilename, removeInvalidEndingsFromTrackTitle, getFileExtensionFromCodec } = require("../utils.js");
const { TracksApiWrapper } = require("./tracksApiWrapper.js");
const { FfmpegWrapper } = require("./ffmpegWrapper.js");
const { createDirIfNotExist } = require("../utils.js");

const TMP_PATH = path.join(electron.app.getAppPath(), "../../", "\\temp");
const MAX_CONCURRENT_DOWNLOADS = 5;
const API_REQUESTS_BATCH_LIMIT = 50;


function getTrackFilename(track) {
    if (!track) return "unknown_track";

    let trackFilename,
        artistsString = artists2string(track?.artists),
        titleString = removeInvalidEndingsFromTrackTitle(track?.title);

    if (artistsString && titleString) {
        trackFilename = `${artistsString} — ${titleString}`;
    } else if (titleString) {
        trackFilename = titleString;
    } else if (artistsString) {
        trackFilename = artistsString;
    } else if (track.filename) {
        trackFilename = removeInvalidEndingsFromTrackTitle(track.filename);
    } else {
        trackFilename = track.realId ?? track.id;
    }

    return removeInvalidCharsFromFilename(trackFilename);
}

class TrackDownloader {
    logger;
    window;
    constructor(window) {
        this.window = window;
        this.logger = new Logger_js_1.Logger("TrackDownloaderLogger");

        this.ffmpeg = new FfmpegWrapper();

        this.logger.log("Initializing tracks API wrapper...");

        this.tracksAPI = null;

        window.webContents
            .executeJavaScript(
                'JSON.parse(localStorage.getItem("oauth")).value;',
            )
            .then((token) => {
                // Dirty way to get OAuth token from localStorage
                this.tracksAPI = new TracksApiWrapper(token, window.webContents.getUserAgent());
                this.logger.log("TracksApiWrapper initialized");
            });
        this.logger.log("TrackDownloader initialized");
    }

    async downloadTrackFile(
        data,
        outputPath,
        callback = (x, b) => {
            return null;
        },
    ) {
        const isEncrypted = data?.transport === "encraw";
        const decryptor = isEncrypted ? makeDecryptor(data.key) : undefined;

        this.logger.log(
            `Downloading${isEncrypted ? " and decrypting" : ""} raw track: ${data.trackId}`,
        );

        try {
            await downloadFileWithProgress(
                data.downloadURL,
                outputPath,
                (x) => {
                    callback(x * 0.8, x * 0.8);
                },
                decryptor,
            );
            this.logger.log(
                `Track ${data.trackId} downloaded${isEncrypted ? " and decrypted" : ""}`,
            );
            return true;
        } catch (e) {
            this.logger.warn(
                `Track ${data.trackId} download${isEncrypted ? " or decryption" : ""} failed: ${e}`,
            );
            return false;
        }
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

    async getFinalTrackPath(data, fileExtension) {
        const defaultDirPath = store_js_1.getModFeatures()?.downloader?.defaultPath;
        const defaultFilepath = getTrackFilename(data.track) + "." + fileExtension;

        if (data.subDirName && store_js_1.getModFeatures()?.downloader?.useDefaultPath && defaultDirPath){
            try {
                await createDirIfNotExist(path.join(defaultDirPath, data.subDirName));
                this.logger.warn("Created directory:", path.join(defaultDirPath, data.subDirName));
            } catch (e) {
                this.logger.warn("Failed to create directory:", e);
            }
        }

        return store_js_1.getModFeatures()?.downloader?.useDefaultPath && defaultDirPath
            ? path.join(defaultDirPath, data.subDirName ?? '' , defaultFilepath)
            : await this.handleSaveDialog(data, defaultFilepath);
    }

    async createTempDirPath(data) {
        if (!data?.trackId) return;
        if (!fsSync.existsSync(TMP_PATH)) {
            await fs.mkdir(TMP_PATH);
            this.logger.log("Created temp directory.");
        }
        const dirPath = path.join(TMP_PATH, `${removeInvalidCharsFromFilename(data?.trackId)}`);
        await this.removeIfExistsDir(dirPath);
        await fs.mkdir(dirPath);
        this.logger.log("Created temp track directory.", dirPath);
        return dirPath;
    }

    async downloadSingleTrack(
        trackId,
        callback = (x, b) => {
            return null;
        },
    ) {

        const useMP3 = store_js_1.getModFeatures()?.downloader?.useMP3 ?? false

        this.logger.log(`Downloading single track: ${trackId}`);

        const [{ downloadInfo: trackDownloadInfo }, tracksMeta] =
            await Promise.all([
                this.tracksAPI.getFileInfo(trackId, { codecs: useMP3 ? ['mp3'] : undefined }),
                this.tracksAPI.getTracksMeta(trackId),
            ]);


        const data = {
            downloadURL: trackDownloadInfo.url,
            codec: trackDownloadInfo.codec,
            bitrate: trackDownloadInfo.bitrate,
            trackId: trackId,
            track: tracksMeta[0],
            transport: trackDownloadInfo.transport,
            key: trackDownloadInfo.key,
            subDirName: undefined,
        };

        await this.downloadTrack(data, callback);

        setTimeout(() => {
            callback(-1.0, -1.0);
        }, 1000);
    }

    async resolveInBatches(tasks, limit) {
        const results = new Array(tasks.length);
        let index = 0;

        // normalize limit
        const concurrency = Math.max(1, Math.min(limit || 1, tasks.length));

        const worker = async () => {
            while (true) {
                const i = index++;
                if (i >= tasks.length) break;
                try {
                    this.logger?.warn?.(`Task ${i} started`);
                    results[i] = await tasks[i]();
                    this.logger?.warn?.(`Task ${i} finished`);
                } catch (err) {
                    // не прерывать воркеры при ошибке задачи — сохранить ошибку в результате
                    results[i] = { error: err };
                    this.logger?.warn?.(`Task ${i} failed: ${err}\n${err.stack}`);
                }
            }
        };

        const workers = Array.from({ length: concurrency }, () => worker());
        await Promise.all(workers);
        return results;
    }


    async downloadMultipleTracks(trackIds, subDirName, callback) {
        const useMP3 = store_js_1.getModFeatures()?.downloader?.useMP3 ?? false;
        const totalTracks = trackIds.length;
        if (!(store_js_1.getModFeatures()?.downloader?.useDefaultPath || store_js_1.getModFeatures()?.downloader?.defaultPath)) {
            this.logger.log("No default path set, canceling multiple track download.");
            return;
        }

        this.logger.log(`Downloading multiple tracks: ${trackIds}`);

        const batchSize = API_REQUESTS_BATCH_LIMIT;
        const tracksDownloadInfo = [];
        const tracksMeta = [];
        for (let i = 0; i < trackIds.length; i += batchSize) {
            const idsChunk = trackIds.slice(i, i + batchSize);
            const [{ downloadInfos }, metas] = await Promise.all([
                this.tracksAPI.getFileInfoBatch(idsChunk, { codecs: useMP3 ? ['mp3'] : undefined }),
                this.tracksAPI.getTracksMeta(idsChunk),
            ]);
            tracksDownloadInfo.push(...downloadInfos);
            tracksMeta.push(...metas);
        }

        const trackProgress = new Map();

        const updateTotalProgress = () => {
            const total = Array.from(trackProgress.values()).reduce((a, b) => a + b, 0);
            const overall = total / totalTracks;
            callback(overall, overall);
        };

        const tasks = trackIds.map((trackId, i) => async () => {
            const trackDownloadInfo = tracksDownloadInfo[i];

            const data = {
                downloadURL: trackDownloadInfo.url,
                codec: trackDownloadInfo.codec,
                bitrate: trackDownloadInfo.bitrate,
                trackId,
                track: tracksMeta[i],
                transport: trackDownloadInfo.transport,
                key: trackDownloadInfo.key,
                subDirName: removeInvalidCharsFromFilename(subDirName),
            };

            const perTrackCallback = (progressRenderer, progressWindow) => {
                trackProgress.set(trackId, Math.min(Math.max(progressRenderer, 0), 1));
                updateTotalProgress();
            };

            await this.downloadTrack(data, perTrackCallback);

            trackProgress.set(trackId, 1);
            updateTotalProgress();
        });

        await this.resolveInBatches(tasks, MAX_CONCURRENT_DOWNLOADS);
        this.logger.log("All tracks downloaded");


        setTimeout(() => callback(-1, -1), 1000);


    }

    async downloadTrack(data, callback) {

        const useSyncLyrics = store_js_1.getModFeatures()?.downloader?.useSyncLyrics ?? true

        let lyricsMeta = undefined;

        const fileExtension = getFileExtensionFromCodec(data.codec);

        if (useSyncLyrics && data.track?.lyricsInfo?.hasAvailableSyncLyrics) {
            lyricsMeta = await this.tracksAPI.getSyncLyrics(data.trackId);
        }

        const finalTrackPath = await this.getFinalTrackPath(data, fileExtension);
        if (!finalTrackPath) return;

        const tempDirPath = await this.createTempDirPath(data);
        if (!tempDirPath) return;

        const tempTrackPath = path.join(tempDirPath, removeInvalidCharsFromFilename(`${data.trackId}.${data.codec}`));

        callback(0, 0);

        await this.downloadTrackFile(data, tempTrackPath, callback);

        const coverBuffer = await this.tracksAPI.fetchTrackCover(data.track);

        this.logger.info("Got cover");
        if (coverBuffer) {
            await fs.writeFile(path.join(tempDirPath, "400x400.jpg"), coverBuffer);
            this.logger.info("Cover saved to temp directory");
        }

        await this.ffmpeg.extractFromMp4(
            data,
            finalTrackPath,
            tempDirPath,
            tempTrackPath,
            fileExtension,
            lyricsMeta?.lrc,
        );

        callback(1.0, 1.0);
        this.logger.info("Track downloaded");

        await this.removeIfExistsDir(tempDirPath);

    }

}

exports.TrackDownloader = TrackDownloader;
