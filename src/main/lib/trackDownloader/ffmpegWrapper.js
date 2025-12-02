const electron = require("electron");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const FFMPEG_PATH = require("ffmpeg-static");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const { promisify } = require("util");
const { exec } = require("child_process");
const { artists2string, LRC2SYLT, escapeRestrictedShellChars } = require("../utils.js");
const NodeID3 = require('node-id3');

const execPromise = promisify(exec);

const EXTRACTED_FFMPEG_PATH = path.join(
    electron.app.getAppPath(),
    "../",
    "ffmpeg.exe",
);

async function extractFfmpeg() {
    await fs.copyFile(FFMPEG_PATH, EXTRACTED_FFMPEG_PATH);
}

class FfmpegWrapper {
    constructor() {
        this.logger = new Logger_js_1.Logger("FfmpegWrapper");
        this.ffmpegPath = EXTRACTED_FFMPEG_PATH;
        if (!fsSync.existsSync(this.ffmpegPath)) {
            extractFfmpeg();
        }
    }

    async extractFromMp4(
        data,
        finalFilepath,
        tempDirPath,
        tempFilepath,
        fileExtension = undefined,
        lrc = undefined,
    ) {
        if (!fsSync.existsSync(tempDirPath) || !fsSync.existsSync(tempFilepath))
            return;
        let withCover = false;
        const coverPath = path.join(tempDirPath, "400x400.jpg");

        if (fsSync.existsSync(coverPath)) {
            withCover = true;
        }

        const args = [
            "-i",
            `"${tempFilepath}"`,
            ...(fileExtension !== "mp3" && withCover
                ? ["-i", `"${path.join(tempDirPath, "400x400.jpg")}"`]
                : []),
            "-map",
            "0:a",
            ...(fileExtension !== "mp3" && withCover ? ["-map", "1"] : []),
            ...(fileExtension === "mp3"
                ? [
                    "-codec:a",
                    "libmp3lame",
                    "-id3v2_version",
                    "4",
                    "-b:a",
                    (data.bitrate ?? 320) + "k",
                ]
                : ["-c:a", "copy"]),
            ...(fileExtension !== "mp3" && withCover ? ["-c:v", "mjpeg"] : []),
            ...(fileExtension !== "mp3" && withCover ? ["-metadata:s:v", 'title="Album cover"'] : []),
            ...(fileExtension !== "mp3" && withCover ? ["-metadata:s:v", 'comment="Cover (front)"'] : []),
            ...(fileExtension !== "mp3" && withCover ? ["-disposition:v", "attached_pic"] : []),
            ...(fileExtension !== "mp3" && data.track?.artists && data.track?.artists.length > 0
                ? [
                    "-metadata",
                    `artist="${artists2string(data.track?.artists)}"`,
                ]
                : []),
            ...(fileExtension !== "mp3" && data.track?.title
                ? ["-metadata", `title="${escapeRestrictedShellChars(data.track?.title)}"`]
                : []),
            ...(fileExtension !== "mp3" && data.track?.albums?.[0]?.title
                ? ["-metadata", `album="${escapeRestrictedShellChars(data.track?.albums?.[0]?.title)}"`]
                : []),
            ...(fileExtension !== "mp3" && data.track?.albums?.[0]?.year
                ? ["-metadata", `year="${data.track?.albums?.[0]?.year}"`]
                : []),
            ...(fileExtension !== "mp3" && data.track?.albums?.[0]?.genre
                ? ["-metadata", `genre="${data.track?.albums?.[0]?.genre}"`]
                : []),
            `-y "${finalFilepath}"`,
        ];

        const command = `"${EXTRACTED_FFMPEG_PATH}" ${args.join(" ")}`;
        this.logger.info(`ReEncoding: ${command}`);

        try {
            const { stdout, stderr } = await execPromise(command);
            this.logger.info(stdout);
            this.logger.warn(stderr);
        } catch (error) {
            this.logger.error(`ffmpeg error: ${error.message}`);
        }

        if (fileExtension === "mp3") {

            const SYLT = lrc ? LRC2SYLT(lrc) : undefined;

            const tags = {
                title: data.track?.title,
                artist: artists2string(data.track?.artists),
                album: data.track?.albums?.[0]?.title,
                image: withCover ? path.join(tempDirPath, "400x400.jpg") : undefined,
                year: data.track?.albums?.[0]?.year?.toString(),
                genre: data.track?.albums?.[0]?.genre,
                ISRC: data.track?.isrc,
            };

            if (SYLT) {
                tags.unsynchronisedLyrics = {
                    language: "eng",
                    text: SYLT.reduce((acc, curr) => acc + curr.text + '\n', '').trim(),
                };
                tags.synchronisedLyrics = [{
                    language: "eng",
                    timeStampFormat: NodeID3.TagConstants.TimeStampFormat.MILLISECONDS,
                    contentType: NodeID3.TagConstants.SynchronisedLyrics.ContentType.LYRICS,
                    synchronisedText: SYLT,
                }];
            }

            const status = NodeID3.write(tags, finalFilepath);
            if (!status) {
                this.logger.error('Failed to write ID3 tags');
                return;
            }

            this.logger.info('Added ID3 tags');
        } else {
            if (lrc) {
                const ext = path.extname(finalFilepath);
                const lrcPath = `${finalFilepath.slice(0, -ext.length)}.lrc`;
                await fs.writeFile(lrcPath, lrc);
            }
        }
    }

}

exports.FfmpegWrapper = FfmpegWrapper;
