const Logger_js_1 = require("../../packages/logger/Logger.js");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { artists2string, LRC2SYLT, escapeRestrictedShellChars } = require("../utils.js");
const NodeID3 = require("node-id3");
const { getFfmpegUpdater } = require("../ffmpegInstaller.js");

function runProcess(command, args, logger) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            windowsHide: true,
            stdio: ["ignore", "pipe", "pipe"],
        });

        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (d) => (stdout += d.toString()));
        child.stderr.on("data", (d) => (stderr += d.toString()));

        child.on("error", (err) => reject(err));
        child.on("close", (code) => {
            if (stdout) logger.info(stdout);
            if (stderr) logger.warn(stderr);

            if (code === 0) resolve({ stdout, stderr });
            else reject(new Error(`ffmpeg exited with code ${code}`));
        });
    });
}

class FfmpegWrapper {
    constructor() {
        this.logger = new Logger_js_1.Logger("FfmpegWrapper");
        this._updater = getFfmpegUpdater(); // предполагается, что updater singleton
        this.ffmpegPath = this._updater.installPath;
    }

    async extractFromMp4(
        data,
        finalFilepath,
        tempDirPath,
        tempFilepath,
        fileExtension = undefined,
        lrc = undefined,
    ) {
        if (!fsSync.existsSync(tempDirPath) || !fsSync.existsSync(tempFilepath)) return;

        let withCover = false;
        const coverPath = path.join(tempDirPath, "400x400.jpg");
        if (fsSync.existsSync(coverPath)) withCover = true;

        const args = [];

        // Input
        args.push("-i", tempFilepath);

        // Cover only if not mp3 and cover exists
        if (fileExtension !== "mp3" && withCover) {
            args.push("-i", coverPath);
        }

        // Maps
        args.push("-map", "0:a");
        if (fileExtension !== "mp3" && withCover) {
            args.push("-map", "1");
        }

        // Audio codec rules
        if (fileExtension === "mp3") {
            args.push(
                "-codec:a",
                "mp3",
                "-id3v2_version",
                "4",
                "-b:a",
                `${data.bitrate ?? 320}k`,
            );
        } else {
            args.push("-c:a", "copy");
        }

        // Cover embedding for non-mp3
        if (fileExtension !== "mp3" && withCover) {
            args.push(
                "-c:v",
                "mjpeg",
                "-metadata:s:v",
                'title=Album cover',
                "-metadata:s:v",
                'comment=Cover (front)',
                "-disposition:v",
                "attached_pic",
            );
        }

        // Metadata (only for non-mp3 as in your logic)
        if (fileExtension !== "mp3" && data.track?.artists?.length > 0) {
            args.push("-metadata", `artist=${artists2string(data.track.artists)}`);
        }
        if (fileExtension !== "mp3" && data.track?.title) {
            args.push("-metadata", `title=${escapeRestrictedShellChars(data.track.title)}`);
        }
        if (fileExtension !== "mp3" && data.track?.albums?.[0]?.title) {
            args.push("-metadata", `album=${escapeRestrictedShellChars(data.track.albums[0].title)}`);
        }
        if (fileExtension !== "mp3" && data.track?.albums?.[0]?.year) {
            args.push("-metadata", `year=${data.track.albums[0].year}`);
        }
        if (fileExtension !== "mp3" && data.track?.albums?.[0]?.genre) {
            args.push("-metadata", `genre=${data.track.albums[0].genre}`);
        }

        // Overwrite + output
        args.push("-y", finalFilepath);

        this.logger.info(`ReEncoding: ${this.ffmpegPath} ${args.join(" ")}`);

        try {
            await runProcess(this.ffmpegPath, args, this.logger);
        } catch (error) {
            this.logger.error(`ffmpeg error: ${error.message}`);
        }

        if (fileExtension === "mp3") {
            const SYLT = lrc ? LRC2SYLT(lrc) : undefined;

            const tags = {
                title: data.track?.title,
                artist: artists2string(data.track?.artists),
                album: data.track?.albums?.[0]?.title,
                image: withCover ? coverPath : undefined,
                year: data.track?.albums?.[0]?.year?.toString(),
                genre: data.track?.albums?.[0]?.genre,
                ISRC: data.track?.isrc,
            };

            if (SYLT) {
                tags.unsynchronisedLyrics = {
                    language: "eng",
                    text: SYLT.reduce((acc, curr) => acc + curr.text + "\n", "").trim(),
                };
                tags.synchronisedLyrics = [
                    {
                        language: "eng",
                        timeStampFormat: NodeID3.TagConstants.TimeStampFormat.MILLISECONDS,
                        contentType: NodeID3.TagConstants.SynchronisedLyrics.ContentType.LYRICS,
                        synchronisedText: SYLT,
                    },
                ];
            }

            const status = NodeID3.write(tags, finalFilepath);
            if (!status) {
                this.logger.error("Failed to write ID3 tags");
                return;
            }
            this.logger.info("Added ID3 tags");
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
