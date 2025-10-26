const Logger_js_1 = require("../../packages/logger/Logger.js");
const store_js_1 = require("../store.js");
const electron_1 = require("electron");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const promisify = require("util").promisify;
const { exec } = require("child_process");
const FFMPEG_PATH = require("ffmpeg-static");
const electron = require("electron");
const { downloadFileWithProgress, makeDecryptor } = require('../utils.js');

const execPromise = promisify(exec);

const TMP_PATH = path.join(electron.app.getAppPath(), "../../", "\\temp");

const EXTRACTED_FFMPEG_PATH = path.join(
  electron.app.getAppPath(),
  "../",
  "ffmpeg.exe",
);

async function extractFfmpeg() {
  await fs.copyFile(FFMPEG_PATH, EXTRACTED_FFMPEG_PATH);
}

function artists2string(artists) {
  if (!artists || (artists?.length === 0)) return;
  if (artists.length <= 1) return artists?.[0].name;
  let string = artists.shift()?.name;
  artists.forEach((a) => {
    string += " & " + a.name;
  });
  return string;
}

function getFileExtensionFromCodec(codec) {
  return codec
    .replaceAll("he-aac", "m4a")
    .replaceAll("aac", "m4a")
    .replace(/(.*)-mp4/, "$1");
}

function removeInvalidCharsFromFilename(str) {
  return str.replace(/[/\\?%*:|"<>]/g, "_");
}

function removeInvalidEndingsFromTrackTitle(str) {
    if (str.endsWith(".mp3")) str.replaceAll(".mp3", "");
    if (str.endsWith(".mp4")) str.replaceAll(".mp4", "");
    if (str.endsWith(".m4a")) str.replaceAll(".m4a", "");
    if (str.endsWith(".flac")) str.replaceAll(".flac", "");
    return str;
}

function getTrackFilename(track) {
    if (!track) return "unknown_track";

    let trackFilename, artistsString = artists2string(track?.artists), titleString = removeInvalidEndingsFromTrackTitle(track?.title);

    if(artistsString && titleString) {
        trackFilename = `${artistsString} — ${titleString}`;
    } else if (titleString) {
        trackFilename = titleString;
    } else if (artistsString) {
        trackFilename = artistsString;
    } else if (track.filename){
        trackFilename = removeInvalidEndingsFromTrackTitle(track.filename);
    } else {
        trackFilename = track.realId ?? track.id;
    }

    return removeInvalidCharsFromFilename(trackFilename)
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


  async downloadRawTrack(data, outputPath, callback = (x, b) => { return null; }) {

    const isEncrypted = data?.transport === "encraw";
    const decryptor = isEncrypted ? makeDecryptor(data.key) : undefined;

    this.logger.log(`Downloading${isEncrypted ? ' and decrypting': ''} raw track: ${data.trackId}`);

    try {
      await downloadFileWithProgress(data.downloadURL, outputPath, (x) => { callback(x*0.8,x*0.8) }, decryptor);
      this.logger.log(`Track ${data.trackId} downloaded${isEncrypted ? ' and decrypted': ''}`);
      return true;
    } catch (e) {
      this.logger.warn(`Track ${data.trackId} download${isEncrypted ? ' or decryption': ''} failed: ${e}`);
      return false;
    }
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
    if (!data?.trackId) return;
    if (!fsSync.existsSync(TMP_PATH)) {
      await fs.mkdir(TMP_PATH);
      this.logger.log("Created temp directory.");
    }
    const dirPath = path.join(TMP_PATH, data?.trackId);
    await this.removeIfExistsDir(dirPath);
    await fs.mkdir(dirPath);
    this.logger.log("Created temp track directory.", dirPath);
    return dirPath;
  }

  async extractWithFfmpeg(
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
        ? ["-metadata", `artist="${artists2string(data.track?.artists)}"`]
        : []),
      ...(data.track?.title
        ? ["-metadata", `title="${data.track?.title}"`]
        : []),
      ...(data.track?.albums?.[0]?.title
        ? ["-metadata", `album="${data.track?.albums?.[0]?.title}"`]
        : []),
      // TODO Await fetching tracks in main process
      // ...(data.track?.isrc
      //     ? ["-metadata", `${fileExtension === "mp3" ? 'TSRC' : 'ISRC'}="${data.track?.isrc}"`]
      //     : []),
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

  async convertToMP3(inputAudioPath, outputAudioPath) {
    if (!fsSync.existsSync(inputAudioPath)) return;

    const args = [
      "-i",
      `"${inputAudioPath}"`,
      "-map",
      "0",
      "-map_metadata",
      "0",
      "-codec:a",
      "libmp3lame",
      "-b:a",
      "320k",
      "-id3v2_version",
      "3",
      "-write_id3v1",
      "1",
      `-y "${outputAudioPath}"`,
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

  async downloadTrack(
    data,
    callback = (x, b) => {
      return null;
    },
  ) {
    const fileExtension = getFileExtensionFromCodec(data.codec);
    const convertToMP3 =
      (store_js_1.getModFeatures()?.downloader?.useMP3 ?? false) &&
      fileExtension !== "mp3";
    const defaultFilepath = getTrackFilename(data.track) + '.' + (convertToMP3 ? "mp3" : fileExtension);
    const defaultDirPath = store_js_1.getModFeatures()?.downloader?.defaultPath;

    const finalTrackPath =
      store_js_1.getModFeatures()?.downloader?.useDefaultPath && defaultDirPath
        ? path.join(defaultDirPath, defaultFilepath)
        : await this.handleSaveDialog(data, defaultFilepath);
    if (!finalTrackPath) return;

    const tempDirPath = await this.createTempDirPath(data);
    if (!tempDirPath) return;

    const tempTrackPath = path.join(
      tempDirPath,
      `${data.trackId}.${data.codec}`,
    );
    const tempExtractedTrackPath = path.join(
      tempDirPath,
      `extracted${data.trackId}.${fileExtension}`,
    );

    callback(0, 0);

    await this.downloadRawTrack(data, tempTrackPath, callback);

    const coverBuffer = await this.fetchAlbumCover(data);
    this.logger.info("Got cover");
    if (coverBuffer) {
      await fs.writeFile(path.join(tempDirPath, "400x400.jpg"), coverBuffer);
      this.logger.info("Cover saved to temp directory");
    }

    await this.extractWithFfmpeg(
      data,
      convertToMP3 ? tempExtractedTrackPath : finalTrackPath,
      tempDirPath,
      tempTrackPath,
      fileExtension,
    );

    if (convertToMP3) {
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
