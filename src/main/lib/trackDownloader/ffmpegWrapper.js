const electron = require("electron");
const Logger_js_1 = require("../../packages/logger/Logger.js");
const FFMPEG_PATH = require("ffmpeg-static");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const { promisify } = require("util");
const { exec } = require("child_process");
const { artists2string } = require("../utils.js");

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
            ...(withCover
                ? ["-i", `"${path.join(tempDirPath, "400x400.jpg")}"`]
                : []),
            "-map",
            "0:a",
            ...(withCover ? ["-map", "1"] : []),
            ...(fileExtension === "mp3"
                ? [
                    "-codec:a",
                    "libmp3lame",
                    "-id3v2_version",
                    "3",
                    "-write_id3v1",
                    "1",
                    "-b:a",
                    (data.bitrate ?? 320) + "k",
                ]
                : ["-c:a", "copy"]),
            ...(withCover ? ["-c:v", "mjpeg"] : []),
            ...(withCover ? ["-metadata:s:v", 'title="Album cover"'] : []),
            ...(withCover ? ["-metadata:s:v", 'comment="Cover (front)"'] : []),
            ...(withCover ? ["-disposition:v", "attached_pic"] : []),
            ...(data.track?.artists && data.track?.artists.length > 0
                ? [
                    "-metadata",
                    `artist="${artists2string(data.track?.artists)}"`,
                ]
                : []),
            ...(data.track?.title
                ? ["-metadata", `title="${data.track?.title}"`]
                : []),
            ...(data.track?.albums?.[0]?.title
                ? ["-metadata", `album="${data.track?.albums?.[0]?.title}"`]
                : []),
            ...(data.track?.isrc
                ? ["-metadata", `${fileExtension === "mp3" ? 'TSRC' : 'ISRC'}="${data.track?.isrc}"`]
                : []),
            `-y "${finalFilepath}"`,
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

}

exports.FfmpegWrapper = FfmpegWrapper;
